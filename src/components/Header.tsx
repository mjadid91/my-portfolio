import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { label: "Accueil", id: "home" },
  { label: "À propos", id: "about" },
  { label: "Projets", id: "projects" },
  { label: "Centres d'intérêt", id:"interests"},
  { label: "Expériences", id: "experience" },
  { label: "Contact", id: "contact" },
];

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
      <header
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? "border-b border-border bg-background/75 shadow-xl shadow-black/5 backdrop-blur-2xl dark:border-white/10 dark:shadow-black/20"
                  : "bg-transparent"
          }`}
      >
        <nav className="container-premium">
          <div className="flex h-20 items-center justify-between">

            {/* 🔥 LOGO */}
            <button
                onClick={() => scrollToSection("home")}
                className="group flex items-center gap-3"
                aria-label="Retour à l'accueil"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card/70 backdrop-blur shadow-lg shadow-black/10 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-primary/20">

                {/* glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/0 blur-xl transition duration-300 group-hover:bg-primary/20" />

                {/* logo */}
                <img
                    src={`${import.meta.env.BASE_URL}${
                        darkMode
                            ? "logo/logo-mj-dark.png"
                            : "logo/logo-mj-removebg.png"
                    }`}
                    alt="Logo MJ"
                    className="relative z-10 h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="text-left leading-tight">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-foreground">
                  MJ
                </p>
                <p className="hidden text-xs text-muted-foreground sm:block">
                  Développeur web
                </p>
              </div>
            </button>

            {/* 🔥 NAV DESKTOP */}
            <div className="hidden items-center gap-2 rounded-full border border-border bg-card/70 p-1 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] md:flex">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-foreground dark:hover:bg-white/[0.06] dark:hover:text-white"
                  >
                    {item.label}
                  </button>
              ))}
            </div>

            {/* 🔥 ACTIONS DESKTOP */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                  onClick={toggleDarkMode}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground backdrop-blur-xl transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:text-white/80 dark:hover:text-white"
                  aria-label="Changer le thème"
              >
                {darkMode ? (
                    <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                  onClick={() => scrollToSection("contact")}
                  className="premium-button px-5 py-2.5"
              >
                Me contacter
              </button>
            </div>

            {/* 🔥 MOBILE */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                  onClick={toggleDarkMode}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:text-white/80"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.05] dark:text-white/80"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* 🔥 MENU MOBILE */}
          {isMenuOpen && (
              <div className="animate-fade-in-down pb-5 md:hidden">
                <div className="premium-card p-3">
                  <div className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-foreground dark:hover:bg-white/[0.06] dark:hover:text-white"
                        >
                          {item.label}
                        </button>
                    ))}

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="mt-2 rounded-2xl bg-primary px-4 py-3 text-left text-sm font-bold text-primary-foreground"
                    >
                      Me contacter
                    </button>
                  </div>
                </div>
              </div>
          )}
        </nav>
      </header>
  );
};

export default Header;