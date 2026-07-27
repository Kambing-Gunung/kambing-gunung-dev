# Divider

## Overview

Divider adalah komponen visual yang digunakan untuk memisahkan dua kelompok konten.

Divider membantu meningkatkan keterbacaan dan struktur halaman tanpa menarik perhatian secara berlebihan.

---

# Purpose

Gunakan Divider untuk:

- Memisahkan Section
- Memisahkan Card Content
- Memisahkan Navigation
- Memisahkan List
- Memisahkan Form Group

Divider tidak digunakan sebagai elemen dekoratif.

---

# Design Philosophy

Divider pada Kambing Gunung memiliki karakter:

- Minimal
- Clean
- Subtle
- Elegant

Divider harus cukup terlihat untuk membantu struktur halaman, namun tidak menjadi fokus utama.

---

# Variants

## Default

Divider standar.

---

## Strong

Menggunakan border yang sedikit lebih jelas.

---

## Dashed

Menggunakan garis putus-putus.

Digunakan ketika diperlukan pemisahan visual yang lebih ringan.

---

# Orientation

## Horizontal

Default.

Digunakan pada sebagian besar halaman.

---

## Vertical

Digunakan pada Navigation atau Toolbar.

---

# API

## Variant

```tsx
variant="default"
```

Pilihan:

- default
- strong
- dashed

---

## Orientation

```tsx
orientation="horizontal"
```

Pilihan:

- horizontal
- vertical

---

# Accessibility

Divider bersifat dekoratif.

Gunakan elemen:

```html
<hr>
```

atau

```html
<div>
```

sesuai kebutuhan.

---

# Usage

## Default

```tsx
<Divider />
```

---

## Strong

```tsx
<Divider variant="strong" />
```

---

## Dashed

```tsx
<Divider variant="dashed" />
```

---

## Vertical

```tsx
<Divider orientation="vertical" />
```

---

# Do

✅ Gunakan Divider untuk meningkatkan struktur halaman.

✅ Berikan jarak yang cukup di sekitar Divider.

---

# Don't

❌ Jangan menggunakan Divider secara berlebihan.

❌ Jangan menggunakan warna yang terlalu kontras.

---

# Future Enhancements

Pengembangan berikutnya dapat menambahkan:

- Divider With Text
- Gradient Divider
- Decorative Divider

Fitur hanya ditambahkan ketika benar-benar dibutuhkan (YAGNI Principle).