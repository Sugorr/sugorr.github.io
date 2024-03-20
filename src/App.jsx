import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import HeroBanner from "./components/HeroBanner.jsx"
import WebProjects from "./components/WebProjects.jsx"
import GameProjects from "./components/GameProjects.jsx"
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects.jsx"
import LargeTexts from "./components/LargeTexts.jsx"
import MouseCursor from "./components/sub-components/MouseCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import Spline from "@splinetool/react-spline";


export default function App () {
    const contentRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: contentRef,
    });
  
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, damping: 40, restDelta: 0.001 });
    
    const elementHeight = window.innerHeight;

    const y = useTransform(smoothProgress, [0, 1], ["0", `${elementHeight}`]);
  

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.2 } }}className="fixed w-screen h-screen z-[100]">
                <Spline scene="https://prod.spline.design/Mwof4fIuiuHoa-li/scene.splinecode" />
            </motion.div>
            <MouseCursor />
            <motion.div ref={contentRef} style={{ y }}>
                <Navbar />
                <HeroBanner />
                <ThreeDimensionalProjects />
                <LargeTexts />
            </motion.div>
        </>
        
    );
}