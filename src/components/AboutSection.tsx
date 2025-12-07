import React from 'react';
import { MapPin, Globe } from 'lucide-react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
    const skills = {
        frontend: [
            { name: 'HTML / CSS', level: 95 },
            { name: 'JavaScript', level: 80 },
            { name: 'Bootstrap', level: 75 },
            { name: 'React', level: 65 },
            { name: 'TailwindCSS', level: 80 },
        ],
        backend: [
            { name: 'Java SE / Swing', level: 90 },
            { name: 'PHP', level: 80 },
            { name: 'Node.js', level: 65 },
            { name: 'Python · Django', level: 70 },
            { name: 'C / C++ / C#', level: 70 },
        ],
        database: [
            { name: 'SQL · MySQL · PostgreSQL', level: 90 },
        ],
        other: [
            { name: 'Git', level: 85 },
            { name: 'Docker · Kubernetes', level: 60 },
            { name: 'GDScript', level: 70 },
            { name: 'Sparql · Wikidata', level: 60 },
        ]
    };

    const tools = [
        'GitLab','GitHub','IntelliJ','DBeaver','WebStorm','PyCharm',
        'Visual Studio Code','Android Studio','Godot','Visual Paradigm',
        'Figma','Windev','Postman','Supabase','Unity','Jira', 'GraphDB',
    ];

    const softSkills = [
        'Communication','Adaptabilité','Ponctualité','Rigueur',
        'Résolution de problèmes','Travail en équipe','Environnement professionnel'
    ];

    const education = [
        {
            year: '2021 – 2026',
            title: 'BUT Informatique',
            institution: 'IUT d\'Orsay',
            description: 'Formation complète en développement logiciel et technologies web',
            website: 'http://www.iut-orsay.universite-paris-saclay.fr/',
            address: '13 Avenue des Sciences, 91190 Gif-sur-Yvette'
        },
        {
            year: '2019 – 2021',
            title: 'STI2D',
            institution: 'Lycée de l\'Essouriau',
            description: 'Sciences et Technologies de l\'Industrie et du Développement Durable',
            website: 'https://lyceedelessouriau.fr/',
            address: 'Avenue de Dordogne, 91940 Les Ulis'
        },
        {
            year: '2018 – 2019',
            title: 'Formation générale',
            institution: 'Lycée de la Vallée de Chevreuse',
            description: 'Formation générale - Option Physique Chimie en Labo',
            website: 'https://lyc-chevreuse-gif.ac-versailles.fr/',
            address: '8 Rue de Madrid, 91190 Gif-sur-Yvette'
        }
    ];

    const renderSkillSection = (title: string, skillArray: {name: string, level: number}[]) => (
        <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
            <div className="space-y-4">
                {skillArray.map((skill, index) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1 text-gray-700 dark:text-gray-300 font-medium">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-sky-500 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        À propos de moi
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Je suis un étudiant passionné par la création de sites et d'applications web.
                        Spécialisé en front-end et back-end, j'ai une bonne maîtrise des technologies modernes.
                        <br />
                        <span className="font-semibold text-blue-800 dark:text-blue-300">
              Actuellement, je suis à la recherche d'un stage dans le développement d'une durée de 16 semaines à partir du 19 janvier 2026 pour valider mon BUT.
            </span>
                    </p>

                    {/* Contact */}
                    <div className="flex justify-center space-x-2 mb-12">
                        <a href="https://linkedin.com" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                            <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                        </a>
                        <a href="https://github.com/mjadid91/" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Github className="w-5 h-5 mr-2" /> GitHub
                        </a>
                        <a href="mailto:med.jadid@hotmail.com" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                            <Mail className="w-5 h-5 mr-2" /> Email
                        </a>
                        <a href="tel:+33613650602" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                            <Phone className="w-5 h-5 mr-2" /> Téléphone
                        </a>
                    </div>
                </div>

                {/* Skills + Tools */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Colonne gauche : Frontend + Backend */}
                    <div>
                        {renderSkillSection('💻 Frontend', skills.frontend)}
                        {renderSkillSection('💻 Backend', skills.backend)}
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🧠 Compétences générales</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {softSkills.map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3 text-center text-gray-700 dark:text-gray-300 border border-blue-100 dark:border-blue-800"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Colonne droite : Database + Autres + Outils + Soft Skills */}
                    <div>
                        {renderSkillSection('🗄️ Base de données', skills.database)}
                        {renderSkillSection('⚙️ Autres compétences', skills.other)}

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🧰 Outils</h3>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {tools.map((tool) => (
                                <div
                                    key={tool}
                                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-12 text-center">🎓 Parcours scolaire</h3>
                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                        {education.map((item, index) => (
                            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                                        <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{item.year}</div>
                                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                                        {item.institution && (
                                            <div className="flex items-center text-gray-600 dark:text-gray-400 font-medium mb-1">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {item.address ? (
                                                    <a
                                                        href={`https://maps.google.com/?q=${encodeURIComponent(item.address)}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline hover:text-blue-500 dark:hover:text-blue-300"
                                                    >
                                                        {item.address}
                                                    </a>
                                                ) : (
                                                    item.institution
                                                )}
                                            </div>
                                        )}
                                        {item.website && (
                                            <div className="flex items-center text-blue-500 dark:text-blue-300 mb-3">
                                                <Globe className="w-4 h-4 mr-1" />
                                                <a
                                                    href={item.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline hover:text-blue-700 dark:hover:text-blue-100"
                                                >
                                                    {item.website}
                                                </a>
                                            </div>
                                        )}
                                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
