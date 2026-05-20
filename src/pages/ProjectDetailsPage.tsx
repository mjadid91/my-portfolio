import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Github,
    Sparkles,
    X,
} from "lucide-react";
import { projectsDetails } from "@/data/projects";

const ProjectDetailsPage: React.FC = () => {
    const { slug } = useParams();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        if (!selectedImage) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedImage]);

    const project = projectsDetails.find((item) => item.slug === slug);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-background px-6">
                <div className="premium-card max-w-lg p-8 text-center">
                    <h1 className="text-3xl font-black text-foreground">
                        Projet introuvable
                    </h1>

                    <p className="mt-4 text-muted-foreground">
                        Ce projet n’existe pas ou n’a pas encore de page détaillée.
                    </p>

                    <Link to="/" className="premium-button mt-6">
                        Retour au portfolio
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />
            <div className="absolute bottom-[-180px] right-[-140px] h-[460px] w-[460px] rounded-full bg-accent/10 blur-[150px]" />

            <section className="relative z-10 pb-20 pt-10">
                <div className="container-premium">
                    <Link
                        to="/"
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-muted-foreground backdrop-blur-xl transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Retour au portfolio
                    </Link>

                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                <Sparkles className="h-4 w-4" />
                                {project.context}
                            </div>

                            <h1 className="text-balance text-5xl font-black tracking-tight text-foreground sm:text-6xl">
                                {project.title}
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                {project.longDescription}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:hover:text-white"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                {project.codeLink && (
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="premium-button"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Code source
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="premium-card group overflow-hidden p-3">
                            <div className="relative h-[280px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute bottom-5 left-5 right-5">
                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                                        Projet détaillé
                                    </p>

                                    <h2 className="mt-2 text-3xl font-black text-white">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="demo" className="mt-20">
                        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                                    <Sparkles className="h-4 w-4 text-primary" />
                                    Démo vidéo
                                </div>

                                <h2 className="text-3xl font-black text-foreground sm:text-4xl">
                                    Aperçu dynamique de l’application.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-6 text-muted-foreground">
                                La vidéo se lance automatiquement, sans son, pour présenter
                                rapidement l’interface et le parcours utilisateur.
                            </p>
                        </div>

                        {project.demoVideo ? (
                            <div className="premium-card overflow-hidden p-3">
                                <video
                                    src={project.demoVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    className="aspect-video w-full rounded-[1.5rem] object-cover"
                                />
                            </div>
                        ) : (
                            <div className="premium-card p-8 text-center text-muted-foreground">
                                Aucune vidéo disponible pour ce projet.
                            </div>
                        )}
                    </section>

                    <section className="mt-20">
                        <div className="mb-8 text-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                                <Sparkles className="h-4 w-4 text-primary" />
                                Captures d’écran
                            </div>

                            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
                                Interfaces réelles du projet.
                            </h2>

                            <p className="mt-3 text-sm text-muted-foreground">
                                Clique sur une capture pour l’ouvrir en plein écran.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {project.screenshots.map((screenshot, index) => (
                                <button
                                    key={screenshot}
                                    type="button"
                                    onClick={() => setSelectedImage(screenshot)}
                                    className="premium-card group overflow-hidden p-3 text-left transition duration-500 hover:-translate-y-2"
                                    aria-label={`Ouvrir la capture ${index + 1} en plein écran`}
                                >
                                    <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                                        <img
                                            src={screenshot}
                                            alt={`${project.title} capture ${index + 1}`}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                                        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-bold text-white backdrop-blur-xl">
                                            Screen {index + 1}
                                        </div>

                                        <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-bold text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
                                            Plein écran
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="mt-20 grid gap-6 lg:grid-cols-2">
                        <div className="premium-card p-7">
                            <h2 className="text-2xl font-black text-foreground">
                                Fonctionnalités principales
                            </h2>

                            <div className="mt-6 space-y-3">
                                {project.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/[0.04]"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="premium-card p-7">
                            <h2 className="text-2xl font-black text-foreground">
                                Difficultés / solutions
                            </h2>

                            <div className="mt-6 space-y-3">
                                {project.challenges.map((challenge) => (
                                    <div
                                        key={challenge}
                                        className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4 text-sm text-muted-foreground dark:border-white/10 dark:bg-white/[0.04]"
                                    >
                                        <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <span>{challenge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
                        aria-label="Fermer l’image"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Capture plein écran"
                        className="max-h-[92vh] max-w-[95vw] rounded-3xl object-contain shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
};

export default ProjectDetailsPage;