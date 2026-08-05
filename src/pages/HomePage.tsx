import {
    Hero,
    About,
    Skills,
    FeaturedProjects,
    Journey,
    Contact,
} from "@/components/sections/home";

function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <FeaturedProjects />
            <Journey />
            <Contact />
        </>
    );
}

export default HomePage;