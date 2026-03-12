import { motion } from 'motion/react';

const videos = [
  {
    id: '18fb92be5288fae323328e831229b319',
    title: 'Добыча сапропели из озера Минзелинское'
  },
  {
    id: '220a3281fb20c98b11906841d1a748d5',
    title: 'Честный обзор и отзыв на нашу продукцию'
  },
  {
    id: '983788da33f0955ce76abce10628aa9e',
    title: 'Отзыв садоводов о урожайности (Часть 1)'
  },
  {
    id: 'ff20d3b3e4b75684c52d13b023628e48',
    title: 'Отзыв садоводов о урожайности (Часть 2)'
  },
  {
    id: 'fb165d903f4c930273ed299124bf92d6',
    title: 'Результат выращенной живности'
  }
];

export default function Videos() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Видеоматериалы и отзывы</h2>
          <p className="text-lg text-stone-300">
            Посмотрите, как мы добываем сапропель, и узнайте о реальных результатах наших клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-lg ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="aspect-video w-full bg-stone-900 relative">
                <iframe
                  src={`https://rutube.ru/play/embed/${video.id}`}
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-white text-lg">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
