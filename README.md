# Proyecto Final de Programación Web – Grupo 7 / G
Este proyecto **e-commerce** Trabajo final para la **Diplomatura en Desarrollo Web Fullstack 2025** 
**TecnoPro – E-Commerce de Productos de Computación**  

## Descripción  
Este proyecto es una API RESTful desarrollada con Node.js y Express (y conectado con un frontend SPA en React). Permite realizar operaciones CRUD sobre dos entidades principales: **Productos** (entidad principal) y **Categorías** (entidad de soporte).  
La aplicación incluye autenticación de usuarios, validación de datos en el frontend y backend, y manejo de errores centralizado.

## Funcionalidades Principales  
1. **Autenticación**  
   - Registro e inicio de sesión de usuarios.  
   - Autorización para rutas de administración.  
2. **Módulo de ABMC (Alta, Baja, Modificación, Consulta)**  
   - Lista de productos, creación, edición, eliminación/habilitación.  
   - Gestión de categorías de productos para soporte del negocio.  
3. **Validación**  
   - Validaciones de formularios en frontend.  
   - Validaciones de datos en backend (por ejemplo: ID válido, datos requeridos).  

## Tecnologías Utilizadas  
- React (frontend)  
- React Router DOM para la navegación SPA  
- Axios para consumo de API REST  
- Tailwind CSS para estilos responsivos  
- Node.js + Express (backend)  
- MongoDB + Mongoose como base de datos  
- Cloudinary para gestión de imágenes (subida/servicio)  
- Dotenv para variables de entorno  
- CORS para permitir peticiones desde frontend  
- Hosting gratuito: Frontend desplegado en Vercel  
- Git: Uso de Git para el control de versiones y colaboración en equipo  


## Instrucciones de Uso  
### Clonar el repositorio  


git clone https://github.com/HectorOdato/Trabajo-final-cudi-Frontend-grupo7.git

cd Trabajo-final-cudi-Frontend-grupo7
npm install

npm run dev

---

*Integrantes del Equipo – Grupo 7/G*

| Nombre              | GitHub                                                                             |
| ------------------- | -----------------------------------------------------------------------------------|
| **Hector Odato**    | [https://github.com/HectorOdato](https://github.com/HectorOdato)                   |
| **Leonardo Ortiz**  | [https://github.com/leonardo-jesus-ortiz](https://github.com/leonardo-jesus-ortiz) |
| **Mariano Maza**    | [https://github.com/MarianoMaza](https://github.com/MarianoMaza)                   |

---

## 🧠 Funcionalidades Principales

| Característica | Detalle |
|---------------|---------|
| Autenticación | Login de usuario y ruta protegida para administración |
| CRUD completo | Alta, Baja (habilitar/deshabilitar), Modificación y Consulta |
| Manejo de estado | Hooks, props y lógica de administración |
| Conexión con backend | Axios + API REST |
| Almacenamiento de Imágenes | Cloudinary |
| Responsive Design | Tailwind CSS |

---


## 🧩 Tecnologías Utilizadas

### **Backend**
- Node.js + Express
- MongoDB + Mongoose
- Cloudinary
- CORS, dotenv, Middleware
- Render (deploy)

---

## ⚙ Instalación y ejecución

## ⚙ Clonar Backend

git clone https://github.com/HectorOdato/Trabajo-final-cudi-Backend-grupo7.git
cd Trabajo-final-cudi-Backend-grupo7
npm install
npm run dev

Dependencias necesarias Backend

npm install express mongoose cors cloudinary dotenv nodemon

---


📁 Estructura del Proyecto
Backend


/src
│
├── /auth # Módulo de autenticación de usuarios
│   ├── /handlers
│   │   ├── login-user.handlers.js
│   │   └── register-user.handlers.js
│   ├── /models
│   │   └── user.models.js
│   ├── /repository
│   │   └── auth.repository.js
│   ├── /routes
│   │   └── auth.router.js
│   └── /validations
│       └── auth.validation.js
│
├── /category # Módulo de categorías de productos
│   ├── /handlers
│   │   └── category.handler.js
│   ├── /models
│   │   └── category.model.js
│   ├── /repositories
│   │   └── category.repository.js
│   └── /routes
│       └── category.route.js
│
├── /product # Módulo de productos del e-commerce
│    ├── /handlers
│    │   └── product.handler.js
│    ├── /models
│    │   └── product.model.js
│    ├── /repositories
│    │   └── product.repository.js
│    └── /routers
│        └── product.router.js
│
│
│
├── /shared # Utilidades y configuraciones compartidas
│   └── /constants
│       └── constants.js
│
├── /utils # Middlewares, helpers y herramientas reutilizables
│   ├── cloudinary.js
│   ├── generate-toker.util.js
│   ├── handle-toker.util.js
│   ├── handler-password.util.js
│   ├── multer.js
│   ├── validate-attribute.js
│   └── validate-id.util.js
│
└── index.js # Punto de entrada principal del servidor (configuración Express, BD y rutas)



Hosting
| Servicio          | URL              |
| ----------------- | ---------------- |
| Frontend (Vercel) | *https://trabajo-final-cudi-frontend-grupo7.vercel.app* |
| Backend (Render)  | *https://trabajo-final-cudi-backend-grupo7.vercel.app* |
| Base de Datos     | MongoDB Atlas    |

