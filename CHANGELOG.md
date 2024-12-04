# Changelog

Todas las modificaciones importantes del proyecto serán documentadas en este archivo.

## [v0.1.0] - 2024-12-03

### Fase 1: Project Setup and Core Features

#### Inicialización del proyecto (branch: `develop`)
- Configuración inicial del proyecto utilizando **Next.js**.
- Configuración de **TypeScript**.
- Instalación y configuración de **Tailwind CSS**.

#### Feature: Basic Layout and Routing (branch: `feature/basic-layout`)
- Implementación de `app/layout.tsx`.
- Estructura básica de rutas.

#### Feature: Home Page (branch: `feature/home-page`)
- Creación de la página principal en `app/page.tsx`.
- Implementación del componente `Logo`.
- Navegación básica.

#### Feature: API Integration (branch: `feature/api-integration`)
- Configuración de `axiosInstance` para realizar peticiones HTTP.
- Creación de rutas API para personas, planetas y naves estelares.

#### Feature: List Views (branch: `feature/list-views`)
- Creación del componente `List`.
- Implementación de páginas de listas para personas, planetas y naves estelares.

#### Feature: Detail Views (branch: `feature/detail-views`)
- Implementación del componente `DetailView`.
- Creación de páginas de detalle para personas, planetas y naves estelares.

---

## [v0.2.0] - 2024-12-03

### Fase 2: Enhanced Features and UI

#### Feature: Animated Background (branch: `feature/animated-background`)
- Implementación del componente `AnimatedBackground`.

#### Feature: Star Wars Intro (branch: `feature/star-wars-intro`)
- Implementación del componente `StarWarsIntro`.

#### Feature: Search Functionality (branch: `feature/search`)
- Implementación del componente `SearchBar`.
- Integración de la funcionalidad de búsqueda en vistas de listas.

#### Feature: Infinite Scrolling (branch: `feature/infinite-scroll`)
- Implementación de scroll infinito en el componente `List`.

---

## [v1.0.0] - 2024-12-04

## Fase 3: Authentication and Optimization

#### Feature: Authentication (branch: `feature/auth`)
    - Implement `useHelipagosAuth` hook
    - Create `LoginForm` component
    - Integrate authentication with API requests

#### Feature: Unit Testing (branch: `feature/unit-tests`)
    - Write tests for components
    - Write tests for hooks and utilities


#### Feature: E2E Testing (branch: `feature/e2e-tests`)
    - Set up Cypress
    - Write E2E tests for critical paths

#### Feature: Documentation (branch: `feature/documentation`)
    - Update README.md
    - Create ARCHITECTURE.md, COMPONENTS.md, API_ROUTES.md, TESTING.md