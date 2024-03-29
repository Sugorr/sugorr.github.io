import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion"

export default function WebProjects () { 

    return (
        <div className="relative flex justify-center items-center flex-col md:gap-24 gap-12">
            <div className="w-full flex flex-col justify-center lg:text-left text-center items-start lg:px-64 px-24">
                <motion.div className="text-[4dvh] font-bold">
                    Creating <span className="text-default-orange">websites</span>,
                </motion.div>
                <motion.div className="text-[4dvh] font-bold">
                    weaving joy into every click.
                </motion.div>
            </div>
            <AnimatePresence>
                <motion.div
                layoutRoot
                className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12 relative lg:py-16 py-8 lg:px-24 px-12 rounded-xl"
                    >
                    {webs.map((web) => {
                        return (
                            <Websites key={web.id} webs={web}/> 
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};


const Websites = ({ webs }) => {
    const [ isClicked, setIsClicked ] = useState(false);

    return (
        <motion.div
            className="group relative lg:w-[20dvw] sm:w-[30dvw] w-[40dvw] lg:h-[30dvh] h-[25dvh]">
                <div className="transition-all duration-500 absolute -top-2 -left-2 group-hover:top-0 group-hover:left-0 ease-out h-full w-full bg-default-orange/50 rounded-2xl"></div>
                
                <motion.div onClick={() => {setIsClicked(!isClicked)}} className={`transition-all duration-500 z-50 md:p-6 p-2 w-full h-full flex ${isClicked ? "lg:items-start items-center" : "items-center"} justify-center flex-col bg-default-white drop-shadow-md group-hover:cursor-pointer rounded-xl`}>
                    <motion.div layout layoutId={webs.id} className="md:text-2xl text-default-black font-bold px-5 py-3 tracking-wide rounded-lg select-none">
                        {webs.title}
                    </motion.div>
                    {!isClicked && (<div className="opacity-50 select-none">click here...</div>)}
                    {isClicked && (
                        <>
                        <motion.p
                            initial={{ opacity: 0, scale: 0, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: 0.25,
                            }} 
                            className="md:line-clamp-4 line-clamp-3 text-default-black font-li tracking-wide px-5 pt-4 select-none">
                                {webs.desc}
                            </motion.p>

                            <motion.a
                            href={webs.link}
                            target="_blank"
                            initial={{ opacity: 0, y: 25}}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.25,
                            }} 
                            className="p-4 underline cursor-pointer hover:text-default-orange">See Repo</motion.a>
                        </>
                        
                    )}
                </motion.div>

        </motion.div>
    );
}


const webs = [
    {
        title: "🕹️Tic Tac Toe",
        desc: "In a thrilling game of Tic Tac Toe, X strategically placed their mark in the center square, setting the stage for an intense showdown against O's diagonal dominance.",
        id: 1,
        link: "https://sugorr.github.io/game-tic-tac-toe/",
    },
    {
        title: "Blog Flow",
        desc: "The seamless platform I created, revolutionizes the way content is managed and shared, simplifying the blogging experience for all.",
        id: 2,
        link: "https://sugorr.github.io/blog-flow/",
    },
    {
        title: "🕹️Black Jack",
        desc: "Ace High Blackjack is an engaging online adaptation of the classic casino card game, designed to provide players with an immersive and thrilling experience.",
        id: 3,
        link: "https://sugorr.github.io/black-jack/",
    },
];