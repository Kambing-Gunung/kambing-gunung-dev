# Kambing Gunung Design System
## Component Guidelines

---

# Overview

Dokumen ini berisi standar yang digunakan oleh seluruh UI Component pada website Kambing Gunung.

Seluruh komponen harus mengikuti prinsip Design System yang telah didefinisikan pada folder `docs/design`.

Komponen harus konsisten, reusable, mudah dipelihara, dan mengutamakan accessibility.

---

# Design Philosophy

Seluruh komponen harus merepresentasikan identitas visual Kambing Gunung.

Karakter visual:

- Calm
- Natural
- Elegant
- Minimal
- Comfortable

Hindari komponen yang terlihat:

- terlalu ramai
- terlalu banyak efek
- terlalu banyak animasi
- terlalu banyak warna

Motion harus terasa halus dan tidak mengganggu.

---

# Design Tokens

Seluruh komponen WAJIB menggunakan Design Tokens.

Gunakan:

- Color Tokens
- Typography Tokens
- Spacing Tokens
- Radius Tokens
- Shadow Tokens
- Motion Tokens

Jangan pernah menggunakan nilai hardcoded.

Contoh:

❌

```css
padding: 16px;
background: #6A994E;
border-radius: 12px;
```

✅

```css
padding: var(--space-4);
background: var(--color-primary);
border-radius: var(--radius-md);
```

---

# Component Principles

Setiap komponen harus:

- reusable
- composable
- predictable
- accessible
- responsive

Komponen tidak boleh memiliki logic yang spesifik terhadap halaman tertentu.

Contoh:

❌

ProjectCardButton

✅

Button

---

# YAGNI Principle

Hindari membuat abstraction, props, variant, atau utility yang belum memiliki kebutuhan nyata.

Component berkembang berdasarkan kebutuhan aktual, bukan kemungkinan di masa depan.

Prefer implementasi yang sederhana dan jelas dibanding abstraksi yang prematur.

---

# Styling Guidelines

Project menggunakan kombinasi:

- Tailwind CSS
- CSS Design System

Pembagian tanggung jawab:

Tailwind digunakan untuk:

- Layout
- Flex
- Grid
- Display
- Responsive Layout
- Position
- Overflow

CSS Design System digunakan untuk:

- Color
- Typography
- Motion
- Shadow
- Radius
- Hover
- Animation
- Design Utilities

---

# Component API

Gunakan penamaan props yang konsisten.

## Variant

```tsx
variant="primary"
```

## Size

```tsx
size="md"
```

## Disabled

```tsx
disabled
```

## Loading

```tsx
loading
```

## Full Width

```tsx
fullWidth
```

Hindari penamaan seperti:

```tsx
big
small
green
rounded
```

Gunakan nama yang bersifat deskriptif.

---

# Accessibility

Seluruh komponen harus mempertimbangkan accessibility.

Minimal mendukung:

- keyboard navigation
- focus state
- aria-label bila diperlukan
- disabled state
- semantic HTML

Gunakan elemen HTML yang sesuai.

Contoh:

Button → `<button>`

Input → `<input>`

Navigation → `<nav>`

---

# Motion

Gunakan Motion Tokens.

Durasi harus berasal dari:

- duration-fast
- duration-normal
- duration-slow

Gunakan easing yang telah ditentukan.

Hindari animasi berlebihan.

---

# Responsiveness

Komponen harus bekerja pada:

- Desktop
- Tablet
- Mobile

Hindari ukuran yang fixed bila tidak diperlukan.

---

# File Structure

Untuk saat ini seluruh primitive component berada di:

```

components/ui/

```

Contoh:

```

Button.tsx
Input.tsx
Card.tsx

```

Folder khusus baru dibuat ketika sebuah komponen memiliki beberapa file pendukung (Rule of Three).

---

# Rule of Three

Komponen tetap berupa satu file selama belum memiliki kebutuhan yang kompleks.

Pisahkan menjadi folder apabila mulai memiliki beberapa file yang saling berkaitan, misalnya:

- styles
- utilities
- sub-components
- tests
- stories

---

# Documentation Standard

Setiap komponen memiliki dokumen sendiri.

Contoh:

```

button.md
input.md
card.md

```

Dokumen hanya menjelaskan hal yang spesifik terhadap komponen tersebut.

Aturan umum mengacu pada dokumen ini.

---

# Implementation Workflow

Setiap komponen mengikuti workflow berikut:

Planning

↓

Documentation

↓

Implementation (Copilot)

↓

Engineering Review

↓

Refactor

↓

Production

---

# Goal

Component Library harus:

- konsisten
- mudah dipelihara
- mudah digunakan
- scalable
- mengikuti Design System
- merepresentasikan identitas visual Kambing Gunung