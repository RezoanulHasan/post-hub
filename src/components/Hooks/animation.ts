export const heroSection = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
export const heroSectionImage = {
  initial: { y: 0, rotate: -90, scale: 5 },
  animate: {
    y: -20,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
