export type ProjectDetails = {
    slug: string;
    title: string;
    context: string;
    description: string;
    longDescription: string;
    image: string;
    demoVideo?: string;
    screenshots: string[];
    technologies: string[];
    features: string[];
    challenges: string[];
    codeLink?: string;
};

export const projectsDetails: ProjectDetails[] = [
    {
        slug: "pizza",
        title: "My Pizza",
        context: "Projet BUT 2",
        description:
            "Application de commande de pizzas avec gestion des produits, commandes, ingrédients et interface web.",
        longDescription:
            "My Pizza est une plateforme de commande en ligne développée dans le cadre d’un projet universitaire. L’objectif était de créer une application complète permettant de consulter des pizzas, gérer un panier, passer une commande et administrer les produits et ingrédients.",
        image: `${import.meta.env.BASE_URL}img/projets/pizza.webp`,
        demoVideo: `${import.meta.env.BASE_URL}img/projects-details/pizza/demo.mp4`,
        screenshots: [
            `${import.meta.env.BASE_URL}img/projects-details/pizza/screen1.webp`,
            `${import.meta.env.BASE_URL}img/projects-details/pizza/screen2.webp`,
            `${import.meta.env.BASE_URL}img/projects-details/pizza/screen3.webp`,
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java", "MySQL"],
        features: [
            "Consultation des pizzas disponibles",
            "Gestion du panier de commande",
            "Administration des produits et ingrédients",
            "Gestion des commandes côté utilisateur",
            "Interface web responsive et claire",
        ],
        challenges: [
            "Structurer les données entre pizzas, ingrédients et commandes",
            "Gérer la logique panier de manière cohérente",
            "Organiser le projet entre interface web et logique métier",
        ],
        codeLink: "https://github.com/mjadid91/MaPizza",
    },
    {
        slug: "democratie",
        title: "Démocratie Participative",
        context: "Projet BUT 2",
        description:
            "Plateforme de vote en ligne permettant de proposer, consulter et voter pour des décisions collectives.",
        longDescription:
            "Démocratie Participative est une plateforme pensée pour faciliter la participation citoyenne. Le projet permet la gestion de groupes, propositions, commentaires et votes, avec une séparation des rôles et une logique de décision collective.",
        image: `${import.meta.env.BASE_URL}img/projets/democratie.webp`,
        demoVideo: `${import.meta.env.BASE_URL}img/projects-details/democratie/demo.mp4`,
        screenshots: [
            `${import.meta.env.BASE_URL}img/projects-details/democratie/screen1.webp`,
            `${import.meta.env.BASE_URL}img/projects-details/democratie/screen2.webp`,
            `${import.meta.env.BASE_URL}img/projects-details/democratie/screen3.webp`,
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java", "MySQL"],
        features: [
            "Création et gestion de groupes",
            "Ajout de propositions avec budget",
            "Consultation et commentaires sur les propositions",
            "Création et participation aux votes",
            "Gestion des rôles utilisateurs",
        ],
        challenges: [
            "Mettre en place une logique de vote fiable",
            "Organiser les relations entre groupes, propositions et utilisateurs",
            "Créer une interface claire pour un sujet fonctionnellement dense",
        ],
        codeLink: "https://github.com/mjadid91/Democratie-Participative-App",
    },
];