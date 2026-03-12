import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Sprout } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.tildacdn.com/tild6132-6638-4332-b234-616264313264/IMG_5356.png"
          alt="Сапропель природа"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 mb-8">
            <Leaf size={16} />
            <span className="text-sm font-medium uppercase tracking-wider">100% Натуральный продукт</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Природная сила для <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">
              вашего урожая
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Сапропель — это уникальное органическое удобрение из донных отложений пресноводных озёр. 
            Улучшает структуру почвы, даёт прирост урожая от <strong className="text-white">40% до 120%</strong> и обеспечивает до <strong className="text-white">60%</strong> прирост массы в животноводстве.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-lg transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 flex items-center justify-center gap-2 group"
            >
              Купить Сапропель
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold text-lg transition-all flex items-center justify-center"
            >
              Узнать подробнее
            </a>
          </div>
        </motion.div>

        {/* Stats/Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl"
        >
          {[
            { icon: Sprout, title: "Рост урожайности", desc: "До 120% прироста для зерновых и корнеплодов" },
            { icon: ShieldCheck, title: "Экологичность", desc: "Без химических добавок и вредных примесей" },
            { icon: Leaf, title: "Длительное действие", desc: "Питает почву и растения до 10 лет" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-400">
                <item.icon size={24} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
