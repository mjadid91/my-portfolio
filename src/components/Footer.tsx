
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Mohamed JADID
            </div>
            <p className="text-gray-400 leading-relaxed">
              Développeur passionné créant des expériences web modernes et engageantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Accueil
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                À propos
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projets
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>© 2025 Mohamed JADID</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Fait avec <Heart className="w-4 h-4 mx-1 text-red-600" fill="currentColor" /> à Gif-sur-Yvette
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
