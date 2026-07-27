# Chip

## Overview

Chip adalah komponen kecil yang digunakan untuk merepresentasikan item, pilihan, atau filter yang dapat berinteraksi dengan pengguna.

Chip berbeda dengan Badge karena Chip dapat dipilih, diaktifkan, atau dihapus.

Chip adalah interactive.

---

# Purpose

Gunakan Chip untuk:

- Filter
- Selected Item
- Tags
- Skills
- Categories
- Search Filters

---

# Design Philosophy

Chip pada Kambing Gunung memiliki karakter:

- Compact
- Comfortable
- Interactive
- Minimal

Chip harus memberikan feedback visual yang jelas ketika dipilih.

---

# Variants

## Filled

Menggunakan background.

Default.

---

## Outline

Menggunakan border.

---

## Ghost

Background transparan.

---

# Sizes

## Small

Digunakan pada area yang padat.

---

## Medium (Default)

Digunakan pada sebagian besar halaman.

---

# States

## Default

Keadaan normal.

---

## Hover

Memberikan feedback visual ringan.

---

## Selected

Chip sedang aktif.

---

## Disabled

Tidak dapat dipilih.

---

# API

## Variant

```tsx
variant="filled"
```

Pilihan:

- filled
- outline
- ghost

---

## Size

```tsx
size="md"
```

Pilihan:

- sm
- md

---

## Selected

```tsx
selected
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

## Children

```tsx
<Chip>

React

</Chip>
```

---

# Accessibility

Chip harus:

- dapat diakses menggunakan keyboard
- memiliki Focus State
- mendukung disabled
- menggunakan elemen HTML yang sesuai

---

# Usage

## Default

```tsx
<Chip>

React

</Chip>
```

---

## Outline

```tsx
<Chip variant="outline">

TypeScript

</Chip>
```

---

## Selected

```tsx
<Chip selected>

React

</Chip>
```

---

## Disabled

```tsx
<Chip disabled>

Unavailable

</Chip>
```

---

# Do

✅ Gunakan Chip untuk filter atau pilihan.

✅ Gunakan Selected State sebagai indikator pilihan aktif.

---

# Don't

❌ Jangan menggunakan Chip sebagai Button utama.

❌ Jangan menampilkan teks yang terlalu panjang.

---

# Future Enhancements

Pengembangan berikutnya dapat menambahkan:

- Removable Chip
- Avatar Chip
- Icon Chip
- Multi Select Chip

Fitur hanya ditambahkan ketika benar-benar dibutuhkan (YAGNI Principle).

