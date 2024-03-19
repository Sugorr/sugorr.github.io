import { motion, useTransform, useScroll, useSpring, useInView, spring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function GameProjects () {
    
    return (
        <div className="flex justify-center items-center flex-col mb-48">
            <GameCardsCarousel />
        </div>
    );
}

const GameCardsCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const scaleX = useSpring(scrollYProgress, { stiffness: 900, damping: 240, });

    const x = useTransform(scaleX, [0, 1], ["35%", "-40%"]);

    
    const ref = useRef();
    const isInView = useInView(ref, {margin: "0px 0px -120px 0px"});

    return (
        <div ref={targetRef} className="relative h-[300vh] flex justify-center items-start bg-transparent">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12">
                    <div className="flex justify-around items-start flex-col">
                        <div className="w-[320px] h-[320px] bg-default-blue/25 top-[28rem] -left-96 absolute rounded-full blur-max -z-10"></div>
                        <div className="w-[320px] h-[320px] bg-default-orange/25 -left-72  absolute rounded-full blur-max -z-10"></div>

                        <motion.p
                            ref={ref}
                            initial={{opacity: 0}}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                y: isInView ? 0 : 50,
                                transition: {
                                    duration: 0.5,
                                }
                            }}
                            className="text-7xl font-bold"
                            >
                                Game<br />Projects</motion.p>
                        <motion.p
                            ref={ref}
                            initial={{opacity: 0}}
                            animate={{
                                opacity: isInView ? 1 : 0,
                                x: isInView ? 0 : 50,
                                transition: {
                                    duration: 0.5,
                                }
                            }}
                            className="text-4xl py-24 text-default-white/50">Building <span className="font-quicksand font-bold text-default-orange"
                            >
                                games</span>, fueled<br></br> by fun and creativity!</motion.p>
                        <button className="bg-default-orange py-2 px-6 rounded-xl text-xl tracking-wide">Contact</button>
                    </div>
                    {games.map((game) => {
                        return <Game game={game} key={game.id} />;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

const Game = ({ game }) => {
    const sampleRef = useRef(null);

    return (
        <motion.div
            ref={sampleRef}
            key={game.id}
            initial={{
                scale: 1,
                originX: 0.5,
                originY: 1,
            }}
            whileHover={{
                scale: 1.02,
                originX: 0.5,
                originY: 1,
                transition: {
                    duration: 0.35,
                    ease: "easeInOut",
                }
            }}
            className={`relative h-[75dvh] w-[85dvh] ${game.bgColor} text-default-black rounded-2xl p-8 text-2xl overflow-hidden`}>
            <div className={`flex justify-between items-center pb-12`}>
                <p className={`${game.textColor}`}>{game.title}</p>
                <button onClick={() => {
                }} className={`${game.textColor} flex justify-normal items-center gap-4`}>
                    Visit
                    <div className="rounded-full bg-white w-6 h-6"></div>
                </button>
            </div>

            <div className={`h-full bg-default-orange rounded-t-xl ${game.bgImage} bg-cover bg-center`}></div>
        </motion.div>
    );
};

const games = [
    {
        title: "Birdio",
        id: "1",
        url: "",
        bgColor: "bg-default-black",
        bgImage: "bg-game-1",
        textColor: "text-default-white",
    },
    {
        title: "Knockout Farming",
        id: "2",
        url: "",
        bgColor: "bg-[#FFD4AE]",
        bgImage: "bg-game-2",
        textColor: "text-default-black",
    },
    {
        title: "Mageterian",
        id: "3",
        url: "",
        bgColor: "bg-[#182F24]",
        bgImage: "bg-game-4",
        textColor: "text-default-white",
    },
    {
        title: "Grab 'Em All",
        id: "4",
        url: "",
        bgColor: "bg-[#EFBBFF]",
        bgImage: "bg-game-3",
        textColor: "text-default-black",
    },
    {
        title: "Sample Game",
        id: "5",
        url: "",
        bgColor: "bg-[#FFD4AE]",
        bgImage: "bg-game-5",
        textColor: "text-default-black",
    },
];