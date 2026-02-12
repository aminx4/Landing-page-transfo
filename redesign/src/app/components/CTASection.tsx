import { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { BookingModal } from './BookingModal';

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.05) 10px,
            rgba(255,255,255,0.05) 20px
          )`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 text-teal-400 mb-4">
            <Calendar className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Pas de pitch, juste du dialogue</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Échange entre pairs
          </h2>
          
          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Toujours ouvert aux discussions informelles avec les dirigeants IT sur les sujets de transformation et de delivery.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-sm shadow-2xl transition-all duration-300 hover:shadow-white/20 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Planifier un échange de 20 minutes
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust signals */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              <span>Confidentiel</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              <span>Entre pairs</span>
            </div>
          </div>
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
