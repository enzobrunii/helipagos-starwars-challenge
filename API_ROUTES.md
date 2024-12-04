# 🔗 Rutas de API (Backend for Frontend)

Este documento describe la implementación de las rutas de API que actúan como Backend for Frontend (BFF) en el proyecto Star Wars 8-bit Explorer

## Estructura de las Rutas API

Las rutas de API se implementan en la carpeta `app/api/`, siguiendo la estructura del App Router de Next.js

```
app/api/
├── people/
│   ├── route.ts
│   └── [id]/
│       └── route.ts
├── planets/
│   ├── route.ts
│   └── [id]/
│       └── route.ts
├── starships/
│   ├── route.ts
│   └── [id]/
│       └── route.ts
```

## Implementación de las Rutas

### 1. Ruta de Personas

#### Lista de Personas (app/api/people/route.ts)

#### Detalle de Persona (app/api/people/[id]/route.ts)

### 2. Ruta de Planetas

#### Lista de Planetas (app/api/planets/route.ts)

#### Detalle de Planeta (app/api/planets/[id]/route.ts)

### 3. Ruta de Naves Espaciales

#### Lista de Naves Espaciales (app/api/starships/route.ts)

#### Detalle de Nave Espacial (app/api/starships/[id]/route.ts)

## Gestión de Solicitudes y Autenticación

- Las solicitudes a la API externa (SWAPI) se realizan utilizando una instancia de Axios configurada (`axiosInstance`).
- La autenticación se maneja a través del hook `useHelipagosAuth` y se aplica en el frontend.
- Los tokens de autenticación se almacenan en el localStorage y se incluyen en las cabeceras de las solicitudes HTTP mediante un interceptor de Axios.


### Configuración de Axios (app/utils/axiosInstance.ts)

```typescript
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('helipagos_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
```

## Ejemplos de Solicitudes y Respuestas

### Solicitud de Lista de Personas

```plaintext
GET /api/people?search=luke&page=1
```

Respuesta:

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "url": "https://swapi.dev/api/people/1/"
    }
  ]
}
```

### Solicitud de Detalle de Planeta

```plaintext
GET /api/planets/1
```

Respuesta:

```json
{
  "name": "Tatooine",
  "rotation_period": "23",
  "orbital_period": "304",
  "diameter": "10465",
  "climate": "arid",
  "gravity": "1 standard",
  "terrain": "desert",
  "surface_water": "1",
  "population": "200000",
  "residents": [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/4/"
  ],
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/"
  ],
  "url": "https://swapi.dev/api/planets/1/"
}
```

## Manejo de Errores

Las rutas de API incluyen manejo de errores básico. Si ocurre un error durante la solicitud a la API externa, se devuelve una respuesta con el código de estado apropiado y un mensaje de error.

Ejemplo de manejo de error:

```typescript
try {
  // ... código para hacer la solicitud
} catch (error) {
  console.error('Error fetching data:', error);
  return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
}
```

## Consideraciones para Next.js

1. **Edge Runtime**: Las rutas de API en Next.js pueden aprovechar el Edge Runtime para una ejecución más rápida y eficiente. Para utilizar el Edge Runtime, añade la siguiente línea al principio de tu archivo de ruta:

2. **Streaming**: Next.js soporta streaming de respuestas. Esto puede ser útil para grandes conjuntos de datos o respuestas largas.

3. **Middleware**: Puedes utilizar middleware para procesar las solicitudes antes de que lleguen a tus rutas de API. Esto es útil para autenticación, logging, o modificación de solicitudes/respuestas.


## Conclusión

Este enfoque de Backend for Frontend nos permite adaptar las respuestas de la API externa a las necesidades específicas de nuestra aplicación frontend, proporcionando una capa de abstracción útil y mejorando la seguridad al no exponer directamente la API externa.
