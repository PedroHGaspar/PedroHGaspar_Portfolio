import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ServiceCard = ({ index, title, icon }) => {//in the p tag it doesn't need service.title, because we are getting immediatly through props
  return (
    <Tilt className="xs:w-[250px] w-full">{/*on extra small (xs) devices, width is going to be 250px and usually width is going to be full */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >

      </motion.div>
    </Tilt>
  )
}



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >{/*here it works like this: direction, type, delay and duration of the animation */}
        I'm a Front-End Jr. Developer with experience in HTML5, CSS3, TypeScript, JavaScript and expertise in frameworks like React, React Native, Node.js, Three.js and Tailwind CSS.
        I'm a quick learner and i like to learn new things and improove my knowledge on the things i'm already using on the daily jobs.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About