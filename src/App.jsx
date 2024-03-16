import React from "react";
import HeroBanner from "./components/HeroBanner.jsx"
import WebProjects from "./components/WebProjects.jsx"
import GameProjects from "./components/GameProjects.jsx"
import ThreeDimensionalProjects from "./components/ThreeDimensionalProjects.jsx"
import LargeTexts from "./components/LargeTexts.jsx"

export default function App () {
    return (
        <>
            <HeroBanner />
            <WebProjects />
            <GameProjects />
            <ThreeDimensionalProjects />
            <LargeTexts />
        </>
    );
}