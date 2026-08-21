import {
    useEffect,
    useState,
    type ReactNode,
} from "react";

import styles from "./CrtDistortion.module.css";

interface CrtDistortionProps {
    children: ReactNode;
}

function createDisplacementMap(size = 512, strength = 0.12) {
    const canvas = document.createElement("canvas");

    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");

    if (!context) {
        return "";
    }

    const image = context.createImageData(size, size);

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const nx = (x / (size - 1)) * 2 - 1;
            const ny = (y / (size - 1)) * 2 - 1;

            const radiusSquared = nx * nx + ny * ny;

            const displacement =
                radiusSquared > 1
                    ? 0
                    : strength * radiusSquared;

            const index = (y * size + x) * 4;

            image.data[index] =
                Math.max(
                    0,
                    Math.min(
                        255,
                        128 + nx * displacement * 127
                    )
                );

            image.data[index + 1] =
                Math.max(
                    0,
                    Math.min(
                        255,
                        128 + ny * displacement * 127
                    )
                );

            image.data[index + 2] = 128;
            image.data[index + 3] = 255;
        }
    }

    context.putImageData(image, 0, 0);

    return canvas.toDataURL("image/png");
}

function CrtDistortion({
    children,
}: CrtDistortionProps) {
    const [mapUrl, setMapUrl] = useState("");

    useEffect(() => {
        setMapUrl(createDisplacementMap());
    }, []);

    return (
        <>
            <svg
                width="0"
                height="0"
                aria-hidden="true"
                style={{ position: "absolute" }}
            >
                {mapUrl && (
                    <defs>
                        <filter
                            id="kg-crt-bulge"
                            x="-10%"
                            y="-10%"
                            width="120%"
                            height="120%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feImage
                                href={mapUrl}
                                result="displacementMap"
                                preserveAspectRatio="none"
                            />

                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="displacementMap"
                                scale="20"
                                xChannelSelector="R"
                                yChannelSelector="G"
                                result="distorted"
                            />

                            {/* Red channel */}
                            <feColorMatrix
                                in="distorted"
                                type="matrix"
                                values="
    1 0 0 0 0
    0 0 0 0 0
    0 0 0 0 0
    0 0 0 0.20 0
  "
                                result="redChannel"
                            />

                            <feOffset
                                in="redChannel"
                                dx="0.6"
                                dy="0"
                                result="redShifted"
                            />

                            {/* Blue channel */}
                            <feColorMatrix
                                in="distorted"
                                type="matrix"
                                values="
    0 0 0 0 0
    0 0 0 0 0
    0 0 1 0 0
    0 0 0 0.20 0
  "
                                result="blueChannel"
                            />

                            <feOffset
                                in="blueChannel"
                                dx="-0.6"
                                dy="0"
                                result="blueShifted"
                            />

                            <feMerge>
                                <feMergeNode in="redShifted" />
                                <feMergeNode in="blueShifted" />
                                <feMergeNode in="distorted" />
                            </feMerge>
                        </filter>
                    </defs>
                )}
            </svg>

            <div className={styles.distorted}>
                {children}
            </div>
        </>
    );
}

export default CrtDistortion;