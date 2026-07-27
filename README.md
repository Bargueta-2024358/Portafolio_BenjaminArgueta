# Portafolio — Benjamín Argueta (Elipsis)

Portafolio personal de desarrollador web. Stack: Vite + React, Framer Motion, react-icons. Despliegue en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

Configuración ya incluida:

- `vite.config.js` → `base: '/Portafolio_BenjaminArgueta/'`
- `package.json` → `homepage`, scripts `predeploy` y `deploy`

### 1. Publicar el código en GitHub

Si el remoto ya existe (`origin` → `Bargueta-2024358/Portafolio_BenjaminArgueta`):

```bash
git add .
git commit -m "Add developer portfolio site"
git push -u origin main
```

### 2. Desplegar el sitio

```bash
npm run deploy
```

Esto ejecuta `predeploy` (build) y sube la carpeta `dist` a la rama `gh-pages`.

### 3. Activar GitHub Pages en el repo

En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch** → rama `gh-pages` / carpeta `/ (root)`.

URL esperada:

https://Bargueta-2024358.github.io/Portafolio_BenjaminArgueta/

## Pendientes

- Reemplazar placeholders de **Proyectos** y **Galería** con datos reales
- Sustituir el avatar del Hero por una foto
- Agregar CompuTrabajo en Contacto si hay perfil
