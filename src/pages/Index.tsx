import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InterestsSection from "@/components/InterestsSection";
import ExperienceSection from "@/components/ExperienceSection.tsx";
import ParcoursSection from "@/components/ParcoursSection.tsx";
import CurrentGoalSection from "@/components/CurrentGoalSection";

const Index = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");

        if (savedDarkMode !== null) {
            setDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <div className="page-shell transition-colors duration-300">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <HeroSection />
            <CurrentGoalSection />
            <AboutSection />
            <ProjectsSection />
            <InterestsSection />
            <ExperienceSection />
            <ParcoursSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Index;