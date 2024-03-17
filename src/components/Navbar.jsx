
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export default function Navbar () {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["120px 0px", "0px 0px"],
    });

    const scrollOut = useTransform(scrollYProgress, [1, 0], ["0%", "-100%"])

    return (
        <motion.nav
            ref={targetRef}
            style={{ translateY: scrollOut}}
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, type: 'spring', damping: 20, delay: 2}}
            className='py-12 top-[-100%] visible flex justify-center items-start'>
                <div className='group bg-gradient-to-r from-default-blue to-default-orange rounded-full p-0.5 relative'>
                    <ul id='navbar' className='bg-default-black shadow-default-shadow shadow-default-orange/15 py-3 md:px-10 px-5 md:text-lg text-md rounded-full flex justify-between items-center md:gap-16 gap-8'>
                        <li className='transition-all duration-700 hover:px-6 hover:text-default-orange'>
                        Home
                        </li>
                        <li className='transition-all duration-700 hover:px-6 hover:text-default-orange'>
                        Works
                        </li>
                        <li className='transition-all duration-700 hover:px-6 hover:text-default-orange'>
                        Skills
                        </li>
                        <li className='transition-all duration-700 hover:px-6 hover:text-default-orange'>
                        Contacts
                        </li>
                    </ul>

                    <motion.div className='absolute top-0 -z-10 transition-all duration-500 blur-sm group-hover:blur-lg h-full w-full bg-gradient-to-r from-default-blue/25 to-default-orange/25 rounded-full'></motion.div>
                </div>
        </motion.nav>
    );
}