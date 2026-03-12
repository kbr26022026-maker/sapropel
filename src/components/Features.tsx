import { motion } from 'motion/react';
import { Droplets, Sprout, Shield, Timer, Activity, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Повышение плодородия',
    desc: 'Насыщает почву полезными веществами (азот, фосфор, кальций, гумус). Делает её более рыхлой, улучшает воздухо- и влагопроницаемость.'
  },
  {
    icon: Droplets,
    title: 'Улучшение структуры',
    desc: 'Восстанавливает истощенные земли, формируя плодородный слой. Помогает удерживать влагу в засушливые периоды.'
  },
  {
    icon: Shield,
    title: '100% Экологичность',
    desc: 'Полностью чистый продукт без химии. В отличие от навоза не содержит семян сорняков и опасных микроорганизмов.'
  },
  {
    icon: Timer,
    title: 'Длительное действие',
    desc: 'Удобрение работает до 10 лет. Питательные вещества высвобождаются постепенно, а избыток не губителен для растений.'
  },
  {
    icon: Activity,
    title: 'Защита от токсинов',
    desc: 'Способствует уменьшению негативных последствий на почвах, загрязнённых тяжёлыми металлами. Ил оттягивает вредные вещества.'
  },
  {
    icon: HeartPulse,
    title: 'Целебные свойства',
    desc: 'Содержит природные антибиотики, нейтрализует патогенные бактерии. Обладает широким спектром лечебных свойств для медицины.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Основные преимущества
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-300"
          >
            Сапропель — это не просто удобрение, это комплексное решение для восстановления экосистемы почвы и повышения её продуктивности.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all group overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-amber-500/0 group-hover:from-emerald-500/10 group-hover:to-amber-500/10 transition-all duration-500"></div>
              
              {/* Animated Organic Shape Icon Container */}
              <div className="relative w-20 h-20 mb-8">
                {/* Outer glowing blob */}
                <motion.div
                  animate={{
                    borderRadius: [
                      "40% 60% 70% 30% / 40% 50% 60% 50%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "50% 50% 60% 40% / 40% 60% 50% 60%",
                      "40% 60% 70% 30% / 40% 50% 60% 50%"
                    ],
                    rotate: [0, 90, 180, 360]
                  }}
                  transition={{ duration: 10 + index, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-600/40 to-amber-700/40 blur-[4px] group-hover:from-emerald-500/60 group-hover:to-amber-500/60 transition-colors duration-500"
                />
                {/* Inner solid blob */}
                <motion.div
                  animate={{
                    borderRadius: [
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "40% 60% 70% 30% / 40% 50% 60% 50%",
                      "50% 50% 60% 40% / 40% 60% 50% 60%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%"
                    ],
                    rotate: [360, 180, 90, 0]
                  }}
                  transition={{ duration: 12 + index, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-tr from-stone-900 to-emerald-950 border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-500"
                />
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-emerald-400 group-hover:text-amber-300 group-hover:scale-110 transition-all duration-500">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
              <p className="relative z-10 text-stone-400 leading-relaxed group-hover:text-stone-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
