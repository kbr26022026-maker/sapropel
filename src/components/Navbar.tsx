import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О продукте', href: '#about' },
    { name: 'Преимущества', href: '#features' },
    { name: 'Применение', href: '#applications' },
    { name: 'Статьи и Документы', href: '#resources' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-950/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-emerald-600 text-white p-2 rounded-xl group-hover:bg-emerald-500 transition-colors">
              <Leaf size={24} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              ЭКО ОРГАНИКА
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  isScrolled ? 'text-stone-300' : 'text-stone-100 drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
            >
              Заказать
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white bg-white/10 backdrop-blur rounded-lg border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-stone-900/95 backdrop-blur-xl shadow-xl border-t border-white/10"
        >
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-300 hover:text-emerald-400 font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
