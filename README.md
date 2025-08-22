# My Portfolio - Dark Mode Enabled

A modern, responsive portfolio website with full dark mode support built with React and Tailwind CSS.

## Features

### 🌙 Dark Mode
- **Automatic Detection**: Automatically detects system preference for dark/light mode
- **Manual Toggle**: Users can manually switch between dark and light modes
- **Persistent Preference**: Remembers user's choice across sessions
- **Smooth Transitions**: Beautiful animations when switching between modes
- **Multiple Toggle Points**: 
  - Header navigation (desktop and mobile)
  - Floating action button (bottom-right corner)

### 🎨 Design Features
- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized with React hooks and context

## Dark Mode Implementation

### How it Works
1. **Context Provider**: Uses React Context to manage dark mode state globally
2. **Local Storage**: Saves user preference in browser storage
3. **System Preference**: Automatically detects OS dark mode setting
4. **Tailwind CSS**: Uses Tailwind's `dark:` prefix for styling
5. **CSS Classes**: Applies `dark` class to HTML root element

### Key Components
- `DarkModeContext.jsx`: Manages dark mode state and logic
- `DarkModeIndicator.jsx`: Floating toggle button with tooltip
- `Header.jsx`: Navigation with integrated dark mode toggle
- All sections: Pre-configured with dark mode styles

### Styling
The app uses Tailwind CSS with custom dark mode classes:
- `dark:bg-gray-950` for dark backgrounds
- `dark:text-gray-100` for dark text
- `dark:border-gray-700` for dark borders
- Smooth transitions with `transition-all duration-500`

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization

### Adding Dark Mode to New Components
1. Import the context:
   ```jsx
   import { useDarkMode } from '../contexts/DarkModeContext';
   ```

2. Use dark mode classes:
   ```jsx
   <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
     Content
   </div>
   ```

### Tailwind Configuration
The `tailwind.config.js` includes:
- `darkMode: 'class'` for class-based dark mode
- Custom color palette
- Animation utilities

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Local Storage for preference persistence
- Media queries for system preference detection

## License
MIT License - feel free to use this code for your own projects!
