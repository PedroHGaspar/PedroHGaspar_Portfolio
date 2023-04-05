import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion';


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })//...form = spread the object
  }

  const handleSubmit = (e) => {
    e.preventDefault();//with this, the browser will not refresh, as that is the default browser behavior.
    setLoading(true);//start the sending of the email
    emailjs.send(//the function that will send the email with the service id, template id and user id.
      "service_0ncum9q",// IF YOURE SEEING THIS, DO NOT COPY THIS KEY. YOU CAN GET IT FOR FREE IN: https://www.emailjs.com/
      "template_w68y7sy",// IF YOURE SEEING THIS, DO NOT COPY THIS KEY. YOU CAN GET IT FOR FREE IN: https://www.emailjs.com/
      {
        from_name: form.name,
        to_name: "Pedro",
        from_email: form.email,
        to_email: "pedraoh498@gmail.com",
        message: form.message
      },
      "b5hYb3Jt8sbkDLEME"
    )
      .then(() => {//this .then is to WHEN the function above (emailjs) executes, THEN it will "restart" the function, making the name, email and message empty again, so that someone else can send me an email.
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possible.")
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert("Something went wrong.")
      })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"// the flex-[0.75] is to take 3/4 of the screen
      >
        <p className={styles.sectionSubText}>Get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your E-mail</span>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"//some space to write the message
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type='submit' className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary  ">
            {loading ? 'Sending...' : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"//this is the size where the canvas(earth) will be displayed. The xl:flex-1 is to make both the earth and the contact modal to use the same "section", to stay equal.
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");