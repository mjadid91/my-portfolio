import React from "react";
import { ArrowLeft, Home } from "lucide-react";

const NotFound: React.FC = () => {
  return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
        {/* Background glow */}
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

        <div className="relative z-10 max-w-xl text-center">
          <h1 className="text-7xl font-black gradient-text mb-6">404</h1>

          <h2 className="text-2xl font-bold text-white mb-4">
            Page introuvable
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            La page que vous recherchez n’existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/" className="premium-button">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </a>

            <button
                onClick={() => window.history.back()}
                className="premium-button-outline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </button>
          </div>
        </div>
      </div>
  );
};

export default NotFound;