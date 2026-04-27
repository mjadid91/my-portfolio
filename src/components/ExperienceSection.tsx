import React, { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Code2,
    Database,
    MapPin,
    Sparkles,
    Truck,
} from "lucide-react";

type Experience = {
    id: string;
    title: string;
    company: string;
    logo: string;
    location: string;
    period: string;
    type: string;
    description: string;
    skills: string[];
    icon: React.ReactNode;
    accent: string;
};

const experiences: Experience[] = [
    {
        id: "warning-chauffeur-livreur-2024",
        title: "Chauffeur livreur",
        company: "Warning+",
        logo: `${import.meta.env.BASE_URL}img/experiences/warning.png`,
        location: "Coignières",
        period: "Mai 2024 - Juillet 2024",
        type: "Expérience terrain",
        description:
            "Livraison de pièces automobiles avec organisation des tournées, respect des délais et gestion des interactions clients.",
        skills: ["Autonomie", "Organisation", "Rigueur"],
        icon: <Truck className="h-5 w-5" />,
        accent: "from-orange-500 via-amber-400 to-red-500",
    },
    {
        id: "labssii-stage-dev-web-2025",
        title: "Développeur web",
        company: "LabSSII",
        logo: `${import.meta.env.BASE_URL}img/experiences/labssii.png`,
        location: "Évry",
        period: "Juin 2025 - Juillet 2025",
        type: "Stage développeur web",
        description:
            "Développement d’un CRM interne avec interface moderne, création d’API REST et gestion des données avec PostgreSQL.",
        skills: ["React", "Node.js", "PostgreSQL", "API REST"],
        icon: <Database className="h-5 w-5" />,
        accent: "from-violet-500 via-purple-500 to-blue-500",
    },
    {
        id: "labssii-app-metier-2026",
        title: "Développeur web",
        company: "LabSSII",
        logo: `${import.meta.env.BASE_URL}img/experiences/labssii.png`,
        location: "Évry",
        period: "Depuis Février 2026",
        type: "Application métier complète",
        description:
            "Conception d’une application métier reliant seniors et aidants avec gestion des profils, réservations et services.",
        skills: ["React", "TypeScript", "Tailwind", "Supabase"],
        icon: <Code2 className="h-5 w-5" />,
        accent: "from-blue-500 via-cyan-400 to-indigo-500",
    },
];

const ExperienceSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % experiences.length);
        }, 6000);

        return () => window.clearInterval(interval);
    }, []);

    const previous = () => {
        setActiveIndex((prev) =>
            prev === 0 ? experiences.length - 1 : prev - 1
        );
    };

    const next = () => {
        setActiveIndex((prev) => (prev + 1) % experiences.length);
    };

    return (
        <section
            id="experience"
            className="section-padding relative overflow-hidden bg-background"
        >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />

            <div className="container-premium relative z-10">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Expériences professionnelles
                    </div>

                    <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        Mon parcours professionnel.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-muted-foreground">
                        Une progression entre expérience terrain, développement web et
                        projet métier complet.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-7 flex items-center justify-between gap-4">
                        <div className="hidden text-sm font-bold uppercase tracking-[0.25em] text-muted-foreground md:block">
                            2024 → 2025 → Aujourd’hui
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={previous}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-white"
                                aria-label="Expérience précédente"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>

                            <button
                                onClick={next}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-white"
                                aria-label="Expérience suivante"
                            >
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid auto-rows-fr gap-5 lg:grid-cols-3">
                        {experiences.map((experience, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <article
                                    key={experience.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative h-full cursor-pointer rounded-[2rem] border bg-card/70 p-5 backdrop-blur-xl transition-all duration-500 dark:bg-white/[0.04] ${
                                        isActive
                                            ? "border-primary/50 shadow-xl shadow-primary/15"
                                            : "border-border hover:-translate-y-1 hover:border-primary/30 dark:border-white/10"
                                    }`}
                                >
                                    <div
                                        className={`absolute inset-x-5 top-0 h-1 rounded-full bg-gradient-to-r ${experience.accent} ${
                                            isActive ? "opacity-100" : "opacity-40"
                                        }`}
                                    />

                                    <div
                                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl border transition ${
                                            isActive
                                                ? "border-primary/30 bg-primary/10 text-primary"
                                                : "border-border bg-background text-muted-foreground dark:border-white/10"
                                        }`}
                                    >
                                        {experience.icon}
                                    </div>

                                    <div className="flex h-full flex-col">
                                        <div className="mb-4 flex items-center gap-4 pr-12">
                                            <div
                                                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-white p-3 shadow-sm ring-1 ring-black/5 transition ${
                                                    isActive
                                                        ? "border-primary/40"
                                                        : "border-border dark:border-white/10"
                                                }`}
                                            >
                                                <img
                                                    src={experience.logo}
                                                    alt={`${experience.company} logo`}
                                                    className="max-h-[80%] max-w-[80%] object-contain"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="truncate text-xs font-bold uppercase tracking-[0.18em] text-primary">
                                                    {experience.type}
                                                </p>

                                                <h3 className="mt-1 line-clamp-2 text-lg font-black leading-tight text-foreground">
                                                    {experience.title}
                                                </h3>

                                                <p className="mt-1 text-sm font-bold text-primary">
                                                    {experience.company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                        <Calendar className="h-3.5 w-3.5" />
                          {experience.period}
                      </span>

                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                        <MapPin className="h-3.5 w-3.5" />
                                                {experience.location}
                      </span>
                                        </div>

                                        <p className="mb-5 line-clamp-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
                                            {experience.description}
                                        </p>

                                        <div className="mt-auto flex flex-wrap gap-2">
                                            {experience.skills.map((skill) => (
                                                <span
                                                    key={`${experience.id}-${skill}`}
                                                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-white"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 border-t border-border pt-4 dark:border-white/10">
                                            <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          Étape {index + 1}
                        </span>

                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide transition ${
                                                        isActive
                                                            ? "bg-primary text-primary-foreground"
                                                            : "bg-muted text-muted-foreground"
                                                    }`}
                                                >
                          {isActive ? "Active" : "Voir"}
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex justify-center gap-2">
                        {experiences.map((experience, index) => (
                            <button
                                key={`${experience.id}-dot`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Afficher ${experience.title}`}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    activeIndex === index
                                        ? "w-10 bg-primary"
                                        : "w-2.5 bg-muted-foreground/30 hover:bg-primary/50"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;