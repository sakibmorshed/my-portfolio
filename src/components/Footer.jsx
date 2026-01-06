const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-primary font-mono font-bold text-lg">&lt; &gt;</span>
          <span className="text-gray-600 dark:text-gray-400 font-medium">© 2024 John.Dev. All rights reserved.</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#about">About Me</a>
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#skills">Skills</a>
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#contacts">Contacts</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="https://www.facebook.com/sakib.morshed.5/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="https://github.com/sakibmorshed" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="https://www.linkedin.com/in/sakibmorshed/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;