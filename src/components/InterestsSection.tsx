import React, { useState, useEffect } from "react";

interface Interest {
    title: string;
    description: string;
    images: string[];
}

const interests: Interest[] = [
    {
        title: "Cinéma",
        description: "Passion pour le cinéma, les séries et le storytelling visuel.",
        images: [
            "img/interests/cinema1.jpg",
            "img/interests/cinema2.jpg",
        ],
    },
    {
        title: "Football",
        description: "Esprit d’équipe, discipline et goût de la compétition.",
        images: [
            "img/interests/football1.jpg",
            "img/interests/football2.jpg",
        ],
    },
    {
        title: "Jeux vidéo",
        description: "Gameplay, logique et immersion — en lien avec mes projets.",
        images: [
            "img/interests/gaming1.jpg",
            "img/interests/gaming2.jpg",
        ],
    },
    {
        title: "Technologies",
        description: "Curiosité pour les innovations technologiques et tendances digitales.",
        images: [
            "img/interests/tech1.jpg",
            "img/interests/tech2.jpg",
            "img/interests/tech3.jpg",
        ],
    },
    {
        title: "Voyages",
        description: "Découverte de nouvelles cultures et horizons à travers le monde.",
        images: [
            "img/interests/voyage1.jpg",
            "img/interests/voyage2.jpg",
            "img/interests/voyage3.jpg"
        ],
    },
];

const InterestsSection: React.FC = () => {
    const [currentIndexes, setCurrentIndexes] = useState<number[]>(
        Array(interests.length).fill(0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexes((prev) =>
                prev.map((index, i) => (index + 1) % interests[i].images.length)
            );
        }, 3500); // un peu plus lent pour lecture confort

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="interests" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-16 text-center">
                    🎯 Centres d’intérêt
                </h3>

                <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {interests.map((item, idx) => (
                        <div
                            key={item.title}
                            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                        >
                            {/* Slider */}
                            <div className="relative w-full h-[24rem] md:h-[28rem]">
                                {item.images.map((img, imgIdx) => (
                                    <img
                                        key={img}
                                        src={img}
                                        alt={item.title}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                                            imgIdx === currentIndexes[idx]
                                                ? "opacity-100 scale-105"
                                                : "opacity-0 scale-100"
                                        }`}
                                    />
                                ))}

                                {/* Overlay gradient pour texte lisible */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                                {/* Texte */}
                                <div className="absolute bottom-0 p-6">
                                    <h4 className="text-2xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Slide indicators */}
                                    <div className="flex space-x-2 mt-4">
                                        {item.images.map((_, i) => (
                                            <span
                                                key={i}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                                    i === currentIndexes[idx]
                                                        ? "bg-white"
                                                        : "bg-white/40"
                                                }`}
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;
