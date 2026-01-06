import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Test Tailwind - This should show a green box if Tailwind is working */}
      <div className="fixed top-4 right-4 w-4 h-4 bg-green-500 rounded-full z-50 opacity-50"></div>
      
      <Header />
      
      <main className="relative max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="custom-toast"
      />
      
      {/* Background overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10 mix-blend-overlay" 
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtO6MjES2yM7m_-lb-4S1d4U-E3po2MNP4eZgeNzV4I6XVRv2dxR0Zi7xFQu2PZGgwac0cr5NkzYhaMNC7l898YqHOPJ2x0g5ztk8vT2KeE6KHmlDs5G6TkQ1eJhhlGv3hy2aXpE6-Jx9adNiKgTWyuXmBs-BWXT1nURQuwqBNQtiqoEm8SwIzXvqy2HxNefZcleVJn-FuVNOqcElNLexdcCozKavS4N76_fC5_1U07p8I3PkvlECjDsKC1g0MODBZDxZ8N46EK1k')"
        }}
      ></div>
    </div>
  );
}

export default App;