# Button

## Overview

Button adalah komponen interaktif yang digunakan untuk memicu sebuah aksi.

Button merupakan komponen paling penting dalam UI karena menjadi media utama interaksi antara pengguna dan aplikasi.

Button harus memiliki tampilan yang jelas, mudah dikenali, konsisten, dan tetap mengikuti identitas visual Kambing Gunung.

---

# Purpose

Gunakan Button untuk:

- Navigasi
- Submit Form
- Call To Action (CTA)
- Menjalankan Action
- Membuka Dialog
- Memicu Event

Jangan gunakan Button hanya sebagai elemen dekoratif.

---

# Design Philosophy

Button pada Kambing Gunung memiliki karakter:

- Calm
- Elegant
- Natural
- Comfortable
- Minimal

Button tidak menggunakan efek visual yang berlebihan.

Prioritaskan:

- readability
- accessibility
- consistency

---

# Variants

## Primary

Digunakan untuk aksi utama.

Contoh:

- Explore Projects
- Download Resume
- Contact Me

---

## Secondary

Digunakan untuk aksi kedua.

Contoh:

- Learn More
- View Details

---

## Outline

Digunakan untuk aksi netral.

Biasanya dipakai berdampingan dengan Primary.

---

## Ghost

Button transparan.

Cocok digunakan pada:

- Navbar
- Toolbar
- Secondary Navigation

---

## Link

Button yang tampil seperti text link.

Digunakan untuk aksi kecil.

---

# Sizes

## Small

Digunakan pada:

- Table
- Toolbar
- Compact UI

---

## Medium (Default)

Ukuran standar.

Digunakan pada sebagian besar halaman.

---

## Large

Digunakan pada:

- Hero Section
- Landing Page
- CTA besar

---

# States

Button memiliki state berikut.

## Default

Keadaan normal.

---

## Hover

Memberikan feedback visual ringan.

Efek:

- sedikit naik
- shadow ringan

---

## Active

Memberikan feedback ketika ditekan.

---

## Focus

Menggunakan Focus Ring sesuai Design System.

---

## Disabled

Tidak dapat diklik.

Opacity berkurang.

Cursor berubah.

---

## Loading

Button dinonaktifkan sementara.

Dapat menampilkan loading indicator.

---

# API

## Variant

```tsx
variant="primary"
```

Pilihan:

- primary
- secondary
- outline
- ghost
- link

---

## Size

```tsx
size="md"
```

Pilihan:

- sm
- md
- lg

---

## Loading

```tsx
loading
```

Default:

false

---

## Disabled

```tsx
disabled
```

Default:

false

---

## Full Width

```tsx
fullWidth
```

Default:

false

---

## Type

```tsx
type="button"
```

Pilihan:

- button
- submit
- reset

Default:

button

---

## Children

Isi Button.

Contoh:

```tsx
<Button>
    Explore Projects
</Button>
```

---

# Accessibility

Button harus:

- menggunakan elemen `<button>`
- dapat diakses keyboard
- memiliki Focus State
- mendukung aria-label bila diperlukan
- mendukung disabled
- tidak menggunakan div sebagai button

---

# Usage

## Primary

```tsx
<Button>
    Explore Projects
</Button>
```

---

## Secondary

```tsx
<Button variant="secondary">
    Learn More
</Button>
```

---

## Outline

```tsx
<Button variant="outline">
    Cancel
</Button>
```

---

## Ghost

```tsx
<Button variant="ghost">
    Journey
</Button>
```

---

## Link

```tsx
<Button variant="link">
    View All
</Button>
```

---

## Loading

```tsx
<Button loading>
    Saving...
</Button>
```

---

## Disabled

```tsx
<Button disabled>
    Delete
</Button>
```

---

## Full Width

```tsx
<Button fullWidth>
    Continue
</Button>
```

---

# Do

✅ Gunakan Primary hanya untuk CTA utama.

✅ Gunakan Secondary sebagai aksi pendamping.

✅ Gunakan Ghost pada navigasi.

✅ Gunakan Link untuk aksi kecil.

✅ Gunakan ukuran Medium sebagai default.

---

# Don't

❌ Jangan menggunakan lebih dari satu Primary Button pada area yang sama tanpa alasan yang jelas.

❌ Jangan menggunakan Button untuk navigasi yang seharusnya berupa Link.

❌ Jangan membuat Button hanya menggunakan ikon tanpa menyediakan aria-label.

❌ Jangan menggunakan warna di luar Design Tokens.

---

# Future Enhancements

Pengembangan berikutnya dapat menambahkan:

- Icon Button
- Icon Position
- Loading Spinner
- Button Group
- Split Button

Fitur-fitur tersebut diimplementasikan hanya ketika benar-benar dibutuhkan (YAGNI Principle).