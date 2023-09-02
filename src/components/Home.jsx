import React from 'react'
import HeroImage from './assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className="h-full min-w-fit bg-gradient-to-b from-black via-black to-gray-800">

        <div className=" mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
            <div className="md:w-[200%] ">
            <img src={HeroImage} alt="my profile"  className="rounded-2xl mx-auto  w-2/3 md:w-[100%] my-10 "/>

            </div>
            {/* max-w-screen-lg */}
            {/* md:ml-[-80px] h-4 w-full */}
            {/* w-full h-4 md:ml-[-80px] */}
            <div className="flex flex-col justify-center h-full text-left w-full md:w-[160%] ">
                
                <h2 className="text-4xl md:text-7xl font-bold text-white  "> 
                Hi I'm a Frontend Developer 

                </h2>
                <p className="text-gray-500 py-4 ">
                I don't like Frontend. But Frontend likes me. Then how can I break the heart of this magnificient Developement, where you will get, what you want, by designing beautiful websites. That is real peace in life. By filling the below form, you can reach to me. Meet you soon!

                </p>

                
                

                <div>
                    <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300"><MdKeyboardArrowRight size={25} className="ml-1"/></span>
                    </button>
                </div>
            </div>
        </div>

    
    </div>
  )
}

export default Home