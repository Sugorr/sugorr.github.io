import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, cubicBezier, motion, useInView } from "framer-motion";



export default function ThreeDimensionalProjects () {

    return (
        <div  className="relative flex justify-center items-center flex-col gap-24 pb-32">
            <div className="flex justify-end text-right w-full py-12 px-[15dvw]">
                <div className="w-[420px] h-[420px] bg-default-blue/20 top-32 -left-96 absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-orange/20 bottom-48 left-32  absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-orange/20 -right-32  absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-blue/20 top-[32rem] right-32  absolute rounded-full blur-max -z-10"></div>
                <p className=" lg:text-5xl">Sculpting worlds, molding joy, in<br/><span className=" font-bold text-default-orange">three-dimensional</span>,delight.</p>
            </div>

            <motion.div
                className="grid grid-auto grid-cols-4 group md:gap-4 gap-2 w-[75dvw] h-[100dvw]"
                >
                    {Objects.map((obj, index) => (
                        <GridObject key={index} col={obj.col} row={obj.row} bg={obj.bg} dir={obj.dir} id={obj.id}/>
                    ))}
            </motion.div>
        </div>
    );
}


const GridObject = ({ id, col, row, bg, dir, objSize }) => {
    const targetRef = useRef({});
    const isInView = useInView(targetRef, {margin: "150px 0px -150px 0px"});

    const [ isHovered, setIsHovered ] = useState(false);

    const [ selectedId, setSelectedId ] = useState(null);

    const randomNum = Math.random() * (1 - 0.5) + 0.5;

    const OnMouseEntered = () => {
        setIsHovered(true);
    }

    const OnMouseLeave = () => {
        setIsHovered(false);
    }



    return (
        <>
            <motion.div
                ref={targetRef}
                layout
                initial={{
                    opacity: 0,
                    x: dir,
                }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    x:  isInView ? 0 : dir * randomNum,
                    transition: {
                        duration: 1.2 * randomNum,
                        delay: 0.5 * randomNum,
                        ease: cubicBezier(0.190, 1.000, 0.220, 1.000),
                    }
                }}
                onMouseEnter={OnMouseEntered}
                onMouseLeave={OnMouseLeave}
                layoutId={id}
                onClick={() => setSelectedId(id)}
                className={`w-auto h-auto relative ${col} ${row} rounded-lg ${bg} bg-cover bg-center overflow-hidden ${selectedId ? "z-20" : ""}`}>
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{
                                    backdropFilter: "blur(0px)",
                                }}
                                animate={{
                                    backdropFilter: "blur(6px)",
                                }}
                                exit={{
                                    backdropFilter: "blur(0px)",
                                }}
                                className="absolute top-0 left-0 w-full h-full"
                            >
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
            </motion.div>
            <AnimatePresence>
                { selectedId &&
                (<motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                onClick={() => setSelectedId(null)}
                className="fixed p-8 inset-0 backdrop-blur-sm z-20 grid place-items-center overflow-y-scroll">
                    <motion.div
                    layoutId={selectedId}
                    className={`w-[80dvw] h-[80dvh] relative ${col} ${row} rounded-lg ${bg} bg-cover bg-center overflow-hidden`}>
                    
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </>            
    );
}


const Objects = [
    {
        id: "1",
        col: "col-span-2",
        row: "row-span-1",
        bg: "bg-web-1",
        dir: -300,
    },
    {
        id: "2",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-2",
        dir: 300,

    },
    {
        id: "3",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-8",
        dir: -300,

    },
    {
        id: "4",
        col: "col-span-2",
        row: "row-span-1",
        bg: "bg-web-4",
        dir: 300,
    },
    {
        id: "5",
        col: "col-span-2",
        row: "row-span-1",
        bg: "bg-web-5",
        dir: -300,
    },
    {
        id: "6",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-7",
        dir: 300,
    },
    {
        id: "7",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-3",
        dir: -300,
    },
    {
        id: "8",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-6",
        dir: 300,
    },
]