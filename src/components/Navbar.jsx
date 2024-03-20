
import { motion } from 'framer-motion';


export default function Navbar () {
    return (
        <motion.nav
            layoutRoot
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, type: 'spring', damping: 20, delay: 2}}
            className='top-0 mt-12 flex justify-around px-24 gap items-center z-50'>
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.707 19C43.0405 19 47.8151 27.9667 48.2535 28.348L48.3364 28.4201C49.0259 29.02 49.0259 29.8932 48.3364 30.4931L48.2535 30.5652C47.8144 30.9471 37.3538 48 24.0203 48C13.7041 48 5.10837 34.5457 1.54218 31.94C0.560233 31.2221 0.640869 30.0453 1.70727 29.3951C2.6493 28.821 3.83717 28.2076 4.70703 28.8393C7.7857 31.0755 15.5045 41.9514 24.0196 41.9514C32.6137 41.9514 39.1899 34.3051 40.5458 30.9591C40.5458 28.4201 37.9899 25.4569 31.1877 24.3097C28.7654 23.9022 29.707 20.8113 29.707 19Z" fill="#111215"/>
                    <path d="M20 29C6.66652 29 1.8919 20.0333 1.45351 19.652L1.37059 19.5799C0.681156 18.98 0.681156 18.1068 1.37059 17.5069L1.45351 17.4348C1.89266 17.0529 12.3532 0 25.6867 0C36.0029 0 44.5987 13.4543 48.1648 16.06C49.1468 16.7779 49.0662 17.9547 47.9998 18.6049C47.0577 19.179 45.8699 19.7924 45 19.1607C41.9213 16.9245 34.2026 6.04859 25.6875 6.04859C17.0933 6.04859 10.5171 13.6949 9.16128 17.0409C9.16128 19.5799 11.7171 22.5431 18.5193 23.6903C20.9416 24.0978 20 27.1887 20 29Z" fill="#111215"/>
                    <path d="M25 29.5652C22.7908 29.5652 21 31.3561 21 33.5652C21 35.7744 22.7908 37.5652 25 37.5652C27.2091 37.5652 29 35.7744 29 33.5652C29 31.3561 27.2091 29.5652 25 29.5652Z" fill="#111215"/>
                    <path d="M24.707 18.4348C26.9162 18.4348 28.707 16.6439 28.707 14.4348C28.707 12.2256 26.9162 10.4348 24.707 10.4348C22.4979 10.4348 20.707 12.2256 20.707 14.4348C20.707 16.6439 22.4979 18.4348 24.707 18.4348Z" fill="#111215"/>
                </svg>

                <img href="./src/assets/Logo.svg" />
                <ul id='navbar' className='py-3 md:px-10 px-5 md:text-xl text-lg rounded-full flex justify-between items-center md:gap-16 gap-8'>
                    <motion.li layout className='transition-all duration-700 hover:text-default-orange'>
                    Home
                    </motion.li>
                    <motion.li className='transition-all duration-700 hover:text-default-orange'>
                    Works
                    </motion.li>
                    <motion.li className='transition-all duration-700 hover:text-default-orange'>
                    Skills
                    </motion.li>
                    <motion.li className='transition-all duration-700 hover:text-default-orange'>
                    Contacts
                    </motion.li>
                </ul>
        </motion.nav>
    );
}