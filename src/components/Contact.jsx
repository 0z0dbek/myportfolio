import { motion } from 'framer-motion';
import { Send, Github, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { variants, transitions } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-100 flex items-center justify-center transition-colors duration-300">
            <div className="max-w-4xl w-full px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants.fadeInUp}
                    className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 relative overflow-hidden shadow-2xl dark:shadow-none transition-all"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 dark:bg-accent-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center relative z-10 text-gray-900 dark:text-white transition-colors">
                        {t.contact.title} <span className="text-accent-primary">{t.contact.highlight}</span>
                    </h2>

                    <form className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input 
                                type="text" 
                                placeholder={t.contact.placeholderName} 
                                className="w-full bg-gray-50 dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all"
                            />
                            <input 
                                type="email" 
                                placeholder={t.contact.placeholderEmail} 
                                className="w-full bg-gray-50 dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all"
                            />
                        </div>
                        <textarea 
                            rows={5}
                            placeholder={t.contact.placeholderMessage} 
                            className="w-full bg-gray-50 dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all resize-none"
                        ></textarea>

                        <button className="w-full py-4 bg-gradient-to-r from-accent-secondary to-accent-primary rounded-xl font-bold text-white flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-lg">
                            {t.contact.send} <Send size={20} />
                        </button>
                    </form>

                    <div className="flex justify-center gap-8 mt-12 relative z-10">
                        {[
                            { icon: <Github size={24} />, href: "#" },
                            { icon: <Linkedin size={24} />, href: "#" },
                            { icon: <MessageCircle size={24} />, href: "https://t.me/your_telegram_username" }, 
                            { icon: <Phone size={24} />, href: "tel:+998931111242" }
                        ].map((social, index) => (
                            <motion.a 
                                key={index} 
                                href={social.href} 
                                variants={variants.iconPop}
                                initial="rest"
                                whileHover="hover"
                                className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:text-accent-primary dark:hover:text-white hover:bg-white shadow-sm dark:shadow-none hover:shadow-md transition-all"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
