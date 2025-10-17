import { useState } from 'react';
import { BookOpen, Calendar, ArrowRight, Plus, Edit, Trash2, X, Save } from 'lucide-react';

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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [newPost, setNewPost] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    date: '',
    category: '',
    image: '',
    excerpt: '',
    link: '#'
  });

  const categories = ['İnsan Hakları', 'Anayasa Hukuku', 'Ceza Hukuku', 'İdare Hukuku', 'Politika', 'Uluslararası Hukuk'];

  const addPost = () => {
    if (newPost.title && newPost.date && newPost.category && newPost.excerpt) {
      const post: BlogPost = {
        ...newPost,
        id: Math.max(...blogPosts.map(p => p.id), 0) + 1
      };
      setBlogPosts([post, ...blogPosts]);
      setNewPost({
        title: '',
        date: '',
        category: '',
        image: '',
        excerpt: '',
        link: '#'
      });
      setIsAddingPost(false);
    }
  };

  const deletePost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const updatePost = () => {
    if (editingPost) {
      setBlogPosts(blogPosts.map(post => 
        post.id === editingPost.id ? editingPost : post
      ));
      setEditingPost(null);
    }
  };

  const startEdit = (post: BlogPost) => {
    setEditingPost({ ...post });
  };

  const cancelEdit = () => {
    setEditingPost(null);
  };

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
          
          {/* Yönetim Butonları */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setIsAddingPost(true)}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Yeni Post Ekle
            </button>
          </div>
        </div>

        {/* Yeni Post Ekleme Formu */}
        {isAddingPost && (
          <div className="mb-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Yeni Blog Postu Ekle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Blog post başlığı"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tarih</label>
                <input
                  type="date"
                  value={newPost.date}
                  onChange={(e) => setNewPost({...newPost, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  title="Blog post tarihi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <select
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  title="Blog post kategorisi"
                >
                  <option value="">Kategori Seçin</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resim URL</label>
                <input
                  type="url"
                  value={newPost.image}
                  onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Özet</label>
                <textarea
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Blog post özeti"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <button
                onClick={addPost}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Kaydet
              </button>
              <button
                onClick={() => setIsAddingPost(false)}
                className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                İptal
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
                {/* Yönetim Butonları */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => startEdit(post)}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
                    title="Düzenle"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all"
                    title="Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
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

        {/* Düzenleme Modal */}
        {editingPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Blog Postu Düzenle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Başlık</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    title="Blog post başlığı"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tarih</label>
                  <input
                    type="date"
                    value={editingPost.date}
                    onChange={(e) => setEditingPost({...editingPost, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    title="Blog post tarihi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                  <select
                    value={editingPost.category}
                    onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    title="Blog post kategorisi"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resim URL</label>
                  <input
                    type="url"
                    value={editingPost.image}
                    onChange={(e) => setEditingPost({...editingPost, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    title="Blog post resim URL'si"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Özet</label>
                  <textarea
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    title="Blog post özeti"
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={updatePost}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Güncelle
                </button>
                <button
                  onClick={cancelEdit}
                  className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-all">
            Tüm Yazıları Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
}
