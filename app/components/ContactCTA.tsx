
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link'

const ContactCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-brand-dark text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Intéressé(e) par une collaboration ?
            </h2>
            <p className="text-white/80 text-lg max-w-lg">
              Que vous cherchiez un développeur senior pour votre projet, un partenaire pour votre startup ou des opportunités d'investissement, je serais ravi d'échanger avec vous.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md">
              <Link href="/contact" className="flex items-center gap-2">
                <Mail size={18} />
                <span>Me contacter</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-md">
              <Link href="/portfolio" className="flex items-center gap-2">
                <span>Voir mes projets</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
