
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

    return (
        <div ref={ targetRef } className='relative lg:px-64 px-10 py-12 text-center h-dvh flex justify-start items-center flex-col gap-4 overflow-hidden'> 
            <div className="relative text-center font-extrabold lg:text-[5dvh] text-[4dvh]">
                <motion.div
                    style={{ translateX: textLeftX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.5 }}
                >
                    I'm Joaquin Reynera,
                </motion.div>

                <motion.p 
                    style={{ translateX: textRightX, translateY: textUp }}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 1}}
                >
                    Creative <span className="text-default-orange">Frontend & Game</span>
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
            initial={{ opacity: 0, y: 15}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1}}
            className='md:text-2xl text-xl font-regular text-default-black w-1/2'>
                I develop accessible, responsive, interactive, and animated websites with a strong focus on performance.
            </motion.p>

            <motion.div className="bg-web-13 bg-center bg-contain bg-no-repeat w-full h-full">
                
            </motion.div>
        </div>
    );
}

