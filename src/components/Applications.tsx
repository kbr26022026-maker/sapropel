import { motion } from 'motion/react';
import { Tractor, Bird, Trees, Hammer, Sparkles, Stethoscope, Factory, Carrot } from 'lucide-react';

const applications = [
  {
    icon: Tractor,
    title: 'Сельское хозяйство',
    desc: 'Удобрение для полей, садов, теплиц и огородов. Подходит для органического земледелия.'
  },
  {
    icon: Bird,
    title: 'Животноводство',
    desc: 'Добавляется в корма, улучшая здоровье и продуктивность, обеспечивает прирост веса.'
  },
  {
    icon: Trees,
    title: 'Озеленение городов',
    desc: 'Улучшение качества почвы в парках, скверах и придорожных зонах.'
  },
  {
    icon: Hammer,
    title: 'Строительные материалы',
    desc: 'Добавляется в состав при изготовлении профессиональных строительных материалов.'
  },
  {
    icon: Sparkles,
    title: 'Косметическая продукция',
    desc: 'Используется при изготовлении косметических кремов, масок для лица и БАДов.'
  },
  {
    icon: Stethoscope,
    title: 'Медицина',
    desc: 'Комплексная терапия заболеваний ЖКТ, опорно-двигательного аппарата, нервной системы.'
  },
  {
    icon: Factory,
    title: 'Нефтедобыча',
    desc: 'Переработка в углеводородные продукты, добавка к тяжелым нефтям для улучшения свойств.'
  },
  {
    icon: Carrot,
    title: 'Хранение овощей',
    desc: 'Природный консервант, идеальное средство для хранения овощей на длительный срок.'
  }
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 bg-transparent text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white"
          >
            Где и для чего применяется Сапропель
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-300"
          >
            Универсальность сапропеля делает его незаменимым ресурсом во множестве отраслей, от агрономии до медицины.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/[0.04] hover:border-emerald-500/40 transition-all duration-500 group overflow-hidden"
            >
              {/* Tech grid background pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Glowing orb on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-[50px] group-hover:bg-emerald-500/40 transition-colors duration-500"></div>

              {/* Animated Icon Container */}
              <div className="relative w-20 h-20 mb-8">
                {/* Tech rotating dashed outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/20 group-hover:border-emerald-400/60 transition-colors duration-500"
                />
                
                {/* Reverse rotating dotted inner ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1.5 rounded-full border border-dotted border-emerald-300/30 group-hover:border-emerald-300/80 transition-colors duration-500"
                />

                {/* Pulsating organic core */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-3 rounded-full bg-emerald-500/20 blur-sm group-hover:bg-emerald-400/40 transition-colors duration-500"
                />

                {/* Solid background for icon */}
                <div className="absolute inset-3 rounded-full bg-stone-900 border border-emerald-500/30 flex items-center justify-center z-10 group-hover:border-emerald-400 transition-colors duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                  <app.icon size={24} className="text-emerald-400 group-hover:text-emerald-300 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>

              <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{app.title}</h3>
              <p className="relative z-10 text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors">
                {app.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
