import React from 'react';
import { MapPin, Globe, Linkedin, Github, Mail, Phone } from 'lucide-react';

interface Skill {
    name: string;
    level: number;
    icon?: string;
}

const AboutSection: React.FC = () => {

    const skills: {
        frontend: Skill[];
        backend: Skill[];
        database: Skill[];
        other: Skill[];
    } = {
        frontend: [
            { name: 'HTML / CSS', level: 95, icon: 'devicon-html5-plain colored' },
            { name: 'JavaScript', level: 80, icon: 'devicon-javascript-plain colored' },
            { name: 'Bootstrap', level: 80, icon: 'devicon-bootstrap-plain colored' },
            { name: 'React', level: 65, icon: 'devicon-react-original colored' },
            { name: 'TailwindCSS', level: 70, icon: 'devicon-tailwindcss-plain colored' },
        ],
        backend: [
            { name: 'Java SE / EE', level: 90, icon: 'devicon-java-plain colored' },
            { name: 'Spring Boot', level: 70, icon: 'devicon-spring-plain colored' },
            { name: 'PHP', level: 80, icon: 'devicon-php-plain colored' },
            { name: 'Node.js', level: 65, icon: 'devicon-nodejs-plain colored' },
            { name: 'Python / Django', level: 80, icon: 'devicon-python-plain colored' },
            { name: 'C / C++ / C#', level: 80, icon: 'devicon-cplusplus-plain colored' },
        ],
        database: [
            { name: 'MySQL / PostgreSQL / SQL', level: 90, icon: 'devicon-postgresql-plain colored' },
        ],
        other: [
            { name: 'Git', level: 85, icon: 'devicon-git-plain colored' },
            { name: 'Docker', level: 60, icon: 'devicon-docker-plain colored' },
            { name: 'Kubernetes', level: 70, icon: 'devicon-kubernetes-plain colored' },
            { name: 'GDScript (Godot)', level: 70, icon: 'devicon-godot-plain colored' },
            { name: 'SPARQL / Wikidata', level: 60, icon: 'devicon-graphql-plain colored' },
        ],
    };

    const tools = [
        { name: 'GitHub', icon: 'devicon-github-original' },
        { name: 'GitLab', icon: 'devicon-gitlab-plain' },
        { name: 'IntelliJ', icon: 'devicon-intellij-plain' },
        { name: 'WebStorm', icon: 'devicon-webstorm-plain' },
        { name: 'PyCharm', icon: 'devicon-pycharm-plain' },
        { name: 'VS Code', icon: 'devicon-vscode-plain' },
        { name: 'Android Studio', icon: 'devicon-androidstudio-plain' },
        { name: 'Postman', icon: 'devicon-postman-plain' },
        { name: 'Figma', icon: 'devicon-figma-plain' },
        { name: 'Unity', icon: 'devicon-unity-plain' },
        { name: 'Jira', icon: 'devicon-jira-plain' },
    ];

    const softSkills = [
        { label: 'Communication claire', icon: '💬' },
        { label: 'Travail en équipe', icon: '🤝' },
        { label: 'Rigueur & sens du détail', icon: '🎯' },
        { label: 'Autonomie', icon: '🚀' },
        { label: 'Adaptabilité', icon: '🔄' },
        { label: 'Résolution de problèmes', icon: '🧠' },
        { label: 'Organisation & gestion du temps', icon: '⏱️' },
    ];

    const renderSkillSection = (title: string, skills: Skill[]) => (
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                {title}
            </h3>

            <div className="space-y-5">
                {skills.map((skill, index) => (
                    <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                                {skill.icon && <i className={`${skill.icon} text-xl`} />}
                                <span>{skill.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-gray-500">
                                {skill.level}%
                            </span>
                        </div>

                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-sky-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                    width: `${skill.level}%`,
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">

                {/* INTRO */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        À propos de moi
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                        Étudiant en informatique passionné par le développement web et logiciel.
                        J’aime concevoir des applications propres, performantes et bien pensées.
                        <br />
                        <span className="font-semibold text-blue-700 dark:text-blue-400">
                            Recherche d’un stage de 16 semaines à partir de janvier 2026.
                        </span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://linkedin.com" className="flex items-center gap-2 text-blue-600 hover:underline">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a href="https://github.com/mjadid91" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="mailto:med.jadid@hotmail.com" className="flex items-center gap-2 text-green-600 hover:underline">
                            <Mail size={18} /> Email
                        </a>
                        <a href="tel:+33613650602" className="flex items-center gap-2 text-purple-600 hover:underline">
                            <Phone size={18} /> Téléphone
                        </a>
                    </div>
                </div>

                {/* SKILLS */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                        {renderSkillSection('💻 Frontend', skills.frontend)}
                        {renderSkillSection('🧠 Backend', skills.backend)}

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                            🤝 Soft skills
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {softSkills.map(skill => (
                                <div
                                    key={skill.label}
                                    className="group relative overflow-hidden rounded-xl p-4 text-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>

                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {skill.label}
                                    </span>
                                    {/* Glow subtil */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        {renderSkillSection('🗄️ Base de données', skills.database)}
                        {renderSkillSection('⚙️ Autres compétences', skills.other)}

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                            🧰 Outils
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                            {tools.map(tool => (
                                <div
                                    key={tool.name}
                                    className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-lg transition"
                                >
                                    <i className={`${tool.icon} text-4xl group-hover:scale-110 transition-transform`} />
                                    <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
