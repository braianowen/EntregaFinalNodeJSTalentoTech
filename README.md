# Entrega Final Node.js + Express

## Requisitos
- Node.js >= 14
- npm
- Cuenta en [Firebase](https://firebase.google.com/)

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración de Firebase

1. Ingresa a [Firebase Console](https://console.firebase.google.com/).
2. Crea un nuevo proyecto.
3. Ve a Firestore Database y crea una base de datos en modo producción o prueba.
4. Crea una colección llamada `productos` y agrega un documento de ejemplo con los campos que desees (por ejemplo: `nombre`, `precio`, `descripcion`).
5. Crea una colección llamada `usuarios` y agrega un usuario con los campos `correo` y `contraseña` (puedes agregar más campos si lo deseas).
6. Ve a la configuración del proyecto y copia las credenciales web de Firebase.

## Configuración del archivo `.env`

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido y completa los valores según tu proyecto de Firebase:

```
PUERTO=3000
JWT_SECRETO=tu_secreto_jwt_aqui
FIREBASE_API_KEY=tu_api_key_aqui
FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
FIREBASE_PROJECT_ID=tu_project_id_aqui
FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
FIREBASE_APP_ID=tu_app_id_aqui
```

## Ejecución

Para iniciar el servidor ejecuta:

```bash
npm run start
```

El servidor estará disponible en `http://localhost:3000` (o el puerto que definas en `.env`).

## Endpoints disponibles

### Autenticación
- `POST /auth/login` — Recibe `{ correo, contraseña }` y devuelve un token JWT si las credenciales son válidas.

### Productos
- `GET /api/products` — Devuelve todos los productos.
- `GET /api/products/:id` — Devuelve un producto por ID.
- `POST /api/products/create` — Crea un producto (requiere autenticación JWT).
- `DELETE /api/products/:id` — Elimina un producto por ID (requiere autenticación JWT).

## Notas
- Todas las variables, funciones y archivos están en español, excepto los endpoints y comandos requeridos.
- Recuerda proteger tu secreto JWT y tus credenciales de Firebase.
- Si tienes dudas, revisa el código fuente o consulta con tu docente. 