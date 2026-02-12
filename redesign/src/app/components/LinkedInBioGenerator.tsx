import { useState } from 'react';
import { FileText, Copy, Check, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface GeneratedBio {
  headline: string;
  credibilityBullets: string[];
  valueBullets: string[];
  bio: string;
}

export function LinkedInBioGenerator() {
  const [linkedInText, setLinkedInText] = useState('');
  const [generatedBio, setGeneratedBio] = useState<GeneratedBio | null>(null);
  const [copied, setCopied] = useState(false);

  const generateBio = () => {
    if (!linkedInText.trim()) return;

    // Simple text processing to generate bio
    const text = linkedInText.toLowerCase();
    
    // Extract key themes and experience
    const hasAgile = text.includes('agile') || text.includes('scrum') || text.includes('safe');
    const hasTransformation = text.includes('transformation') || text.includes('digital');
    const hasBanking = text.includes('bank') || text.includes('finance') || text.includes('financ');
    const hasLeadership = text.includes('lead') || text.includes('manage') || text.includes('direct');
    const hasScale = text.includes('scale') || text.includes('enterprise') || text.includes('large');
    
    // Extract years of experience (simple pattern matching)
    const yearsMatch = text.match(/(\d+)\+?\s*(years|ans|année)/i);
    const years = yearsMatch ? parseInt(yearsMatch[1]) : null;

    // Generate headline
    let headline = 'Expert en Transformation IT';
    if (hasAgile && hasBanking) {
      headline = 'Spécialiste Agile@Scale & Transformation IT Bancaire';
    } else if (hasAgile && hasScale) {
      headline = 'Expert en Transformation Agile à Grande Échelle';
    } else if (hasTransformation && hasLeadership) {
      headline = 'Leader de Transformation IT & Delivery';
    }

    // Generate credibility bullets
    const credibilityBullets: string[] = [];
    
    if (years && years >= 10) {
      credibilityBullets.push(`${years}+ ans d'expérience en transformation IT et delivery`);
    } else if (years) {
      credibilityBullets.push(`${years} ans d'expérience en transformation IT`);
    }
    
    if (hasBanking) {
      credibilityBullets.push('Expérience approfondie dans le secteur bancaire européen');
    }
    
    if (hasScale) {
      credibilityBullets.push('Transformation d\'organisations avec 1000+ praticiens');
    }
    
    if (hasLeadership) {
      credibilityBullets.push('Collaboration avec CIO et leadership C-level');
    }

    // Ensure we have at least 3 bullets
    while (credibilityBullets.length < 3) {
      const fillers = [
        'Accompagnement de transformations complexes à grande échelle',
        'Mise en œuvre de frameworks Agile@Scale (SAFe, LeSS)',
        'Expertise en gouvernance IT et delivery performance'
      ];
      credibilityBullets.push(fillers[credibilityBullets.length]);
    }

    // Generate value bullets
    const valueBullets: string[] = [
      'Alignement stratégie-exécution pour dirigeants IT',
      'Optimisation du flux de delivery et réduction du gaspillage',
      'Mise en place de métriques data-driven (flow, qualité, valeur métier)'
    ];

    // Generate bio paragraph
    const bioParts: string[] = [];
    
    if (hasTransformation && hasBanking) {
      bioParts.push('Je soutiens les dirigeants IT bancaires dans leurs transformations Agile@Scale.');
    } else if (hasTransformation) {
      bioParts.push('J\'accompagne les organisations IT dans leurs transformations à grande échelle.');
    }
    
    bioParts.push('Mon approche se concentre sur l\'alignement entre vision stratégique et exécution quotidienne,');
    
    if (hasScale) {
      bioParts.push('en structurant des modèles opérationnels qui passent à l\'échelle sans perdre agilité ni redevabilité.');
    } else {
      bioParts.push('permettant aux équipes de livrer de la valeur de manière prévisible et durable.');
    }
    
    const bio = bioParts.join(' ');

    setGeneratedBio({
      headline,
      credibilityBullets: credibilityBullets.slice(0, 3),
      valueBullets,
      bio
    });
  };

  const copyToClipboard = () => {
    if (!generatedBio) return;

    const formattedText = `
${generatedBio.headline}

CRÉDIBILITÉ:
${generatedBio.credibilityBullets.map(b => `• ${b}`).join('\n')}

VALEUR:
${generatedBio.valueBullets.map(b => `• ${b}`).join('\n')}

BIO:
${generatedBio.bio}
    `.trim();

    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-teal-600 mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Outil pratique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
            Générateur de Bio Executive
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Collez votre profil LinkedIn pour générer une bio executive ciblée transformation IT
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <FileText className="inline h-4 w-4 mr-2" />
                Profil LinkedIn (About + Expérience)
              </label>
              <textarea
                value={linkedInText}
                onChange={(e) => setLinkedInText(e.target.value)}
                placeholder="Collez ici le texte de votre section About et vos expériences principales depuis LinkedIn..."
                className="w-full h-80 p-4 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none text-sm"
              />
            </div>
            
            <Button
              onClick={generateBio}
              disabled={!linkedInText.trim()}
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Générer la Bio
            </Button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            {generatedBio ? (
              <>
                <div className="bg-white border border-slate-200 p-6 space-y-6 shadow-sm">
                  {/* Headline */}
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      Titre Executive
                    </h4>
                    <p className="text-xl font-normal text-slate-900">
                      {generatedBio.headline}
                    </p>
                  </div>

                  {/* Credibility Bullets */}
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      Crédibilité (3 points)
                    </h4>
                    <ul className="space-y-2">
                      {generatedBio.credibilityBullets.map((bullet, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-slate-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Value Bullets */}
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      Valeur (3 points)
                    </h4>
                    <ul className="space-y-2">
                      {generatedBio.valueBullets.map((bullet, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-slate-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bio Paragraph */}
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      Bio Executive
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {generatedBio.bio}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={copyToClipboard}
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      Copier le texte
                    </>
                  )}
                </Button>
              </>
            ) : (
              <div className="h-full flex items-center justify-center bg-slate-50 border border-slate-200 p-12">
                <div className="text-center text-slate-400">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">
                    Votre bio générée apparaîtra ici
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info note */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 text-sm text-slate-600">
          <p>
            <strong className="text-slate-900">Note:</strong> Cet outil utilise un traitement de texte simple côté client. 
            Aucune donnée n'est envoyée à un serveur. Ajustez le résultat selon vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}
