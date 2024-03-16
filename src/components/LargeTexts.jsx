import { useInView, motion, easeIn } from "framer-motion";
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
            ease: "easeOut",
        }
    }
}

const textVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
    }
}

const containerTextVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.55,
            ease: "easeOut",
        }
    }
}

const textLargeVariants = {
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
    const textInView = useInView(textRef)

    const firstList = useRef(null);
    const firstListInView = useInView(firstList);

    const secondList = useRef(null);
    const secondListInView = useInView(secondList);

    return (
        <>
            <motion.div
            ref={textRef} variants={containerTextVariants} initial="hidden" animate={textInView ? "show" : "hidden"}
            className="flex flex-col justify-center items-center py-48 text-[5dvh] text-center font-bold">
                <motion.p variants={textLargeVariants}>Mastery comes from <span className="text-default-orange">learning</span> one </motion.p>
                <motion.p variants={textLargeVariants}>lesson at a time and <span className="text-default-orange">developing</span> </motion.p>
                <motion.p variants={textLargeVariants}>expertise.</motion.p>
            </motion.div>

            <div className="flex flex-col justify-center items-center">
                <motion.ul
                    ref={firstList} variants={containerVariants} initial="hidden" animate={firstListInView ? "show" : "hidden"}
                    className="group h-full  w-full my-32 font-extrabold tracking-wide text-[5dvw]">
                    {FirstTextList.map((item, index) => (
                        <ListedItem key={index} text={item.text} />
                    ))}
                </motion.ul>
                <motion.ul
                    ref={secondList} variants={containerVariants} initial="hidden" animate={secondListInView ? "show" : "hidden"}
                    className="group h-full w-full my-32 font-extrabold text-right tracking-wide text-[5dvw]">
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
            variants={textVariants} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`relative px-12 overflow-hidden transition-all duration-500 filter ${hoveredItem ? "" : "group-hover:blur-md"}`}>
            <div className="">
                {text}
            </div>
            {hoveredItem ?
                <motion.div
                initial={{
                    scaleY: 0,
                    originY: 1,
                }}
                animate={{
                    scaleY: 1,
                    }
                }
                className="absolute bottom-0 left-0 w-full h-full px-12 bg-default-orange text-default-black">{text}</motion.div>
                : <></>
                }
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
