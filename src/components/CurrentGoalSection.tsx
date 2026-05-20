import React from "react";
import {
    ArrowRight,
    BriefcaseBusiness,
    CalendarCheck,
    Code2,
    Download, FolderKanban,
    MapPin,
    Sparkles,
} from "lucide-react";

const CurrentGoalSection: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="objective"
            className="section-padding relative overflow-hidden bg-background"
        >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

            <div className="container-premium relative z-10">
                <div className="premium-card relative overflow-hidden p-7 sm:p-10">
                    <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 opacity-20 blur-[90px]" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                                <Sparkles className="h-4 w-4 text-primary" />
                                Objectif actuel
                            </div>

                            <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                                Objectif S6 : consolider mon profil de développeur web.
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                                Cette année, j’ai eu l’occasion de travailler sur plusieurs projets web,
                                aussi bien en cours qu’en stage, avec une vraie approche produit et utilisateur.
                                Aujourd’hui, je cherche surtout à continuer à progresser sur des applications
                                modernes, ambitieuses et concrètes, en explorant davantage le développement
                                full-stack, l’UI/UX et les architectures web modernes.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <button onClick={scrollToContact} className="premium-button">
                                    Me contacter
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>

                                <a
                                    href={`${import.meta.env.BASE_URL}CV.pdf`}
                                    download="Mohamed-Jadid-CV.pdf"
                                    className="premium-button-outline"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Télécharger mon CV
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-border bg-card/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                                <BriefcaseBusiness className="mb-4 h-6 w-6 text-primary" />
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                    Poste visé
                                </p>
                                <p className="mt-2 font-black text-foreground">
                                    Développement web / full-stack
                                </p>
                            </div>

                            <div className="rounded-3xl border border-border bg-card/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                                <Code2 className="mb-4 h-6 w-6 text-primary" />
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                    Stack principale
                                </p>
                                <p className="mt-2 font-black text-foreground">
                                    React, TypeScript, Supabase
                                </p>
                            </div>

                            <div className="rounded-3xl border border-border bg-card/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                                <CalendarCheck className="mb-4 h-6 w-6 text-primary" />
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                    Stage actuel
                                </p>
                                <p className="mt-2 font-black text-foreground">
                                    LabSSII · Février 2026
                                </p>
                            </div>

                            <div className="rounded-3xl border border-border bg-card/60 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                                <FolderKanban className="mb-4 h-6 w-6 text-primary" />
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                    Projet principal
                                </p>
                                <p className="mt-2 font-black text-foreground">
                                    Application de service à la personne
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentGoalSection;