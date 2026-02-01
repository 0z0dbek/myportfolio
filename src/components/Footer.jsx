// src/components/Footer.jsx
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-gray-50 dark:bg-dark py-8 border-t border-gray-200 dark:border-white/5 relative transition-colors duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 dark:text-gray-500 text-sm transition-colors">
                    {t.footer.text}
                </p>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-accent-secondary dark:hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-accent-secondary dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-accent-secondary dark:hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
