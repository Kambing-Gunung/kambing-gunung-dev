# Badge

## Overview

Badge adalah komponen kecil yang digunakan untuk menampilkan status, kategori, label, atau informasi singkat.

Badge bersifat informatif dan tidak digunakan sebagai Call To Action.

Badge adalah informative.

---

# Purpose

Gunakan Badge untuk:

- Category
- Status
- Technology
- Tag
- Label
- Highlight

---

# Design Philosophy

Badge memiliki karakter:

- Minimal
- Clean
- Compact
- Readable

Ukurannya kecil namun tetap mudah dibaca.

---

# Variants

## Primary

Label utama.

---

## Secondary

Label pendukung.

---

## Success

Status berhasil.

---

## Warning

Status peringatan.

---

## Danger

Status kesalahan.

---

## Info

Informasi tambahan.

---

# Sizes

## Small

Default.

---

## Medium

Badge yang lebih besar.

---

# States

## Default

Keadaan normal.

---

## Disabled

Badge tampil redup.

---

# API

## Variant

```tsx
variant="primary"
```

Pilihan:

- primary
- secondary
- success
- warning
- danger
- info

---

## Size

```tsx
size="sm"
```

Pilihan:

- sm
- md

---

## Children

```tsx
<Badge>

React

</Badge>
```

---

# Accessibility

Badge bersifat informatif.

Tidak memiliki aksi.

---

# Usage

```tsx
<Badge>

React

</Badge>
```

```tsx
<Badge variant="success">

Completed

</Badge>
```

```tsx
<Badge variant="warning">

In Progress

</Badge>
```

---

# Do

✅ Gunakan Badge untuk informasi singkat.

✅ Gunakan teks yang pendek.

---

# Don't

❌ Jangan menggunakan Badge sebagai Button.

❌ Jangan menggunakan Badge untuk paragraf.

---

# Future Enhancements

Pengembangan berikutnya dapat menambahkan:

- Dot Badge
- Icon Badge
- Removable Badge

Fitur hanya ditambahkan ketika benar-benar dibutuhkan (YAGNI Principle).

