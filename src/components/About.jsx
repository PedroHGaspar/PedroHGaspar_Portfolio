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

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About