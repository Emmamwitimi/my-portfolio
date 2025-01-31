import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 px-6 sm:px-12 md:px-20 lg:px-40 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Profile Photo */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center">
          <img
            src="/emm.jpeg"
            alt="Emma's Profile"
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full shadow-lg border-4 border-teal-500"
          />
        </div>

        {/* About Me Content */}
        <div className="md:w-2/3 md:pl-12">
          <p className="text-lg mb-6 leading-relaxed">
            Hi, I’m <span className="font-semibold text-teal-500">Emma</span>, a passionate 
            <span className="font-semibold"> Full Stack Developer</span> who loves creating
            innovative, user-friendly, and efficient web applications. With a 
            strong background in frontend and backend technologies, I’m always 
            eager to learn and improve.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Whether it’s collaborating with a team or diving into a solo
            project, I thrive in environments where I can build, solve problems,
            and bring ideas to life.
          </p>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md font-medium hover:bg-teal-600 transition-transform transform hover:scale-105"
          >
            📄 Download My CV
          </a>
        </div>
      </div>

      {/* Experience Stats */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {[
          { number: "2+", text: "Years of Experience" },
          { number: "10+", text: "Articles Completed" },
          { number: "13+", text: "Projects Completed" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-4xl font-bold text-teal-500">{stat.number}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
