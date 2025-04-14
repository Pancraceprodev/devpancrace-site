
import { Code, Database, Cloud, Layout, Cpu, Server, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const technicalSkills = [
    { name: "Front-End", icon: <Layout className="text-brand-primary" size={24} />, technologies: ["React/Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { name: "Back-End", icon: <Server className="text-brand-primary" size={24} />, technologies: ["Node.js", "Python", "Express", "Django"] },
    { name: "Base de données", icon: <Database className="text-brand-primary" size={24} />, technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
    { name: "DevOps", icon: <Cloud className="text-brand-primary" size={24} />, technologies: ["Docker", "Kubernetes", "CI/CD", "AWS/GCP"] },
  ];

  const softSkills = [
    { name: "Gestion de projet", icon: <Users className="text-brand-accent" size={24} /> },
    { name: "Résolution de problèmes", icon: <Cpu className="text-brand-accent" size={24} /> },
    { name: "Communication client", icon: <TrendingUp className="text-brand-accent" size={24} /> },
    { name: "Innovation produit", icon: <Code className="text-brand-accent" size={24} /> },
  ];

  const experiences = [
    {
      role: "Fondateur & CTO",
      company: "Nom de votre startup",
      period: "2022 - Présent",
      description: "Fondation et direction technique d'une startup innovante dans le secteur [précisez]. Développement du MVP et scaling de la solution.",
      achievements: [
        "Développement d'une architecture évolutive basée sur microservices",
        "Recrutement et management d'une équipe de 5 développeurs",
        "Acquisition de 500+ utilisateurs actifs dans les 6 premiers mois"
      ]
    },
    {
      role: "Lead Developer",
      company: "Entreprise Précédente",
      period: "2018 - 2022",
      description: "Direction technique des projets majeurs et mentoring des équipes junior dans une entreprise spécialisée en solutions web sur mesure.",
      achievements: [
        "Implémentation d'un framework interne qui a accéléré le développement de 40%",
        "Direction de 12+ projets clients avec un taux de satisfaction de 95%",
        "Mise en place de pratiques DevOps qui ont réduit le temps de déploiement de 60%"
      ]
    },
    {
      role: "Développeur Full-Stack",
      company: "Première Entreprise",
      period: "2015 - 2018",
      description: "Développement d'applications web complètes pour divers clients dans les secteurs de la santé, finance et e-commerce.",
      achievements: [
        "Développement d'une plateforme e-commerce avec 100k+ utilisateurs mensuels",
        "Intégration de systèmes de paiement sécurisés pour applications financières",
        "Optimisation des performances frontend réduisant le temps de chargement de 65%"
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-header-gradient py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              À Propos de Moi
            </h1>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-brand-muted">
              Développeur passionné et entrepreneur avec plus de 10 ans d'expérience dans la création de solutions numériques innovantes.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark section-title-line">Mon Parcours</h2>
                </div>
                <p className="text-lg text-brand-muted">
                  Après avoir obtenu mon diplôme en informatique, j'ai travaillé pendant plusieurs années comme développeur full-stack dans diverses entreprises, où j'ai acquis une solide expérience dans la création d'applications web et mobiles.
                </p>
                <p className="text-lg text-brand-muted">
                  Ma passion pour la résolution de problèmes techniques complexes et mon désir de créer des produits qui ont un impact réel m'ont conduit à fonder ma propre startup, où je combine mon expertise technique avec ma vision entrepreneuriale.
                </p>
                <p className="text-lg text-brand-muted">
                  Je suis constamment en train d'apprendre et d'expérimenter de nouvelles technologies, car je crois fermement que l'innovation continue est la clé du succès dans notre domaine en constante évolution.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">React.js</span>
                  <span className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">AWS</span>
                  <span className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">MongoDB</span>
                  <span className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">Docker</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="bg-brand-light rounded-lg p-8 border border-gray-200 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-accent/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Ma Philosophie</h3>
                    <p className="text-brand-muted">
                      "Je crois que la technologie doit être à la fois puissante et accessible. Mon objectif est de créer des solutions qui résolvent de vrais problèmes tout en offrant une expérience utilisateur exceptionnelle."
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Vision Entrepreneuriale</h3>
                    <p className="text-brand-muted">
                      "En tant qu'entrepreneur, je vise à développer des produits qui non seulement répondent aux besoins actuels du marché, mais anticipent également les tendances futures, créant ainsi une valeur durable."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Compétences Techniques
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-brand-muted">
              Mes années d'expérience m'ont permis de développer une expertise approfondie dans plusieurs domaines techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold text-brand-dark ml-3">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <li key={tech} className="flex items-center">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                      <span className="text-brand-muted">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill) => (
              <div key={skill.name} className="bg-white/50 rounded-lg p-6 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-brand-accent/10 rounded-full">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Parcours Professionnel
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.role} 
                className={`flex flex-col md:flex-row gap-8 ${
                  index < experiences.length - 1 ? "pb-12 border-b border-gray-200" : ""
                }`}
              >
                <div className="w-full md:w-1/3">
                  <div className="sticky top-24">
                    <h3 className="text-xl font-bold text-brand-dark">{exp.role}</h3>
                    <p className="text-brand-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-brand-muted mt-1">{exp.period}</p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-brand-muted mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-2 mt-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education, Certifications & Interests */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                Éducation
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-sm text-brand-muted">2010 - 2012</p>
                  <h3 className="text-lg font-bold text-brand-dark mt-1">Master en Informatique</h3>
                  <p className="text-brand-primary">Université de Technologie</p>
                  <p className="mt-2 text-sm">Spécialisation en développement logiciel et intelligence artificielle.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-sm text-brand-muted">2007 - 2010</p>
                  <h3 className="text-lg font-bold text-brand-dark mt-1">Licence en Informatique</h3>
                  <p className="text-brand-primary">Université de Sciences</p>
                  <p className="mt-2 text-sm">Formation générale en informatique avec projets pratiques.</p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                Certifications
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="p-2 bg-brand-primary/10 rounded mr-4">
                    <Code size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">AWS Solutions Architect</h3>
                    <p className="text-sm text-brand-muted">Amazon Web Services, 2021</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="p-2 bg-brand-primary/10 rounded mr-4">
                    <Code size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Professional Scrum Master</h3>
                    <p className="text-sm text-brand-muted">Scrum.org, 2020</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="p-2 bg-brand-primary/10 rounded mr-4">
                    <Code size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">MongoDB Developer</h3>
                    <p className="text-sm text-brand-muted">MongoDB University, 2019</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                  <div className="p-2 bg-brand-primary/10 rounded mr-4">
                    <Code size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark">Kotlin Developer</h3>
                    <p className="text-sm text-brand-muted">JetBrains, 2018</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interests */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                Centres d'Intérêt
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                    <span><strong>Nouvelles technologies</strong> - Veille constante sur les innovations tech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                    <span><strong>Open source</strong> - Contribution à divers projets communautaires</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                    <span><strong>UX Design</strong> - Création d'interfaces centrées utilisateur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                    <span><strong>Randonnée</strong> - Exploration des sentiers de montagne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                    <span><strong>Photographie</strong> - Capture de paysages et architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
