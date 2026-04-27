import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <footer className="relative border-t border-border bg-background py-16 dark:border-white/10">
        <div className="container-premium">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <h3 className="mb-4 text-2xl font-black gradient-text">
                Mohamed Jadid
              </h3>

              <p className="max-w-sm leading-relaxed text-muted-foreground">
                Développeur web spécialisé en React et applications modernes.
                Je conçois des interfaces propres, rapides et orientées utilisateur.
              </p>

              {/* Socials */}
              <div className="mt-6 flex gap-3">
                {[
                  {
                    href: "https://github.com/mjadid91",
                    icon: <Github className="h-4 w-4" />,
                  },
                  {
                    href: "https://www.linkedin.com",
                    icon: <Linkedin className="h-4 w-4" />,
                  },
                  {
                    href: "mailto:tonmail@gmail.com",
                    icon: <Mail className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70 dark:hover:text-white"
                    >
                      {item.icon}
                    </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                Navigation
              </h4>

              <div className="flex flex-col gap-2">
                {[
                  { label: "Accueil", id: "home" },
                  { label: "À propos", id: "about" },
                  { label: "Projets", id: "projects" },
                  { label: "Expérience", id: "experience" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="text-left text-muted-foreground transition hover:text-foreground dark:hover:text-white"
                    >
                      {item.label}
                    </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-foreground">
                Travaillons ensemble
              </h4>

              <p className="mb-6 text-muted-foreground">
                Tu as un projet ou une opportunité ? On peut en discuter.
              </p>

              <button
                  onClick={() => scrollTo("contact")}
                  className="premium-button"
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-6 md:flex-row dark:border-white/10">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohamed Jadid • Tous droits réservés
            </p>

            <button
                onClick={scrollToTop}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-white/70 dark:hover:text-white"
                aria-label="Retour en haut"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </footer>
  );
};

export default Footer;