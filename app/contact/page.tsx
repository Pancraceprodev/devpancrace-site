'use client'
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formState.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    if (!formState.message.trim()) newErrors.message = 'Le message est requis';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-header-gradient py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Contact
            </h1>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-brand-muted">
              Discutons de vos projets, opportunités de collaboration ou de toute autre question.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6 section-title-line">
                Envoyez-moi un message
              </h2>
              
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      value={formState.name}
                      onChange={handleChange}
                      className={`${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.name && (
                      <div className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Votre email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.email && (
                      <div className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formState.subject}
                    onChange={handleChange}
                    className="border-gray-200"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    className={`${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                    disabled={formStatus === 'submitting'}
                  />
                  {errors.message && (
                    <div className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.message}
                    </div>
                  )}
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white w-full sm:w-auto"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Envoi en cours...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle2 size={18} className="mr-2" />
                        Message envoyé !
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </div>
                
                {formStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-md flex items-start">
                    <AlertCircle size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                    <p>Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou me contacter directement par email.</p>
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6 section-title-line">
                Mes Coordonnées
              </h2>
              
              {/* Profile Card */}
              <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <Avatar className="h-20 w-20 mr-4">
                    <AvatarImage src="/avatar.jpg" alt="Pancrace Kanhonou" />
                    <AvatarFallback>PK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Pancrace Kanhonou</h3>
                    <p className="text-brand-muted">Fondateur & Développeur Senior</p>
                    <p className="text-brand-muted">Luminaïa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-primary/10 rounded-full mr-4">
                    <Mail size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Email</h3>
                    <a href="mailto:contact@example.com" className="text-brand-muted hover:text-brand-primary">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brand-primary/10 rounded-full mr-4">
                    <Phone size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Téléphone</h3>
                    <a href="tel:+33600000000" className="text-brand-muted hover:text-brand-primary">
                      +33 6 00 00 00 00
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-brand-primary/10 rounded-full mr-4">
                    <MapPin size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Localisation</h3>
                    <p className="text-brand-muted">Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-brand-dark rounded-lg text-white">
                <h3 className="text-xl font-bold mb-3">Restons connectés</h3>
                <p className="text-white/80 mb-4">
                  Retrouvez-moi également sur les différents réseaux sociaux pour suivre mes projets et actualités.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-brand-dark mb-2">Disponibilité</h3>
                <p className="text-brand-muted mb-3">
                  Je suis actuellement disponible pour :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                    <span>Projets Flutter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                    <span>Conseils techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2"></span>
                    <span>Partenariats startups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 mt-2"></span>
                    <span>Opportunités d'emploi (à discuter)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-gray-200 w-full h-80 rounded-lg flex items-center justify-center">
            {/* Placeholder for actual map */}
            <div className="text-center">
              <MapPin size={32} className="text-brand-primary mx-auto mb-2" />
              <p className="font-bold text-brand-dark">Paris, France</p>
              <p className="text-brand-muted text-sm">Carte interactive</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
