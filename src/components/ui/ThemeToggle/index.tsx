import useDarkMode from '../../../hooks/useDarkMode';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onMouseDown={() => setIsDark(!isDark)}
      className={`p-3 rounded-lg text-main transition-all active:scale-95 text-[20px] cursor-pointer hover:text-primary duration-300 ease-in-out ${isDark ? 'bg-[#212141]' : 'bg-[#212141]'}`}
    >
      {isDark ? <FaSun color='yellow' /> : <FaMoon color='white' />}
    </button>
  );
};

export default ThemeToggle;