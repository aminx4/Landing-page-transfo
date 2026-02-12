import { useState } from 'react';
import { Quote, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  source: 'linkedin' | 'email';
  sourceDate: string;
  quote: string;
  fullQuote?: string;
  highlights: string[];
  linkedInUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'flavien',
    author: 'Flavien De Barros',
    role: 'Product Owner / Business Analyst',
    source: 'linkedin',
    sourceDate: '30 janvier 2026',
    quote: "Je souhaite recommander chaleureusement Amine pour la qualité de son accompagnement en tant que coach agile. Son vrai point fort — et ce qui fait toute la différence sur le terrain — c'est son pragmatisme. Amine ne pousse jamais l'agilité \"pour l'agilité\". Il part toujours du contexte réel, des contraintes existantes et du niveau de maturité des équipes pour proposer des pratiques utiles, applicables et adaptées.",
    fullQuote: "Je souhaite recommander chaleureusement Amine pour la qualité de son accompagnement en tant que coach agile.\n\nSon vrai point fort — et ce qui fait toute la différence sur le terrain — c'est son pragmatisme. Amine ne pousse jamais l'agilité \"pour l'agilité\". Il part toujours du contexte réel, des contraintes existantes et du niveau de maturité des équipes pour proposer des pratiques utiles, applicables et adaptées.\n\nIl a notamment contribué à structurer le fonctionnement agile de cinq équipes, en aidant à installer des modes de travail clairs et efficaces. Il sait faire évoluer les pratiques pas à pas, avec bon sens, et en gardant toujours le focus sur la valeur apportée aux utilisateurs finaux.\n\nJ'ai personnellement bénéficié de son coaching chez un client en commun, lors de ma prise de poste en tant que Product Owner, un rôle nouveau pour moi à l'époque. Son approche pragmatique m'a permis de prendre confiance rapidement, de mieux structurer mon travail et d'adopter des pratiques réellement utiles au quotidien.",
    highlights: ['Pragmatisme', '5 équipes']
  },
  {
    id: 'yannick',
    author: 'Yannick BOUYSSOU',
    role: 'RTE',
    source: 'linkedin',
    sourceDate: '17 juillet 2024',
    quote: "Amine intervient en tant que coach agile au sein de notre groupe dans un contexte de mise à l'échelle SAFe d'équipes scrum. Son expérience en agilité et ses compétences IT lui permettent d'accompagner les équipes vers des niveaux de performance que nous n'avions encore jamais atteint. Son niveau d'exigence, sa soif d'apprendre continuellement et de la partager avec nous pousse les équipes à se dépasser.",
    highlights: ['SAFe à l\'échelle', 'Performance']
  },
  {
    id: 'thierry',
    author: 'Thierry Griboux',
    role: 'Client stakeholder',
    source: 'email',
    sourceDate: '26 juillet 2024',
    quote: "Je tenais à vous remercier sincèrement pour tout ce que vous nous avez apporté depuis le début et ce ne fut pas chose facile j'imagine. C'était un beau challenge et vous l'avez réussi ! Merci pour tes conseils, ton accompagnement, ta patience au démarrage. Grâce à toi on applique un super modèle de rédaction des US et toute l'équipe s'y est mise.",
    highlights: ['Accompagnement', 'Structuration']
  }
];

export function TestimonialsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="temoignages" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(0,0,0,0.03) 50px,
            rgba(0,0,0,0.03) 51px
          )`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-3xl mx-auto">
            Ce que disent les équipes et leaders que j'ai accompagnés.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white border border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>

              {/* Source badge */}
              <div className="flex items-center space-x-2 mb-4">
                {testimonial.source === 'linkedin' ? (
                  <div className="flex items-center space-x-2 text-xs text-blue-700 bg-blue-50 px-3 py-1">
                    <Linkedin className="h-3 w-3" />
                    <span>LinkedIn</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 px-3 py-1">
                    <Mail className="h-3 w-3" />
                    <span>Email</span>
                  </div>
                )}
                <span className="text-xs text-slate-400">{testimonial.sourceDate}</span>
              </div>

              {/* Quote text */}
              <div className="mb-6 relative">
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{expandedId === testimonial.id && testimonial.fullQuote 
                    ? testimonial.fullQuote 
                    : testimonial.quote}"
                </p>
                
                {testimonial.fullQuote && testimonial.fullQuote !== testimonial.quote && (
                  <button
                    onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {expandedId === testimonial.id ? 'Voir moins' : 'Voir plus'}
                  </button>
                )}
              </div>

              {/* Author info */}
              <div className="mb-4">
                <div className="font-medium text-slate-900">{testimonial.author}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>

              {/* Highlight chips */}
              <div className="flex flex-wrap gap-2">
                {testimonial.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 font-light">
            Témoignages authentiques de professionnels accompagnés lors de transformations Agile@Scale
          </p>
        </div>
      </div>
    </section>
  );
}
