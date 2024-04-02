
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import whiteVector from "../assets/Vector.svg"

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

    return (
        <div ref={ targetRef } className='relative md:px-64 px-4 md:py-32 py-24 text-center flex justify-start items-center flex-col gap-4 overflow-hidden'> 
            <div className="relative flex flex-col items-center text-center font-extrabold md:text-[8vh] text-[4vh]">
                <motion.div
                    style={{ translateX: textLeftX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.5 }}
                >
                    I'm Joaquin Reynera
                </motion.div>

                <motion.p 
                    style={{ translateX: textRightX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 1}}
                    className="text-nowrap"
                >
                    Creative <span className="text-default-orange">Frontend</span> & <span className="text-default-orange">Game</span>
                </motion.p>
                
                <motion.div
                    style={{ translateX: textLeftDelayX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.5 }}
                >
                    Developer
                </motion.div>
            </div>
            <motion.p
            style={{ translateY: textUp, opacity: opacityScroll }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
            className='md:text-2xl sm:text-xl text-sm font-regular text-default-black md:w-1/2'>
                I develop accessible, responsive, interactive, and animated websites with a strong focus on performance.
            </motion.p>
        </div>
    );
}

