# Architecture

## Overview

Dokumen ini menjelaskan bagaimana source code Kambing Gunung Developer Platform diorganisasi, bagaimana setiap layer bertanggung jawab, dan bagaimana dependency antar-layer seharusnya berjalan.

Tujuan utama dokumen ini bukan untuk membuat project menjadi enterprise-scale secara paksa. Tujuan utamanya adalah menjaga agar struktur tetap:

- sederhana
- jelas
- mudah dipelihara
- siap berkembang secara bertahap

Prinsip utamanya adalah:

> Structure should grow with the project.

Dengan kata lain, project tidak perlu mengadopsi pola yang lebih kompleks hanya karena kemungkinan masa depan. Kita memilih struktur yang masuk akal untuk kebutuhan saat ini, lalu berkembang ketika kebutuhan benar-benar muncul.

---

## Architecture Principles

Architecture ini berakar pada prinsip yang sudah tertanam di dokumentasi lain di folder docs. Prinsip-prinsip utama yang dipertahankan adalah:

### Foundation First

Bangun fondasi yang jelas sebelum menambah kompleksitas.

### Incremental Development

Arsitektur berkembang secara bertahap, bukan dalam satu lompatan besar.

### Documentation Driven

Dokumen menjadi contract pengembangan. Struktur dan pattern tidak boleh berdiri sendiri tanpa dokumentasi yang jelas.

### Reusable Components

Reuse dilakukan pada pola yang benar-benar berulang dan stabil.

### YAGNI

Jangan menambah abstraction, props, atau layer baru hanya karena mungkin dibutuhkan di masa depan.

### Separation of Concerns

Setiap layer memiliki tanggung jawab yang jelas agar kode mudah dibaca, diuji, dan dikembangkan.

### Composition over Configuration

Lebih baik menyusun komponen sederhana menjadi struktur yang berguna dibanding membuat satu komponen dengan konfigurasi yang terlalu rumit.

### Desktop First

Saat ini baseline visual adalah desktop. Responsive dapat dikembangkan setelah struktur utama stabil.

---

## Application Architecture

Arsitektur aplikasi pada level tinggi mengikuti alur berikut:

```text
main.tsx
   ↓
App.tsx
   ↓
AppRouter
   ↓
MainLayout
   ↓
Page
   ↓
Sections / Components
```

### `main.tsx`

Berfungsi sebagai bootstrap aplikasi. Tanggung jawab utamanya adalah mounting aplikasi ke root DOM.

### `App.tsx`

Merupakan entry composition aplikasi. Pada tingkat ini, aplikasi menghubungkan bootstrapping dengan routing dan layout global.

### `routes/`

Berisi konfigurasi URL dan mapping route ke halaman.

### `layouts/`

Berisi layout aplikasi yang bersifat global dan dapat digunakan oleh banyak halaman.

### `pages/`

Berisi komposisi level halaman. Page bertanggung jawab pada struktur halaman, bukan pada detail implementasi UI yang kecil.

---

## Source Structure

Struktur sumber saat ini tetap dipertahankan karena sudah memiliki fondasi yang kuat dan cukup jelas untuk kebutuhan proyek saat ini.

```text
src/
├── App.tsx
├── main.tsx
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── logos/
│   └── scenes/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   └── ui/
│
├── content/
├── layouts/
├── pages/
├── routes/
├── styles/
├── types/
└── ...
```

Poin pentingnya:

> Struktur ini tidak diganti hanya karena ingin terlihat lebih "modern".

Struktur akan berganti hanya jika ada kebutuhan nyata yang membuktikan bahwa pola saat ini sudah tidak cukup lagi.

---

## Layer Responsibilities

### `routes/`

Bertanggung jawab atas:

- URL
- route definition
- route-to-page mapping

Tidak bertanggung jawab atas:

- visual layout
- business logic
- feature implementation
- state management

---

### `pages/`

Bertanggung jawab atas:

- page composition
- route-level structure
- layout dasar halaman

Page tidak seharusnya menampung:

- reusable UI implementation yang kompleks
- state/global business logic
- detail design system yang bersifat umum

Page berperan sebagai penghubung antara route dan komponen yang membentuk halaman.

---

### `components/sections/`

Bertanggung jawab atas:

- section feature/page
- composition feature-specific
- visual implementation
- organisasi blok konten yang relevan dengan halaman

### `components/navigation/`

Bertanggung jawab atas:

- shared navigation
- application-level navigational composition
- reusable header, footer, and social navigation patterns

Contoh struktur section:

```text
Home
├── Hero
├── About
├── Skills
├── FeaturedProjects
├── Journey
└── Contact
```

Section boleh kompleks, tetapi section sebaiknya tetap fokus pada satu concern tertentu dan tidak dipaksa menjadi reusable abstraction global.

---

### `components/ui/`

Berisi shared UI primitives yang bersifat generik.

Contoh:

- Button
- Card
- Badge
- Chip
- Divider
- Input

Aturannya:

> UI Component tidak mengetahui halaman atau feature tertentu.

Component UI harus fokus pada interaksi dan tampilan dasar yang reusable.

---

### `components/layout/`

Merupakan reusable layout primitives untuk komposisi struktural, spacing, alignment, dan tata letak konten.

Komponen yang termasuk di sini:

- Container
- Grid
- Section
- Stack

Komponen navigasi seperti Navbar, Footer, dan SocialLinks tidak lagi dikategorikan sebagai layout primitives atau composite layout.

### `components/navigation/`

Merupakan shared navigation dan komponen navigasi aplikasi.

Komponen yang termasuk di sini:

- Navbar
- Footer
- SocialLinks

Terminologi ini harus konsisten karena navigasi adalah concern yang berbeda dari layout primitives structurally.

---

## Dependency Direction

Dependency harus mengikuti arah dari layer yang lebih tinggi ke layer yang lebih rendah.

```text
Application
    ↓
Routes
    ↓
Pages
    ↓
Sections
    ↓
Shared Components
```

Supporting layers:

```text
Content
Types
Styles
Assets
```

Prinsip sederhananya:

> Layer tingkat atas boleh menggunakan layer di bawahnya.

Contoh yang diperbolehkan:

```text
Page → Section → UI
```

Contoh yang tidak diperbolehkan:

```text
UI → Home Section
```

Atau:

```text
Component → Page-specific logic yang berada di level yang lebih tinggi
```

Dependency yang berbalik arah akan membuat kode sulit dipelihara dan membangun abstraction yang tidak perlu.

---

## Architecture Governance & Freeze

### D1 — Dependency direction

Arsitektur yang divalidasi saat ini adalah:

```text
App
    ↓
Routes
    ↓
Layouts
    ↓
Pages
    ↓
Feature Sections
    ↓
Shared UI / Layout primitives
```

Aturan yang harus dipertahankan:

- Layer yang lebih tinggi mengkomposisi layer yang lebih rendah.
- Shared UI tidak boleh bergantung pada implementasi feature spesifik.
- Feature sections tidak boleh memiliki concern routing.
- Pages bertanggung jawab atas komposisi halaman.
- Routes bertanggung jawab atas mapping route.
- Arsitektur tidak boleh diubah hanya karena pola terlihat "lebih rapi" secara teori.

### D2 — Ownership governance

Aturan ownership yang harus dijaga:

#### Shared UI

Dipakai untuk primitive generik, stabil, dan reusable.

#### Layout

Dipakai untuk komposisi struktur, container, grid, spacing, alignment.

#### Feature Sections

Memiliki tanggung jawab untuk:

- composisi feature
- state interaksi lokal feature
- visual spesifik feature
- storytelling composition
- asset lokal feature

Prinsip penting:

> Kompleksitas lokal bukan alasan untuk memindahkan feature ke shared infrastructure.

Feature-specific complexity dapat tetap lokal jika memang sesuai dengan concern-nya.

### D3 — Content and type governance

Content ownership harus dibagi menurut scope:

- Site-wide → `content/common` atau shared content layer
- Page-specific → page domain
- Feature-specific → feature content/domain

Type ownership harus mengikuti aturan berikut:

- Component-local type → local
- Feature/domain type → domain type layer
- Shared contract → shared type boundary

Type tidak boleh dipindahkan ke layer umum hanya untuk alasan organisasi semata.

### D4 — Hybrid styling governance

Project menggunakan arsitektur styling hybrid secara sengaja. Struktur yang valid adalah:

- Global CSS → concern aplikasi secara umum
- `variables.css` / design tokens → keputusan desain reusable
- `typography.css` → aturan tipografi global
- `utilities.css` → utility reusable
- Tailwind → layout, spacing, positioning, utility, serta struktur yang sesuai
- CSS Modules → styling komponen, styling feature, visual kompleks, scene-specific composition

Prinsip yang dipertahankan:

- Tailwind dan CSS Modules tidak bersifat saling eksklusif.
- Tidak ada migrasi massal dari satu sistem styling ke sistem lain tanpa kebutuhan arsitektur yang konkret.
- Styling harus mendukung komposisi dan kebutuhan pengalaman visual saat ini, bukan membangun redisain besar yang belum dibuktikan diperlukan.

### D5 — Reusability governance

Pattern tidak boleh menjadi abstraction bersama hanya karena terlihat mirip.

Sebelum extraction, evaluasi harus mencakup:

- repeated usage
- stable responsibility
- structural similarity
- Rule of Three
- simple API
- actual reduction of complexity

Jika kondisi tersebut tidak terpenuhi:

> KEEP LOCAL.

Jangan membuat generic scene wrapper untuk section storytelling yang unik, kecuali bukti masa depan jelas membenarkan.

### D6 — Asset governance

Asset yang sudah stabil tidak boleh di-mass-rename hanya untuk konsistensi teoritis.

Asset yang sudah ada tetap aman hingga ada kebutuhan refactor atau perubahan feature yang benar-benar membutuhkannya.

Untuk asset baru, gunakan naming yang semantik dan feature-oriented, misalnya:

```text
hero-character.png
hero-clouds.png
journey-sky.png
journey-clouds.png
contact-mountain.png
contact-campsite.png
contact-foreground.png
```

Untuk scene layer, gunakan konvensi:

```text
feature-background
feature-midground
feature-foreground
```

Hindari nama generik seperti:

```text
1.png
image.png
final2.png
new-image.png
```

### D7 — Documentation consistency gate

Dokumen arsitektur yang relevan tetap konsisten dengan validasi saat ini:

- `docs/development/architecture.md`
- `docs/components/README.md`
- `docs/layouts/README.md`
- `docs/design/design-tokens.md`
- `docs/design/theme.md`

Perubahan dokumentasi hanya dilakukan bila ada keputusan governance Sprint D yang belum ter-capture dengan jelas. Dokumentasi tidak dibuat lebih rumit hanya untuk estetika organisasi.

### D8 — Freeze status

Architecture baseline saat ini adalah stabil dan tidak boleh diubah demi kosmetik atau alasan teoritis semata.

> Architecture baseline is stable and should not be changed for cosmetic or theoretical reasons. However, structural evolution is allowed when it resolves demonstrated ownership ambiguity, terminology overlap, or dependency boundary problems.

Prinsip yang tetap dipertahankan:

- no speculative refactor
- no abstraction for abstraction's sake
- feature-local complexity stays local
- Rule of Three untuk reusable abstraction
- YAGNI

Dasar arsitektur tetap berlaku sampai ada kebutuhan nyata yang membuktikan bahwa struktur saat ini menghambat pemeliharaan, ownership clarity, atau boundary yang tepat.

---

## Component Architecture

Kita tetap menggunakan pendekatan yang sudah ada di dokumentasi lama, bukan membuat pola baru yang terlalu prosedural.

### Simple Component

Untuk komponen kecil dan langsung jelas.

```text
Button.tsx
```

### Component Module

Gunakan pola module ketika komponen memiliki file pendukung seperti style dan export index.

```text
Component/
├── Component.tsx
├── Component.module.css
├── index.ts
└── ...
```

### Feature Module

Gunakan pola ini ketika sebuah feature memiliki beberapa subkomponen yang berhubungan erat.

```text
Feature/
├── Feature.tsx
├── Feature.module.css
├── SubComponent.tsx
└── ...
```

### Rule of Three

Komponen tidak langsung dibuat terlalu umum hanya karena mungkin digunakan lagi di lain waktu.

Extraction dilakukan ketika sudah ada:

- pola yang berulang
- kebutuhan penggunaan yang stabil
- tanggung jawab yang jelas

Dengan kata lain, reusable component muncul karena kebutuhan nyata, bukan karena gaya arsitektur yang ingin terlihat "genius".

---

## Page Architecture

Page adalah layer yang menggabungkan section dan komponen secara terstruktur sesuai kebutuhan route.

Prinsip page architecture:

- page adalah orchestrator
- page tidak harus mengandung detail UI yang terlalu kecil
- page tidak harus memuat domain logic yang kompleks
- page harus tetap fokus pada composition

Struktur yang sehat untuk page:

```text
Page
├── MainLayout
├── Section 1
├── Section 2
├── Section 3
└── Footer / Shared Layout
```

Page dapat menjadi tempat untuk menyusun berbagai section, tetapi bukan tempat untuk menampung logic yang seharusnya hidup di component domain atau data layer.

---

## Content Architecture

Dengan semakin berkembangnya source, content architecture perlu diatur dengan jelas.

Struktur content saat ini:

```text
content/
├── common.ts
├── home.ts
├── home/
└── ...
```

### Site-wide content

Digunakan untuk data yang relevan lintas page atau lintas domain.

Contoh:

- brand
- developer info
- navigation
- social links
- metadata umum

### Page-specific content

Digunakan untuk data yang hanya relevan pada satu page.

Contoh:

```text
content/home/
├── hero
├── about
├── skills
├── featuredProjects
├── journey
└── contact
```

### Domain content

Ketika page seperti projects, resume, atau future content berkembang, content sebaiknya dipisah berdasarkan ownership domain.

Contoh yang mungkin muncul di masa depan:

```text
content/projects/
content/resume/
content/journey/
```

Prinsip penting:

> Content follows ownership, not first usage.

Artinya, data tidak otomatis menjadi milik satu page hanya karena page itu pertama kali menggunakannya. Ownership harus ditentukan berdasarkan domain dan responsibility yang jelas.

---

## Type Architecture

Folder `types/` adalah tempat persistent domain contract yang dipakai lebih dari satu komponen atau lebih dari satu data source.

Contoh saat ini:

```text
types/
├── home.ts
├── journey.ts
├── project.ts
└── ...
```

### Aturan dasar

#### 1. Props lokal

Jika sebuah type hanya dipakai oleh satu component, type dapat didefinisikan dekat dengan component tersebut.

#### 2. Shared domain model

Jika type dipakai di lebih dari satu komponen atau section, type masuk ke folder `types/`.

#### 3. Hindari global type prematur

Jangan membuat type yang terlalu luas atau terlalu generic sebelum kebutuhan benar-benar ada.

Prinsipnya tetap:

> YAGNI for type design.

---

## Styling Architecture

Struktur styling saat ini sebaiknya tetap mempertahankan kombinasi yang sudah ada, yaitu:

```text
Tailwind CSS
        +
CSS Design System
        +
CSS Modules
```

Bukan semua CSS harus segera diubah menjadi Tailwind. Tujuan arsitektur styling adalah menjaga pemisahan tanggung jawab, bukan melakukan rewrite yang mahal.

### CSS Design System

Berada di folder:

```text
styles/
├── base/
├── components/
└── ...
```

Digunakan untuk:

- tokens
- typography
- global utilities
- shared design primitives
- motion
- shadow
- radius
- animation

### CSS Modules

Digunakan untuk:

- feature-specific styling
- kompleks visual composition
- local implementation detail
- per-section reinforcement

Contoh:

```text
Hero.module.css
Journey.module.css
Contact.module.css
```

### Tailwind

Tailwind tetap dipertahankan sebagai alat untuk:

- layout
- flex/grid
- spacing alignment
- positioning
- display control
- responsive helper

Tetapi:

> Kita tidak akan memaksa seluruh CSS lama menjadi Tailwind dalam satu refactor.

Tujuan jangka pendek adalah alignment struktur, bukan rewrite desain visual total.

---

## Asset Architecture

Asset saat ini berada di folder `src/assets/` dan harus dikelola sesuai ownership-nya agar tidak ambigu saat berkembang.

### `assets/images/`

Digunakan untuk individual visual assets, component assets, UI illustrations, dan feature-specific static images.

Contoh penggunaan:

- product snapshot
- icon/image untuk komponen
- illustration individual
- asset spesifik per feature

### `assets/scenes/`

Digunakan untuk environmental visuals, layered scenes, storytelling backgrounds, atau visual environments yang terdiri dari beberapa layer/asset.

Contoh penggunaan:

- background landscape scene
- layered hero environment
- storytelling backdrop
- multi-layer visual environment

Tujuannya adalah membedakan asset individual dari scene-environment agar keputusan penamaan dan ownership tetap jelas, terutama menjelang Phase Responsive dan Parallax.

Struktur target yang sehat:

```text
assets/
├── images/
├── scenes/
├── logos/
└── ...
```

### Naming convention asset

- folder: kebab-case
- file: kebab-case
- nama harus deskriptif

Contoh yang disarankan:

```text
✅ hero-character.png
✅ skills-keyboard.png
✅ journey-sky.png
```

Bukan:

```text
❌ 1.png
❌ 2.png
❌ Keyboard.png
```

Penamaan yang lebih jelas akan sangat membantu saat project berkembang.

Namun, rename asset dilakukan pada saat refactor yang memang diperlukan, bukan sebagai prioritas yang mengganggu milestone architecture sekarang.

---

## Import Convention

Kita perlu menetapkan public boundary yang jelas untuk import module.

Untuk module yang memiliki public API yang stabil, gunakan barrel export jika memang relevan.

Contoh:

```ts
import { Button, Card } from "@/components/ui";
```

atau:

```ts
import { Footer, Navbar } from "@/components/navigation";
```

serta untuk layout primitives:

```ts
import {
  Container,
  Grid,
  Section,
  Stack,
} from "@/components/layout";
```

Prinsip utama:

> Import public API, not internal implementation.

Artinya, kita tidak membiasakan impor deep path yang terlalu eksplisit ke file internal yang seharusnya menjadi concern module itu sendiri.

Import internal sebaiknya hanya digunakan di dalam module yang sama, bukan dari komponen lain yang seharusnya memakai public boundary.

---

## Naming Convention

Baseline yang saat ini sudah dipakai perlu dijaga konsistensi.

### React component

```text
PascalCase
```

Contoh:

- Navbar
- Footer
- SkillDetail
- FeaturedProjects

### TypeScript file umum

```text
camelCase.ts
```

Contoh:

- paths.ts
- common.ts
- home.ts

### CSS

```text
Component.module.css
```

atau:

```text
component.css
```

untuk styling global shared component.

### Folder

Untuk module atau component yang representasi UI:

```text
PascalCase
```

Untuk grouping data atau domain content yang sudah mengikuti convention yang ada:

```text
lowercase
```

Contoh:

```text
content/home/
```

Arahannya bukan "semua harus seragam absolut", tetapi "semua harus konsisten sesuai konteks dan kebutuhan".

---

## Architecture Evolution

Arsitektur ini dirancang untuk berkembang secara alami sesuai kebutuhan proyek, bukan untuk dipaksa menjadi sistem yang terlalu berat di awal.

### Prinsip evolusi

- struktur tidak berubah tanpa kebutuhan nyata
- refactor terjadi ketika pattern telah terbukti berulang
- abstraction dibuat hanya saat benar-benar diperlukan
- dokumentasi mengikuti implementasi, bukan sebaliknya

### Evolusi yang diharapkan

Pada tahap awal, project lebih fokus pada:

- foundation consistency
- page structure clarity
- content ownership
- reusable layout conventions
- scalable component patterns

Pada tahap berikutnya, project dapat berkembang ke arah yang lebih spesifik seperti:

- domain-based content grouping
- reusable component extraction
- lebih banyak page-specific modules
- lebih banyak shared design tokens dan utilities
- migrasi styling yang lebih terarah dan proporsional

Yang paling penting adalah:

> Architecture growth should be gradual, justified, and documented.

---

## Summary

Kambing Gunung Developer Platform memiliki fondasi arsitektur yang sudah cukup baik. Dokumentasi ini bukan proposal migrasi besar, melainkan penegasan arah yang sudah benar dan mengikat komitmen structure yang sehat.

Target utama kita adalah:

- menjaga struktur yang ada tetap masuk akal
- memperjelas tanggung jawab tiap layer
- menjaga dependency tetap bersih
- menghindari abstraction prematur
- menyiapkan landasan untuk pertumbuhan yang terukur

Dengan demikian, project dapat berkembang tanpa kehilangan consistency, clarity, dan maintainability.
