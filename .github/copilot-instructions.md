# Instrucciones para agentes AI (Copilot)

Propósito
- Este repositorio contiene un proyecto de blog técnico sobre Tablas Hash (actividad académica). Actualmente solo incluye `README.md`.
- El objetivo para el agente: crear, estructurar y completar el sitio/blog con posts HTML/CSS/JS centrados en Tablas Hash.

Estado actual y Big Picture
- Estado: proyecto vacío salvo `README.md`.
- Arquitectura deseada (convención a seguir):
  - `index.html` — portada del blog
  - `posts/` — artículos individuales (ej: `posts/introduccion-tablas-hash.html`)
  - `assets/` — `css/`, `images/`, `js/`
  - `drafts/` (opcional) — borradores antes de publicar

Convenciones de contenido
- Formato de posts: HTML estático (el enunciado exige HTML/CSS/JS mínimos). Usar archivos `.html` dentro de `posts/`.
- Nombres: slugs en minúsculas y guiones, ejemplo: `posts/manejo-colisiones.html`.
- Cada post debe incluir: título `<h1>`, metadatos simples al inicio en un comentario HTML `<!-- author:; date:; tags: -->`, y secciones claras (`<h2>`).
- Diagramas: usar SVG inline o `assets/images/` para PNG/SVG. Ejemplo sugerido: `posts/introduccion-tablas-hash.html` con un `<svg>` que muestra función hash -> índice -> arreglo.

Patrones técnicos y ejemplos (qué pedir al agente)
- Implementar los 3 posts requeridos como archivos HTML:
  - `posts/introduccion-tablas-hash.html`
  - `posts/manejo-colisiones.html`
  - `posts/implementacion-operaciones.html`
- Incluir en cada post un ejemplo visual (SVG o imagen) y fragmentos de código (bloques `<pre><code>`).
- Si añades JavaScript, colócalo en `assets/js/` y referencia con `defer`.

Preview y comandos útiles
- Preview rápido con Python (PowerShell):
```powershell
python -m http.server 8000
# abrir http://localhost:8000
```
- Alternativa (Node.js instalado):
```powershell
npx http-server -c-1 . -p 8000
```
- Recomendación: usar la extensión Live Server en VS Code para vista en vivo.

Control de versiones y flujo de trabajo
- Branching: crear `feature/<slug>` para cada post (ej: `feature/introduccion-tablas-hash`).
- Commit messages: `feat(blog): add <slug>` o `docs(blog): update <slug>`.
- PR: incluir lista corta de verificación — título, metadatos, imagen, SVG visible, enlace local para preview.

Integración / despliegue (nota)
- No hay CI ni Pages configuradas actualmente. Si se habilita GitHub Pages, publicar desde `main` o `gh-pages` según ajuste en Settings.

Si el archivo existe: cómo fusionar
- Si ya existe `.github/copilot-instructions.md`, preserva secciones escritas por humanos. Añade una sección `## Actualizaciones automáticas` con los cambios propuestos y marca las líneas nuevas con `<!-- AI: added -->`.

Qué no hacer
- No introducir frameworks (React/Vue) sin instrucción explícita — la tarea pide HTML/CSS/JS mínimo.
- No eliminar `README.md` ni cambiar el propósito del repo.

Referencias en este repo
- `README.md`: indica que es un "Proyecto de prueba para Estructura de Datos 2" — usarlo como fuente de verdad del objetivo académico.

Preguntas al usuario
- ¿Quieres que cree el esqueleto inicial (`index.html`, `posts/`, `assets/`) ahora? Indica si prefieres Markdown en vez de HTML para los posts.

<!-- Fin de instrucciones -->