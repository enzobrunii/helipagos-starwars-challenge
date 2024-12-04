# ⚙️ Componentes Principales de Star Wars 8-bit Explorer

## Introducción

Este documento describe los principales componentes utilizados en el proyecto **Star Wars 8-bit Explorer**, incluidos sus hooks personalizados y contextos. Cada componente tiene un propósito bien definido y sigue principios de diseño reutilizable, facilitando la expansión y el mantenimiento del proyecto.

---

## Resumen de la Arquitectura de Componentes

El proyecto utiliza una arquitectura basada en componentes reutilizables y modulares. Los datos fluyen desde el **Backend for Frontend (BFF)** hacia los componentes principales a través de hooks personalizados. Esto permite manejar datos de manera eficiente y simplificar la lógica en el frontend.

### Diagrama de Interacción de Componentes

```plaintext
App Layout
 ├── Navigation (barra de navegación)
 ├── HomePage
 │   ├── StarWarsIntro
 │   ├── AnimatedBackground
 │   ├── Logo
 │   └── MenuOptions (enlaces de navegación)
 ├── List (paginación infinita)
 └── DetailView (detalle de entidades)
```

---

## 1. Layout (app/layout.tsx)

El **Layout** es el contenedor principal de la aplicación. Proporciona estilos globales y contexto de autenticación a través de `HelipagosAuthProvider`.

**Propósito:**
- Proporcionar una estructura base para la aplicación.
- Incluir el fondo animado y manejar el contexto global.

---

## 2. HomePage (app/page.tsx)

La página de inicio muestra el menú principal con enlaces interactivos y una introducción al estilo Star Wars.

**Propósito:**
- Servir como punto de entrada para la aplicación.
- Mostrar el menú principal y controlar la navegación.

---

## 3. Navigation (app/components/Navigation.tsx)

Una barra de navegación fija con enlaces a las principales secciones.

**Propósito:**
- Facilitar la navegación global dentro de la aplicación.

---

## 4. List (app/components/List.tsx)

Componente reutilizable para mostrar listas de elementos con soporte para **paginación infinita**.

**Propósito:**
- Renderizar listas de entidades como personajes, planetas o naves espaciales.
- Implementar carga dinámica de elementos adicionales.

---

## 5. DetailView (app/components/DetailView.tsx)

Muestra los detalles de una entidad específica, como un personaje, planeta o nave.

**Propósito:**
- Proporcionar información detallada sobre un elemento seleccionado.


---

## 6. SearchBar (app/components/SearchBar.tsx)

Un componente simple pero potente para buscar entidades.

**Propósito:**
- Filtrar resultados en listas.
- Ejecutar una acción de búsqueda en base al texto ingresado.

---

## Hooks Personalizados

### 1. useSwapi (app/hooks/useSwapi.ts)

Maneja las solicitudes a la API de SWAPI con soporte para búsquedas y paginación.

**Propósito:**
- Encapsular la lógica de las solicitudes de datos.

---

## Contexto

### HelipagosAuthContext (app/context/HelipagosAuthContext.tsx)

Proporciona un estado global de autenticación a la aplicación.

**Propósito:**
- Manejar el acceso autenticado de forma centralizada.

