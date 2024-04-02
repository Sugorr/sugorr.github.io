import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import HeroBanner from "./components/HeroBanner.jsx"
import WebProjects from "./components/WebProjects.jsx"
import GameProjects from "./components/GameProjects.jsx"
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects.jsx"
import LargeTexts from "./components/LargeTexts.jsx"
import Navbar from "./components/Navbar.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";


export default function App () {
    const [ preLoaded, setPreLoaded ] = useState(false);

    useEffect (() => {
        setTimeout(() => {
            setPreLoaded(true);
        }, 2600);
    }, []);

    return (
        <>
            {!preLoaded && (
                <div className="w-screen h-screen absolute z-[100] bg-default-white grid place-content-center">
                    <motion.svg
                    initial={{ rotate: 0, opacity: 0}}
                    animate={{
                        rotate: 720,
                        opacity: 1,
                        transition: {
                            duration: 1.5,
                            ease: "easeInOut",
                            type: "spring",
                            delay: 0.35,
                        },
                    }}
                    width="72" height="72" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.8535 19C42.187 19 46.9616 27.9667 47.4 28.348L47.4829 28.4201C48.1724 29.02 48.1724 29.8932 47.4829 30.4931L47.4 30.5652C46.9609 30.9471 36.5003 48 23.1668 48C12.8506 48 4.25486 34.5457 0.688667 31.94C-0.293283 31.2221 -0.212646 30.0453 0.853756 29.3951C1.79578 28.821 2.98366 28.2076 3.85352 28.8393C6.93219 31.0755 14.6509 41.9514 23.166 41.9514C31.7602 41.9514 38.3364 34.3051 39.6922 30.9591C39.6922 28.4201 37.1364 25.4569 30.3342 24.3097C27.9119 23.9022 28.8535 20.8113 28.8535 19Z" fill="#12161E"/>
                        <path d="M19.1465 29C5.813 29 1.03838 20.0333 0.599996 19.652L0.517078 19.5799C-0.172359 18.98 -0.172359 18.1068 0.517078 17.5069L0.599996 17.4348C1.03915 17.0529 11.4997 0 24.8332 0C35.1494 0 43.7451 13.4543 47.3113 16.06C48.2933 16.7779 48.2126 17.9547 47.1462 18.6049C46.2042 19.179 45.0163 19.7924 44.1465 19.1607C41.0678 16.9245 33.3491 6.04859 24.834 6.04859C16.2398 6.04859 9.66357 13.6949 8.30777 17.0409C8.30777 19.5799 10.8636 22.5431 17.6658 23.6903C20.0881 24.0978 19.1465 27.1887 19.1465 29Z" fill="#E97451"/>
                        <path d="M24.1465 29.5652C21.9373 29.5652 20.1465 31.3561 20.1465 33.5652C20.1465 35.7744 21.9373 37.5652 24.1465 37.5652C26.3556 37.5652 28.1465 35.7744 28.1465 33.5652C28.1465 31.3561 26.3556 29.5652 24.1465 29.5652Z" fill="#E97451"/>
                        <path d="M23.8535 18.4348C26.0627 18.4348 27.8535 16.6439 27.8535 14.4348C27.8535 12.2256 26.0627 10.4348 23.8535 10.4348C21.6444 10.4348 19.8535 12.2256 19.8535 14.4348C19.8535 16.6439 21.6444 18.4348 23.8535 18.4348Z" fill="#12161E"/>
                    </motion.svg>

                </div>
            )}
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.2 } }}className="fixed w-screen h-screen z-[100]">
                <Spline scene="https://prod.spline.design/Mwof4fIuiuHoa-li/scene.splinecode" />
            </motion.div> */}
            {/* <MouseCursor /> */}
            {preLoaded && (
            <>
            <Navbar />
            <HeroBanner />
            <WebProjects />
            <GameProjects />
            <ThreeDimensionalProjects />
            <LargeTexts />
            <SkillsSection />
            <ContactSection />
            </>
            )};
        </>
        
    );
}