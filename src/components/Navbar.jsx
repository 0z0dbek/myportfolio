// src/components/Navbar.jsx
import { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { variants } from '../utils/animation';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const links = [
        { name: t.navbar.about, href: '#about' },
        { name: t.navbar.skills, href: '#skills' },
        { name: t.navbar.projects, href: '#projects' },
        { name: t.navbar.services, href: '#services' },
        { name: t.navbar.contact, href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/70 dark:bg-dark/50 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-secondary to-accent-primary">
                    Ozoddev
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-accent-primary dark:hover:text-white transition-colors font-medium">
                            {link.name}
                        </a>
                    ))}
                    
                    <div className="flex items-center gap-4 border-l border-gray-200 dark:border-white/10 pl-6">
                        <div className="flex items-center gap-2">
                             <Globe size={18} className="text-gray-500 dark:text-gray-400" />
                             <select 
                                value={language} 
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="bg-transparent text-gray-700 dark:text-gray-300 text-sm font-medium focus:outline-none cursor-pointer appearance-none uppercase"
                            >
                                <option value="en" className="bg-white dark:bg-dark">EN</option>
                                <option value="ru" className="bg-white dark:bg-dark">RU</option>
                                <option value="uz" className="bg-white dark:bg-dark">UZ</option>
                            </select>
                        </div>

                        <button 
                            onClick={toggleTheme} 
                            className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-4">
                     <button 
                        onClick={toggleTheme} 
                        className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    
                    <div className="flex items-center gap-2">
                         <select 
                            value={language} 
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="bg-transparent text-gray-700 dark:text-gray-300 text-xs font-bold focus:outline-none cursor-pointer appearance-none uppercase"
                        >
                            <option value="en" className="bg-white dark:bg-dark">EN</option>
                            <option value="ru" className="bg-white dark:bg-dark">RU</option>
                            <option value="uz" className="bg-white dark:bg-dark">UZ</option>
                        </select>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={variants.fadeInUp}
                    className="md:hidden bg-white/95 dark:bg-dark-100/95 backdrop-blur-md absolute w-full top-full left-0 border-b border-gray-200 dark:border-white/10 shadow-lg"
                >
                    <div className="flex flex-col space-y-4 p-6">
                        {links.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-lg text-gray-800 dark:text-gray-300 hover:text-accent-primary dark:hover:text-white font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
