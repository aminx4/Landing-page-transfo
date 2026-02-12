import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { BookingModal } from './BookingModal';

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background overlay with abstract pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1766941288426-9c5bc4045076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrJTIwYmx1ZXxlbnwxfHx8fDE3NzA4Nzk0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
            <span className="block">
              Faire évoluer l'exécution IT bancaire
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
              sans perdre contrôle ni vélocité
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Aider les dirigeants IT bancaires à aligner stratégie, gouvernance et exécution à grande échelle.
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-sm shadow-2xl transition-all duration-300 hover:shadow-white/20"
            >
              Ouvert à un échange entre pairs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-slate-400 rounded-full" />
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
