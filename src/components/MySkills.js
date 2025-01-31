import React from 'react';

function MySkills() {
  return (
    <section className="py-16 dark:bg-gray-900 text-black dark:text-gray-100" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-teal-500 mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { src: 'https://img.icons8.com/ios/452/javascript.png', title: 'JavaScript', skillLevel: 'Proficient', progress: '90%' },
            { src: 'https://img.icons8.com/ios/452/react.png', title: 'React', skillLevel: 'Proficient', progress: '95%' },
            { src: 'https://img.icons8.com/ios/452/html-5.png', title: 'HTML5', skillLevel: 'Expert', progress: '100%' },
            { src: 'https://img.icons8.com/ios/452/css3.png', title: 'CSS3', skillLevel: 'Proficient', progress: '95%' },
            { src: 'https://img.icons8.com/ios/452/nodejs.png', title: 'Node.js', skillLevel: 'Intermediate', progress: '75%' },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">
                <img src={skill.src} alt={skill.title} className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-500">{skill.title}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                <div
                  className="bg-teal-500 h-2 rounded-full"
                  style={{ width: skill.progress }}
                ></div>
              </div>
              <p className="text-center text-gray-600 dark:text-gray-300">{skill.skillLevel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;
