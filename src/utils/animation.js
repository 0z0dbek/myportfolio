export const transitions = {
    spring: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
    },
    smooth: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5
    }
};

export const variants = {
    fadeInUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: transitions.spring
        }
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.6 }
        }
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: transitions.spring
        }
    },
    iconPop: {
        rest: { scale: 1 },
        hover: { 
            scale: 1.1,
            filter: "drop-shadow(0 0 8px rgba(112, 0, 255, 0.5))",
            transition: transitions.spring
        }
    }
};
