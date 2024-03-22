
import { motion } from 'framer-motion';
import Logo from './Logo';


export default function Navbar () {
    return (
        <motion.nav
            layoutRoot
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, type: 'spring', damping: 20}}
            className='top-0 mt-12 flex justify-around px-24 gap items-center z-50'>
                <Logo />
                <ul id='navbar' className='py-3 md:px-10 px-5 md:text-lg font-semibold rounded-full flex justify-between items-center md:gap-12 gap-8'>
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