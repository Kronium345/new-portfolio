import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          I am skilled in a myriad of programming languages and tools, such as HTML, CSS, JavaScript, <br /> React, React Native, Three, Next, Python and SQL
        </p>

        <br />

        <p className="text-xl">
        I am a motivated and driven team-player, who works well with teams, as well as my own initiative. I have strong problem-solving skills and have <br />
        and have the ability to work effectively in any environment, be it remote, hybrid or on-site. I am committed to learning new skills and tricks to enhance my <br />
        software development progress.
        </p>
      </div>
    </div>
  )
}

export default About