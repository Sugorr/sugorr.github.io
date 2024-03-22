import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function GameProjects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"])

    return (
        <section ref={targetRef} className="relative py-24 h-[300dvh]">
            <div className="sticky top-0 flex h-screen items-center bg-default-black overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12">
                    <div className="h-[60dvh] w-[60dvh] pl-32 flex flex-col justify-around items-start">
                        <motion.div className="text-[4dvw] font-bold text-default-white">Game <br /> Projects</motion.div>
                        <motion.div className="text-3xl text-default-white/50 font-semibold">Building <span className="text-default-white">games</span>, fueled <br /> by fun and creativity!</motion.div>
                        <motion.div className="text-2xl text-default-white bg-default-orange drop-shadow-sm rounded-xl px-10 py-2">
                            Contact
                        </motion.div>
                    </div>
                    {games.map((game) => (
                        <Game game={game} key={game.id}/>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const Game = ({ game }) => {
    return (
        <div className="group flex flex-col drop-shadow-sm bg-default-white p-2 rounded-xl">
            <motion.div
                key={game.id}
                className={`relative h-[60dvh] w-[60dvh] flex flex-col ${game.bgColor} text-default-black rounded-lg p-8 group-hover:p-4 transition-all duration-500 text-2xl overflow-hidden`} >
                <div className={`h-full bg-default-orange rounded-xl ${game.bgImage} bg-cover bg-center`}></div>
            </motion.div>
            <div className={`flex justify-between items-center p-12 font-bold text-3xl`}>
                <p>{game.title}</p>
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
        bgColor: "bg-default-black",
        bgImage: "bg-game-1",
    },
    {
        title: "Knockout Farming",
        id: "2",
        link: "",
        bgColor: "bg-[#FFD4AE]",
        bgImage: "bg-game-2",
    },
    {
        title: "Mageterian",
        id: "3",
        link: "",
        bgColor: "bg-[#182F24]",
        bgImage: "bg-game-4",
    },
    {
        title: "Grab 'Em All",
        id: "4",
        link: "",
        bgColor: "bg-[#EFBBFF]",
        bgImage: "bg-game-3",
    },
    {
        title: "Sample Game",
        id: "5",
        link: "",
        bgColor: "bg-[#FFD4AE]",
        bgImage: "bg-game-5",
    },
];
