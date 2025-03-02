type Theme = 'light' | 'dark';

const THEME_KEY = 'theme';

// Get the initial theme from localStorage or system preference
export function getInitialTheme(): Theme {
  // Check if theme was previously saved
  const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
  if (savedTheme) {
    return savedTheme;
  }

  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

// Set theme and update localStorage
export function setTheme(theme: Theme) {
  const root = window.document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove('light', 'dark');
  
  // Add new theme class
  root.classList.add(theme);
  
  // Save to localStorage
  localStorage.setItem(THEME_KEY, theme);
  
  // Update color scheme meta tag
  const colorSchemeMetaTag = document.querySelector('meta[name="color-scheme"]');
  if (colorSchemeMetaTag) {
    colorSchemeMetaTag.setAttribute('content', theme);
  }
}

// Watch for system theme changes
export function watchSystemTheme(callback: (isDark: boolean) => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Initial check
  callback(mediaQuery.matches);
  
  // Watch for changes
  mediaQuery.addEventListener('change', (e) => callback(e.matches));
  
  // Return cleanup function
  return () => {
    mediaQuery.removeEventListener('change', (e) => callback(e.matches));
  };
}

// Get theme-specific colors
export function getThemeColors(theme: Theme) {
  return {
    primary: '#FFA94D',
    primaryHover: '#FF922B',
    background: theme === 'light' ? '#ffffff' : '#1a1a1a',
    text: theme === 'light' ? '#1a1a1a' : '#ffffff',
    muted: theme === 'light' ? '#6b7280' : '#9ca3af',
    border: theme === 'light' ? '#e5e7eb' : '#374151',
    card: theme === 'light' ? '#f9fafb' : '#262626',
  };
}

// Initialize theme
export function initializeTheme() {
  const theme = getInitialTheme();
  setTheme(theme);
  
  // Add meta tag for color scheme
  const meta = document.createElement('meta');
  meta.name = 'color-scheme';
  meta.content = theme;
  document.head.appendChild(meta);
  
  return theme;
}
