import { motion } from 'framer-motion';
import { variants, transitions } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', bg: 'white' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors"
        >
          {t.skills.title} <span className="text-accent-secondary">{t.skills.highlight}</span>
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.staggerContainer}
        >
          {skills.map((skill) => (
             <motion.div
               key={skill.name}
               variants={variants.scaleIn}
               whileHover={{ y: -5, transition: transitions.spring }}
               className="bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-accent-primary/50 transition-colors hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(123,97,255,0.2)] group"
             >
               <div className={`w-16 h-16 ${skill.bg ? 'bg-gray-100 dark:bg-white rounded-full p-2' : ''} transition-transform group-hover:scale-110 duration-300`}>
                 <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
               </div>
               <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-accent-primary transition-colors">{skill.name}</h3>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
