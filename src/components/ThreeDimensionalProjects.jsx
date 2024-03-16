import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const gridContainerVariants = {
    hidden: {
        opacity: 0,
        y: 500,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1.25,
            staggerChildren: 0.5,
        }
    }
}

const gridSquareVariants = {
    hidden: {
        opacity: 0,
        y: 120,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1.25,
        }
    }
}

export default function ThreeDimensionalProjects () {

    const targetRef = useRef();
    const isInView = useInView(targetRef, {margin: "0px 0px 900px 0px", once: "true"});

    return (
        <div  className="relative flex justify-center items-center flex-col gap-24 pb-32">
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
                className="grid grid-auto grid-cols-4 group md:gap-4 gap-2 w-[75dvw] h-[100dvw]"
                >
                    {Objects.map((obj, index) => (
                        <GridObject key={index} col={obj.col} row={obj.row} bg={obj.bg} />
                    ))}
            </motion.div>
        </div>
    );
}

const GridObject = ({ col, row, bg }) => {
    return (
        <motion.div 
            variants={gridSquareVariants}
            className={`w-auto h-auto relative hover:cursor-pointer ${col} ${row} bg-default-orange/25 rounded-lg ${bg} bg-cover bg-center overflow-hidden`}>
            </motion.div>
                    
    );
}


const Objects = [
    {
        id: "1",
        col: "col-span-2",
        row: "row-span-1",
        bg: "bg-web-1",
    },
    {
        id: "2",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-2",
    },
    {
        id: "3",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-8",
    },
    {
        id: "4",
        col: "col-span-2",
        row: "row-span-1",
        bg: "bg-web-4",
    },
    {
        id: "5",
        col: "col-span-2",
        row: "row-span-1",
        bg: "bg-web-5",
    },
    {
        id: "6",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-7",
    },
    {
        id: "7",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-3",
    },
    {
        id: "8",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-6",
    },
]