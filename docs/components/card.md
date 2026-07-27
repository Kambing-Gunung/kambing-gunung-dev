# Card

## Overview

Card adalah komponen container yang digunakan untuk mengelompokkan informasi atau konten yang saling berkaitan.

Card membantu menyusun informasi agar lebih terstruktur, mudah dipahami, dan nyaman dibaca.

---

# Purpose

Gunakan Card untuk:

- Project
- Blog
- Skill
- Experience
- Timeline
- Statistics
- Information Section

Card bukan digunakan sebagai layout utama halaman.

---

# Design Philosophy

Card pada Kambing Gunung memiliki karakter:

- Calm
- Elegant
- Clean
- Minimal
- Comfortable

Card mengutamakan whitespace dibanding dekorasi.

Shadow digunakan secara halus.

---

# Variants

## Default

Card standar.

Digunakan pada sebagian besar halaman.

---

## Elevated

Menggunakan shadow yang lebih jelas.

Digunakan untuk elemen yang ingin lebih menonjol.

---

## Outline

Menggunakan border.

Tanpa shadow.

---

## Interactive

Card dapat diklik.

Memiliki Hover State.

---

# States

## Default

Keadaan normal.

---

## Hover

Sedikit naik.

Shadow bertambah.

---

## Active

Memberikan feedback ketika dipilih.

---

## Disabled

Card tidak dapat berinteraksi.

---

# API

## Variant

```tsx
variant="default"
```

Pilihan:

- default
- elevated
- outline
- interactive

---

## Padding

```tsx
padding="md"
```

Pilihan:

- sm
- md
- lg

---

## Children

```tsx
<Card>

...

</Card>
```

---

# Accessibility

Card yang hanya menampilkan informasi menggunakan elemen:

```html
<div>
```

Card yang dapat diklik menggunakan:

```html
<article>

atau

<a>

```

sesuai kebutuhan.

---

# Usage

## Default

```tsx
<Card>

Content

</Card>
```

---

## Elevated

```tsx
<Card variant="elevated">

Featured Project

</Card>
```

---

## Outline

```tsx
<Card variant="outline">

Information

</Card>
```

---

## Interactive

```tsx
<Card variant="interactive">

Open Project

</Card>
```

---

# Do

✅ Gunakan Card untuk mengelompokkan informasi.

✅ Gunakan Interactive hanya jika seluruh Card dapat diklik.

✅ Gunakan whitespace yang cukup.

---

# Don't

❌ Jangan menaruh terlalu banyak informasi dalam satu Card.

❌ Jangan menggunakan shadow yang terlalu kuat.

❌ Jangan menggunakan Card sebagai pengganti layout.

---

# Future Enhancements

Pengembangan berikutnya dapat menambahkan:

- Card Header
- Card Footer
- Card Media
- Card Actions
- Loading Skeleton

Fitur hanya ditambahkan ketika benar-benar dibutuhkan (YAGNI Principle).