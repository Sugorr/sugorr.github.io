
import { motion } from 'framer-motion';
import Logo from './Logo';


export default function Navbar () {
    return (
        <motion.nav
            layoutRoot
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, type: 'spring', damping: 20}}
            className='top-0 mt-12 flex sm:flex-row flex-col justify-around px-24 gap-4 items-center z-50'>
                <Logo />
                <ul id='navbar' className='md:text-lg font-semibold rounded-full flex justify-between items-center gap-4'>
                    <motion.li layout className='transition-all duration-300 py-3 md:px-10 px-5  cursor-pointer hover:text-default-orange'>
                        Home
                    </motion.li>
                    <motion.li className='transition-all duration-300 py-3 md:px-10 px-4  cursor-pointer hover:text-default-orange'>
                        Works
                    </motion.li>
                    <motion.li className='transition-all duration-300 py-3 md:px-10 px-4  cursor-pointer hover:text-default-orange'>
                        Skills
                    </motion.li>
                    <motion.li className='transition-all duration-300 py-3 md:px-10 px-4  cursor-pointer hover:text-default-orange'>
                        Contacts
                    </motion.li>
                </ul>
        </motion.nav>
    );
}