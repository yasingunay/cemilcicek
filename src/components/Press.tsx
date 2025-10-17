import { Newspaper, ExternalLink } from 'lucide-react';

const pressItems = [
  {
    title: 'Cemil Çiçek ile Özel Röportaj',
    source: 'Hukuk Haberleri',
    date: '15 Mart 2024',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Ceza hukuku alanındaki son gelişmeler ve uygulamalar hakkında değerlendirmeler'
  },
  {
    title: 'Anayasa Mahkemesi Kararları Semineri',
    source: 'Adalet Platformu',
    date: '8 Mart 2024',
    image: 'https://images.pexels.com/photos/8111848/pexels-photo-8111848.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Bireysel başvuru süreçleri ve son dönem içtihatlar üzerine seminer'
  },
  {
    title: 'KVKK ve Güncel Uygulamalar',
    source: 'Hukuk Gündem',
    date: '1 Mart 2024',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Kişisel verilerin korunması konusunda güncel düzenlemeler ve pratik çözümler'
  },
  {
    title: 'İdare Hukuku Reformları',
    source: 'Hukuk Perspektif',
    date: '22 Şubat 2024',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'İdare hukukundaki yeni düzenlemeler ve yargı kararlarının analizi'
  },
  {
    title: 'Memur Hakları ve Yasal Düzenlemeler',
    source: 'Kamu Hukuku Dergisi',
    date: '10 Şubat 2024',
    image: 'https://images.pexels.com/photos/7841458/pexels-photo-7841458.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Kamu görevlilerinin hakları ve son düzenlemeler üzerine kapsamlı değerlendirme'
  },
  {
    title: 'AİHM Başvuru Süreci',
    source: 'Uluslararası Hukuk',
    date: '5 Şubat 2024',
    image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Avrupa İnsan Hakları Mahkemesi başvuru koşulları ve süreç hakkında bilgilendirme'
  }
];

export default function Press() {
  return (
    <section id="press" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Newspaper className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Basında Cemil Çiçek</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Medyada yer alan haberler, röportajlar ve etkinlikler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <span className="font-medium text-amber-600">{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
