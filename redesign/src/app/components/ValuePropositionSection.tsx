import { Layers, TrendingUp, GitMerge, Target } from 'lucide-react';

const values = [
  {
    icon: Layers,
    title: 'Structurer des modèles opérationnels Agile@Scale',
    description: 'Concevoir des frameworks de delivery qui passent à l\'échelle sans perdre agilité ni redevabilité'
  },
  {
    icon: TrendingUp,
    title: 'Améliorer la performance de delivery à grande échelle',
    description: 'Optimiser le flux, réduire le gaspillage et augmenter la prévisibilité sur les chaînes de valeur'
  },
  {
    icon: GitMerge,
    title: 'Accompagner l\'évolution SAFe / ART / LPM',
    description: 'Permettre une mise en œuvre mature des frameworks scaled alignés avec votre contexte'
  },
  {
    icon: Target,
    title: 'Activer l\'alignement stratégie-exécution',
    description: 'Combler l\'écart entre la vision executive et l\'exécution quotidienne des équipes'
  }
];

export function ValuePropositionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Comment je soutiens les dirigeants IT
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6" />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:bg-white"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-normal text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}