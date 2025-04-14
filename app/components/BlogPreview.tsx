
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link  from 'next/link';
import { blogPosts } from '@/data/blogPosts';

const BlogPreview = () => {
  // Afficher seulement les 3 premiers articles
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Derniers Articles
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
            Mes réflexions sur le développement Flutter, l'entrepreneuriat et l'innovation technologique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/9] bg-gray-100 relative">
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-semibold uppercase tracking-wider py-1 px-2 rounded-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-brand-muted space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2 line-clamp-2 hover:text-brand-primary transition-colors">
                  <Link href={`/blog${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-brand-muted line-clamp-3 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog${post.slug}`}
                  className="flex items-center font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
                >
                  <span>Lire l'article</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 rounded-md">
            <Link href="/blog" className="flex items-center gap-2">
              <span>Voir tous les articles</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
