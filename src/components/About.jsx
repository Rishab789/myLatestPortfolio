import React from 'react'

const About = () => {
  return (
    <div name="about" className="text-start h-full min-w-fit bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8"> 
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    About
                </p>
            </div>

            <p className="text-xl mt-20 text-justify">Hi, My name is Prakash Chandra Bera. I am from Rourkela, Odisha. I am very passionate about website development, that is why I chose this career path. But this is not going to work for me to get a job. I know. So I have created these beautiful websites, that you can check out from the Portfolio Section.</p>


            <br></br>

            <p className="text-xl text-justify">With this, I also have some hands on experience on 
            Servicenow Modules like Business Rule, Catalog item, Record Producers, Incident management, Script include, Workflow, Flow Designer. Also worked on REST API integration, through scripted Rest API. Thank You.</p>
        </div>




    </div>
  )
}

export default About