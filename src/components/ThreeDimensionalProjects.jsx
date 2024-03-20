import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, cubicBezier, motion, useInView } from "framer-motion";



export default function ThreeDimensionalProjects () {
    const textRef = useRef(null);
    const textIsInView = useInView(textRef);

    return (
        <div  className="relative flex justify-center items-center flex-col gap-24 pb-32">
            <div className="flex flex-col gap-8 justify-end text-right w-full py-12 px-[15dvw]">
                <motion.p ref={textRef} initial={{ opacity: 0 }} animate={{ opacity: textIsInView ? 1 : 0, y: textIsInView ? 0 : 100, transition: { duration: 0.3 } }}className=" lg:text-5xl">Sculpting worlds, molding joy, in</motion.p>
                <motion.p ref={textRef} initial={{ opacity: 0 }} animate={{ opacity: textIsInView ? 1 : 0, y: textIsInView ? 0 : 100, transition: { duration: 0.6, delay: 0.3 } }}className=" lg:text-5xl"><span className="font-bold text-default-orange">three-dimensional</span>,delight.</motion.p>
            </div>

            <motion.div
                className="grid grid-auto grid-cols-4 group md:gap-4 gap-2 w-[85dvw] h-[170dvw] overflow-hidden"
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
    const isInView = useInView(targetRef, { margin: "200px 0px 200px 0px"});

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
                                className="absolute top-0 bg-default-black/25 left-0 w-full h-full"
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
                className="fixed p-8 inset-0 backdrop-blur-md z-20 grid bg-default-white place-items-center overflow-y-scroll">
                    <motion.div
                    layoutId={selectedId}
                    className={`w-[80dvw] h-[90dvh] relative ${col} ${row} rounded-lg ${bg} bg-cover bg-center overflow-hidden`}>
                    
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
        dir: -100,
    },
    {
        id: "2",
        col: "col-span-2",
        row: "row-span-3",
        bg: "bg-web-2",
        dir: 100,

    },
    {
        id: "3",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-8",
        dir: -100,

    },
    {
        id: "4",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-4",
        dir: 100,
    },
    {
        id: "5",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-5",
        dir: -100,
    },
    {
        id: "6",
        col: "col-span-2",
        row: "row-span-3",
        bg: "bg-web-7",
        dir: 100,
    },
    {
        id: "7",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-3",
        dir: 100,
    },
    {
        id: "8",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-6",
        dir: 100,
    },
    {
        id: "9",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-9",
        dir: 100,
    },
    {
        id: "10",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-10",
        dir: 100,
    },
    {
        id: "11",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-11",
        dir: 100,
    },
    {
        id: "12",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-12",
        dir: 100,
    },
]