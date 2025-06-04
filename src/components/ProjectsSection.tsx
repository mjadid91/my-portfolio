
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'My Pizza',
      description: 'Appli de commande de pizza (HTML/CSS/JS/PHP), avec interface intuitive et gestion de commandes.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Démocratie Participative',
      description: 'Plateforme de vote en ligne sécurisée permettant aux citoyens de participer aux décisions publiques.',
      image: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Calculis : La grande Évasion',
      description: 'Jeu 2D développé avec Godot Engine, mêlant aventure et énigmes mathématiques.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
      technologies: ['Godot', 'GDScript', 'Game Design'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            🚀 Mes projets vedettes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, alliant créativité et technologies modernes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <a
                      href={project.demoLink}
                      className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="flex items-center px-3 py-1 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Envie de voir plus de projets ?
          </p>
          <a
            href="https://github.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
