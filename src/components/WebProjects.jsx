import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion"

export default function WebProjects () { 
    const targetRef = useRef();
    const isInView = useInView(targetRef, {margin: "0px 0px -50px 0px", once: true});

    return (
        <div className="relative flex justify-center items-center flex-col gap-24 mb-72">
            <>
                <div className="w-[420px] h-[420px] bg-default-blue/20 top-32 -left-72 absolute rounded-full blur-max -z-10"></div>
                <div className="w-[420px] h-[420px] bg-default-orange/20 bottom-48 left-32  absolute rounded-full blur-max -z-10"></div>
            </>
            <div className="flex self-start items-center py-12 px-64 gap-32">
                <p className=" text-5xl">Creating <span className="font-bold text-default-orange">websites</span>,<br></br>weaving joy into every click.</p>
            </div>

            <motion.div
            ref={targetRef}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 250,
                },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1.2,
                        staggerChildren: 0.5,
                    }
                }
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden" }
            className="grid lg:grid-cols-3 grid-cols-2 grid-rows-2 gap-8 relative bg-default-white/5 py-16 px-24 rounded-xl"
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


const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Websites = (prop) => {
    const ref = useRef(null);

    const [ rotateX, setRotateX ] = useState(0);
    const [ rotateY, setRotateY ] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

        setRotateX(rX);
        setRotateY(rY);

    };

    const handleMouseLeave = () => {
        if (!ref.current) return;

        setRotateX(0);
        setRotateY(0);
    }
    
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX,
                rotateY,
            }}
            variants={{
                hidden: { opacity: 0, y: 250, },
                show: { opacity: 1, y: 0,  }
            }}
            className="group relative w-[25dvw] h-[35dvh]"
            >   
                <motion.div
                style={{
                    transform: "translateZ(125px)",
                    transformStyle: "preserve-3d",
                }}
                className="transition-all z-50 duration-500 p-6 w-full h-full flex justify-start items-left flex-col bg-default-black rounded-xl">
                    <motion.h4
                    style={{
                        transform: "translateZ(50px)"
                    }}
                    className="text-xl font-semibold tracking-wide my-4 self-start bg-default-white/10 px-5 py-3 rounded-lg"
                    >
                        {prop.title}</motion.h4>
                    <motion.p
                    style={{
                        transform: "translateZ(50px)"
                    }}
                    className="w-full h-full bg-default-white/10 px-5 py-3 rounded-lg"
                    >
                        {prop.desc}</motion.p>
                    <div
                    style={{
                        transform: "translateZ(-50px)"
                    }}
                    className="transition-all w-full h-full absolute top-0 left-0 -z-10 bg-default-white/25 outline rounded blur-xl opacity-0 group-hover:opacity-100 outline-default-white/25 group-hover:outline-[16px]"></div>
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