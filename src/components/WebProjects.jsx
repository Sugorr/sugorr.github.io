import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion"

export default function WebProjects () { 

    return (
        <div className="relative flex justify-center items-center flex-col md:gap-24 gap-12 mb-32">
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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
            }}
            className="group relative lg:w-[25dvw] sm:w-[30dvw] w-[30vh] lg:h-[35vh] h-[25vh]">
                <div className="transition-all duration-500 absolute -top-2 -left-2 group-hover:top-0 group-hover:left-0 ease-out h-full w-full bg-default-orange/50 rounded-2xl -z-10"></div>
                
                <motion.div onClick={() => {setIsClicked(!isClicked)}} className={`transition-all ease-in duration-75 z-50 md:p-6 p-2 w-full h-full flex ${isClicked ? "lg:items-start items-center" : "items-center"} justify-center items-start flex-col bg-default-white drop-shadow-md group-hover:cursor-pointer rounded-xl`}>
                    <motion.div layout layoutId={webs.id} className="md:text-3xl text-default-black font-bold px-5 py-3 tracking-wide rounded-lg select-none">
                        {webs.title}
                    </motion.div>
                    {!isClicked && (<div className="text-default-black opacity-50 select-none">click here...</div>)}
                    {isClicked && (
                        <>
                            <motion.p
                            initial={{ opacity: 0, scale: 0, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: 0.25,
                            }} 
                            className=" md:text-lg md:line-clamp-6 line-clamp-3 text-xs text-default-black tracking-wide px-5 md:py-4 select-none">
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
                            className="md:px-5 md:my-3 px-5 py-2 md:text-base text-xs underline text-left w-full cursor-grab text-default-black hover:text-default-orange">See Website</motion.a>
                        </>
                        
                    )}
                </motion.div>
        </motion.div>
    );
}


const webs = [
    {
        title: 'Sikreto',
        desc: "Share your untold stories, unburden your secrets, and discover the power of anonymous expression in a safe and supportive community.",
        id: 1,
        link: "https://my-sikreto.web.app",
    },
    {
        title: "Tic Tac Toe",
        desc: "In a thrilling game of Tic Tac Toe, X strategically placed their mark in the center square, setting the stage for an intense showdown against O's diagonal dominance.",
        id: 2,
        link: "https://sugorr.github.io/game-tic-tac-toe/",
    },
    {
        title: "Black Jack",
        desc: "Ace High Blackjack is an engaging online adaptation of the classic casino card game, designed to provide players with an immersive and thrilling experience.",
        id: 3,
        link: "https://sugorr.github.io/black-jack/",
    },
];