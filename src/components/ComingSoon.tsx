import { ArrowLeft, Clock, Mail } from 'lucide-react';

interface ComingSoonProps {
  onBack: () => void;
}

export default function ComingSoon({ onBack }: ComingSoonProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Clock className="w-20 h-20 text-amber-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Yakında Sizlerle
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Bu özellik henüz aktif değil
        </p>
        
        <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
          Bu sayfa yakında hizmete girecek. Güncellemelerden haberdar olmak için 
          iletişim bilgilerimizi takip edebilirsiniz.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={onBack}
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Geri Dön
          </button>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="mailto:cemilcicek@gmail.com"
              className="flex items-center text-gray-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>E-posta</span>
            </a>
            <a
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
