# Input

## Overview

Input adalah komponen yang digunakan untuk menerima data dari pengguna.

Input harus memiliki tampilan yang sederhana, mudah dipahami, nyaman digunakan, dan konsisten dengan Design System Kambing Gunung.

---

# Purpose

Gunakan Input untuk:

- Form
- Login
- Search
- Contact
- Data Entry

Input harus memberikan feedback yang jelas terhadap interaksi pengguna.

---

# Design Philosophy

Input pada Kambing Gunung memiliki karakter:

- Calm
- Clean
- Minimal
- Comfortable
- Readable

Input tidak menggunakan border atau animasi yang berlebihan.

---

# Variants

## Default

Digunakan untuk sebagian besar form.

---

## Filled

Menggunakan background surface.

Cocok untuk area dengan banyak field.

---

## Outline

Menggunakan border yang lebih jelas.

Digunakan ketika diperlukan pemisahan visual yang lebih kuat.

---

# Sizes

## Small

Untuk area yang padat.

---

## Medium (Default)

Digunakan pada sebagian besar halaman.

---

## Large

Digunakan pada Hero atau Search Bar.

---

# States

## Default

Keadaan normal.

---

## Hover

Border sedikit berubah.

---

## Focus

Menggunakan Focus Ring sesuai Design System.

---

## Disabled

Tidak dapat diedit.

---

## Error

Menampilkan feedback kesalahan.

---

## Success

Menampilkan feedback berhasil.

---

# API

## Variant

```tsx
variant="default"
```

Pilihan:

- default
- filled
- outline

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

## Placeholder

```tsx
placeholder="Search..."
```

---

## Value

```tsx
value=""
```

---

## Disabled

```tsx
disabled
```

---

## Read Only

```tsx
readOnly
```

---

## Required

```tsx
required
```

---

## Type

```tsx
type="text"
```

Contoh:

- text
- password
- email
- search
- number

---

# Accessibility

Input harus:

- menggunakan elemen `<input>`
- memiliki label
- mendukung keyboard navigation
- mendukung placeholder
- mendukung disabled
- mendukung required

---

# Usage

## Default

```tsx
<Input placeholder="Your Name" />
```

---

## Search

```tsx
<Input
    type="search"
    placeholder="Search Projects"
/>
```

---

## Password

```tsx
<Input
    type="password"
    placeholder="Password"
/>
```

---

## Disabled

```tsx
<Input
    disabled
    placeholder="Unavailable"
/>
```

---

## Error

```tsx
<Input
    variant="outline"
/>
```

---

# Do

✅ Gunakan label pada setiap Input.

✅ Gunakan placeholder sebagai petunjuk singkat.

✅ Gunakan ukuran Medium sebagai default.

---

# Don't

❌ Jangan menggunakan placeholder sebagai pengganti label.

❌ Jangan menggunakan warna di luar Design Tokens.

❌ Jangan menghilangkan Focus State.

---

# Future Enhancements

Pengembangan berikutnya dapat menambahkan:

- Password Toggle
- Prefix Icon
- Suffix Icon
- Character Counter
- Validation Message

Fitur hanya ditambahkan ketika benar-benar dibutuhkan (YAGNI Principle).