# Proyecto Star Wars 8-bit Explorer - Arquitectura

## Introducción

Star Wars 8-bit Explorer es una aplicación web que permite explorar personajes, planetas y naves espaciales del universo de Star Wars. Este proyecto utiliza tecnologías de vanguardia como **Next.js** y **React** para proporcionar una experiencia de usuario inmersiva y eficiente.

Este documento describe la arquitectura del proyecto, incluyendo su estructura, flujo de datos, optimizaciones de rendimiento, y un plan para su despliegue futuro.

---

## 1. Tecnologías y Patrones

El proyecto adopta las siguientes tecnologías principales y patrones de diseño:

- **Framework Principal:** Next.js 14, con soporte para App Router y React Server Components.
- **Librería de UI:** React 18, para aprovechar las últimas optimizaciones.
- **Lenguaje:** TypeScript, para un desarrollo tipado y más seguro.
- **Estilos:** Tailwind CSS (versión 3.4.1), para un diseño eficiente y personalizado.
- **Backend for Frontend (BFF):** Las rutas API internas actúan como intermediarias entre el frontend y la API externa (SWAPI).

---

## 2. Estructura del Proyecto

El proyecto sigue las convenciones de Next.js para organización de rutas y carpetas:

```plaintext
├── app/
│   ├── api/              # Rutas BFF para solicitudes a la API externa
│   ├── components/       # Componentes reutilizables
│   ├── context/          # Contextos globales, como autenticación
│   ├── hooks/            # Hooks personalizados
│   ├── utils/            # Funciones utilitarias
│   ├── (routes)/         # Estructura para rutas principales
│   ├── layout.tsx        # Layout global
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales
├── next.config.js        # Configuración de Next.js
├── tailwind.config.js    # Configuración de Tailwind CSS
└── tsconfig.json         # Configuración de TypeScript
```

# 3. Flujo de Datos
## 3.1 Diagrama de Flujo de Datos
        Usuario --> Componente UI --> Hook Personalizado --> BFF (API Interna) --> SWAPI (API Externa)

## 3.2 Explicación

- El usuario interactúa con la interfaz mediante componentes como ``SearchBar`` o ``DetailView``.
- Los componentes llaman a hooks personalizados ``(useSwapi)`` para gestionar la lógica de datos.
 - Los hooks interactúan con las rutas API del BFF en ``app/api/`` que adaptan las solicitudes al formato de la API externa (SWAPI).
- Las respuestas se transforman y se devuelven al frontend.

---


# 4. Componentes Principales

## 4.1 Diagrama de Dependencias de Componentes
        App Layout --> Navigation --> Pages --> Subcomponentes

## 4.2 Detalle de Componentes
- Layout: Contenedor global con contexto de autenticación y estilos.
- Navigation: Barra de navegación principal con enlaces a People, Planets, y Starships.
- SearchBar: Barra de búsqueda reutilizable.
- List: Listas con paginación infinita.
- DetailView: Detalles de cada elemento (personajes, planetas o naves).
- AnimatedBackground: Animaciones de estrellas y naves espaciales.


# 5. Optimización
## 5.1 Mejoras de Rendimiento
1. Lazy Loading: Carga diferida de componentes y recursos no críticos.
2. Paginación Infinita: Implementada en el componente List.

## 5.2 Herramientas para Medición
- Lighthouse: Para medir la velocidad y accesibilidad.

# 6. Pruebas
- Unitarias: Pruebas con Jest y React Testing Library para asegurar el correcto funcionamiento de componentes individuales.
- Integración: Validación de hooks y BFF con datos reales de la API.
- E2E: Pruebas de flujos críticos con Cypress.

# 7. Despliegue
El plan de despliegue aún no está definido. Sin embargo, se están evaluando las siguientes opciones:

- Vercel: Ideal para Next.js, con integración continua y optimizaciones automáticas.
- AWS (S3 + CloudFront): Para mayor control sobre el backend y escalabilidad.
- Docker: Para entornos homogéneos y portabilidad.

Cada opción será analizada considerando costos, facilidad de integración y escalabilidad.

# 8. Beneficios de la Arquitectura
- Escalabilidad: El diseño modular permite agregar nuevas funcionalidades sin afectar las existentes.
- Mantenimiento: Patrones como BFF y hooks personalizados reducen la duplicación de código.
- Velocidad: Las optimizaciones de Next.js y React aseguran tiempos de carga rápidos.
- Estilo: La estética 8-bit y las animaciones proporcionan una experiencia atractiva y única.
