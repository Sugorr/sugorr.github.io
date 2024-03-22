import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"

export default function WebProjects () { 

    return (
        <div className="relative flex justify-center items-center flex-col gap-24">
            <div className="w-full flex flex-col justify-center items-start px-64">
                <motion.div className="text-[4dvh] font-bold">
                    Creating <span className="text-default-orange">websites</span>,
                </motion.div>
                <motion.div className="text-[4dvh] font-bold">
                    weaving joy into every click.
                </motion.div>
            </div>
            <motion.div
            className="grid grid-cols-3 grid-rows-2 gap-12 relative py-16 px-24 rounded-xl"
                >
                {webs.map((web) => {
                    return (
                        <Websites key={web.id} webs={web}/> 
                    );
                })}
            </motion.div>
        </div>
    );
};


const Websites = ({ webs }) => {
    const [ isClicked, setIsClicked ] = useState(false);

    return (
        <motion.div
            className="group relative w-[20dvw] h-[30dvh]">
                <div className="transition-all duration-500 absolute -top-4 -left-4 group-hover:top-0 group-hover:left-0 ease-out h-full w-full bg-default-orange/50 rounded-2xl"></div>
                
                <motion.div layoutRoot onClick={() => {setIsClicked(!isClicked)}} className={`transition-all duration-500 z-50 p-6 w-full h-full flex ${isClicked ? "items-start" : "items-center"} justify-center flex-col bg-default-white drop-shadow-md group-hover:cursor-pointer rounded-xl`}>
                    <motion.div layout layoutId={webs.id} className="text-2xl text-default-black font-bold px-5 py-3 tracking-wide rounded-lg select-none">
                        {webs.title}
                    </motion.div>
                    {isClicked && (
                        <motion.p layout
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.25,
                        }} 
                        className="w-full h-full text-default-black font-li tracking-wide px-5 py-6 select-none">
                            {webs.desc}
                        </motion.p>
                    )}
                </motion.div>
        </motion.div>
    );
}


const webs = [
    {
        title: "game-tic-tac-toe",
        desc: "In a thrilling game of Tic Tac Toe, X strategically placed their mark in the center square, setting the stage for an intense showdown against O's diagonal dominance.",
        id: 1,
    },
    {
        title: "Blog Flow",
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        id: 2,
    },
    {
        title: "Blog Flow",
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum",
        id: 3,
    },
    {
        title: "Blog Flow",
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        id: 4,
    },
    {
        title: "Blog Flow",
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        id: 5,
    },
    {
        title: "Blog Flow",
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        id: 6,
    },
];