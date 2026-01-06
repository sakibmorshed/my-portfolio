# John.Dev Portfolio

A modern, responsive portfolio website built with React, JavaScript, and Tailwind CSS, featuring shadcn/ui components.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Fast and modern React with Vite
- 🎨 Beautiful UI with shadcn/ui components
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🚀 Optimized performance

## Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Icons**: Font Awesome
- **Fonts**: Inter & JetBrains Mono

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd react-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   └── textarea.jsx
│   ├── Header.jsx    # Navigation header
│   ├── Hero.jsx      # Hero section
│   ├── About.jsx     # About section
│   ├── Skills.jsx    # Skills section
│   ├── Projects.jsx  # Projects showcase
│   ├── Contact.jsx   # Contact form
│   └── Footer.jsx    # Footer
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: "#10b981",        // Main brand color
  "primary-hover": "#059669", // Hover state
  // ... other colors
}
```

### Content
- Update personal information in each component
- Replace placeholder images with your own
- Modify the skills, projects, and contact information
- Update social media links

### Fonts
The project uses Inter and JetBrains Mono fonts. You can change them in:
- `tailwind.config.js` (Tailwind configuration)
- `index.html` (Google Fonts imports)

## License

This project is open source and available under the [MIT License](LICENSE).