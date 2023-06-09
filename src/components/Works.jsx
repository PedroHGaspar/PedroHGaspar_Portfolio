import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';




const ProjectCard = ({ index, name, description, tags, imageProject, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.8)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 45
        }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >{/*This tilt component make the hover effect.*/}
        <div className="relative w-full h-full">
          <img
            src={imageProject}
            alt={name}
            classname="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="github"
                classname="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="m5-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}



const Works = () => {
  return (
    <>{/*the reason why were wrapping in it a fragmente, its because were gonna wrapped into a SectionWrapper in the export*/}
      <motion.div variants={textVariant}>{/*this textVariant will make are <p> tags inside of it animated*/}
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="w-full flex text-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] w-full leading-[30px] text-center">{/* max-w-3xl : make it readable in larger devices and leading-[30px] to change the line height */}
          These following projects are showcases of my skills and experience. Each project is briefly described with links to the code repositories and live demos in it. It reflects my ability to solve complex problems, to use different technologies and to manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project}//the entire project. apread out all of the properties of the entire project with the ...
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");