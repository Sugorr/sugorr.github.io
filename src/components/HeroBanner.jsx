
import { useRef } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect"
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "./Navbar";

export default function HeroBanner (){
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start start"],
    });

    const textLeftX = useTransform(scrollYProgress, [0, 1], ["500%", "0%"])
    const textLeftDelayX = useTransform(scrollYProgress, [0, 1], ["140%", "0%"])
    const textRightX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"])
    const textUp = useTransform(scrollYProgress, [1, 0], [0, -520])
    const opacityScroll = useTransform(scrollYProgress, [1, 0], ["100%", "0%"])

    const words = [
        {
          text: "I'm",
          className: "font-quicksand font-bold text-[10dvh]",
        },
        {
          text: "Joaquin",
          className: "font-quicksand font-bold text-[10dvh]",
        },
        {
          text: "Reynera",
          className: "font-quicksand font-bold text-[10dvh]",
        },
    ];

    return (
        <div ref={ targetRef } className='md:px-20 px-10 h-dvh text-center flex justify-center items-center flex-col md:gap-32 gap-16'>
            <Navbar />
            
            <div className="relative">
                <>
                    <motion.div
                    initial={{
                        x: 0,
                        y: 0,
                        scale: 1,
                    }}
                    animate={{
                        x: -60,
                        y: -100,
                        scale: 1.3,
                        transition: {
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }
                    }}
                    className="w-[420px] h-[420px] bg-default-blue/20 top-32 -left-32 absolute rounded-full blur-max -z-10"></motion.div>
                    <motion.div
                    initial={{
                        x: 0,
                        y: 0,
                        scale: 1,
                    }}
                    animate={{
                        x: 360,
                        y: -60,
                        scale: 1.5,
                        transition: {
                            duration: 15,
                            repeat: Infinity,
                            repeatType: "mirror",
                        }
                    }}
                    className="w-[420px] h-[420px] bg-default-orange/20 -top-32 left-32  absolute rounded-full blur-max -z-10"></motion.div>
                </>
                <motion.div
                    style={{ translateX: textLeftX, translateY: textUp }}
                    >
                    <TypewriterEffect words={ words }/>
                </motion.div>

                <motion.p 
                style={{ translateX: textRightX, translateY: textUp }}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1, ease: 'easeOut', type: 'tween', delay: 1.5}}
                className='font-karla font-bold text-[10vh] md:py-6 py-2 text-transparent bg-clip-text bg-gradient-to-r from-default-blue to-default-orange'>
                    Creative Frontend & Game
                </motion.p>
                
                <motion.div
                style={{ translateX: textLeftDelayX, translateY: textUp }}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 2.5 }}
                className='font-quicksand font-bold text-[10dvh]'>
                    Developer
                </motion.div>
            </div>
            <motion.p
            style={{ translateY: textUp, opacity: opacityScroll }}
            initial={{ opacity: 0, y: 15}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1}}
            className='md:text-2xl text-lg font-regular text-default-white/50 w-1/2'>
                I develop accessible, responsive, interactive, and animated websites with a strong focus on performance.
            </motion.p>
        </div>
    );
}

