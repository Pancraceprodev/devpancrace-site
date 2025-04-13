
import Link  from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-brand-dark font-bold text-xl"
            >
              <span className="text-brand-primary font-mono text-2xl">&lt;</span>
              <span className="font-sans">Digital Canvas</span>
              <span className="text-brand-primary font-mono text-2xl">/&gt;</span>
            </Link>
            <p className="mt-4 text-brand-muted">
              Développeur senior et entrepreneur passionné par l'innovation technologique.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-brand-dark">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brand-muted hover:text-brand-primary transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="text-brand-muted hover:text-brand-primary transition-colors">À Propos</Link></li>
              <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-brand-muted hover:text-brand-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-brand-muted hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-brand-dark">Projets</h3>
            <ul className="space-y-2">
              <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-primary transition-colors">Ma Startup</Link></li>
              <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-primary transition-colors">Projet Client A</Link></li>
              <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-primary transition-colors">Application B</Link></li>
              <li><Link href="/portfolio" className="text-brand-muted hover:text-brand-primary transition-colors">Tous les projets</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-brand-dark">Contact</h3>
            <p className="text-brand-muted mb-4">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-brand-muted hover:text-brand-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-brand-muted hover:text-brand-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-muted hover:text-brand-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email" className="text-brand-muted hover:text-brand-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-muted text-sm">
            © {currentYear} Digital Canvas. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-sm text-brand-muted hover:text-brand-primary transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
