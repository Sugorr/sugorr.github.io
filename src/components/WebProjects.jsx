import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"

export default function WebProjects () { 

    return (
        <div className="relative flex justify-center items-center flex-col gap-24">
            <div className="w-full flex flex-col justify-center items-start px-64">
                <motion.div className="text-[5dvh] font-bold">
                    Creating <span className="text-default-orange">websites</span>,
                </motion.div>
                <motion.div className="text-[5dvh] font-bold">
                    weaving joy into every click.
                </motion.div>
            </div>
            <motion.div
            className="grid grid-cols-3 grid-rows-2 gap-12 relative py-16 px-24 rounded-xl"
                >
                {webs.map((web) => {
                    return (
                        <Websites key={web.id} title={web.title} desc={web.desc}/> 
                    );
                })}
            </motion.div>
        </div>
    );
};


const Websites = (prop) => {

    return (
        <motion.div
            className="group relative w-[25dvw] h-[35dvh]">
                <div className="transition-all duration-500 ease-out h-full w-full outline outline-2 outline-default-orange/50 rounded-xl"></div>
                
                <motion.div className="transition-all duration-500 absolute top-2 left-2 group-hover:top-0 group-hover:left-0 z-50 p-6 w-full h-full flex justify-start items-left flex-col bg-default-white group-hover:cursor-pointer rounded-xl">
                    <motion.div className="text-3xl text-default-black font-bold px-5 py-3 tracking-wide self-start rounded-lg">
                        {prop.title}
                    </motion.div>
                    <motion.p className="w-full h-full text-default-black font-li tracking-wide px-5 py-6">
                        {prop.desc}
                    </motion.p>
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