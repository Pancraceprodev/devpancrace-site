'use client'
import Image from 'next/image';
import { Code, Database, Server, Layout, ExternalLink, Github, Play, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const Portfolio = () => {
    //const [activeTab, setActiveTab] = useState('startup');

    const technologies = [
        { name: "React.js", color: "bg-blue-500" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "MongoDB", color: "bg-green-700" },
        { name: "AWS", color: "bg-yellow-500" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "Docker", color: "bg-blue-400" },
        { name: "Tailwind CSS", color: "bg-cyan-500" },
        { name: "Redux", color: "bg-purple-500" },
    ];

    const features = [
        { title: "Feature 1", description: "Description de la fonctionnalité 1 et de ce qu'elle apporte aux utilisateurs." },
        { title: "Feature 2", description: "Description de la fonctionnalité 2 et de ce qu'elle apporte aux utilisateurs." },
        { title: "Feature 3", description: "Description de la fonctionnalité 3 et de ce qu'elle apporte aux utilisateurs." },
        { title: "Feature 4", description: "Description de la fonctionnalité 4 et de ce qu'elle apporte aux utilisateurs." },
    ];

    const challenges = [
        { title: "Challenge 1", description: "Description du défi technique et comment il a été résolu." },
        { title: "Challenge 2", description: "Description du défi technique et comment il a été résolu." },
        { title: "Challenge 3", description: "Description du défi technique et comment il a été résolu." },
    ];

    const otherProjects = [
        {
            title: "Plateforme E-Commerce",
            description: "Site e-commerce complet avec panier, paiement et gestion des stocks",
            image: "/placeholder.svg",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#"
        },
        {
            title: "Application Mobile Santé",
            description: "Application de suivi de santé avec visualisation de données",
            image: "/placeholder.svg",
            tags: ["React Native", "Firebase", "Charts.js"],
            link: "#"
        },
        {
            title: "Dashboard Analytics",
            description: "Tableau de bord pour visualiser les données commerciales",
            image: "/placeholder.svg",
            tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
            link: "#"
        }
    ];

    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="bg-header-gradient py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
                            Portfolio
                        </h1>
                        <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-brand-muted">
                            Découvrez mes projets, de ma startup à mes réalisations en tant que développeur senior.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Filter */}
            <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
                <div className="container mx-auto">
                    <Tabs defaultValue="startup" className="w-full">
                        <div className="flex justify-center mb-8">
                            <TabsList className="bg-gray-100 p-1">
                                <TabsTrigger value="startup" className="data-[state=active]:bg-white data-[state=active]:text-brand-primary">
                                    Ma Startup
                                </TabsTrigger>
                                <TabsTrigger value="projects" className="data-[state=active]:bg-white data-[state=active]:text-brand-primary">
                                    Autres Projets
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        {/* Startup Project */}
                        <TabsContent value="startup" className="mt-6 animate-fade-in">
                            <div className="max-w-5xl mx-auto">
                                <div className="mb-16">
                                    <div className="aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden mb-8 shadow-md">
                                        <div className="flex-center w-full h-full bg-brand-primary/5">
                                            {/* Placeholder for actual startup screenshot or mockup */}
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold text-brand-primary mb-2">Nom de votre Startup</h2>
                                                <p className="text-brand-muted">Capture d'écran ou mockup ici</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-bold text-brand-dark mb-6">Nom de votre Startup</h2>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {technologies.map((tech) => (
                                            <span
                                                key={tech.name}
                                                className={`px-3 py-1 rounded-full text-xs text-white font-medium ${tech.color}`}
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="prose max-w-none text-lg text-brand-muted">
                                        <p>
                                            Description détaillée de votre startup. Expliquez le problème que vous résolvez, votre approche unique et comment votre solution se distingue des alternatives existantes. Partagez votre vision et la mission de votre entreprise.
                                        </p>
                                        <p>
                                            Incluez des détails sur le marché cible, les utilisateurs et comment ils bénéficient de votre produit. Mentionnez également tout retour positif ou réussite notable que vous avez rencontrée jusqu'à présent.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-8">
                                        <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                                            <ExternalLink size={16} className="mr-2" />
                                            Visiter le site
                                        </Button>
                                        <Button variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark/5">
                                            <Play size={16} className="mr-2" />
                                            Voir la démo
                                        </Button>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-16">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                                        Fonctionnalités Principales
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        {features.map((feature, index) => (
                                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                                <h4 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h4>
                                                <p className="text-brand-muted">{feature.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technical Details */}
                                <div className="mb-16">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                                        Aspects Techniques
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
                                        <div className="flex items-start">
                                            <div className="p-2 bg-brand-primary/10 rounded mr-4">
                                                <Layout size={24} className="text-brand-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-brand-dark mb-2">Front-End</h4>
                                                <p className="text-brand-muted">
                                                    Architecture React avec TypeScript, Redux pour la gestion d'état et Tailwind CSS pour le design responsive. Application d'une approche component-driven avec tests unitaires Jest.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="p-2 bg-brand-primary/10 rounded mr-4">
                                                <Server size={24} className="text-brand-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-brand-dark mb-2">Back-End</h4>
                                                <p className="text-brand-muted">
                                                    API RESTful avec Node.js et Express. Architecture en microservices pour une meilleure scalabilité. Utilisation de JWT pour l'authentification et les autorisations.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="p-2 bg-brand-primary/10 rounded mr-4">
                                                <Database size={24} className="text-brand-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-brand-dark mb-2">Base de Données</h4>
                                                <p className="text-brand-muted">
                                                    MongoDB pour le stockage principal des données, avec Redis pour la mise en cache et l'amélioration des performances. Modèles de données optimisés pour les requêtes fréquentes.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="p-2 bg-brand-primary/10 rounded mr-4">
                                                <Code size={24} className="text-brand-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-brand-dark mb-2">DevOps</h4>
                                                <p className="text-brand-muted">
                                                    Infrastructure sur AWS avec containerisation Docker et orchestration Kubernetes. CI/CD avec GitHub Actions pour des déploiements automatisés et sécurisés.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div className="mb-16">
                                    <h3 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                                        Défis Techniques Résolus
                                    </h3>

                                    <div className="space-y-6 mt-8">
                                        {challenges.map((challenge, index) => (
                                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                                <h4 className="text-xl font-bold text-brand-dark mb-2">{challenge.title}</h4>
                                                <p className="text-brand-muted">{challenge.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Results & Future */}
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-6 section-title-line">
                                        Résultats & Perspectives
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                            <h4 className="text-xl font-bold text-brand-dark mb-4">Résultats Actuels</h4>

                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-brand-muted">Utilisateurs actifs</span>
                                                    <span className="font-bold">500+</span>
                                                </div>
                                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                                    <div className="bg-brand-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-brand-muted">Satisfaction client</span>
                                                    <span className="font-bold">92%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                                    <div className="bg-brand-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-brand-muted">Taux de rétention</span>
                                                    <span className="font-bold">78%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                                    <div className="bg-brand-primary h-2 rounded-full" style={{ width: '78%' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                            <h4 className="text-xl font-bold text-brand-dark mb-4">Plans Futurs</h4>

                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                                                    <span className="text-brand-muted">Intégration d'une fonctionnalité d'intelligence artificielle pour personnaliser l'expérience utilisateur</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                                                    <span className="text-brand-muted">Expansion sur de nouveaux marchés internationaux et traduction de la plateforme</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                                                    <span className="text-brand-muted">Développement d'applications mobiles natives pour iOS et Android</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 mt-2"></span>
                                                    <span className="text-brand-muted">Établissement de partenariats stratégiques pour élargir l'offre produit</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Other Projects */}
                        <TabsContent value="projects" className="animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {otherProjects.map((project) => (
                                    <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                        <div className="aspect-[16/9] bg-gray-100">
                                            {/* Project image placeholder */}
                                            <div className="w-full h-full flex-center">
                                                <Image src={project.image} alt={project.title} className="w-12 h-12 opacity-50" />
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-brand-dark mb-2">{project.title}</h3>
                                            <p className="text-brand-muted mb-4">{project.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-md">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <a
                                                    href={project.link}
                                                    className="text-brand-dark hover:text-brand-primary flex items-center transition-colors"
                                                >
                                                    <span className="mr-1">Voir détails</span>
                                                    <ArrowRight size={16} />
                                                </a>

                                                <div className="flex space-x-2">
                                                    <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors">
                                                        <Github size={18} />
                                                    </a>
                                                    <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors">
                                                        <ExternalLink size={18} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <p className="text-brand-muted mb-6">
                                    Pour d'autres projets et contributions, consultez mon profil GitHub.
                                </p>
                                <Button asChild variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark/5">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Github size={18} />
                                        <span>Voir mon GitHub</span>
                                    </a>
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;
