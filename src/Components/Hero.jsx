import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.5,
      ease: "easeOut"
    }
  }
});

const imageVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    rotate: -5
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 1.2,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              BEN ZAHI OUISSAL
            </motion.h1>
            
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Développeuse Full Stack
            </motion.span>
            
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Développeuse Full Stack spécialisée en systèmes automatisés et développement digital, avec une solide maîtrise des technologies front-end (HTML, CSS, JavaScript, React.js) et back-end (PHP, Laravel, SQL). Passionnée par l'innovation, dotée d'un esprit analytique et toujours en quête de nouveaux défis, je suis prête à contribuer activement à des projets ambitieux.
            </motion.p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative"
            >
             <motion.img
  variants={imageVariants}
  className="rounded-2xl border-4 border-purple-500/20 shadow-xl shadow-purple-500/10 
             w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] object-cover"
  src="../photo.jpeg"
  alt="profilePic"
/>
              <motion.div 
                className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;