import React from 'react'
import HeroImage from './assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-full min-w-fit bg-gradient-to-b from-black via-black to-gray-800">

        <div className=" mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full">
            <div className="md:w-[200%] w-[200%] ml-10">
            <img src={HeroImage} alt="my profile"  className="rounded-2xl mx-auto  w-full md:w-[100%] my-10 "/>

            </div>
            {/* max-w-screen-lg */}
            {/* md:ml-[-80px] h-4 w-full */}
            {/* w-full h-4 md:ml-[-80px] */}
            <div className="flex flex-col justify-center h-full text-left w-full md:w-[160%] ">
                
                <h2 className="text-4xl md:text-7xl font-bold text-white md:w-[150%]"> 
                Hi I'm a Frontend Developer 

                </h2>
                <p className="text-gray-500 py-4 ">
                    I am very Optimistic about the Future. I always think that, in this rapid transactions of technology, what more can be built through UI Development and How Frontend can help millions of people. It will be very exciting to see. Isn't it? You can reach out to me by sending a message from the below Contact form. See you soon!
               

                </p>

                
                

                <div>
                    <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1"/></span>
                    </Link>
                </div>
            </div>
        </div>

    
    </div>
  )
}

export default Home