
import { ArrowRight, Check, Smartphone, Brain, FileText } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const StartupShowcase = () => {
  return (
    <section className="section-padding bg-header-gradient">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-1 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-gradient-to-br from-[#9b87f5]/10 via-[#d3e4fd] to-[#1eaedb]/20 flex items-center justify-center">
                  {/* Interface principale de la startup */}
                  <div className="absolute inset-0 flex-center">
                    <div className="w-full h-full flex flex-col">
                      {/* Header de l'application */}
                      <div className="bg-[#9b87f5] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-white text-[#9b87f5] flex-center font-bold">L</div>
                          <span className="font-mono text-sm">Luminaïa</span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Contenu de l'application */}
                      <div className="flex-1 grid grid-cols-2 p-3 gap-3">
                        <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center justify-center">
                          <Smartphone size={32} className="text-[#9b87f5] mb-2" />
                          <p className="text-xs text-center font-medium">Mobile Flutter</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center justify-center">
                          <Brain size={32} className="text-[#9b87f5] mb-2" />
                          <p className="text-xs text-center font-medium">IA & Données</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-3 flex flex-col items-center justify-center">
                          <FileText size={32} className="text-[#9b87f5] mb-2" />
                          <p className="text-xs text-center font-medium">Contenu Premium</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-3 relative overflow-hidden">
                          {/* Superposition de votre photo ici */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-transparent"></div>
                          <div className="absolute bottom-2 left-2 text-white text-xs font-medium">Fondateur</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="font-mono text-sm">Luminaïa</p>
                    <h4 className="font-bold">Interface principale</h4>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <p className="text-sm font-medium text-brand-accent">Déjà <span className="font-bold">500+</span> utilisateurs</p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <Check size={16} className="text-green-500" />
                  <p className="font-medium text-brand-dark">Mobile Flutter</p>
                </div>
                <p className="text-sm text-brand-muted">Applications multi-plateforme performantes</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <Check size={16} className="text-green-500" />
                  <p className="font-medium text-brand-dark">IA avancée</p>
                </div>
                <p className="text-sm text-brand-muted">Traitement intelligent des données</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <Check size={16} className="text-green-500" />
                  <p className="font-medium text-brand-dark">Contenu premium</p>
                </div>
                <p className="text-sm text-brand-muted">Articles techniques reconnus</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <Check size={16} className="text-green-500" />
                  <p className="font-medium text-brand-dark">Intuitif</p>
                </div>
                <p className="text-sm text-brand-muted">Solutions élégantes et accessibles</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <p className="text-brand-primary font-mono tracking-wider">MON PROJET PHARE</p>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6">
                  <span className="gradient-text">Luminaïa</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"></div>
              </div>
              <p className="text-lg text-brand-muted">
                Plus qu'une simple solution technologique, Luminaïa est le fruit d'une passion profonde pour 
                le développement et la résolution de problèmes concrets. Nous avons identifié les défis de 
                l'intégration mobile-IA et les abordons avec une expertise technique pointue, offrant des 
                solutions efficaces et accessibles. Notre engagement est de créer des solutions non seulement 
                efficaces, mais aussi élégantes et intuitives, reflétant notre amour pour un développement bien fait.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-brand-primary/10 p-1 mt-0.5">
                    <Check size={16} className="text-brand-primary" />
                  </div>
                  <p>Développement Flutter pour des applications mobiles performantes et multi-plateformes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-brand-primary/10 p-1 mt-0.5">
                    <Check size={16} className="text-brand-primary" />
                  </div>
                  <p>Algorithmes d'IA pour l'analyse et la valorisation des données clients</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-brand-primary/10 p-1 mt-0.5">
                    <Check size={16} className="text-brand-primary" />
                  </div>
                  <p>Publication d'articles techniques et de guides reconnus par les géants du web</p>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white rounded-md">
                  <Link href="/portfolio" className="flex items-center gap-2">
                    <span>Découvrir le projet</span>
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupShowcase;
