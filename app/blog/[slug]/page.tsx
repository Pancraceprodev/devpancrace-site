'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Tag, Share2, BookmarkPlus, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from '../../components/ui/button';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
    const searchParams = useSearchParams();
    const [post, setPost] = useState<any>(null);
    const slug = searchParams.get('slug') || '13-0';
    

    useEffect(() => {
        // In a real app, this would fetch from an API
        const currentPost = blogPosts.find(p => p.slug === `/${slug}`);
        setPost(currentPost);

        // Scroll to top when post changes
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <main className="pt-20 min-h-screen">
                <div className="container mx-auto py-20 text-center">
                    <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
                    <Button asChild>
                        <Link href="/blog">Retour au blog</Link>
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="bg-header-gradient py-12 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-brand-primary mb-4 hover:underline">
                            <ArrowLeft size={18} className="mr-2" />
                            Retour aux articles
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center space-x-1 text-brand-muted">
                                <Calendar size={16} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-brand-muted">
                                <Clock size={16} />
                                <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-md">
                                    {post.category}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Avatar className="h-10 w-10 mr-3">
                                    <AvatarImage src="/avatar.jpg" alt="Pancrace Kanhonou" />
                                    <AvatarFallback>PK</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">Pancrace Kanhonou</div>
                                    <div className="text-sm text-brand-muted">Fondateur, Luminaïa</div>
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <Button variant="ghost" size="icon">
                                    <Share2 size={20} />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <BookmarkPlus size={20} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="w-full lg:w-2/3">
                            <article className="prose prose-lg max-w-none">
                                <div className="aspect-[16/9] bg-gray-100 mb-8 rounded-lg overflow-hidden">
                                    {/* Placeholder for article featured image */}
                                    <div className="w-full h-full bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 flex-center">
                                        <p className="text-brand-muted">Image de l'article</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="lead text-xl">{post.excerpt}</p>

                                    <h2>Introduction</h2>
                                    <p>
                                        Dans cet article, nous allons explorer en détail les concepts avancés et les meilleures pratiques liées à ce sujet passionnant.
                                        Comme fondateur de Luminaïa, j'ai eu l'opportunité d'expérimenter avec ces technologies en condition réelle.
                                    </p>

                                    <h2>Les points clés à comprendre</h2>
                                    <p>
                                        Il existe plusieurs aspects essentiels à considérer lorsque l'on travaille avec ces technologies :
                                    </p>
                                    <ul>
                                        <li>La mise en œuvre d'une architecture robuste</li>
                                        <li>L'optimisation des performances</li>
                                        <li>L'équilibre entre fonctionnalités et expérience utilisateur</li>
                                        <li>L'évolutivité des solutions proposées</li>
                                    </ul>

                                    <h2>Application pratique</h2>
                                    <p>
                                        Chez Luminaïa, nous avons appliqué ces principes dans le développement de nos applications Flutter,
                                        en intégrant des modèles d'IA pour l'analyse de données. Les résultats ont été significatifs en termes
                                        d'amélioration de l'expérience utilisateur et d'efficacité opérationnelle.
                                    </p>

                                    <blockquote>
                                        L'innovation ne consiste pas seulement à créer de nouvelles technologies, mais aussi à les appliquer
                                        judicieusement pour résoudre des problèmes concrets et apporter une valeur réelle.
                                    </blockquote>

                                    <h2>Conclusion</h2>
                                    <p>
                                        En conclusion, l'approche que nous avons développée chez Luminaïa démontre qu'avec une vision claire
                                        et une expertise technique solide, il est possible de transformer des idées innovantes en solutions concrètes
                                        qui apportent une valeur ajoutée significative.
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                                    {post.tags.map((tag: string) => (
                                        <Link
                                            key={tag}
                                            href={`/blog?tag=${tag.toLowerCase()}`}
                                            className="flex items-center px-3 py-1.5 bg-gray-100 rounded-full hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                                        >
                                            <Tag size={12} className="mr-1" />
                                            {tag}
                                        </Link>
                                    ))}
                                </div>

                                {/* Author Bio */}
                                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                                    <div className="flex items-start">
                                        <Avatar className="h-16 w-16 mr-4">
                                            <AvatarImage src="/avatar.jpg" alt="Pancrace Kanhonou" />
                                            <AvatarFallback>PK</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="text-xl font-bold">Pancrace Kanhonou</h3>
                                            <p className="text-brand-muted mb-2">Fondateur & Développeur Senior chez Luminaïa</p>
                                            <p className="text-sm">
                                                Passionné par le développement Flutter et l'intelligence artificielle,
                                                je partage ici mes réflexions sur les technologies émergentes et leur impact.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Post Actions */}
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex items-center space-x-2">
                                    <Button variant="outline" className="flex items-center space-x-1">
                                        <ThumbsUp size={16} />
                                        <span>Utile</span>
                                    </Button>
                                    <Button variant="outline" className="flex items-center space-x-1">
                                        <Share2 size={16} />
                                        <span>Partager</span>
                                    </Button>
                                </div>

                                <Button asChild variant="ghost">
                                    <Link href="/blog" className="flex items-center space-x-1">
                                        <ArrowLeft size={16} />
                                        <span>Retour au blog</span>
                                    </Link>
                                </Button>
                            </div>

                            {/* Related Articles */}
                            <div className="mt-12 pt-8 border-t">
                                <h3 className="text-2xl font-bold text-brand-dark mb-6">Articles similaires</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {blogPosts.slice(0, 2).map((relatedPost) => (
                                        relatedPost.slug !== post.slug && (
                                            <div key={relatedPost.id} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                                <div className="p-4">
                                                    <div className="text-xs text-brand-primary font-medium mb-2">{relatedPost.category}</div>
                                                    <h4 className="text-lg font-bold text-brand-dark mb-2 line-clamp-2">
                                                        <Link href={`/blog${relatedPost.slug}`} className="hover:text-brand-primary transition-colors">
                                                            {relatedPost.title}
                                                        </Link>
                                                    </h4>
                                                    <p className="text-brand-muted text-sm line-clamp-2">{relatedPost.excerpt}</p>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                {/* Table of Contents */}
                                <div className="bg-white rounded-lg border border-gray-200 p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-4">Dans cet article</h3>
                                    <ul className="space-y-2 text-brand-muted">
                                        <li>
                                            <a href="#introduction" className="hover:text-brand-primary transition-colors">Introduction</a>
                                        </li>
                                        <li>
                                            <a href="#points-cles" className="hover:text-brand-primary transition-colors">Les points clés à comprendre</a>
                                        </li>
                                        <li>
                                            <a href="#application" className="hover:text-brand-primary transition-colors">Application pratique</a>
                                        </li>
                                        <li>
                                            <a href="#conclusion" className="hover:text-brand-primary transition-colors">Conclusion</a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Newsletter */}
                                <div className="bg-brand-primary/5 rounded-lg border border-brand-primary/20 p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-3">Newsletter</h3>
                                    <p className="text-sm text-brand-muted mb-4">
                                        Recevez nos derniers articles et insights sur Flutter et l'IA directement dans votre boîte mail.
                                    </p>
                                    <div className="space-y-3">
                                        <input type="email" placeholder="Votre email" className="w-full px-3 py-2 border border-gray-200 rounded-md" />
                                        <button className="w-full py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary/90 transition-colors">
                                            S'abonner
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPost;
