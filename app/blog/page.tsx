'use client'
import { useState } from 'react';
import Link from 'next/link'
import { Search, Calendar, Clock, Tag, PlusCircle } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { blogPosts } from '../../data/blogPosts';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter blog posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  // Get all tags and count occurrences
  const tagCounts = blogPosts.reduce<Record<string, number>>((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-header-gradient py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Blog
            </h1>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-brand-muted">
              Insights sur Flutter, l'IA et le développement mobile par Luminaïa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Search and Create Button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="relative flex-grow max-w-md w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    type="text" 
                    placeholder="Rechercher un article..." 
                    className="pl-10 border-gray-200 w-full rounded-md focus-visible:ring-brand-primary" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Button asChild className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                  <Link href="/blog/new" className="flex items-center gap-2">
                    <PlusCircle size={16} />
                    <span>Nouvel Article</span>
                  </Link>
                </Button>
              </div>
              
              {/* Blog Posts */}
              <div className="space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <article key={post.id} className="border-b border-gray-100 pb-8 last:border-b-0">
                      <Link 
                        href={`/blog${post.slug}`} 
                        className="block transition-transform hover:translate-x-1"
                      >
                        <div className="mb-3">
                          <span className="inline-block px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-md">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-brand-dark mb-3 hover:text-brand-primary transition-colors">
                          {post.title}
                        </h2>
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
                        <p className="text-brand-muted mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-16">
                    <p className="text-xl text-brand-muted">Aucun article ne correspond à votre recherche.</p>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-1">
                    <a href="#" className="px-4 py-2 border border-gray-200 rounded-md text-brand-muted hover:bg-gray-50">Précédent</a>
                    <a href="#" className="px-4 py-2 border border-gray-200 rounded-md bg-brand-primary text-white font-medium">1</a>
                    <a href="#" className="px-4 py-2 border border-gray-200 rounded-md text-brand-muted hover:bg-gray-50">2</a>
                    <a href="#" className="px-4 py-2 border border-gray-200 rounded-md text-brand-muted hover:bg-gray-50">3</a>
                    <a href="#" className="px-4 py-2 border border-gray-200 rounded-md text-brand-muted hover:bg-gray-50">Suivant</a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src="/avatar.jpg" alt="Pancrace Kanhonou" />
                      <AvatarFallback>PK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold text-brand-dark">Pancrace Kanhonou</h3>
                      <p className="text-brand-muted">Fondateur, Luminaïa</p>
                      <p className="text-brand-muted text-sm">+33 6 00 00 00 00</p>
                    </div>
                  </div>
                  <p className="text-sm text-brand-muted mb-4">
                    Expert en Flutter et développement d'applications mobiles intégrant l'intelligence artificielle.
                  </p>
                </div>
                
                {/* Categories */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Catégories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <a 
                          href={`#${category.toLowerCase()}`} 
                          className="flex items-center justify-between hover:text-brand-primary transition-colors"
                        >
                          <span>{category}</span>
                          <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-md">
                            {blogPosts.filter(post => post.category === category).length}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(tagCounts).map(([tag, count]) => (
                      <a 
                        key={tag} 
                        href={`#${tag.toLowerCase()}`}
                        className="flex items-center px-3 py-1.5 bg-gray-100 rounded-full hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
                      >
                        <Tag size={12} className="mr-1" />
                        <span>{tag}</span>
                        <span className="ml-1 text-xs text-gray-500">({count})</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Featured Post */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-4">Article à la Une</h3>
                  <div className="bg-gradient-to-br from-[#9b87f5]/10 to-[#1eaedb]/20 aspect-[16/9] rounded-md mb-3"></div>
                  <h4 className="font-bold text-brand-dark hover:text-brand-primary transition-colors">
                    <Link href="/blog/architecture-flutter">Comment Luminaïa révolutionne le développement mobile avec Flutter et l'IA</Link>
                  </h4>
                  <p className="text-sm text-brand-muted mt-2">
                    Notre approche unique pour intégrer l'IA dans les applications Flutter.
                  </p>
                </div>
                
                {/* Newsletter */}
                <div className="bg-brand-primary/5 rounded-lg border border-brand-primary/20 p-6">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">Newsletter</h3>
                  <p className="text-sm text-brand-muted mb-4">
                    Recevez nos derniers articles et insights sur Flutter et l'IA directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <Input type="email" placeholder="Votre email" className="border-gray-200 w-full rounded-md" />
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

export default Blog;
