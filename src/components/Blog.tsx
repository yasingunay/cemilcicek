import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  link: string;
}

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Doğu Türkistan'da İnsan Hakları İhlalleri",
    date: '2024-10-15',
    category: 'İnsan Hakları',
    image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Uygur Türklerinin yaşadığı insan hakları ihlalleri ve uluslararası hukuk çerçevesinde yapılabilecekler. Bu konuda yürüttüğümüz çalışmalar ve öneriler.',
    link: '#'
  },
  {
    id: 2,
    title: 'Anayasa Mahkemesi Bireysel Başvuru Süreci',
    date: '2024-10-10',
    category: 'Anayasa Hukuku',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Anayasal haklarınızın ihlal edildiğini düşünüyorsanız nasıl başvuru yapabilirsiniz? Bireysel başvuru sürecinde dikkat edilmesi gereken hususlar ve pratik bilgiler.',
    link: '#'
  },
  {
    id: 3,
    title: 'Ceza Hukukunda Savunma Stratejileri',
    date: '2024-10-05',
    category: 'Ceza Hukuku',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Ceza davalarında etkili savunma stratejileri ve müşteki vekili olarak haklarınızı nasıl koruyabilirsiniz? Deneyimlerimizden örnekler.',
    link: '#'
  },
  {
    id: 4,
    title: 'İdare Hukukunda Yargısal Denetim',
    date: '2024-09-28',
    category: 'İdare Hukuku',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'İdari işlem ve eylemlerin yargısal denetimi süreci. İptal davaları ve tam yargı davaları arasındaki farklar ve başvuru koşulları.',
    link: '#'
  },
  {
    id: 5,
    title: 'Sosyal Medyada İfade Özgürlüğü',
    date: '2024-09-20',
    category: 'Politika',
    image: 'https://images.pexels.com/photos/7841458/pexels-photo-7841458.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Sosyal medyada düşünce ve ifade özgürlüğünün sınırları. Hangi durumlarda suç oluşur ve nasıl savunma yapılır?',
    link: '#'
  },
  {
    id: 6,
    title: 'Uluslararası İnsan Hakları Hukuku',
    date: '2024-09-15',
    category: 'İnsan Hakları',
    image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Avrupa İnsan Hakları Mahkemesi ve diğer uluslararası mekanizmalar. Başvuru koşulları ve süreç hakkında detaylı bilgilendirme.',
    link: '#'
  }
];

export default function Blog() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hukuk dünyasından güncel gelişmeler, analizler ve rehberler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialBlogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors group"
                >
                  <span>Devamını Oku</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-all">
            Tüm Yazıları Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
}
