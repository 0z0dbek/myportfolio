// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { variants, transitions } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';

const projects = [
    {
        title: "E-Commerce Dashboard",
        desc: "A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.",
        tags: ["React", "Tailwind", "Recharts"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        live: "#",
        github: "#"
    },
    {
        title: "Social Media App",
        desc: "A responsive social platform featuring real-time messaging, post sharing, and user profiles.",
        tags: ["Next.js", "TypeScript", "Prisma"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        live: "#",
        github: "#"
    },
    {
        title: "Task Management Tool",
        desc: "Collaborative task manager with drag-and-drop boards and team synchronization.",
        tags: ["React", "Redux", "Firebase"],
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
        live: "#",
        github: "#"
    },
];

const Projects = () => {
    const { t } = useLanguage();
    return (
        <section id="projects" className="py-20 bg-white dark:bg-dark-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants.fadeInUp}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors"
                >
                    {t.projects.title} <span className="text-accent-primary">{t.projects.highlight}</span>
                </motion.h2>

                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants.staggerContainer}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={variants.fadeInUp}
                            whileHover={{ y: -10, transition: transitions.spring }}
                            className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-accent-secondary/50 transition-all hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(0,198,255,0.1)] group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex gap-4">
                                        <a href={project.live} className="p-2 bg-accent-secondary rounded-full text-white hover:bg-blue-600 transition-colors pointer-events-auto">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.github} className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors pointer-events-auto">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-accent-secondary transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-accent-secondary text-xs rounded-full border border-gray-200 dark:border-white/10 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
export default Projects;
