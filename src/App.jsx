import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import { Links } from './components/Links';
import { Contact } from './components/Contact';

function App() {
  const [isDark, setIsDark] = React.useState(true);
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  React.useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
        else entry.target.classList.remove('visible');
      });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="decorative-sidebar"></div>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <div className="main-content">
        <div className="content-box py-5 px-6">
          <Hero />
          <Projects />
          <Skills />
          <Certificates />
          <Education />
          <Links />
          <Contact />
        </div>
        <footer className="py-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Gokul Kiran. All rights reserved.</p>
        </footer>
        {showBackToTop && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200">
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default App; // Change from named export to default export