import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Сапропель: природное удобрение для богатого урожая
            </h2>
            <div className="space-y-6 text-lg text-stone-300">
              <p>
                Сапропель — это уникальное природное ископаемое, которое образуется на дне пресных водоёмов тысячелетиями. Он содержит множество питательных веществ, макро- и микроэлементов, необходимых для гармоничного роста и развития растений.
              </p>
              <p>
                Мы предлагаем продукт, который не только повышает урожайность, но и <strong>инвестирует в будущее вашей земли</strong>. Наш сапропель проходит строгий контроль качества, сохраняя все первозданные свойства природы. Это выбор тех, кто заботится об экологии и устойчивом земледелии.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://static.tildacdn.com/tild3162-3133-4230-a131-626430356635/photo_54270033328803.jpg" alt="Сапропель 1" className="rounded-3xl w-full h-48 object-cover shadow-lg" />
            <img src="https://static.tildacdn.com/tild3632-6630-4438-b263-613736343836/photo_54270033328803.jpg" alt="Сапропель 2" className="rounded-3xl w-full h-48 object-cover shadow-lg mt-8" />
            <img src="https://static.tildacdn.com/tild6534-6666-4566-a633-626139303866/photo_54270033328803.jpg" alt="Сапропель 3" className="rounded-3xl w-full h-48 object-cover shadow-lg -mt-8" />
            <img src="https://static.tildacdn.com/tild6262-3633-4165-b663-376430373130/41937_original.jpg" alt="Сапропель 4" className="rounded-3xl w-full h-48 object-cover shadow-lg" />
          </motion.div>
        </div>

        {/* Lake Info */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 -skew-x-12 translate-x-20"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                <MapPin size={20} />
                <span>Новосибирская область</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Самое крупное месторождение в озере Минзелинское
              </h3>
              <div className="space-y-4 text-stone-300">
                <p>
                  Добыча сапропеля ООО «Эко Органика» производится на озере Минзелинское, расположенном в левобережной части реки Обь, в девственной тайге Колыванского района. Озеро формировалось на протяжении около 10 000 лет.
                </p>
                <p>
                  Дно озера представлено мощными отложениями сапропеля до 10 метров. Запасы составляют около 8 159 тыс. тонн. Вода и ил озера обладают доказанными целебными и ранозаживляющими свойствами.
                </p>
                <p>
                  <strong>Состав:</strong> органического вещества – до 60.3%, кальция – до 25.88%, калия – до 1.2%, фосфора – около 0.56%. Содержит 16 аминокислот, протеин, клетчатку, витамины (B1, B2, B5, B12, А, E), антиоксиданты и гуминовые вещества.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img 
                src="https://static.tildacdn.com/tild6437-3934-4065-b739-353837333034/2025-01-29_22-33-00.png" 
                alt="Озеро Минзелинское карта" 
                className="rounded-2xl shadow-2xl w-full border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
