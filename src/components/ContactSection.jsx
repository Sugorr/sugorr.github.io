import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function ContactSection () {
    const targetRef = useRef(null);
    const textInView = useInView(targetRef, { amount: "all"});

    
    return (
        <motion.div className="relative flex flex-col justify-center items-center md:gap-24 gap-12 md:mt-32 px-24 pt-12 pb-4">
            <motion.p ref={targetRef} initial={{ opacity: 0, y: 20 }} animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 20 }} className="md:text-9xl text-5xl text-center font-bold select-none">Let's work together!</motion.p>
            <p className="md:text-xl text-center">critizize.joaquin@gmail.com || reynerajoaquinpau@gmail.com || +63 906 577 3679</p>
            <div className="flex md:flex-row flex-col-reverse gap-2 text-center w-full md:text-sm text-xs justify-around items-center opacity-80">
                <p>COPYRIGHT © 2024 JOAQUIN REYNERA - ALL RIGHTS RESERVED.</p>
                <ul className="flex gap-12 font-bold justify-between items-center">
                    <li>
                        <a href="https://github.com/Sugorr">GITHUB</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/joaquin-reynera-11401127a/">LINKEDIN</a></li>
                    <li>
                        <a href="https://www.facebook.com/Sugorknows">FACEBOOK</a></li>
                </ul>
            </div>
        </motion.div>
    );
}