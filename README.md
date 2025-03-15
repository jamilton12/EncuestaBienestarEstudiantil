# Plataforma de Encuestas de Bienestar Estudiantil

## Descripción General
La **Plataforma de Encuestas de Bienestar Estudiantil** es una aplicación web diseñada para evaluar el bienestar emocional y psicológico de los estudiantes mediante encuestas periódicas. Esta plataforma permite a los estudiantes responder encuestas sobre su bienestar, visualizar sus respuestas y obtener análisis de sus datos a lo largo del tiempo.

El proyecto se divide en tres partes principales:
1. **Backend (Spring Boot + MySQL)**: Gestiona la lógica de negocio y proporciona una API REST.
2. **Frontend (React)**: Proporciona la interfaz de usuario para interactuar con el sistema.
3. **Análisis de Datos (Streamlit + Python)**: Realiza el procesamiento y visualización de datos.

Este documento cubre la configuración y ejecución de la parte **Frontend** del proyecto.

---

## Tecnologías Utilizadas
- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo para proyectos React.
- **React Router**: Manejo de rutas en la aplicación.
- **Axios**: Cliente HTTP para consumir la API REST.
- **Tailwind CSS**: Estilos y diseño de la aplicación.

---

## Requisitos Previos
Antes de instalar el proyecto, asegúrate de tener instaladas las siguientes herramientas:
1. **Node.js** (v16 o superior) [Descargar Node.js](https://nodejs.org/)
2. **Git** (para clonar el repositorio) [Descargar Git](https://git-scm.com/)

Para verificar la instalación:
```sh
node -v  # Debe mostrar la versión de Node.js
npm -v   # Debe mostrar la versión de npm
```

---

## Instalación y Ejecución del Frontend
### 1. Clonar el repositorio
```sh
git clone https://github.com/CarlosQuiroz25/proyecto-integrador-frontend.git
cd proyecto-integrador-frontend
```

### 2. Instalar dependencias
```sh
npm install
```
Esto instalará todas las librerías necesarias para el proyecto.


### 3. Ejecutar la aplicación en modo desarrollo
```sh
npm run dev
```
Esto iniciará el servidor de desarrollo.


