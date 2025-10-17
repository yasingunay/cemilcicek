import { Shield, Building2, Briefcase, Users, Home, FileText, Lock, Heart, HandshakeIcon, Building, Gavel, Scale } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Ceza Hukuku',
    description: 'Ceza davalarında savunma ve müşteki vekili hizmetleri'
  },
  {
    icon: Building2,
    title: 'İdare Hukuku',
    description: 'İdari işlem ve eylemlerle ilgili hukuki destek'
  },
  {
    icon: Scale,
    title: 'Anayasa Hukuku',
    description: 'Anayasa Mahkemesi bireysel başvuru ve anayasal haklar'
  },
  {
    icon: Heart,
    title: 'İnsan Hakları',
    description: 'İnsan hakları ihlalleri ve uluslararası hukuk'
  },
  {
    icon: Gavel,
    title: 'Politika Hukuku',
    description: 'Siyasi haklar ve demokratik süreçler'
  },
  {
    icon: FileText,
    title: 'Doğu Türkistan',
    description: 'Uygur Türklerinin insan hakları ihlalleri'
  },
  {
    icon: Building,
    title: 'Ticaret ve Şirketler Hukuku',
    description: 'Şirket kuruluşu ve ticari uyuşmazlıklar'
  },
  {
    icon: Gavel,
    title: 'İcra ve İflas Hukuku',
    description: 'İcra takibi ve iflas davaları'
  },
  {
    icon: Scale,
    title: 'Anayasa Mahkemesi Bireysel Başvuru',
    description: 'Anayasal hakların ihlali halinde bireysel başvuru'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Geniş yelpazede hukuki danışmanlık ve dava takibi hizmetleri sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-amber-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ayrıca Avrupa İnsan Hakları Mahkemesi başvuruları konusunda da uzman destek sunuyoruz.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md"
          >
            Hukuki Destek Alın
          </button>
        </div>
      </div>
    </section>
  );
}
