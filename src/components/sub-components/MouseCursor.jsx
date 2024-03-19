import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MouseCursor({isHover}) {
    const [mousePos, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };


        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);



    return (
        <div className="fixed place-content-center inset-0 z-50 pointer-events-none">
            <AnimatePresence>
                <motion.div
                    key="cursor"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: mousePos.x - 16, y: mousePos.y - 16}}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.1, type: "spring", ease: "easeIn" }}
                    className="absolute w-8 h-8 bg-default-white rounded-full z-50"
                />
            </AnimatePresence>
        </div>
    );
}
