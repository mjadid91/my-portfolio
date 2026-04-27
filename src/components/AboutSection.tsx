import React from "react";
import {
    Code2,
    Database,
    Github,
    Layers3,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Sparkles,
    Terminal,
    Wrench,
} from "lucide-react";

type SkillCategory = {
    title: string;
    icon: React.ReactNode;
    skills: string[];
};

const AboutSection: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend",
            icon: <Code2 className="h-5 w-5" />,
            skills: ["React", "TypeScript", "JavaScript", "TailwindCSS", "HTML", "CSS"],
        },
        {
            title: "Backend",
            icon: <Terminal className="h-5 w-5" />,
            skills: ["Java", "Spring Boot", "PHP", "Node.js", "Python", "Django"],
        },
        {
            title: "Base de données",
            icon: <Database className="h-5 w-5" />,
            skills: ["PostgreSQL", "MySQL", "SQL", "Supabase"],
        },
        {
            title: "Outils",
            icon: <Wrench className="h-5 w-5" />,
            skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "VS Code"],
        },
    ];

    const softSkills = [
        "Autonomie",
        "Rigueur",
        "Communication",
        "Esprit d’équipe",
        "Adaptabilité",
        "Résolution de problèmes",
    ];

    const contactLinks = [
        {
            label: "GitHub",
            value: "mjadid91",
            href: "https://github.com/mjadid91",
            icon: <Github className="h-5 w-5" />,
            external: true,
        },
        {
            label: "LinkedIn",
            value: "Profil LinkedIn",
            href: "https://linkedin.com",
            icon: <Linkedin className="h-5 w-5" />,
            external: true,
        },
        {
            label: "Email",
            value: "med.jadid@hotmail.com",
            href: "mailto:med.jadid@hotmail.com",
            icon: <Mail className="h-5 w-5" />,
        },
        {
            label: "Téléphone",
            value: "+33 6 13 65 06 02",
            href: "tel:+33613650602",
            icon: <Phone className="h-5 w-5" />,
        },
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute left-[-160px] top-20 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-10 right-[-120px] h-[320px] w-[320px] rounded-full bg-accent/10 blur-[120px]" />

            <div className="container-premium relative z-10">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-4 w-4 text-primary" />
                        À propos
                    </div>

                    <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        Je développe des interfaces modernes, propres et utiles.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Étudiant en BUT Informatique, spécialisé dans le développement
                        d’applications. J’aime construire des projets web complets, avec une
                        vraie logique produit : interface claire, code maintenable et
                        expérience utilisateur soignée.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="premium-card p-7">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                                <Layers3 className="h-7 w-7 text-primary" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-foreground">
                                    Mohamed Jadid
                                </h3>
                                <p className="text-muted-foreground">
                                    Développeur web / étudiant en informatique
                                </p>
                            </div>
                        </div>

                        <p className="leading-8 text-muted-foreground">
                            Mon objectif est simple : créer des applications propres,
                            fonctionnelles et agréables à utiliser. Je travaille surtout avec
                            React, TypeScript, TailwindCSS et Supabase, tout en gardant une
                            base solide côté backend et base de données.
                        </p>

                        <div className="mt-7 grid gap-3">
                            {contactLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noreferrer" : undefined}
                                    className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 px-4 py-3 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-white"
                                >
                                    <span className="text-primary">{item.icon}</span>
                                    <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {item.label}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {item.value}
                    </span>
                  </span>
                                </a>
                            ))}

                            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/70 px-4 py-3 text-muted-foreground dark:border-white/10 dark:bg-white/[0.04]">
                <span className="text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Localisation
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    Région parisienne
                  </span>
                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {skillCategories.map((category) => (
                            <div key={category.title} className="premium-card p-6">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                                        {category.icon}
                                    </div>

                                    <h3 className="text-xl font-black text-foreground">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-white"
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="premium-card p-6 sm:col-span-2">
                            <h3 className="mb-5 text-xl font-black text-foreground">
                                Soft skills
                            </h3>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {softSkills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="rounded-2xl border border-border bg-card/70 px-4 py-3 text-center text-sm font-medium text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-white"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;