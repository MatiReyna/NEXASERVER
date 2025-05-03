# 🏗️ NEXASERVER

¡Bienvenido al back-end de **NEXA**, la plataforma para constructoras que quieren llevar sus modelos de casas al mundo digital! 🌐✨

Este servidor se encarga de toda la lógica de negocio y conexión con la base de datos para que los usuarios puedan explorar modelos de viviendas y los administradores puedan gestionarlo todo desde un dashboard.

---

## 🚀 Tecnologías principales

- **Node.js** + **Express**
- **TypeScript**
- **PostgreSQL** + **Sequelize**
- **Cloudinary** (para gestión de imágenes)
- **Multer** (para uploads)
- **dotenv**, **cors**, **express-validator**

---

## 📁 Estructura del proyecto

NEXASERVER/
├── src/
│   ├── config/              # Configuraciones externas (Cloudinary)
│   ├── controllers/         # Lógica de negocio
│   ├── helpers/             # Funciones auxiliares
│   ├── models/              # Definiciones Sequelize
│   ├── routes/              # Rutas de la API
│   ├── types/               # Tipado global y extendido
│   ├── app.ts               # Configuración principal de Express
│   ├── db.ts                # Conexión a PostgreSQL
├── .env                     # Variables de entorno
├── server.ts                # Punto de entrada del servidor
├── tsconfig.json            # Configuración de TypeScript
├── package.json             # Archivo de configuración de Node.js
└── README.md                # Este archivo

---

## ⚙️ Scripts útiles

| Comando        | Descripción                   |
|----------------|-------------------------------|
| `npm install`  | Instala las dependencias      |
| `npm start`    | Inicia el servidor en local   |

---

## 🔐 Variables de entorno necesarias

Asegurate de tener un archivo `.env` con las siguientes claves:

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_NAME=nexa

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

---

## 🛠️ Funcionalidades actuales

- 📸 Subida y eliminación de imágenes a través de Cloudinary
- 🏡 Gestión de modelos de casas
- 👤 Registro y login de usuarios administradores
- 🧼 Validaciones con `express-validator`
- 🔒 Middleware de error y control de estados HTTP

---

## 💡 Próximas mejoras

- Autenticación JWT 🔐
- Dashboard interactivo con estadísticas 📊
- Validación avanzada de imágenes 📁

---

## 📣 Autor

Hecho con ❤️ por Matías Reyna para NEXA Desarrollos.