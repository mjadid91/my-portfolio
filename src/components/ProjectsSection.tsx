import React from "react";
import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";

type Project = {
    id: number;
    title: string;
    context: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink?: string;
    codeLink?: string;
    featured?: boolean;
};

const ProjectsSection: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "AppSeniors",
            context: "Projet de stage — Application web complète",
            description:
                "Plateforme de mise en relation entre seniors, aidants et tuteurs : authentification, profils, demandes d’aide, réservations, paiements, évaluations et support.",
            image: "img/projets/optimized/appseniors.webp",
            technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL"],
            featured: true,
        },
        {
            id: 2,
            title: "Application de gestion interne",
            context: "Stage S4",
            description:
                "Application CRM interne sécurisée : interface moderne, gestion des clients et données, tableaux de bord, suivi des performances et accès sécurisé (React, Node.js, PostgreSQL, Supabase).",
            image: "img/projets/optimized/crm.webp",
            technologies: ["React", "Node.js", "Vite", "PostgreSQL", "Supabase"],
            featured: true,
        },
        {
            id: 3,
            title: "AppContact",
            context: "Stage S4",
            description:
                "Application de gestion de contacts avec interface moderne, opérations CRUD et organisation des données.",
            image: "img/projets/optimized/appcontact.webp",
            technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
            codeLink: "https://github.com/mjadid91/AppContact",
        },
        {
            id: 4,
            title: "WebStage",
            context: "Mini-projet BUT 3",
            description:
                "Application web de gestion d’offres de stage, candidatures étudiantes et suivi administratif.",
            image: "img/projets/optimized/webstage.webp",
            technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
            codeLink: "https://github.com/mjadid91/webstage-django",
        },
        {
            id: 5,
            title: "WebTravel",
            context: "Mini-projet BUT 3",
            description:
                "Application web de gestion de voyages, villes, étapes de parcours et panier de commande.",
            image: "img/projets/optimized/webtravel.webp",
            technologies: ["Django", "Python", "SQLite", "JavaScript"],
            codeLink: "https://github.com/mjadid91/webtravel-django",
        },
        {
            id: 6,
            title: "Calculis : La grande Évasion",
            context: "Projet BUT 2",
            description:
                "Jeu 2D développé sous Godot avec exploration, ennemis et énigmes mathématiques.",
            image: "img/projets/optimized/calculis.webp",
            technologies: ["Godot", "GDScript", "Game Design"],
            codeLink: "https://github.com/mjadid91/Calculis-Escape-Game",
        },
        {
            id: 7,
            title: "Démocratie Participative",
            context: "Projet BUT 2",
            description:
                "Plateforme de vote en ligne pensée pour permettre une participation citoyenne sécurisée.",
            image: "img/projets/optimized/democratie.webp",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java"],
            codeLink: "https://github.com/mjadid91/Democratie-Participative-App",
        },
        {
            id: 8,
            title: "My Pizza",
            context: "Projet BUT 2",
            description:
                "Application de commande de pizzas avec gestion des commandes, produits et stocks.",
            image: "img/projets/optimized/pizza.webp",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java"],
            codeLink: "https://github.com/mjadid91/MaPizza",
        },
        {
            id: 9,
            title: "Roguelike 3D",
            context: "Grand projet BUT 3",
            description:
                "Jeu 3D médiéval sous Unity : exploration de donjons, combats en temps réel, ennemis et boss.",
            image: "img/projets/optimized/roguelike.webp",
            technologies: ["Unity", "C#", "Game Design"],
        },
    ];

    const featuredProjects = projects.filter((project) => project.featured);
    const secondaryProjects = projects.filter((project) => !project.featured);

    return (
        <section id="projects" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

            <div className="container-premium relative z-10">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Projets
                    </div>

                    <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        Des projets concrets, pensés comme de vrais produits.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Une sélection de réalisations développées en cours, en stage et sur
                        des projets personnels, avec un focus sur l’interface, la logique
                        métier et la qualité du code.
                    </p>
                </div>

                <div className="grid gap-7 lg:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <article
                            key={project.id}
                            className="premium-card group overflow-hidden transition duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                                <div className="absolute left-5 top-5 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-xl">
                                    Projet phare
                                </div>
                            </div>

                            <div className="p-7">
                                <p className="mb-2 text-sm font-medium text-primary">
                                    {project.context}
                                </p>

                                <h3 className="text-2xl font-black text-foreground">
                                    {project.title}
                                </h3>

                                <p className="mt-4 leading-7 text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-white"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="premium-button"
                                        >
                                            Voir le projet
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    )}

                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="premium-button-outline"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Code source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {secondaryProjects.map((project) => (
                        <article
                            key={project.id}
                            className="premium-card group overflow-hidden transition duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                            </div>

                            <div className="p-6">
                                <p className="mb-2 text-sm font-medium text-primary">
                                    {project.context}
                                </p>

                                <h3 className="text-xl font-black text-foreground">
                                    {project.title}
                                </h3>

                                <p className="mt-3 line-clamp-3 leading-7 text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-white"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center gap-3">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-blue-500 dark:hover:text-blue-300"
                                        >
                                            Demo
                                            <ExternalLink className="ml-1 h-4 w-4" />
                                        </a>
                                    )}

                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-foreground transition hover:text-primary"
                                        >
                                            Code
                                            <Github className="ml-1 h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <a
                        href="https://github.com/mjadid91"
                        target="_blank"
                        rel="noreferrer"
                        className="premium-button-outline"
                    >
                        Voir plus sur GitHub
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;