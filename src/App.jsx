import React, { useRef } from "react";

import HeroBanner from "./components/HeroBanner.jsx"
import WebProjects from "./components/WebProjects.jsx"
import GameProjects from "./components/GameProjects.jsx"
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects.jsx"
import LargeTexts from "./components/LargeTexts.jsx"
import Navbar from "./components/Navbar.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";


export default function App () {

    return (
        <>
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.2 } }}className="fixed w-screen h-screen z-[100]">
                <Spline scene="https://prod.spline.design/Mwof4fIuiuHoa-li/scene.splinecode" />
            </motion.div> */}
            {/* <MouseCursor /> */}
            <Navbar />
            <HeroBanner />
            <WebProjects />
            <ThreeDimensionalProjects />
            <GameProjects />
            <LargeTexts />
            <SkillsSection />
            <ContactSection />
        </>
        
    );
}