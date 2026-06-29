# 🌐 Client Portal

Portal de clientes profesional construido con **React + Vite**, diseñado para freelancers y agencias que quieren darle a cada cliente un espacio centralizado para ver el estado de su proyecto.

![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat-square&logo=vite)
![Recharts](https://img.shields.io/badge/Recharts-2.10-22b5bf?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Características

- **Dark mode** — diseño oscuro moderno con paleta violeta/gris
- **Gráfico circular de progreso** — visualización del avance del proyecto con Recharts
- **Multi-cliente** — cambiá entre clientes con un selector, cada uno con sus propios datos y color de acento
- **4 secciones** — Dashboard, Updates (timeline), Documentos y Automatizaciones
- **100% responsive** — en móvil se convierte en una app con barra inferior de navegación
- **Animaciones** — fade-up con stagger al cargar cada sección, hover effects en cards

---

## 📸 Vistas

| Dashboard                            | Updates               | Documentos                       |
| ------------------------------------ | --------------------- | -------------------------------- |
| Métricas + gráfico circular + etapas | Timeline de novedades | Listado de archivos del proyecto |

---

## 🚀 Instalación

### Requisitos

- Node.js 18 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/client-portal.git
cd client-portal

# 2. Instalar dependencias
npm install

# 3. Correr en desarrollo
npm run dev

# 4. Ver en el navegador
# http://localhost:5173
```

Para verlo desde el celular u otro dispositivo en la misma red:

```bash
npm run dev -- --host
```

---

## 🏗️ Estructura del proyecto

```
client-portal/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                  # Design tokens y animaciones globales
    ├── hooks/
    │   └── useIsMobile.js         # Hook para detectar pantalla móvil
    ├── data/
    │   └── clients.js             # 📝 Datos de los clientes (editá acá)
    └── components/
        ├── Sidebar.jsx            # Navegación lateral (desktop) / barra inferior (móvil)
        ├── Dashboard.jsx          # Página principal con métricas
        ├── CircularProgress.jsx   # Gráfico circular (Recharts)
        ├── Updates.jsx            # Historial tipo timeline
        ├── Docs.jsx               # Archivos del proyecto
        └── Automations.jsx        # Estado de automatizaciones
```

---

## 👤 Cómo agregar un cliente

Editá `src/data/clients.js` y agregá un objeto con esta estructura:

```js
{
  id: 4,
  name: "Nombre Cliente",
  initials: "NC",
  company: "Empresa S.A.",
  project: "Nombre del proyecto",
  color: "#34d399",          // color de acento del cliente
  progress: 60,              // porcentaje de avance (0-100)
  status: "Dev",             // etiqueta de estado
  statusColor: "accent",     // "success" | "warning" | "accent" | "danger"
  eta: "31 Ene 2026",
  tasks: { done: 8, total: 14 },
  stages: [
    { label: "Discovery", done: true },
    { label: "Diseño",    done: true },
    { label: "Dev",       done: false, active: true },
    { label: "QA",        done: false },
    { label: "Launch",    done: false },
  ],
  updates: [
    { text: "Descripción de la novedad", date: "01 Nov", type: "success" },
  ],
  automations: [
    { name: "Nombre automatización", status: "Activo", type: "success" },
  ],
  docs: [
    { name: "Contrato.pdf", size: "200 KB", icon: "📄" },
  ],
}
```

---

## 📦 Build para producción

```bash
npm run build
```

Los archivos quedan en la carpeta `dist/`, listos para subir a cualquier hosting estático.

---

## 🌍 Deploy gratuito

| Plataforma       | Comando                                                                        |
| ---------------- | ------------------------------------------------------------------------------ |
| **Vercel**       | `npx vercel` dentro de la carpeta del proyecto                                 |
| **Netlify**      | Arrastrá la carpeta `dist/` a [netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Configurá el workflow de Actions con `vite build`                              |

---

## 🛠️ Stack tecnológico

| Tecnología                        | Uso                              |
| --------------------------------- | -------------------------------- |
| [React 18](https://react.dev/)    | UI y estado de la app            |
| [Vite 5](https://vitejs.dev/)     | Bundler y servidor de desarrollo |
| [Recharts](https://recharts.org/) | Gráfico circular de progreso     |

---

## 📄 Licencia

MIT — libre para uso personal y comercial.
