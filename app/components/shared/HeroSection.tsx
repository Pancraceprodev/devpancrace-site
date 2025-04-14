
import { ArrowRight, Code, Rocket } from 'lucide-react';
import Link  from 'next/link';
import { Button } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-6 md:pr-8 mb-10 md:mb-0">
          <div className="space-y-2">
            <p className="text-brand-primary font-mono tracking-widest animate-slide-from-left opacity-0" style={{ animationDelay: '0.2s' }}>
              DÉVELOPPEUR SENIOR & ENTREPRENEUR
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              <span className="text-reveal-container">
                <span className="inline-block animate-text-reveal opacity-0">
                  Créations
                </span>
              </span>{" "}
              <span className="text-reveal-container">
                <span className="inline-block animate-text-reveal-delay-1 opacity-0">
                  numériques
                </span>
              </span>{" "}
              <span className="text-reveal-container">
                <span className="inline-block animate-text-reveal-delay-2 opacity-0">
                  <span className="gradient-text">innovantes</span>
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted mt-6 opacity-0 animate-slide-from-left" style={{ animationDelay: '0.8s' }}>
              Solutions technologiques créatives pour des problèmes complexes. Développeur passionné et fondateur de startup.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-slide-from-left" style={{ animationDelay: '1s' }}>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md">
              <Link href="/portfolio" className="flex items-center gap-2">
                <Rocket size={18} />
                <span>Découvrir ma startup</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-dark text-brand-dark hover:bg-brand-dark/5 rounded-md">
              <Link href="/about" className="flex items-center gap-2">
                <span>Mon profil</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 glass-card rounded-xl rotate-3 bg-white shadow-lg transform transition-all hover:-rotate-2 hover:scale-105 animate-fade-in">
                <Code size={40} className="text-brand-primary mx-auto mb-2" />
                <div className="text-center">
                  <p className="font-mono text-xs text-brand-muted">10+ ans d'expérience</p>
                  <p className="font-bold text-brand-dark">Développeur Senior</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:bottom-0 md:right-0">
              <div className="p-4 glass-card rounded-xl -rotate-3 bg-white shadow-lg transform transition-all hover:rotate-2 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Rocket size={40} className="text-brand-accent mx-auto mb-2" />
                <div className="text-center">
                  <p className="font-mono text-xs text-brand-muted">Innovation</p>
                  <p className="font-bold text-brand-dark">Fondateur Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-muted/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
