import { motion } from 'framer-motion';
import { Code, Briefcase, Globe } from 'lucide-react';
import { variants, transitions } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-100 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.fadeInUp}
          className="bg-gray-50/80 dark:bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">{t.about.title} <span className="text-accent-secondary">{t.about.highlight}</span></h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors">
                    {t.about.p1_start} <span className="text-gray-900 dark:text-white font-semibold transition-colors">{t.about.p1_name}</span>{t.about.p1_mid} <span className="text-gray-900 dark:text-white font-semibold transition-colors">{t.about.p1_loc}</span>{t.about.p1_end}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed transition-colors">
                    {t.about.p2}
                </p>
             </div>
             <div>
                <motion.div 
                    className="grid gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants.staggerContainer}
                >
                    {[
                    { icon: <Briefcase className="text-accent-secondary" size={32} />, title: t.about.exp, desc: t.about.exp_desc },
                    { icon: <Code className="text-accent-primary" size={32} />, title: t.about.stack, desc: t.about.stack_desc },
                    { icon: <Globe className="text-pink-500" size={32} />, title: t.about.projects, desc: t.about.projects_desc }
                    ].map((item, index) => (
                    <motion.div 
                        key={index}
                        variants={variants.fadeInUp}
                        whileHover={{ scale: 1.02, x: 10, transition: transitions.spring }}
                        className="bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5 flex items-center gap-4 hover:shadow-lg dark:hover:bg-white/10 transition-all"
                    >
                        <div className="bg-gray-100 dark:bg-white/10 p-3 rounded-lg transition-colors">{item.icon}</div>
                        <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">{item.desc}</p>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
