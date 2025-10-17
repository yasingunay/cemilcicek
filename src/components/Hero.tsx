import { Scale, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Scale className="w-16 h-16 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Av. Cemil Çiçek
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
            Ceza Hukuku • İdare Hukuku • Anayasa Hukuku
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Ankara Barosu'na kayıtlı avukat. İnsan hakları ve politika alanında uzman. İngilizce, Rusça ve Almanca dil desteği.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              İletişime Geçin
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-white/30"
            >
              Hizmetlerimiz
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Uzmanlık Alanları</h3>
              <p className="text-gray-300">Ceza, İdare ve Anayasa Hukuku uzmanı</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">İnsan Hakları</h3>
              <p className="text-gray-300">Doğu Türkistan ve insan hakları alanında çalışmalar</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Scale className="w-12 h-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Çok Dilli Hizmet</h3>
              <p className="text-gray-300">İngilizce, Rusça ve Almanca dil desteği</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
