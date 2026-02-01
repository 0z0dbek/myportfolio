import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { variants, transitions } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-dark pt-20 transition-colors duration-300">
            {/* Background Blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-accent-secondary/20 dark:bg-accent-secondary/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-primary/20 dark:bg-accent-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={variants.fadeInUp}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white transition-colors"
                >
                    {t.hero.title} <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-secondary to-accent-primary">{t.hero.highlight}</span>
                </motion.h1>

                <motion.p 
                    initial="hidden"
                    animate="visible"
                    variants={variants.fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto transition-colors"
                >
                    {t.hero.intro} <span className="text-gray-900 dark:text-white font-semibold transition-colors">{t.hero.intro_name}</span>{t.hero.intro_desc}
                </motion.p>

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={variants.scaleIn}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-accent-secondary to-accent-primary rounded-full text-white font-semibold hover:shadow-[0_0_20px_rgba(79,140,255,0.5)] transition-shadow flex items-center justify-center gap-2">
                        {t.hero.viewProjects} <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                        {t.hero.contactMe} <Mail size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
