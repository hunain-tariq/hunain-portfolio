import React, { useState } from 'react'
import DarkVeil  from './components/background.jsx'
import logo from './assets/logo.jpeg'
import TextType from './components/typetext.jsx';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaArrowRight, FaEnvelope, FaTimes, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Hunain from './assets/Hunain.jpg'
import SplitText from "./components/SplitText.jsx";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import jb from './assets/jb.png'
import hpp from './assets/hpp.png'
import tu from './assets/tu.png'
import c from './assets/contact-me.svg'







const Landing = () => {

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

 const [Aboutopen,SetAboutopen] = useState(false);
const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID
,
    formRef.current,
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }
  ).then(
    () => {
     toast.success('Message sent successfully!');
      e.target.reset();
    },
    (error) => {
      toast.error('Failed to send message');
      console.log(error.text);
    }
  );
};


  return (
    <div className="bg-[#020617] min-h-screen">

      {/* First Section with LiquidEther */}
      <section className="relative h-screen overflow-hidden">
            <nav className='flex items-center lg:justify-around justify-between p-6 absolute w-full z-50'>

                <img src={logo} alt="Logo" className="rounded-full h-15 w-15 " />
                <div className='flex items-center '>
                    <Link 
                     to="projects" 
                     smooth={true} 
                     duration={800} 
                     className="cursor-pointer px-5  text-lg  text-white hover:text-green-500 transition"
                     >
                      Projects
                    </Link>

                    <Link 
                     to="contact" 
                     smooth={true} 
                     duration={800} 
                     className="cursor-pointer px-5  text-lg  text-white hover:text-green-500 transition"
                     >
                      Contact
                    </Link>

                    

                </div>
            </nav>

        
      
        <div className="absolute inset-0 z-0 opacity-60">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>


        {/* Hero Content */}
        <div className="relative z-10 flex  h-full">
            <div className=" lg:ml-22 ml-7 z-10 flex flex-col items-start justify-center h-full w-7/10
             text-white">
                <h1 className="lg:text-7xl  text-5xl font-bold tracking-wide">M Hunain Tariq</h1>
                <p className="mt-4 text-lg lg:text-xl font-serif font-semibold text-gray-300">
                    <TextType 
                        text={["Full Stack Developer", "MERN Stack Developer", "Frontend Developer"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="|"
                        texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
                        deletingSpeed={50}
                        variableSpeedEnabled={false}
                        variableSpeedMin={60}
                        variableSpeedMax={120}
                        cursorBlinkDuration={0.5}
                        />
                </p>
                <div onClick={()=>SetAboutopen(!Aboutopen)} className='flex items-center justify-center gap-3 cursor-pointer rounded mt-5 px-6 py-2 bg-green-600 hover:bg-green-700  duration-300'>
                    ABOUT ME <FaArrowRight size={20} color="white" />


                </div>



            </div>
            <div className="absolute right-0 top-0 h-screen flex flex-col items-center justify-center gap-5 lg:gap-7 z-50 px-4">

                <FaGithub
                  size={37}
                  color='white'
                  className=" cursor-pointer hover:scale-110 mx-2 lg:mx-4"
                  onClick={() => window.open('https://github.com/hunain-tariq', '_blank')}


                />

                <FaLinkedin
                        size={37}
                        color="#0077B5"
                        className=" cursor-pointer hover:scale-110 mx-2 lg:mx-4"
                        onClick={() => window.open('https://www.linkedin.com/in/m-hunain-tariq/', '_blank')}
                />

                   < FaInstagram  
                        size={37}
                        color="#E1306C"
                        className=" cursor-pointer hover:scale-110 mx-2 lg:mx-4"
                        onClick={() => window.open('https://www.instagram.com/mhunain_tariq/', '_blank')}
                   
                   
                   />
                   <FaWhatsapp
                        size={37}
                        color="#25D366"
                        className=" cursor-pointer hover:scale-110 mx-2 lg:mx-4"
                        onClick={() => {
                            const phone = "923081040961";
                            const message = "Hi Hunain, I would like to get in touch with you.";
                            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                            window.open(url, "_blank");
                        }}
                        />


                    <FaEnvelope
                        size={37}
                        color="#D44638"  
                        className="cursor-pointer hover:scale-110 mx-2 lg:mx-4"
                        onClick={() => window.open("mailto:tmhunain@gmail.com")}
                        />

            </div>

        </div>

      </section>
<section
  id="projects"
  className="bg-[#020617] min-h-screen flex flex-col mt-10 items-center justify-start px-5"
>
  <h1 className="text-blue-600 font-semibold rounded-lg border py-3 px-3 text-4xl">
    My Projects
  </h1>

  {/* Parent div wrapping all project cards */}
  <div className="w-full flex flex-wrap lg:flex-nowrap gap-8 mt-10 justify-center">
    
    {/* Content of Project 1 */}
    <div className="lg:w-1/3 w-full flex flex-col justify-center text-white bg-[#020617]/80 border border-white/10 rounded-xl p-5 hover:border-green-500/60 transition duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]">
      <img src={jb} alt="Jobs Bridge" className="rounded-lg w-full h-56 object-cover hover:scale-105 transition"/>
      <h2 className="text-3xl font-bold text-green-400 mt-4">Jobs Bridge</h2>
      <p className="text-gray-400 mt-4 leading-relaxed">
        Jobs Bridge is a MERN stack platform that connects workers with employers. It provides secure profiles, easy job posting, and real-time communication.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {["React", "Node.js", "MongoDB", "Express", "Tailwind", "Python","Flask","Maching Learning" ].map((tech) => (
          <span key={tech} className="border border-white/20 text-sm px-3 py-1 rounded-full text-gray-300">
            #{tech}
          </span>
        ))}
      </div>
      <div className="flex  gap-4 mt-6">
        <button className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
          Live Demo
        </button>
        <button className="px-5 py-2 rounded-lg border border-white/30 hover:border-green-500 transition">
          Source Code
        </button>
      </div>
    </div>

    {/* Project 2 */}
    <div className="lg:w-1/3 w-full flex flex-col justify-center text-white bg-[#020617]/80 border border-white/10 rounded-xl p-5 hover:border-green-500/60 transition duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]">
      <img src={hpp} alt="House Price Prediction" className="rounded-lg w-full h-56 object-cover hover:scale-105 transition"/>
      <h2 className="text-3xl font-bold text-green-400 mt-4">House Price Prediction</h2>
      <p className="text-gray-400 mt-4 leading-relaxed">
        A machine learning model that predicts house prices based on features like location, size, and amenities. Built with Python and Flask for backend integration.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {["Html", "Css", "Python","Flask","Maching Learning" ].map((tech) => (
          <span key={tech} className="border border-white/20 text-sm px-3 py-1 rounded-full text-gray-300">
            #{tech}
          </span>
        ))}
      </div>
      <div className="flex  gap-4 mt-6">
        <button className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
          Live Demo
        </button>
        <button  onClick={() => window.open("https://github.com/hunain-tariq/AI-Projects/tree/main/HOUSE%20PRICE%20PREDICTION%20SYSTEM", "_blank")}  className="px-5 py-2 rounded-lg border cursor-pointer border-white/30 hover:border-green-500 transition">
          Source Code
        </button>
      </div>
    </div>

    {/* Project 3 */}
    <div className="lg:w-1/3 w-full flex flex-col justify-center text-white bg-[#020617]/80 border border-white/10 rounded-xl p-5 hover:border-green-500/60 transition duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)]">
      <img src={tu} alt="TextUtils" className="rounded-lg w-full h-56 object-cover hover:scale-105 transition"/>
      <h2 className="text-3xl font-bold text-green-400 mt-4">TextUtils</h2>
      <p className="text-gray-400 mt-4 leading-relaxed">
        A web application that allows users to manipulate text in various ways like counting words, characters, and converting text to uppercase or lowercase. Build for practice.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {["React", "Css", "JavaScript","Bootstrap","Vs Code","ejs" ].map((tech) => (
          <span key={tech} className="border border-white/20 text-sm px-3 py-1 rounded-full text-gray-300">
            #{tech}
          </span>
        ))}
      </div>
      <div className="flex  gap-4 mt-6">
        <button  className="px-5  py-2 rounded-lg bg-green-600 hover:bg-green-700 transition">
          Live Demo
        </button>
        <button onClick={()=>window.open("https://github.com/hunain-tariq/textutils","_blank")} className="px-5 py-2 cursor-pointer rounded-lg border border-white/30 hover:border-green-500 transition">
          Source Code
        </button>
      </div>
    </div>

  </div>
</section>

      { /*Contact */}

      <section id='contact' className="bg-[#020617] min-h-screen pt-5 flex flex-col items-center justify-start">
        <h1 className="text-blue-600 font-semibold rounded-lg border py-3 px-3 text-4xl">Let's Connect</h1>
        <div className='w-full h-full flex lg:flex-row flex-col lg:p-7 gap-5  '>
          <div className='flex items-center justify-center lg:p-8  lg:w-1/2'><img src={c}  alt="" /></div>
          <div className='text-white lg:p-8 lg:w-1/2'>
              <form ref={formRef} onSubmit={sendEmail} className='w-full flex flex-col gap-6 px-6'>
                <div className='flex flex-col gap-3'>
                  <label htmlFor="name">Name:</label>
                  <input type="text" required name='name' placeholder='Enter Your Name' className='bg-gray-800 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-blue-600 w-full' />
                </div>
                <div className='flex flex-col gap-3'>

                  <label htmlFor="email">Email:</label>
                  <input type="email" required name='email' placeholder='name@gmail.com' className='bg-gray-800 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-blue-600 w-full' />
                </div>
                <div className='flex flex-col gap-3'>

                  <label htmlFor="phone">Phone:</label>
                  <input type="number" required name='number' placeholder='0300xxxxxxx' className='bg-gray-800 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-blue-600 w-full' />
                </div>
                <div className='flex flex-col gap-3'>

                  <label htmlFor="message">Message:</label>
                  <textarea name='message' required placeholder='Your Message' rows={5} className='bg-gray-800 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'></textarea>
                </div>
                <button type="submit" className='bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 px-6 w-full'>Send Message</button>


              </form>
          
          </div>

        </div>
      </section>
      <footer className='mt-10 ' >
        <div className='w-full bg-gray-900 text-white text-center py-4'>
          <p>&copy; {new Date().getFullYear()} M Hunain Tariq. All rights reserved.</p>
        </div>
      </footer>














      {/* popup section */}
      {Aboutopen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 flex justify-center items-start mt-10 mt-5 overflow-y-auto  z-50">
          <div className='bg-gray-900 rounded text-white w-11/12  md:w-3/5 lg:w-9/10 p-6 shadow-lg'>
            <div className='flex w-full justify-between items-center mb-4'>
              <h1 className='font-bold text-3xl ml-2'>About Me</h1>
              <FaTimes size={25} className=" cursor-pointer" onClick={()=>SetAboutopen(false)} />
            </div>
            <div className='flex flex-col lg:flex-row gap-6'>
              <div className='lg:w-1/2 w-full lg:h-100vh flex justify-center items-center '>
                <img src={Hunain} alt="" className='rounded-full cursor-pointer w-70 h-70 border hover:scale-110 transition duration-200 object-cover sm:mt-5 ' />
              </div>
              <div className='lg:w-1/2 w-full lg:h-100vh  pr-4'>
                <p className='text-lg mt-4 leading-relaxed'>
                  Hello! I'm M Hunain Tariq, a passionate Full Stack Developer with expertise in the MERN stack and frontend development. I love creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I enjoy building projects that solve real-world problems. When I'm not coding, I like to explore new technologies and stay updated with the latest trends in web development. Let's connect and create something amazing together!
                </p>
                <div className=' flex mt-6  flex-wrap gap-3'>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Html</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Css</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#JavaScript</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#React.js</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Node.js</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#MongoDB</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Express.js</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Tailwind CSS</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Machine Learning</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#Python</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#ejs</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#c++</p>
                  <p className='flex items-center justify-center rounded-full border py-2 px-3'>#RESTFull Apis</p>

              
                </div>
                <a href="/Hunain-Tariq.pdf" download className="block flex gap-3 w-1/2 items-center justify-center text-center mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"><FaDownload size={25}/> Download CV</a>
                <div className='mt-6'>
                  <h1 >
                    <SplitText
                          text="MERN STACK DEVELOPER"
                          className="text-3xl font-semibold text-green-500 text-center"
                          delay={50}
                          duration={1.25}
                          ease="power3.out"
                          splitType="chars"
                          from={{ opacity: 0, y: 40 }}
                          to={{ opacity: 1, y: 0 }}
                          threshold={0.1}
                          rootMargin="-100px"
                          textAlign="center"
                          onLetterAnimationComplete={handleAnimationComplete}
                          showCallback
                        />
                        </h1>

                </div>
              </div>
            </div>
            <hr className='mt-8 lg:mt-15' />


            
          </div>
        </div>
      )}




    </div>
  






  )
}

export default Landing
