import { Newspaper, ExternalLink } from 'lucide-react';

interface PressProps {
  onShowComingSoon: () => void;
}

const pressItems = [
  {
    title: 'CNN Türk\'te Cemil Çiçekler Karıştı',
    source: 'Bizim TV',
    date: '2020',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'CNN Türk\'te eski TBMM Başkanı Cemil Çiçek\'in tweetleri okunmak istenirken, yanlışlıkla Avukat Cemil Çiçek\'in tweetleri okundu'
  },
  {
    title: 'Sosyal Medyada İnsan Hakları Aktivistliği',
    source: 'Eksisozluk',
    date: '2023',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Twitter\'da Doğu Türkistan ve Uygur Türklerinin insan hakları ihlalleri konusunda aktif paylaşımlar'
  },
  {
    title: 'Antalya Cezaevi Olayları Hakkında Açıklama',
    source: 'Halk TV',
    date: '2024',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Antalya\'da tutuklu bulunan "Yenidoğan çetesi" davası sanıklarından İlker Gönen hakkında sosyal medya paylaşımı'
  },
  {
    title: 'Sakarya Trafik Kazası Açıklaması',
    source: 'Medya Bar',
    date: '2024',
    image: 'https://images.pexels.com/photos/7841458/pexels-photo-7841458.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Sakarya\'da meydana gelen trafik kazası sonrasında kamyon şoförünün en ağır cezayla cezalandırılması gerektiği açıklaması'
  },
  {
    title: 'Düşünce ve İfade Özgürlüğü Savunması',
    source: 'TV Nota',
    date: '2024',
    image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Hakkında açılan soruşturmaya tepki göstererek düşünce ve ifade özgürlüğü kapsamında değerlendirilmesi gerektiğini belirtti'
  },
  {
    title: 'Ankara Barosu\'nda Aktif Üyelik',
    source: 'Ankara Barosu',
    date: '2023',
    image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
    excerpt: 'Ankara 1 Nolu Barosu\'na kayıtlı olarak serbest avukatlık yapmakta ve baro etkinliklerinde aktif rol almaktadır'
  }
];

export default function Press({ onShowComingSoon }: PressProps) {
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
            <div
              key={index}
              onClick={onShowComingSoon}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
