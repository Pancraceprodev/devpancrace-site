'use client'
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { ArrowLeft, Image, Link as LinkIcon, Bold, Italic, List, ListOrdered, Quote, Code } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { blogPosts } from '@/data/blogPosts';

const NewBlogPost = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulating submission
    setTimeout(() => {
      // In a real app, this would send data to an API
      const newPost = {
        id: blogPosts.length + 1,
        title: formState.title,
        excerpt: formState.excerpt,
        date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        readTime: "5 min", // This would be calculated in a real app
        category: formState.category,
        slug: `/blog/${formState.title.toLowerCase().replace(/\s+/g, '-')}`,
        tags: formState.tags.split(',').map(tag => tag.trim()),
      };
      
      console.log('New post created:', newPost);
      
      // Navigate back to blog listing
      router.push('/blog');
    }, 1500);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-header-gradient py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-brand-primary mb-4 hover:underline">
              <ArrowLeft size={18} className="mr-2" />
              Retour au blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Créer un nouvel article
            </h1>
            <p className="text-lg text-brand-muted">
              Partagez vos connaissances et expériences avec la communauté.
            </p>
          </div>
        </div>
      </section>

      {/* Editor */}
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Titre de l'article</Label>
                <Input
                  id="title"
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  placeholder="Entrez le titre de votre article"
                  className="text-xl py-6"
                  required
                />
              </div>
              
              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt">Résumé</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formState.excerpt}
                  onChange={handleChange}
                  placeholder="Écrivez un bref résumé de votre article"
                  className="resize-none"
                  rows={3}
                  required
                />
              </div>
              
              {/* Featured Image */}
              <div className="space-y-2">
                <Label>Image principale</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-brand-primary transition-colors">
                  <Image size={32} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-brand-muted">Cliquez pour télécharger une image</p>
                  <p className="text-xs text-gray-400">PNG, JPG, GIF jusqu'à 5MB</p>
                </div>
              </div>
              
              {/* Text Editor Toolbar */}
              <div className="border rounded-lg">
                <div className="flex flex-wrap gap-1 p-2 border-b">
                  <Button type="button" variant="ghost" size="icon">
                    <Bold size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <Italic size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <LinkIcon size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <List size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <ListOrdered size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <Quote size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <Code size={18} />
                  </Button>
                  <Button type="button" variant="ghost" size="icon">
                    <Image size={18} />
                  </Button>
                </div>
                
                {/* Content Editor */}
                <Textarea
                  id="content"
                  name="content"
                  value={formState.content}
                  onChange={handleChange}
                  placeholder="Écrivez le contenu de votre article ici..."
                  className="resize-none border-0 focus:ring-0"
                  rows={15}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <select 
                    id="category"
                    name="category"
                    value={formState.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md"
                    required
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="Development">Development</option>
                    <option value="Tech">Tech</option>
                    <option value="Intelligence Artificielle">Intelligence Artificielle</option>
                    <option value="Design">Design</option>
                    <option value="Entrepreneuriat">Entrepreneuriat</option>
                  </select>
                </div>
                
                {/* Tags */}
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formState.tags}
                    onChange={handleChange}
                    placeholder="ex: Flutter, IA, Mobile"
                    required
                  />
                </div>
              </div>
              
              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/blog')}
                >
                  Annuler
                </Button>
                <Button 
                  type="submit"
                  className="bg-brand-primary hover:bg-brand-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Publication en cours...
                    </>
                  ) : (
                    'Publier l\'article'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewBlogPost;
