import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'My Pizza',
            context: 'Projet BUT 2',
            description: 'Application de commande de pizzas avec interface intuitive et gestion complète des commandes et des stocks.',
            image: 'img/projet1.jpg',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java Swing'],
            demoLink: '#',
            codeLink: 'https://github.com/mjadid91/MaPizza'
        },
        {
            id: 2,
            title: 'Démocratie Participative',
            context: 'Projet BUT 2',
            description: 'Plateforme sécurisée de vote en ligne permettant aux citoyens de participer aux décisions publiques.',
            image: 'img/projet2.jpg',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Java Swing'],
            demoLink: '#',
            codeLink: 'https://github.com/mjadid91/Democratie-Participative-App'
        },
        {
            id: 3,
            title: 'Calculis : La grande Évasion',
            context: 'Projet BUT 2',
            description: 'Jeu 2D avec aventures, ennemis et énigmes mathématiques amusantes.',
            image: 'img/projet3.jpg',
            technologies: ['Godot', 'GDScript', 'Game Design'],
            demoLink: '#',
            codeLink: 'https://github.com/mjadid91/Calculis-Escape-Game'
        },
        {
            id: 4,
            title: 'AppContact - Gestion de contacts',
            context: 'Stage S4',
            description: 'Application de gestion de contacts avec interface moderne et fonctionnalités CRUD, développée lors de mon stage.',
            image: 'img/projet4.jpg',
            technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'WinDev (HFSQL)'],
            demoLink: '#',
            codeLink: 'https://github.com/mjadid91/AppContact'
        },
        {
            id: 5,
            title: 'AppSeniors - CRM interne',
            context: 'Stage S4',
            description: 'Développement d’une application CRM interne sécurisée, avec interface web moderne et gestion complète des données.',
            image: 'img/projet5.jpg',
            technologies: ['React', 'Node.js', 'Vite.js', 'PostgreSQL', 'Tailwind CSS', 'Supabase'],
            demoLink: '',
            codeLink: ''
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        🚀 Mes projets vedettes
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Découvrez une sélection de mes réalisations, alliant créativité et technologies modernes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[21rem] object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                Demo
                                            </a>
                                        )}
                                        {project.codeLink && (
                                            <a
                                                href={project.codeLink}
                                                className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition-colors"
                                            >
                                                <Github className="w-4 h-4 mr-1" />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {project.context}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                        > {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Envie de voir plus de projets ?
                    </p>
                    <a
                        href="https://github.com/mjadid91"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        Voir tous mes projets sur GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
