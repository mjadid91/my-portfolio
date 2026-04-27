import React from "react";
import {
    Cpu,
    Film,
    Gamepad2,
    Plane,
    Trophy,
    type LucideIcon, Sparkles,
} from "lucide-react";

type Interest = {
    title: string;
    description: string;
    Icon: LucideIcon;
    gradient: string;
};

const interests: Interest[] = [
    {
        title: "Cinéma",
        description: "Narration, mise en scène et sens du détail visuel.",
        Icon: Film,
        gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    },
    {
        title: "Football",
        description: "Esprit d’équipe, stratégie et culture de la performance.",
        Icon: Trophy,
        gradient: "from-emerald-500/20 via-lime-500/10 to-transparent",
    },
    {
        title: "Gaming",
        description: "Immersion, progression et expériences interactives.",
        Icon: Gamepad2,
        gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    },
    {
        title: "Tech",
        description: "Veille, curiosité et envie de comprendre ce qui arrive.",
        Icon: Cpu,
        gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    },
    {
        title: "Voyage",
        description: "Découverte, adaptation et ouverture à d’autres usages.",
        Icon: Plane,
        gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    },
];

const InterestsSection: React.FC = () => {
    return (
        <section id="interests" className="section-padding bg-background">
            <div className="container-premium">
                <div className="mb-14 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Centres d'intérêt
                    </div>

                    <h3 className="text-3xl font-black text-foreground md:text-4xl">
                        En dehors du code
                    </h3>

                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Des passions qui nourrissent ma créativité, ma curiosité et ma
                        manière de concevoir des expériences numériques.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {interests.map(({ title, description, Icon, gradient }) => (
                        <article
                            key={title}
                            className="group relative min-h-[180px] overflow-hidden rounded-[1.75rem] border border-border bg-card/70 p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition duration-300 group-hover:opacity-100`}
                            />

                            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                            <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-sm transition duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary/40 dark:border-white/10 dark:bg-white/[0.05]">
                                <Icon className="h-5 w-5" />
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-sm font-black text-foreground">{title}</h4>

                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;