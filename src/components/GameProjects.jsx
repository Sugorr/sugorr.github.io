import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

export default function GameProjects() {
    const targetRef = useRef(null);
    const textRef = useRef(null);
    const textInView = useInView(textRef, { amount: "all", margin: "320px 0px 320px 0px"})
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])


    return (
        <section ref={targetRef} className="relative h-[200vh] items-center bg-default-black md:rounded-3xl rounded-xl">
            <motion.div ref={textRef} className="sticky top-0 flex h-screen items-center overflow-hidden md:py-32 py-12">
                <motion.div style={{ x }} className="h-full flex md:py-32 py-12 gap-12 items-center">
                    <motion.div className="relative h-full w-full md:px-32 px-4 flex flex-col justify-between items-start">
                        <motion.div
                        initial={{ y: 20, opacity: 0 }} 
                        animate={{ y: textInView ? 0 : 20, opacity: textInView ? 1 : 0, transition: {duration: 0.5}}} 
                        className="md:text-6xl text-4xl font-bold text-default-white">Game Projects</motion.div>
                        <motion.div 
                        initial={{ x: -20, opacity: 0 }} 
                        animate={{ x: textInView ? 0 : -20, opacity: textInView ? 1 : 0, transition: {duration: 0.8}}} 
                        className="md:text-3xl text-md text-default-white/50 font-semibold">Building <span className="text-default-orange">games</span>, fueled by fun and creativity!</motion.div>
                        <motion.a
                        initial={{ x: 20, opacity: 0 }} 
                        animate={{ x: textInView ? 0 : 20, opacity: textInView ? 1 : 0, transition: {duration: 1}}} 
                        href="https://sugordev.itch.io" target="_blank" className="md:text-2xl text-default-white bg-default-orange drop-shadow-sm rounded-xl px-10 py-2">
                            See All
                        </motion.a>
                    </motion.div>
                    {games.map((game) => (
                        <Game game={game} key={game.id}/>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
}

const Game = ({ game }) => {
    return (
        <div className={`group flex flex-col items-center ${game.bgColor} p-2 rounded-xl`}>
            <motion.div
                key={game.id}
                className={`relative md:h-[70vh] md:w-[70vh] h-[45vh] w-[45vh] flex item-center rounded-lg p-8 group-hover:p-4 transition-all duration-500 text-2xl overflow-hidden`} >
                <div className={`h-full w-full bg-default-orange rounded-xl ${game.bgImage} bg-cover bg-center`}></div>
            </motion.div>
            <div className={`flex w-full md:flex-row flex-col gap-4 justify-between items-center md:p-12 font-bold text-3xl`}>
                <p className={`${game.textColor} sm:text-3xl text-xl line-clamp-1 text-left`}>{game.title}</p>
                <a href={`${game.link}`} target="_blank" className={`px-8 py-2 rounded-xl text-xl font-normal text-default-white bg-default-orange`}>
                    Visit
                </a>
            </div>
        </div>
    );
};

const games = [
    {
        title: "Birdio",
        id: "1",
        link: "https://sugordev.itch.io/birdio",
        textColor: "text-default-white",
        bgColor: "bg-[#111215]",
        bgImage: "bg-game-1",
    },
    {
        title: "Knockout Farming",
        id: "2",
        link: "https://sugordev.itch.io/knockout",
        bgColor: "bg-[#FFD4AE]",
        bgImage: "bg-game-2",
    },
    {
        title: "Mageterian",
        id: "3",
        link: "https://sugordev.itch.io/mageterian",
        textColor: "text-default-white",
        bgColor: "bg-[#182F24]",
        bgImage: "bg-game-4",
    },
    {
        title: "Grab 'Em All",
        id: "4",
        link: "https://sugordev.itch.io/grab-em-all",
        bgColor: "bg-[#EFBBFF]",
        bgImage: "bg-game-3",
    },
    {
        title: "Pie Is Great",
        id: "5",
        link: "https://sugordev.itch.io/pie-is-great",
        bgColor: "bg-[#FFD4AE]",
        bgImage: "bg-game-5",
    },
];
