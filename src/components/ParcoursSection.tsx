import React from "react";
import {
    ArrowUpRight,
    BookOpen,
    Calendar,
    ExternalLink,
    GraduationCap,
    MapPin,
    Sparkles,
} from "lucide-react";

type Parcours = {
    id: string;
    title: string;
    school: string;
    location: string;
    period: string;
    description: string;
    image: string;
    websiteUrl: string;
    mapsUrl: string;
    skills: string[];
    accent: string;
};

const parcours: Parcours[] = [
    {
        id: "but-informatique",
        title: "BUT Informatique",
        school: "IUT d’Orsay — Université Paris-Saclay",
        location: "Orsay / Gif-sur-Yvette",
        period: "Depuis septembre 2021",
        description:
            "Parcours A : développement d’applications, conception, validation, bases de données, architecture logicielle et projets en équipe.",
        image: `${import.meta.env.BASE_URL}img/education/iut.jpg`,
        websiteUrl: "https://www.iut-orsay.universite-paris-saclay.fr/",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=IUT%20d%27Orsay%20Universit%C3%A9%20Paris-Saclay",
        skills: ["Développement", "React", "Java", "SQL", "UML", "Gestion de projet"],
        accent: "from-blue-500 via-cyan-400 to-indigo-500",
    },
    {
        id: "bac-sti2d",
        title: "Baccalauréat STI2D",
        school: "Lycée de l’Essouriau",
        location: "Les Ulis",
        period: "2019 - 2021",
        description:
            "Parcours technologique qui m’a donné des bases solides en logique, systèmes numériques, démarche projet et raisonnement technique.",
        image: `${import.meta.env.BASE_URL}img/education/essouriau.jpg`,
        websiteUrl: "https://lyceedelessouriau.fr/",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Lyc%C3%A9e%20de%20l%27Essouriau%20Les%20Ulis",
        skills: ["Systèmes numériques", "Logique", "Projet", "Technologie"],
        accent: "from-violet-500 via-purple-500 to-blue-500",
    },
];

const ParcoursSection: React.FC = () => {
    return (
        <section
            id="parcours"
            className="section-padding relative overflow-hidden bg-background"
        >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
            <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />

            <div className="container-premium relative z-10">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Parcours académique
                    </div>

                    <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        Les bases qui structurent mon profil de développeur.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-muted-foreground">
                        Mon parcours de formation m’a permis de construire une base solide
                        en développement, conception logicielle, bases de données et projets
                        techniques.
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 lg:grid-cols-2">
                        {parcours.map((item) => (
                            <article
                                key={item.id}
                                className="group premium-card relative overflow-hidden p-0 transition duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.school}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                                    <div className="absolute left-5 top-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-xl">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5">
                                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                                            {item.period}
                                        </p>
                                        <h3 className="text-3xl font-black tracking-tight text-white">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-base font-bold text-white/85">
                                            {item.school}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative p-6">
                                    <div
                                        className={`absolute right-[-70px] top-[-70px] h-[180px] w-[180px] rounded-full bg-gradient-to-br ${item.accent} opacity-20 blur-[60px] transition group-hover:opacity-30`}
                                    />

                                    <div className="relative z-10">
                                        <div className="mb-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                        <Calendar className="h-4 w-4" />
                          {item.period}
                      </span>

                                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                        <MapPin className="h-4 w-4" />
                                                {item.location}
                      </span>
                                        </div>

                                        <p className="min-h-[96px] leading-7 text-muted-foreground">
                                            {item.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {item.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-white"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>

                                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={item.mapsUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="premium-button-outline flex-1 justify-center px-4 py-2.5"
                                            >
                                                <MapPin className="mr-2 h-4 w-4" />
                                                Voir sur Maps
                                            </a>

                                            <a
                                                href={item.websiteUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="premium-button flex-1 justify-center px-4 py-2.5"
                                            >
                                                Site officiel
                                                <ArrowUpRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`h-1 w-full bg-gradient-to-r ${item.accent}`}
                                />
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-3xl border border-border bg-card/60 p-5 text-center text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <BookOpen className="mx-auto mb-3 h-5 w-5 text-primary" />
                        Ces formations complètent mes expériences professionnelles et mes
                        projets, en apportant le socle théorique nécessaire pour concevoir
                        des applications propres et maintenables.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParcoursSection;