import { motion } from 'framer-motion'
import { variantPage } from '../../configs/pageAnimationsVariants'

const Skills = () => {
    return (
        <motion.div
            variants={variantPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className="p-2 skills page-container px-sm-3 py-sm-2 px-lg-4"
        >
            <h1>Skills</h1>
        </motion.div>
    )
}

export default Skills
