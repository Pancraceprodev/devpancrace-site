
import { Code, Puzzle, Brain, Lightbulb, ArrowRight, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import Link  from 'next/link';

const AboutPreview = () => {
  const skills = [
    { name: 'Développement Front-End', icon: <Code size={28} className="text-brand-primary" />, description: 'React, TypeScript, Tailwind CSS' },
    { name: 'Développement Mobile', icon: <Smartphone size={28} className="text-brand-primary" />, description: 'Flutter, iOS, Android' },
    { name: 'Architecture Back-End', icon: <Puzzle size={28} className="text-brand-primary" />, description: 'Node.js, Python, Bases de données' },
    { name: 'Solutions Cloud', icon: <Brain size={28} className="text-brand-primary" />, description: 'AWS, Google Cloud, DevOps' },
    { name: 'Innovation Produit', icon: <Lightbulb size={28} className="text-brand-primary" />, description: 'UX Design, Idéation, MVP' },
  ];

  return (
    <section id="about-preview" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Mes Compétences & Expertises
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
            Avec plus de 10 ans d'expérience dans le développement logiciel et l'entrepreneuriat,
            je combine expertise technique et vision stratégique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white hover:bg-brand-light/50 group"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="rounded-full w-14 h-14 bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{skill.name}</h3>
              <p className="text-brand-muted">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 rounded-md">
            <Link href="/about" className="flex items-center gap-2">
              <span>En savoir plus sur mon parcours</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
