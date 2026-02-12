import { GitBranch, Shield, Network, Clock } from 'lucide-react';

const challenges = [
  {
    icon: GitBranch,
    title: 'Désalignement IT / Métier',
    description: 'Déconnexion entre les priorités stratégiques et la réalité de l\'exécution'
  },
  {
    icon: Shield,
    title: 'Gouvernance lourde ralentissant la delivery',
    description: 'Exigences réglementaires créant des frictions dans les pipelines de livraison'
  },
  {
    icon: Network,
    title: 'Complexité de coordination multi-équipes',
    description: 'Mise à l\'échelle des pratiques agiles sur des équipes distribuées et interdépendantes'
  },
  {
    icon: Clock,
    title: 'Pression réglementaire vs time-to-market',
    description: 'Équilibrer conformité et vitesse de mise sur le marché'
  }
];

export function ChallengesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Défis courants dans les grandes organisations IT bancaires
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="group p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-teal-50 transition-all duration-300">
                    <challenge.icon className="h-7 w-7 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-normal text-slate-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {challenge.description}
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