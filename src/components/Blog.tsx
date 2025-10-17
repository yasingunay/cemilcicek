import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "TBMM'ye 10. Yargı Paketi Geliyor",
    date: '20 Mart 2024',
    category: 'Hukuk Gündem',
    image: 'https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Türkiye Büyük Millet Meclisi gündemine gelen 10. Yargı Paketi ile hukuk sisteminde yapılması planlanan değişiklikler ve bunların vatandaşlar üzerindeki muhtemel etkileri.',
    link: '#'
  },
  {
    title: 'Anayasa Mahkemesi Bireysel Başvuru Rehberi',
    date: '18 Mart 2024',
    category: 'Rehber',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Anayasal haklarınızın ihlal edildiğini düşünüyorsanız nasıl başvuru yapabilirsiniz? Bireysel başvuru sürecinde dikkat edilmesi gereken hususlar ve pratik bilgiler.',
    link: '#'
  },
  {
    title: 'KVKK: İşyerlerinde Veri Güvenliği',
    date: '15 Mart 2024',
    category: 'Kişisel Veriler',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Kişisel Verilerin Korunması Kanunu çerçevesinde işyerlerinin alması gereken önlemler, çalışan hakları ve yasal yükümlülükler hakkında detaylı bilgilendirme.',
    link: '#'
  },
  {
    title: 'Ceza İnfaz Sisteminde Yeni Düzenlemeler',
    date: '12 Mart 2024',
    category: 'Ceza Hukuku',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Ceza infaz sisteminde yapılan son düzenlemeler ve hükümlülerin haklarına ilişkin önemli gelişmeler. Koşullu salıverme ve denetimli serbestlik uygulamaları.',
    link: '#'
  },
  {
    title: 'İşçi Alacakları ve Tazminat Hakları',
    date: '8 Mart 2024',
    category: 'İş Hukuku',
    image: 'https://images.pexels.com/photos/7841458/pexels-photo-7841458.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'İş sözleşmesinin feshi durumunda işçilerin alacak ve tazminat hakları. Kıdem ve ihbar tazminatı hesaplaması, yıllık izin ücreti ve diğer haklar.',
    link: '#'
  },
  {
    title: 'Aile Hukukunda Mal Paylaşımı',
    date: '5 Mart 2024',
    category: 'Aile Hukuku',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Boşanma davalarında mal paylaşımı süreci, edinilmiş mallara katılma rejimi ve tarafların hakları hakkında bilmeniz gerekenler.',
    link: '#'
  }
];

export default function Blog() {
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
          {blogPosts.map((post, index) => (
            <article
              key={index}
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
                  <span>{post.date}</span>
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
