import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
    const handleScrollToView = (sect) => {
        const element = document.getElementById(sect);
        console.log('Clicked:', sect); // Log the clicked section ID
        if (element) {
            console.log('Scrolling to:', sect); // Log when scrolling
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Element not found:', sect); // Log if element not found
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.nav
            layoutRoot
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', damping: 20 }}
            className='top-0 mt-12 flex sm:flex-row flex-col justify-around md:px-24 px-12 gap-4 items-center z-50'>
            <Logo />
            <ul id='navbar' className='md:text-lg font-semibold rounded-full flex justify-between items-center gap-4'>
                <motion.li
                    layout
                    className='transition-all duration-300 py-3 md:px-10 px-5  cursor-pointer hover:text-default-orange'
                    onClick={() => handleScrollToView('webProjects')}
                >
                    Works
                </motion.li>
                <motion.li
                    className='transition-all duration-300 py-3 md:px-10 px-4  cursor-pointer hover:text-default-orange'
                    onClick={() => handleScrollToView('contactSection')}
                >
                    Contact
                </motion.li>
            </ul>

            <div onClick={scrollToTop} className='fixed group bottom-0 md:w-12 md:h-12 h-8 w-8 cursor-pointer rounded-full mb-4 z-[100]'>
                <div className='absolute rounded-full w-full h-full bg-default-orange blur-sm transition-opacity duration-500 opacity-15 group-hover:opacity-100'></div>
                <div className='absolute rounded-full w-full h-full bg-default-black p-2'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15" stroke="#F1ECEC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            </div>

        </motion.nav>
    );
}
