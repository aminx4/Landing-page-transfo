import { Building2, Workflow, Users, LineChart } from 'lucide-react';

const credentials = [
  {
    icon: Building2,
    title: 'Contextes bancaires européens',
    metric: 'Expérience multi-pays',
    description: 'Collaboration avec des institutions bancaires tier-1 dans divers environnements réglementaires'
  },
  {
    icon: Workflow,
    title: 'Transformations Agile à grande échelle',
    metric: '1000+ praticiens',
    description: 'Pilotage de transformations d\'entreprise impactant des centaines d\'équipes'
  },
  {
    icon: Users,
    title: 'Collaboration avec CIO et leadership IT',
    metric: 'Alignement exécutif',
    description: 'Partenaire des dirigeants C-level sur les initiatives stratégiques de delivery IT'
  },
  {
    icon: LineChart,
    title: 'Focus sur les résultats mesurables',
    metric: 'Data-driven',
    description: 'Établir les métriques qui comptent : flux, qualité et valeur métier'
  }
];

export function CredibilitySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1627924657731-3f9af38e09fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcwODg1OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Expérience dans des environnements complexes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card with border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white p-8 m-[2px] h-full">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <credential.icon className="h-10 w-10 text-blue-600 group-hover:text-teal-600 transition-colors duration-300" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1">
                      {credential.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-normal text-slate-900">
                    {credential.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {credential.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 font-light leading-relaxed italic border-l-4 border-blue-600 pl-6 text-left">
            "La transformation ne concerne pas les frameworks—il s'agit de permettre aux leaders de prendre 
            de meilleures décisions, plus rapidement, avec une visibilité totale sur ce qui compte."
          </p>
        </div>
      </div>
    </section>
  );
}