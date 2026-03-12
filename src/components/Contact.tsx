import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-transparent text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
        <img
          src="https://static.tildacdn.com/tild6534-3036-4165-a632-363563666466/photo1432821596592e2c18b78144f"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-stone-300 mb-12">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей сотрудничества и поставок сапропеля.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-4 rounded-2xl text-emerald-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-400 mb-1">Телефон</p>
                  <a href="tel:+79132077878" className="text-2xl font-semibold hover:text-emerald-400 transition-colors">+7 (913) 207-78-78</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-4 rounded-2xl text-emerald-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-400 mb-1">Email</p>
                  <a href="mailto:ecoorganica54@mail.ru" className="text-2xl font-semibold hover:text-emerald-400 transition-colors">ecoorganica54@mail.ru</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/20 p-4 rounded-2xl text-emerald-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-400 mb-1">Офис</p>
                  <p className="text-lg text-stone-200">630008, Россия, Новосибирская обл,<br/>г. Новосибирск, ул. Лескова, 15</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Оставить заявку</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  placeholder="Иван Иванов"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="example@mail.ru"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-4"
              >
                <span>Отправить заявку</span>
                <Send size={18} />
              </button>
              <p className="text-xs text-stone-400 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
