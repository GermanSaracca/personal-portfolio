//Project page
import { motion } from 'framer-motion'
import { variantPage } from '../../configs/pageAnimationsVariants'

const Projects = () => {
    return (
        <motion.div
            variants={variantPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className="bg-red-400 "
        >
            <h1>Projects page</h1>
        </motion.div>
    )
}

export default Projects
