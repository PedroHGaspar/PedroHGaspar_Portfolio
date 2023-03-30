import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


const SectionWrapper = (Component, idName) => function HOC() { //this is a function that returns a function
    return (
        <motion.section
        variants={staggerContainer()}//is goind to annimate the section
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;{/*this empty space and the idName of the span makes the scroll button functional */}
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper