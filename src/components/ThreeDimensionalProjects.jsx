import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const gridContainerVariants = {
    hidden: {
        opacity: 0,
        y: 500,
        scaleY: 0.5,
    },
    show: {
        opacity: 1,
        y: 0,
        scaleY: 1,
        transition: {
            duration: 1.25,
            staggerChildren: 0.5,
        }
    }
}

const gridSquareVariants = {
    hidden: {
        opacity: 0,
        y: 120,
        scaleY: 0.9,
    },
    show: {
        opacity: 1,
        y: 0,
        scaleY: 1,
    }
}

export default function ThreeDimensionalProjects () {
    const targetRef = useRef();
    const isInView = useInView(targetRef, {margin: "0px 0px 900px 0px", once: "true"});

    return (
        <div  className="relative flex justify-center items-center flex-col gap-24 pb-72">
            <div className="flex justify-end text-right w-full py-12 px-[15dvw]">
                <div className="w-[420px] h-[420px] bg-default-blue/20 top-32 -left-96 absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-orange/20 bottom-48 left-32  absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-orange/20 -right-32  absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-blue/20 top-[32rem] right-32  absolute rounded-full blur-max -z-10"></div>
                <p className="font-quicksand lg:text-5xl">Sculpting worlds, molding joy, in<br/><span className="font-quicksand font-bold text-default-orange">three-dimensional</span>,delight.</p>
            </div>

            <motion.div
                ref={targetRef}
                variants={gridContainerVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="grid grid-auto grid-cols-4 md:gap-8 gap-2 w-[75dvw] h-[120dvw]"
                >
                    <motion.div 
                    variants={gridSquareVariants}
                    className="w-auto h-auto col-span-2 row-span-2 bg-default-orange/25 rounded-lg bg-web-1 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto col-span-2 row-span-3 bg-default-orange/25 rounded-lg bg-web-2 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto col-span-2 row-span-2 bg-default-orange/25 rounded-lg bg-web-8 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto col-span-2 bg-default-orange/25 rounded-lg bg-web-4 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto col-span-2 bg-default-orange/25 rounded-lg bg-web-5 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto col-span-2 row-span-2 bg-default-orange/25 rounded-lg bg-web-7 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto bg-default-orange/25 rounded-lg bg-web-3 bg-cover bg-center"></motion.div>
                    <motion.div
                    variants={gridSquareVariants}
                    className="w-auto h-auto bg-default-orange/25 rounded-lg bg-web-6 bg-cover bg-center"></motion.div>
            </motion.div>
        </div>
    );
}

