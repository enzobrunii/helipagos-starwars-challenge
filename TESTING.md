# ✅ Estrategia de Pruebas

Este documento describe la estrategia de pruebas implementada en el proyecto Star Wars 8-bit Explorer

## Visión General

Nuestra estrategia de pruebas se basa en el enfoque de la Pirámide de Pruebas, que consiste en:

1. Pruebas Unitarias (base de la pirámide)
2. Pruebas de Integración
3. Pruebas End-to-End (E2E) (cima de la pirámide)

## Herramientas de Prueba

- **Jest**: Framework de pruebas principal
- **React Testing Library**: Para pruebas de componentes React
- **Cypress**: Para pruebas end-to-end (E2E)

## Pruebas Unitarias

Las pruebas unitarias se centran en probar componentes individuales, funciones y hooks de forma aislada.

### Configuración

Las pruebas unitarias están configuradas en `jest.config.js` y `jest.setup.js`.

### Ejemplos de Pruebas Unitarias

#### Prueba de Componente (app/components/**tests**/Logo.test.tsx)

#### Prueba de Hook Personalizado (app/hooks/**tests**/useHelipagosAuth.test.ts)

## Pruebas de Integración

Las pruebas de integración se centran en probar la interacción entre múltiples componentes o módulos.

### Ejemplo de Prueba de Integración (app/components/**tests**/EntityListPage.test.tsx)


## Pruebas End-to-End (E2E)

Las pruebas E2E se realizan utilizando Cypress para simular interacciones de usuario reales con la aplicación.

### Configuración de Cypress

```javascript
// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
```

### Ejemplo de Prueba E2E (cypress/e2e/home.cy.js)

## Consideraciones Especiales

1. **Server Components**: Asegúrate de que las pruebas de componentes del servidor se ejecuten en un entorno que simule el entorno del servidor de Next.js.
3. **App Router**: Al probar la navegación, asegúrate de que las rutas definidas en el directorio `app` funcionen correctamente.


## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza los siguientes comandos:

- Pruebas unitarias y de integración: `npm test`
- Modo de observación para pruebas unitarias: `npm run test:watch`
- Pruebas E2E con Cypress: `npm run cypress:open`


## Cobertura de Pruebas

Asegúrate de mantener una cobertura de pruebas de al menos el 80% para el código crítico. Puedes generar un informe de cobertura ejecutando:

```plaintext
npm test -- --coverage
```