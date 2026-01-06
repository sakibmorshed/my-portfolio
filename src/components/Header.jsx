import { useState, useEffect } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className="w-full max-w-6xl bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full px-6 py-4 flex items-center justify-between shadow-lg dark:shadow-none transition-all">
        <a className="flex items-center gap-2 group" href="#">
          <span className="text-primary font-mono text-xl font-bold">&lt; &gt;</span>
          <span className="font-bold text-lg tracking-wide group-hover:text-primary transition-colors">Sakib.Morshed</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About Me</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#contacts">Contacts</a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <a className="hover:text-primary transition-colors" href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter text-lg"></i></a>
            <a className="hover:text-primary transition-colors" href="https://github.com/sakibmorshed" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github text-lg"></i></a>
            <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/sakibmorshed/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-lg"></i></a>
            <a className="hover:text-primary transition-colors" href="https://www.facebook.com/sakib.morshed.5/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook text-lg"></i></a>
          </div>
          
          <button 
            aria-label="Toggle Dark Mode" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2" 
            onClick={toggleDarkMode}
          >
            <i className={`fa-solid ${isDark ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-600'}`}></i>
          </button>
          
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl md:hidden z-50">
            <div className="p-6 space-y-4">
              <a 
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2" 
                href="#about"
                onClick={closeMobileMenu}
              >
                About Me
              </a>
              <a 
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2" 
                href="#skills"
                onClick={closeMobileMenu}
              >
                Skills
              </a>
              <a 
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2" 
                href="#projects"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
              <a 
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-2" 
                href="#contacts"
                onClick={closeMobileMenu}
              >
                Contacts
              </a>
              
              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Follow me</p>
                <div className="flex items-center gap-4">
                  <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="https://github.com/sakibmorshed" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                  <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="https://www.linkedin.com/in/sakibmorshed/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin text-xl"></i>
                  </a>
                  <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="https://www.facebook.com/sakib.morshed.5/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;