import React from "react";
import HeroBanner from "./components/HeroBanner.jsx"
import WebProjects from "./components/WebProjects.jsx"
import GameProjects from "./components/GameProjects.jsx"
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects.jsx"
import LargeTexts from "./components/LargeTexts.jsx"
import MouseCursor from "./components/sub-components/MouseCursor.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App () {
    return (
        <>  
            <Navbar />
            <MouseCursor />
            <HeroBanner />
            <WebProjects />
            <GameProjects />
            <ThreeDimensionalProjects />
            <LargeTexts />
        </>
    );
}