import { useTheme } from '../utils/context/ThemeContext';

function ThemeToggle() {
  const { theme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
