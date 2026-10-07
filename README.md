# Nelson Dang Portfolio

A personal portfolio site built with React, Vite, and Tailwind CSS. It showcases my background, skills, and projects, and includes a contact form for reaching out directly.

**Live site:** [nelsondang.vercel.app](https://nelsondang.vercel.app/)

## Features

- Hero, About, Skills, Projects, and Contact sections on a single page
- Light/dark theme toggle
- Animated starfield background
- Filterable skills list (languages, frameworks, tools)
- Contact form powered by [EmailJS](https://www.emailjs.com/)
- Downloadable resume (PDF)
- Responsive layout styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/) 18 + [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Radix UI](https://www.radix-ui.com/) (toast notifications)
- [Lucide](https://lucide.dev/) icons
- [EmailJS](https://www.emailjs.com/) for the contact form

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
git clone https://github.com/NelsonDg/Personal-Portfolio.git
cd Personal-Portfolio
npm install
```

### Environment Variables

The contact form uses EmailJS. Create a `.env.local` file in the project root with your own EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/      # Section and UI components (Navbar, Hero, About, Skills, Projects, Contact, Footer, ...)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Route-level pages (Home, NotFound)
├── App.jsx           # Root component and routing
└── main.jsx          # Entry point
public/
├── projects/         # Project preview images and demo videos
└── Nelson-Dang-Resume.pdf
```
