# OverLimitAdventure — Dirección Visual Completa

## Agencia de Turismo de Aventura Premium en Bolivia
**Especialidad:** Trekking & Climbing | **Ubicación:** La Paz, Bolivia | **Destinos:** Andes bolivianos, Salar de Uyuni, montañas +6000m

---

## 1. PALETA DE COLORES

### Colores Primarios

| Nombre | Hex | Uso Principal |
|--------|-----|---------------|
| **Andes Deep** | `#0F172A` | Fondos oscuros, hero sections, footer |
| **Summit Blue** | `#1E3A5F` | Headers, navegación, elementos principales |

### Colores Secundarios

| Nombre | Hex | Uso Principal |
|--------|-----|---------------|
| **Glacier Teal** | `#0D7377` | Acentos secundarios, hover states, iconos |
| **Puna Sage** | `#5B7B6F` | Elementos naturales, etiquetas, detalles |

### Color de Acento (CTAs)

| Nombre | Hex | Uso Principal |
|--------|-----|---------------|
| **Inca Gold** | `#D97706` | Botones primarios, CTAs, badges de precio |
| **Sunset Amber** | `#F59E0B` | Hover en CTAs, estrellas de rating, alertas |

### Colores Neutros (Escala de Grises)

| Nombre | Hex | Uso Principal |
|--------|-----|---------------|
| **Cloud White** | `#FFFFFF` | Texto sobre fondos oscuros, fondos claros |
| **Mist Gray** | `#F1F5F9` | Fondos de secciones, cards claras |
| **Stone Gray** | `#94A3B8` | Texto secundario, placeholders, bordes suaves |
| **Slate Gray** | `#475569` | Texto body, descripciones |
| **Midnight** | `#1E293B` | Texto principal sobre fondos claros |

### Colores de Fondo

| Nombre | Hex | Uso Principal |
|--------|-----|---------------|
| **Andes Deep** | `#0F172A` | Hero sections, footer, secciones oscuras |
| **Mist Gray** | `#F1F5F9` | Secciones alternadas claras |
| **Pure White** | `#FFFFFF` | Cards, contenido principal |
| **Gradient Overlay** | `linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.8) 100%)` | Overlays en hero images |

### Colores de Texto

| Contexto | Color | Hex |
|----------|-------|-----|
| Texto principal (sobre claro) | Midnight | `#1E293B` |
| Texto principal (sobre oscuro) | Cloud White | `#FFFFFF` |
| Texto secundario | Stone Gray | `#94A3B8` |
| Texto enfatizado | Inca Gold | `#D97706` |
| Links | Glacier Teal | `#0D7377` |
| Links hover | Inca Gold | `#D97706` |

### Gradientes Oficiales

```css
/* Hero Overlay */
--gradient-hero: linear-gradient(180deg, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.85) 100%);

/* Card Overlay */
--gradient-card: linear-gradient(0deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0) 60%);

/* CTA Button */
--gradient-cta: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);

/* Accent Glow */
--gradient-glow: linear-gradient(135deg, rgba(217,119,6,0.2) 0%, rgba(13,115,119,0.2) 100%);
```

---

## 2. SISTEMA TIPOGRÁFICO

### Familias de Fuentes

#### Headings (Títulos)
```
Font Family: 'Montserrat', sans-serif
Weights: 700 (Bold), 800 (ExtraBold), 900 (Black)
Style: Mayúsculas para títulos principales de sección
```

#### Body Text
```
Font Family: 'Inter', sans-serif
Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
Style: Sentence case, legibilidad óptima
```

#### Accents / Script (Opcional)
```
Font Family: 'Caveat', cursive
Weight: 500, 700
Uso: Subtítulos decorativos, frases inspiracionales
```

### Escala de Tamaños (Type Scale)

| Elemento | Desktop | Tablet | Mobile | Line Height | Weight |
|----------|---------|--------|--------|-------------|--------|
| **Hero Title** | 72px / 4.5rem | 56px | 40px | 1.1 | 900 |
| **H1** | 48px / 3rem | 40px | 32px | 1.2 | 800 |
| **H2** | 36px / 2.25rem | 32px | 28px | 1.25 | 700 |
| **H3** | 28px / 1.75rem | 24px | 22px | 1.3 | 700 |
| **H4** | 22px / 1.375rem | 20px | 18px | 1.4 | 700 |
| **H5** | 18px / 1.125rem | 16px | 16px | 1.5 | 600 |
| **Body Large** | 18px / 1.125rem | 18px | 16px | 1.6 | 400 |
| **Body** | 16px / 1rem | 16px | 15px | 1.6 | 400 |
| **Body Small** | 14px / 0.875rem | 14px | 13px | 1.5 | 400 |
| **Caption** | 12px / 0.75rem | 12px | 11px | 1.4 | 500 |
| **Overline** | 12px / 0.75rem | 12px | 11px | 1.4 | 600 |

### Estilos Tipográficos Específicos

#### Hero Title
```css
.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
```

#### Section Title
```css
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #1E293B;
}
```

#### Script Accent
```css
.script-accent {
  font-family: 'Caveat', cursive;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  line-height: 1.3;
  color: #D97706;
}
```

#### Body Text
```css
.body-text {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #475569;
}
```

### Import de Fuentes (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Inter:wght@400;500;600&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
```

---

## 3. GUÍA DE ESTILO VISUAL

### Principios de Diseño

1. **Fotografía Protagonista**
   - Las imágenes de paisajes andinos y montañas ocupan el 60-70% del hero
   - Overlay oscuro para garantizar legibilidad del texto
   - Fotos de alta calidad, estilo cinematográfico

2. **Espaciado Generoso**
   - Secciones con padding vertical de 80-120px
   - Cards con espacio interno de 24-32px
   - Separación entre elementos de 16-24px

3. **Jerarquía Clara**
   - Títulos en bold, mayúsculas para impacto
   - Contraste alto entre texto y fondo
   - Uso estratégico del color de acento (Inca Gold)

4. **Consistencia Visual**
   - Bordes redondeados consistentes (8-16px)
   - Sombras sutiles para profundidad
   - Iconografía de línea fina, estilo outdoor

5. **Mobile-First**
   - Tipografía escalable con clamp()
   - Touch targets mínimo 44px
   - Layouts que se adaptan gracefully

### Estilo de Fotografía

#### Características
- **Tono:** Cálido pero dramático, colores saturados naturalmente
- **Estilo:** Cinematográfico, tomas amplias (landscapes), perspectivas desde la cima
- **Luz:** Golden hour, amaneceres/atardeceres en la montaña
- **Sujetos:** Siluetas de escaladores, panorámicas de picos, senderos de trekking

#### Tratamiento de Imágenes
```css
/* Overlay para hero images */
.hero-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.7) 100%);
}

/* Efecto hover en cards */
.card-image:hover {
  transform: scale(1.05);
  transition: transform 0.4s ease;
}
```

#### Paleta Fotográfica
- Cielos azules profundos o naranjas dorados (sunset)
- Rocas grises y marrones terrosos
- Vegetación verde puna
- Nieves eternas blancas

### Estilo de Iconografía

#### Especificaciones
- **Estilo:** Line icons, stroke de 1.5-2px
- **Tamaño:** 24px estándar, 20px para densos, 32px para destacados
- **Color:** Glacier Teal (#0D7377) o Stone Gray (#94A3B8)
- **Set recomendado:** Phosphor Icons, Heroicons, o Feather Icons

#### Iconos por Categoría
| Categoría | Iconos Sugeridos |
|-----------|------------------|
| Actividades | Mountain, Tent, Compass, Boot, Backpack |
| Servicios | Map, Calendar, Users, Star, Shield |
| Navegación | Chevron, Arrow, Menu, X, Search |
| Contacto | Phone, Mail, MapPin, Clock |

### Estilo de Botones

#### Botón Primario (CTA)
```css
.btn-primary {
  background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(217,119,6,0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(217,119,6,0.5);
}
```

#### Botón Secundario (Outline)
```css
.btn-secondary {
  background: transparent;
  color: #FFFFFF;
  padding: 14px 28px;
  border-radius: 8px;
  border: 2px solid rgba(255,255,255,0.5);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: #FFFFFF;
}
```

#### Botón Terciario (Text)
```css
.btn-text {
  background: transparent;
  color: #0D7377;
  padding: 8px 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-text:hover {
  color: #D97706;
}
```

### Estilo de Tarjetas (Cards)

#### Tarjeta de Tour/Destino
```css
.tour-card {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.tour-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.tour-card-image {
  height: 240px;
  position: relative;
  overflow: hidden;
}

.tour-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.tour-card:hover .tour-card-image img {
  transform: scale(1.05);
}

.tour-card-content {
  padding: 24px;
}

.tour-card-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #D97706;
  color: #FFFFFF;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
```

### Espaciado y Grids

#### Sistema de Espaciado
```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
}
```

#### Grid System
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

#### Breakpoints
```css
/* Mobile First */
--bp-sm: 640px;   /* Small devices */
--bp-md: 768px;   /* Tablets */
--bp-lg: 1024px;  /* Laptops */
--bp-xl: 1280px;  /* Desktops */
--bp-2xl: 1536px; /* Large screens */
```

---

## 4. COMPONENTES BASE

### Botones — Especificaciones Completas

#### Variantes y Estados

| Variante | Default | Hover | Active | Disabled |
|----------|---------|-------|--------|----------|
| **Primary** | bg: #D97706, text: white | bg: #F59E0B, translateY: -2px | bg: #B45309 | opacity: 0.5 |
| **Secondary** | border: 2px white/50, text: white | bg: white/10, border: white | bg: white/20 | opacity: 0.5 |
| **Outline Dark** | border: 2px #1E3A5F, text: #1E3A5F | bg: #1E3A5F, text: white | bg: #0F172A | opacity: 0.5 |
| **Ghost** | text: #0D7377 | text: #D97706 | text: #B45309 | opacity: 0.5 |

#### Tamaños

| Tamaño | Padding | Font Size | Border Radius |
|--------|---------|-----------|---------------|
| **Small** | 10px 20px | 12px | 6px |
| **Medium** | 14px 28px | 14px | 8px |
| **Large** | 18px 36px | 16px | 10px |

#### Con Icono
```css
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-with-icon svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.btn-with-icon:hover svg {
  transform: translateX(4px);
}
```

---

### Tarjetas de Tours — Especificaciones

#### Estructura
```
┌─────────────────────────────┐
│  [Badge: Difficulty/Type]   │
│                             │
│        [Image 240px]        │
│                             │
│  [Overlay: Title + Arrow]   │
├─────────────────────────────┤
│  [Location Icon] La Paz, BO │
│  TOUR TITLE                 │
│  ★★★★★ (4.8) · 128 reviews │
│                             │
│  Duration: 5 days           │
│  Difficulty: Moderate       │
│  ─────────────────────────  │
│  From: $299    [Book Now →] │
└─────────────────────────────┘
```

#### Especificaciones CSS
```css
.tour-card {
  --card-radius: 16px;
  --card-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --card-shadow-hover: 0 12px 40px rgba(0,0,0,0.15);
  
  background: #FFFFFF;
  border-radius: var(--card-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tour-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-shadow-hover);
}

.tour-card-image-wrapper {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.tour-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tour-card:hover .tour-card-image {
  transform: scale(1.08);
}

.tour-card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 60px 20px 20px;
  background: linear-gradient(0deg, rgba(15,23,42,0.9) 0%, transparent 100%);
}

.tour-card-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #D97706;
  color: #FFFFFF;
  padding: 6px 14px;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tour-card-badge.featured {
  background: #0D7377;
}

.tour-card-content {
  padding: 24px;
}

.tour-card-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #94A3B8;
  margin-bottom: 8px;
}

.tour-card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 12px;
  line-height: 1.3;
}

.tour-card-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.tour-card-stars {
  display: flex;
  gap: 2px;
  color: #F59E0B;
}

.tour-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E2E8F0;
}

.tour-card-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #475569;
}

.tour-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tour-card-price {
  font-family: 'Montserrat', sans-serif;
}

.tour-card-price-label {
  font-size: 12px;
  color: #94A3B8;
  text-transform: uppercase;
}

.tour-card-price-value {
  font-size: 24px;
  font-weight: 800;
  color: #D97706;
}
```

---

### Navegación — Especificaciones

#### Header Principal
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
```

#### Logo
```css
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 40px;
  height: 40px;
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.02em;
}

.logo-text span {
  color: #D97706;
}
```

#### Menú de Navegación
```css
.nav-menu {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #D97706;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #FFFFFF;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  background: #D97706;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-cta:hover {
  background: #F59E0B;
  transform: translateY(-2px);
}
```

#### Mobile Menu
```css
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 8px;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: #0F172A;
    flex-direction: column;
    padding: 80px 32px 32px;
    transition: right 0.3s ease;
  }
  
  .nav-menu.open {
    right: 0;
  }
}
```

---

### Formularios — Especificaciones

#### Input Base
```css
.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #E2E8F0;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #1E293B;
  background: #FFFFFF;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #94A3B8;
}

.form-input:focus {
  outline: none;
  border-color: #0D7377;
  box-shadow: 0 0 0 4px rgba(13,115,119,0.1);
}

.form-input.error {
  border-color: #EF4444;
}

.form-input.error:focus {
  box-shadow: 0 0 0 4px rgba(239,68,68,0.1);
}
```

#### Input con Icono
```css
.input-group {
  position: relative;
}

.input-group-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94A3B8;
  pointer-events: none;
}

.input-group .form-input {
  padding-left: 48px;
}
```

#### Label
```css
.form-label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 8px;
}

.form-label-required::after {
  content: '*';
  color: #D97706;
  margin-left: 4px;
}
```

#### Select
```css
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Chevron down icon */
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 48px;
}
```

#### Textarea
```css
.form-textarea {
  min-height: 120px;
  resize: vertical;
}
```

#### Checkbox & Radio
```css
.form-checkbox,
.form-radio {
  width: 20px;
  height: 20px;
  border: 2px solid #CBD5E1;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-checkbox:checked,
.form-radio:checked {
  background: #0D7377;
  border-color: #0D7377;
}

.form-radio {
  border-radius: 50%;
}
```

#### Search Bar (Hero)
```css
.search-bar {
  display: flex;
  background: #FFFFFF;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
}

.search-bar-input {
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 15px;
  color: #1E293B;
}

.search-bar-input:focus {
  outline: none;
}

.search-bar-button {
  background: #D97706;
  color: #FFFFFF;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-bar-button:hover {
  background: #F59E0B;
}
```

---

## 5. SECCIONES ESPECÍFICAS

### Hero Section

#### Estructura
```
┌─────────────────────────────────────────────────────────┐
│  [Header: Logo + Nav]                                   │
│                                                         │
│                    BOLIVIA                              │
│              CONQUER THE ANDES                          │
│                                                         │
│  Discover the most breathtaking trekking and climbing   │
│  experiences in the heart of South America.             │
│                                                         │
│  [Explore Tours →]  [Watch Video]                       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [Search Bar: Destination | Activity | Date]    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ↓ Scroll                                               │
└─────────────────────────────────────────────────────────┘
```

#### Especificaciones
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 24px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(15,23,42,0.7) 100%);
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  color: #FFFFFF;
}

.hero-script {
  font-family: 'Caveat', cursive;
  font-size: 28px;
  color: #D97706;
  margin-bottom: 8px;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.hero-description {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255,255,255,0.9);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-search {
  width: 100%;
  max-width: 700px;
}
```

### Footer

#### Estructura
```
┌─────────────────────────────────────────────────────────┐
│  [Logo]                                                 │
│  OverLimitAdventure — Conquer the Andes                 │
│                                                         │
│  Company    |  Tours        |  Support    |  Contact    │
│  ─────────  |  ─────────    |  ─────────  |  ─────────  │
│  About Us   |  Trekking     |  FAQ        |  +591 ...   │
│  Our Team   |  Climbing     |  Help Center|  info@...   │
│  Careers    |  Expeditions  |  Terms      |  La Paz...  │
│  Blog       |  Salar Tours  |  Privacy    |             │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│  © 2024 OverLimitAdventure    [FB] [IG] [YT] [TW]     │
└─────────────────────────────────────────────────────────┘
```

#### Especificaciones
```css
.footer {
  background: #0F172A;
  color: #FFFFFF;
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 48px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  margin-bottom: 20px;
}

.footer-description {
  font-size: 15px;
  line-height: 1.7;
  color: #94A3B8;
}

.footer-column h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  color: #FFFFFF;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  font-size: 15px;
  color: #94A3B8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #D97706;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.footer-copyright {
  font-size: 14px;
  color: #64748B;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  color: #94A3B8;
  transition: all 0.3s ease;
}

.footer-social a:hover {
  background: #D97706;
  color: #FFFFFF;
}
```

---

## 6. ANIMACIONES Y TRANSICIONES

### Duraciones Estándar
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
```

### Easing Functions
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Transiciones Comunes
```css
/* Hover en cards */
.card {
  transition: transform var(--duration-normal) var(--ease-default),
              box-shadow var(--duration-normal) var(--ease-default);
}

/* Hover en botones */
.btn {
  transition: background var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default);
}

/* Focus en inputs */
.input {
  transition: border-color var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default);
}
```

### Animaciones de Entrada
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp var(--duration-slow) var(--ease-out) forwards;
}

.animate-fadeIn {
  animation: fadeIn var(--duration-normal) var(--ease-out) forwards;
}
```

---

## 7. VARIABLES CSS COMPLETAS

```css
:root {
  /* Colors */
  --color-andes-deep: #0F172A;
  --color-summit-blue: #1E3A5F;
  --color-glacier-teal: #0D7377;
  --color-puna-sage: #5B7B6F;
  --color-inca-gold: #D97706;
  --color-sunset-amber: #F59E0B;
  --color-cloud-white: #FFFFFF;
  --color-mist-gray: #F1F5F9;
  --color-stone-gray: #94A3B8;
  --color-slate-gray: #475569;
  --color-midnight: #1E293B;
  
  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-script: 'Caveat', cursive;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
  --shadow-card: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-card-hover: 0 12px 40px rgba(0,0,0,0.15);
  --shadow-cta: 0 4px 14px rgba(217,119,6,0.4);
  
  /* Transitions */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Z-Index Scale */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}
```

---

## 8. DO'S AND DON'TS

### ✅ DO
- Usar fotografía de alta calidad, estilo cinematográfico
- Mantener espaciado generoso entre elementos
- Usar tipografía bold para títulos, legible para body
- Aplicar el color de acento (Inca Gold) estratégicamente en CTAs
- Mantener consistencia en bordes redondeados (8-16px)
- Usar overlays oscuros en hero images para legibilidad
- Priorizar la jerarquía visual con tamaños y pesos
- Diseñar mobile-first con touch targets de 44px+

### ❌ DON'T
- No usar más de 2-3 colores principales
- No usar tipografías decorativas para body text
- No usar colores chillones o saturados excesivamente
- No sobrecargar el diseño con demasiados elementos
- No usar sombras fuertes o múltiples
- No usar bordes redondeados inconsistentes
- No usar imágenes de baja calidad o stock genérico
- No ignorar la accesibilidad (contraste mínimo 4.5:1)

---

## 9. RECURSOS Y REFERENCIAS

### Fuentes
- **Montserrat:** https://fonts.google.com/specimen/Montserrat
- **Inter:** https://fonts.google.com/specimen/Inter
- **Caveat:** https://fonts.google.com/specimen/Caveat

### Iconos
- **Phosphor Icons:** https://phosphoricons.com/
- **Heroicons:** https://heroicons.com/
- **Feather Icons:** https://feathericons.com/

### Inspiración Visual
- Estilo: Cinematográfico, outdoor, aventura
- Referencias: Patagonia, North Face, Arc'teryx
- Paleta: Andes bolivianos — azules profundos, tierras, dorados

---

*Documento creado para OverLimitAdventure — Agencia de Turismo de Aventura Premium en Bolivia*
*Versión 1.0 | 2024*
