//About page
import { motion } from 'framer-motion'
import { variantPage } from '../../configs/pageAnimationsVariants'

const About = ({ aboutData }) => {
    return (
        <motion.div
            variants={variantPage}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear' }}
            className="container"
        >
            <h1>About page</h1>
        </motion.div>
    )
}

export default About
