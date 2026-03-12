import { motion } from 'motion/react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const articles = [
  { title: 'Обнаружение залежей уникального сапропеля в Новосибирской области', source: 'NSKTV.RU', url: 'https://www.nsktv.ru/news/technology/v_novosibirskoy_oblasti_obnaruzhili_zalezhi_unikalnogo_sapropelya/' },
  { title: 'Ученые исследовали сапропели Новосибирской области', source: 'Институт геологии им. В. С. Соболева', url: 'https://www.igm.nsc.ru/index.php/novost/raznoe/item/1649-scientists-have-studied-sapropels-of-the-novosibirsk-region' },
  { title: 'Сапропели: богатства со дна озер', source: 'Наука в России', url: 'https://cloud.mail.ru/public/Qh5a/Xvje54H3S' },
  { title: 'Геохимические особенности голоценового разреза сапропеля', source: 'Геохимия', url: 'https://cloud.mail.ru/public/ZCBU/SybNKwvBC' },
];

const documents = [
  { title: 'Протокол испытаний № 34680-МС-2024 от 11.12.2024', url: 'https://cloud.mail.ru/public/7RgZ/Jr4U7WK6E' },
  { title: 'Лицензия на пользование недрами', url: 'https://cloud.mail.ru/public/tgVW/DCLmCdfPc' },
  { title: 'Сертификат соответствия от 16.11.2016 г.', url: 'https://cloud.mail.ru/public/ubPi/ZwjmsvE36' },
  { title: 'Сертификат соответствия от 11.12.2024 г.', url: 'https://cloud.mail.ru/public/UM4h/1Y8VuXrtk' },
  { title: 'Полный отчет разведки сапропеля Минзелинское 1964 г.', url: 'https://cloud.mail.ru/public/PbLJ/FFSVtVVZH' },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Articles */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-500/20 text-amber-400 p-3 rounded-xl">
                <BookOpen size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Научные статьи</h2>
            </div>
            <div className="space-y-4">
              {articles.map((article, i) => (
                <motion.a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="block p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block">{article.source}</span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{article.title}</h3>
                    </div>
                    <ExternalLink size={20} className="text-stone-400 group-hover:text-emerald-400 shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-500/20 text-blue-400 p-3 rounded-xl">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Документы и сертификаты</h2>
            </div>
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <motion.a
                  key={i}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="block p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg transition-all group"
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-base font-medium text-stone-200 group-hover:text-blue-400 transition-colors">{doc.title}</h3>
                    <ExternalLink size={20} className="text-stone-400 group-hover:text-blue-400 shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
