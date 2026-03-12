import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-stone-400 py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Leaf className="text-emerald-500" size={24} />
          <span className="text-white font-bold text-xl tracking-tight">ЭКО ОРГАНИКА</span>
        </div>
        
        <div className="text-sm text-center md:text-left">
          <p>ВАШ НАДЕЖНЫЙ ПОСТАВЩИК САПРОПЕЛЯ</p>
          <p className="mt-1">© {new Date().getFullYear()} ЭКО ОРГАНИКА. Все права защищены.</p>
        </div>
        
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
