# Tim Heinemann's Personal Website

This is Tim Heinemann's personal website, converted from a simple HTML/CSS/JS website to a React application while maintaining the ability to be deployed as a static site on GitHub Pages.

## 🚀 Features

- **React-based**: Modern React application with component-based architecture
- **Static Site Generation**: Built with Vite for optimal performance
- **GitHub Pages Ready**: Automated deployment via GitHub Actions
- **Responsive Design**: Dark theme with green accent colors
- **Dynamic Content**: 
  - GitHub README integration for About section
  - Infinite scroll for Projects page
  - Contact information with social media links

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── assets/
│   │   ├── fonts/         # Custom fonts
│   │   └── img/           # Images and favicon
│   └── CNAME              # GitHub Pages custom domain
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   └── Footer.jsx     # Site footer
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── About.jsx      # About page with GitHub README
│   │   ├── Projects.jsx   # Projects with infinite scroll
│   │   └── Contact.jsx    # Contact information
│   ├── styles/
│   │   └── index.css      # Global styles
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # React entry point
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml         # Automated deployment
├── package.json
├── vite.config.js         # Vite configuration
└── index.html             # HTML template
```

## 🚀 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

### Manual Deployment

You can also deploy manually using:
```bash
npm run deploy
```

## 🎨 Customization

### Styling
- Main styles are in `src/styles/index.css`
- Uses Hack Nerd Font for consistent typography
- Dark theme with green accent color (`rgba(0, 255, 26, 0.5)`)

### Content
- **Home**: Simple page with GPG key link
- **About**: Dynamically loads README from GitHub repository
- **Projects**: Infinite scroll with simulated project loading
- **Contact**: Email and social media links

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 🔧 Configuration

### GitHub Pages
- Base URL is configured in `vite.config.js` as `/website/`
- CNAME file in public directory for custom domain
- GitHub Actions workflow handles automated deployment

### Environment
- Built with Vite for fast development and optimized production builds
- React Router for client-side routing
- Marked.js for markdown parsing (About page)
- DOMPurify for HTML sanitization

## 📝 Migration Notes

This project was converted from a traditional HTML/CSS/JS website to React while preserving:
- All original functionality
- Visual design and styling
- GitHub Pages deployment capability
- Custom domain support

The conversion provides:
- Better maintainability with component-based architecture
- Modern development workflow
- Improved performance with bundling and optimization
- Type safety potential for future TypeScript migration