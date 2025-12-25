import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Copyright, AlertTriangle, RefreshCw } from 'lucide-react';

const Terms = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    }, []);

    useEffect(() => {
        if (darkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="container mx-auto px-6 py-32 max-w-4xl animate-fade-in-up">
                <div className="text-center mb-12">
                    <FileText className="w-16 h-16 mx-auto text-sky-600 mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Conditions d'Utilisation
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">En vigueur depuis le 1er Janvier 2025</p>
                </div>

                <div className="grid gap-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <Copyright className="w-5 h-5 text-sky-500 mr-2" />
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Contenu</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Ce site est un portfolio personnel présentant mes projets et compétences.
                                Tous les projets et visuels présentés restent la propriété de leurs auteurs respectifs.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center mb-3">
                                <AlertTriangle className="w-5 h-5 text-sky-500 mr-2" />
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Responsabilité</h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                L'auteur ne peut être tenu responsable de l'utilisation des informations fournies sur ce site.
                                Le contenu est fourni à titre indicatif uniquement.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <div className="flex items-center mb-4">
                            <RefreshCw className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Disponibilité</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Le site web peut être mis à jour ou modifié à tout moment sans préavis.
                            Nous nous efforçons de maintenir un accès stable mais ne garantissons pas une disponibilité ininterrompue.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;