
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroBanner (){
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end start", "start start"],
    });

    const textLeftX = useTransform(scrollYProgress, [0, 1], ["400%", "0%"]);

    const textLeftDelayX = useTransform(scrollYProgress, [0, 1], ["140%", "0%"])
    const textRightX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"])
    const textUp = useTransform(scrollYProgress, [1, 0], [0, -520])
    const opacityScroll = useTransform(scrollYProgress, [1, 0], ["100%", "0%"])

    const words = [
        {
          text: "Creative",
          className: "font-quicksand font-bold text-[10dvh]",
        },
        {
          text: "Frontend",
          className: "font-quicksand font-bold text-[10dvh]",
        },
        {
          text: "&",
          className: "font-quicksand font-bold text-[10dvh]",
        },
        {
          text: "Game",
          className: "font-quicksand font-bold text-[10dvh]",
        },
    ];

    return (
        <div ref={ targetRef } className='relative md:px-64 px-10 py-24 h-dvh flex justify-around items-center flex-col md:gap-32 gap-16'> 
            <div className="relative overflow-hidden self-start text-left">
                <motion.div
                    style={{ translateX: textLeftX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.5 }}
                    className='font-bold text-[5dvh]'
                >
                    I'm Joaquin Reynera,
                </motion.div>

                <motion.p 
                    style={{ translateX: textRightX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 1}}
                    className='font-bold text-[5dvh]'
                >
                    Creative Frontend & Game
                </motion.p>
                
                <motion.div
                    style={{ translateX: textLeftDelayX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.5 }}
                    className='font-bold text-default-orange text-[5dvh]'
                >
                    Developer
                </motion.div>
            </div>
            <motion.p
            style={{ translateY: textUp, opacity: opacityScroll }}
            initial={{ opacity: 0, y: 15}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1}}
            className='md:text-2xl text-xl self-end text-right font-regular text-default-black w-1/2'>
                I develop accessible, responsive, interactive, and animated websites with a strong focus on performance.
            </motion.p>
        </div>
    );
}

