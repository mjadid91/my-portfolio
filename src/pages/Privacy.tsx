import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Eye, Lock, Mail } from 'lucide-react';

const Privacy = () => {
    const [darkMode, setDarkMode] = useState(false);
    const lastUpdated = new Date('2025-12-25T13:55:00').toLocaleString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

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
                    <ShieldCheck className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Politique de Confidentialité
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Dernière mise à jour : {lastUpdated} </p>
                </div>

                <div className="space-y-12">
                    <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                            <Eye className="w-6 h-6 text-blue-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Collecte des données</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Ce site portfolio est une vitrine personnelle et professionnelle.
                            Aucune donnée personnelle n'est collectée automatiquement lors de votre navigation.
                            Si vous me contactez via le formulaire ou par email, les informations fournies ne sont utilisées que pour vous répondre.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                            <Lock className="w-6 h-6 text-blue-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Cookies</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Ce site web n'utilise aucun cookie de tracking, de publicité ou d'analyse tierce.
                            Votre vie privée est respectée par défaut.
                        </p>
                    </section>

                    <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                            <Mail className="w-6 h-6 text-blue-500 mr-3" />
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Pour toute question relative à vos données ou pour exercer vos droits, vous pouvez me contacter directement :
                        </p>
                        <a href="mailto:med.jadid@hotmail.com" className="text-blue-600 hover:underline">med.jadid@hotmail.com</a>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;