'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À Propos', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-brand-dark font-bold text-xl"
                >
                    <span className="text-brand-primary font-mono text-2xl">&lt;</span>
                    <span className="font-sans">Pancrace Dev</span>
                    <span className="text-brand-primary font-mono text-2xl">/&gt;</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="hover-underline-animation text-brand-dark font-medium transition duration-200 hover:text-brand-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-brand-dark focus:outline-none"
                    aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute w-full bg-white shadow-lg py-4 px-4 z-50 animate-fade-in">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-brand-dark hover:text-brand-primary py-2 px-4 flex items-center justify-between hover:bg-gray-50 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span>{link.name}</span>
                                <ChevronRight size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
