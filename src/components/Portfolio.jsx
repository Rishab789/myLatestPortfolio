import React from 'react'
import Youtube_clone from './assets/portfolio/Youtube_clone.jpg'
import installNode from './assets/portfolio/installNode.jpg'
import navBar from './assets/portfolio/navbar.jpg'



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Youtube_clone,
            demo: "https://youtubeliter.netlify.app/",
            code: "https://github.com/Rishab789/PB_Youtube_Clone.git"

        },

        {
            id: 2,
            src: ecommerce,
            demo: "https://ecommerce-gadget-store.vercel.app/",
            code: "https://github.com/Rishab789/ecommerce_gadget_store"

        },

        {
            id: 3,
            src: navBar

        },

    ];
    return (
        <div name="portfolio" className=" w-full text-start bg-gradient-to-b from-black to-gray-800 h-full text-white md:h-screen ">
            <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check Out some of work right here.</p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


                    {
                        portfolios.map(({ id, src, demo, code }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <a href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer"><button >Demo</button></a>
                                    <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer"><button >Code</button></a>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio
