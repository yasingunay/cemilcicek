import { Mail, MessageCircle, Instagram, Languages, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hakkında</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Av. Cemil Çiçek</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hukuk alanında uzun yılların verdiği deneyim ve bilgi birikimi ile müvekkillerimize profesyonel hukuk hizmeti sunmaktayız.
                  Adalet ve hukuk ilkeleri doğrultusunda, müvekkillerimizin haklarını koruma ve en iyi sonucu elde etme misyonu ile çalışıyoruz.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Uzmanlık Alanları</h4>
                      <p className="text-gray-600">
                        Ceza Hukuku, İdare Hukuku, Anayasa Mahkemesi Bireysel Başvuru,
                        Avrupa İnsan Hakları Mahkemesi Başvurusu, Memur ve İşçi Hukuku
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Languages className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Yabancı Dil</h4>
                      <p className="text-gray-600">İngilizce</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-4">İletişim Kanalları</h4>
                <div className="space-y-3">
                  <a href="mailto:cemilcicek@gmail.com" className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>cemilcicek@gmail.com</span>
                  </a>
                  <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://instagram.com/avcemilcicek" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                    <span>@avcemilcicek</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://pbs.twimg.com/profile_images/1653373099323150339/x_L76Iia_400x400.jpg"
                  alt="Av. Cemil Çiçek"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-gray-900/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
