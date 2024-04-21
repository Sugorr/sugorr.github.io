import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroBanner from "./components/HeroBanner.jsx"
import WebProjects from "./components/WebProjects.jsx"
import GameProjects from "./components/GameProjects.jsx"
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects.jsx"
import LargeTexts from "./components/LargeTexts.jsx"
import Navbar from "./components/Navbar.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import PreloaderSect from "./components/PreloaderSect.jsx";


export default function App () {
    const [ preLoaded, setPreLoaded ] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setPreLoaded(true);
        }, 1800);
    }, []);

    return (
        <>
            <AnimatePresence>
                {!preLoaded && (
                    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, }}>
                        <PreloaderSect />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.2 } }}className="fixed w-screen h-screen z-[100]">
                <Spline scene="https://prod.spline.design/Mwof4fIuiuHoa-li/scene.splinecode" />
            </motion.div> */}
            {/* <MouseCursor /> */}
            {preLoaded && (
                <>
                    <Navbar />
                    <HeroBanner />
                    <WebProjects /> {/* Make sure to add this id */}
                    <GameProjects />
                    <ThreeDimensionalProjects />
                    <LargeTexts />
                    <SkillsSection />
                    <ContactSection /> {/* Make sure to add this id */}
                </>
            )}
        </>
        
    );
}