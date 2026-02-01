import { motion } from 'framer-motion';
import { Smartphone, Monitor, Figma } from 'lucide-react';
import { variants, transitions } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Monitor size={32} />,
            title: t.services.item1_title,
            desc: t.services.item1_desc,
            gradient: "from-accent-secondary to-blue-500"
        },
        {
            icon: <Smartphone size={32} />,
            title: t.services.item2_title,
            desc: t.services.item2_desc,
            gradient: "from-accent-primary to-pink-500"
        },
        {
            icon: <Figma size={32} />,
            title: t.services.item3_title,
            desc: t.services.item3_desc,
            gradient: "from-pink-500 to-orange-500"
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-300">
             {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-secondary/10 dark:bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants.fadeInUp}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors"
                >
                    {t.services.title} <span className="text-accent-secondary">{t.services.highlight}</span>
                </motion.h2>

                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants.staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={variants.fadeInUp}
                            whileHover={{ y: -10, transition: transitions.spring }}
                            className="bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:border-accent-secondary/30 dark:hover:border-white/20 transition-all hover:shadow-xl dark:hover:shadow-none group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            
                            <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                                <div className="w-full h-full bg-white dark:bg-dark-100/90 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-colors">
                                    <div className="text-gray-900 dark:text-white transition-colors">
                                         {service.icon}
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
export default Services;
