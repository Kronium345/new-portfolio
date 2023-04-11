import React from 'react';
import project2 from '../assets/portfolio/project2.png';
// import project3 from '../assets/portfolio/project3.png';
import project6 from '../assets/portfolio/project6.png';
import project7 from '../assets/portfolio/project7.png';
import project8 from '../assets/portfolio/project8.png';
import project14 from '../assets/portfolio/project14.png';
// import project10 from '../assets/portfolio/project10.png';
import project13 from '../assets/portfolio/project13.png';



const Projects = () => {

  const projects = [
    {
      id: 1,
      src: project14,
      href: 'https://fighting-game-1a-l5bhymwtg-kronium345.vercel.app/',
    },
    {
      id: 2,
      src: project2,
      href: 'https://abbeville-cafe-bites-nn9a.vercel.app/',
    },
    // {
    //   id: 3,
    //   src: project3,
    //   href: '/files/4th JavaScript Project Folder/project1.html',
    // },
    {
      id: 3,
      src: project8,
      href: 'https://superhero-database-kjigsg4je-kronium345.vercel.app/',
    },
    // {
    //   id: 5,
    //   src: project10,
    //   href: '/files/myapp.html',
    // },
    {
      id: 4,
      src: project6,
      href: 'https://github.com/Kronium345/book-lib',
    },
    {
      id: 5,
      src: project7,
      href: 'https://daniel-s-fitness-app-1.vercel.app/'
    },
    {
      id: 6,
      src: project13,
      href: 'https://cool-thunder-2632.on.fleek.co/'
    },
    // {
    //   id: 9,
    //   src: project9
    // },
    // {
    //   id: 10,
    //   src: project10
    // },
    // {
    //   id: 11,
    //   src: project11
    // },
    // {
    //   id: 12,
    //   src: project12
    // }
  ]


  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8 ">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">Have a look at some of my work right here</p>
            </div>

           

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
            {
              projects.map(({id, src, href}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={href} target="_blank" rel="noreferrer">Demo</a></button>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}
                </div>
              </div>
              ))
            }   
          </div>
        </div>
    </div>
  )
}

export default Projects
