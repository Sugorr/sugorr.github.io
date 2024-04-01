import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, cubicBezier, motion, useInView } from "framer-motion";



export default function ThreeDimensionalProjects () {
    const textRef = useRef(null);
    const textIsInView = useInView( textRef, { once: true, amount: "all" } );

    return (
        <div  className="relative flex justify-center items-center flex-col lg:gap-24 gap-12 py-32">
            <div className="flex flex-col md:gap-8 gap-2 justify-end md:text-right text-center w-full md:py-12 py-4 px-[15dvw]">
                <motion.p ref={textRef} initial={{ opacity: 0 }} animate={{ opacity: textIsInView ? 1 : 0, y: textIsInView ? 0 : 100, transition: { duration: 0.3 } }}className=" lg:text-5xl text-xl">Sculpting worlds, molding joy, in</motion.p>
                <motion.p ref={textRef} initial={{ opacity: 0 }} animate={{ opacity: textIsInView ? 1 : 0, y: textIsInView ? 0 : 100, transition: { duration: 0.6, delay: 0.3 } }}className=" lg:text-5xl text-xl"><span className="font-bold text-default-orange">three-dimensional</span>,delight.</motion.p>
            </div>

            <motion.div
                className="grid grid-auto grid-cols-4 group md:gap-4 gap-2 w-[70dvw] h-[140dvw] overflow-hidden"
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
    const isInView = useInView(targetRef, { margin: "200px 0px 0px 0px", once: "true"});

    const [ isHovered, setIsHovered ] = useState(false);

    const [ selectedId, setSelectedId ] = useState(null);

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
                    y:  isInView ? 0 : 20,
                    transition: {
                        duration: 1.2,
                        delay: 0.5,
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
                className="fixed p-8 inset-0 grid grid-cols-4 backdrop-blur-md z-20 bg-default-white/15 place-items-center overflow-y-scroll">
                    <motion.div
                    layoutId={selectedId}
                    className={`w-[80dvh] h-[80dvh] relative col-start-2 col-span-2 row-span-2 rounded-lg ${bg} bg-cover bg-center overflow-hidden`}>
                        <motion.div
                        initial={{ rotate: 0, size: 1}}
                        whileHover={{
                            size: 1.2,
                            rotate: 360,
                            transition: {
                                duration: 1,
                                ease: "easeInOut",
                                type: "spring",
                                repeat: Infinity,
                                repeatType: "loop",
                                repeatDelay: 0.25,
                            },
                        }}
                        className="absolute top-4 right-4 rounded-xl grid place-content-center w-16 h-16 bg-default-orange">
                            <motion.svg

                            fill="#F1ECEC" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 460.775 460.775" xml:space="preserve">
                                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                    c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                    c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                    c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                    l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                    c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                            </motion.svg>
                        </motion.div>
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
    },
    {
        id: "2",
        col: "col-span-2",
        row: "row-span-3",
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
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-4",
    },
    {
        id: "5",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-5",
    },
    {
        id: "6",
        col: "col-span-2",
        row: "row-span-3",
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
    {
        id: "9",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-9",
    },
    {
        id: "10",
        col: "col-span-2",
        row: "row-span-2",
        bg: "bg-web-10",
    },
    {
        id: "11",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-11",
    },
    {
        id: "12",
        col: "col-span-1",
        row: "row-span-1",
        bg: "bg-web-12",
    },
]