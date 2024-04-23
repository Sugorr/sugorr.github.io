import { useInView, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.35,
        }
    }
}

const textContainerVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
    }
}

const containerSloganVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            staggerChildren: 0.55,
        }
    }
}

const textSloganVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        
    }
}

export default function LargeTexts() {
    const textRef = useRef(null);
    const textInView = useInView(textRef, {margin: "0px 0px -220px 0px"})

    const firstList = useRef(null);
    const firstListInView = useInView(firstList, {margin: "0px 0px -180px 0px"});

    const secondList = useRef(null);
    const secondListInView = useInView(secondList, {margin: "0px 0px -180px 0px"});

    return (
        <>
            <motion.div
            ref={textRef} variants={containerSloganVariants} initial="hidden" animate={textInView ? "show" : "hidden"}
            className="flex flex-col justify-center items-center md:gap-12 lg:py-32 py-6 md:text-[6vh] text-2xl text-center font-bold">
                <motion.p variants={textSloganVariants}>Mastery comes from <span className="text-default-orange">learning</span> one </motion.p>
                <motion.p variants={textSloganVariants}>lesson at a time and <span className="text-default-orange">developing</span> </motion.p>
                <motion.p variants={textSloganVariants}>expertise.</motion.p>
            </motion.div>

            <div className="relative flex flex-col justify-center items-center">
                <motion.ul
                    ref={firstList} variants={containerVariants} initial="hidden" animate={firstListInView ? "show" : "hidden"}
                    className="group w-full md:my-32 my-4 font-extrabold tracking-wide md:text-[10vh] text-[5vh]">
                    {FirstTextList.map((item, index) => (
                        <ListedItem key={index} text={item.text} />
                    ))}
                </motion.ul>
                
                <motion.ul
                    ref={secondList} variants={containerVariants} initial="hidden" animate={secondListInView ? "show" : "hidden"}
                    className="group w-full md:my-32 my-12 font-extrabold text-right tracking-wide md:text-[10vh] text-[5vh]">
                    {SecondTextList.map((item, index) => (
                        <ListedItem key={index} text={item.text} index={index} />
                    ))}
                </motion.ul>
            </div>
        </>
    );
}


const ListedItem = ({ text, index }) => {
    const [hoveredItem, setHoveredItem] = useState();

    const onMouseEnter = () => {
        setHoveredItem(true);
    }

    const onMouseLeave = () => {
        setHoveredItem(false);
    }

    return (
            <motion.li
                variants={textContainerVariants}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={`relative md:px-12 px-4 py-2 overflow-hidden transition-color duration-300 filter bg-clip-content ${hoveredItem ? "text-default-white" : "group-hover:blur-md"}`}>
                    {text}
                <AnimatePresence>
                    { hoveredItem && ( 
                        <motion.div
                            initial={{
                                scaleY: 0,
                                originY: 0.5,
                            }}
                            animate={{
                                scaleY: 1,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeOut"
                                }
                            }}
                            exit={{
                                scaleY: 0,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                }
                            }}
                            className="absolute top-0 left-0 -z-10 w-full h-full px-12 py-2 bg-default-orange text-default-white">
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.li>
    );
}


const FirstTextList = [
    {
        text: "I am"
    },
    {
        text: "Experienced"
    },
    {
        text: "Passionate"
    },
    {
        text: "Creative"
    },
    {
        text: "Developer"
    },
];

const SecondTextList = [
    {
        text: "I do"
    },
    {
        text: "Frontend"
    },
    {
        text: "Game Dev"
    },
    {
        text: "Pixel Art"
    },
    {
        text: "Animations"
    },
];
