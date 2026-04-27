import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";

const HeroSection: React.FC = () => {
  const roles = useMemo(
      () => ["React", "TypeScript", "Supabase", "UI moderne", "JavaScript", "HTML", "CSS", "PHP"],
      []
  );

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentIndex];

    const timeout = window.setTimeout(
        () => {
          if (isDeleting) {
            setCurrentText(current.substring(0, currentText.length - 1));
          } else {
            setCurrentText(current.substring(0, currentText.length + 1));
          }

          if (!isDeleting && currentText === current) {
            window.setTimeout(() => setIsDeleting(true), 1200);
          }

          if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % roles.length);
          }
        },
        isDeleting ? 45 : 95
    );

    return () => window.clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-[-120px] top-32 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="container-premium relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <Sparkles className="h-4 w-4 text-primary" />
                Portfolio nouvelle génération
              </div>

              <h1 className="animate-fade-in-up text-balance text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Mohamed Jadid
                <span className="mt-3 block gradient-text">
                Développeur web
              </span>
              </h1>

              <div className="animate-fade-in-up mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                Je crée des interfaces en{" "}
                <span className="gradient-text">{currentText}</span>
                <span className="ml-1 animate-pulse text-primary">|</span>
              </div>

              <p className="animate-fade-in-up mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0">
                Étudiant en BUT Informatique, spécialisé dans le développement
                d’applications. Je conçois des projets web modernes, propres et
                orientés expérience utilisateur.
              </p>

              <div className="animate-fade-in-up mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <button onClick={scrollToProjects} className="premium-button">
                  Voir mes projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <a
                    href="/my-portfolio/CV.pdf"
                    download="Mohamed-Jadid-CV.pdf"
                    className="premium-button-outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger mon CV
                </a>
              </div>

              <div className="animate-fade-in-up mt-8 flex items-center justify-center gap-3 lg:justify-start">
                <a
                    href="https://github.com/mjadid91"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80 dark:hover:text-white"
                    aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80 dark:hover:text-white"
                    aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="animate-scale-in relative hidden lg:block">
              <div className="premium-card relative mx-auto w-full max-w-md p-6">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="rounded-2xl border border-border bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-300 shadow-inner dark:border-white/10 dark:bg-black/30">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-300">{"{"}</span>
                  </p>
                  <p className="pl-5">
                    name: <span className="text-green-300">"Mohamed"</span>,
                  </p>
                  <p className="pl-5">
                    stack:{" "}
                    <span className="text-green-300">
                    ["React", "TypeScript", "Supabase"]
                  </span>
                    ,
                  </p>
                  <p className="pl-5">
                    goal:{" "}
                    <span className="text-green-300">
                    "Créer des apps utiles"
                  </span>
                    ,
                  </p>
                  <p>
                    <span className="text-yellow-300">{"}"}</span>
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "React", sub: "Frontend" },
                    { label: "TS", sub: "Code" },
                    { label: "UI", sub: "Design" },
                  ].map((item) => (
                      <div
                          key={item.label}
                          className="rounded-2xl border border-border bg-card/70 p-4 text-center dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        <p className="text-2xl font-black text-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.sub}
                        </p>
                      </div>
                  ))}
                </div>
              </div>

              <div className="animate-float-soft absolute -right-4 -top-5 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary backdrop-blur-xl">
                <Code2 className="mr-2 inline h-4 w-4" />
                Clean code
              </div>
            </div>
          </div>
        </div>

        <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70 dark:hover:text-white"
            aria-label="Descendre vers la section suivante"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </section>
  );
};

export default HeroSection;