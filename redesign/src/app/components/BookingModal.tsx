import { useState } from 'react';
import { Calendar, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { config } from '../../config';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleBooking = () => {
    setConfirmed(true);
    // Open booking link in new tab
    window.open(config.bookingLink, '_blank', 'noopener,noreferrer');
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      onClose();
      setConfirmed(false);
    }, 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-white max-w-md w-full mx-4 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-6 w-6" />
        </button>

        {!confirmed ? (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900">
                Planifier un échange
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Vous allez être redirigé vers mon calendrier pour choisir un créneau de {config.meetingDuration}.
            </p>

            <div className="space-y-3 text-sm text-slate-500 bg-slate-50 p-4">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span>Discussion confidentielle entre pairs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span>Sans engagement ni pitch commercial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                <span>Dialogue informel sur vos enjeux</span>
              </div>
            </div>

            <Button
              onClick={handleBooking}
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700"
            >
              Ouvrir le calendrier
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-normal text-slate-900">
              Redirection en cours...
            </h3>
            <p className="text-slate-600">
              Choisissez un créneau qui vous convient.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
