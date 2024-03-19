
import { motion } from 'framer-motion';


export default function Navbar () {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, type: 'spring', damping: 20, delay: 2}}
            className='top-0 py-12 flex justify-center items-start z-50'>
                <div className='group bg-gradient-to-r from-default-blue to-default-orange rounded-full p-0.5 relative'>
                    <ul id='navbar' className='bg-default-black py-3 md:px-10 px-5 md:text-lg text-md rounded-full flex justify-between items-center md:gap-16 gap-8'>
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
                    <motion.div className='absolute top-0 -z-20 transition-all duration-500 blur-sm group-hover:blur-lg h-full w-full bg-gradient-to-r from-default-blue/25 to-default-orange/25 rounded-full'></motion.div>
                </div>
        </motion.nav>
    );
}