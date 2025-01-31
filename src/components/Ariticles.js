import React from 'react';

function Articles() {
  const articles = [
    {
      title: 'Pythonic Tools: A Developer’s Arsenal for Elegant Code',
      description: 'Python is a well-liked and strong programming language that has elegant and readable code. Writing Pythonic code requires following best practices and style conventions specific to Python, not only functionality this is explained in pythonic styles article. Many tools and resources are available to help developers in this attempt, ensuring that their code is not only valid but also adheres to the Pythonic method. ',
      link: 'http://medium.com/@emmamwitimi14/pythonic-tools-a-developers-arsenal-for-elegant-code-7557a60430c7',
      thumbnail: '/python.webp'
    },
    {
      title: 'React Components: The Building Blocks of Modern Web Apps.',
      description: 'In today’s fast-paced world of web development, creating dynamic and efficient user interfaces (UIs) is critical. This is where React comes into play. One of React’s core features — and arguably its most important — is components. In this blog, we’ll explore what React components are, why they matter, and how you can start building your own. Let’s dive in!',
      link: 'https://medium.com/@emmamwitimi14/react-components-the-building-blocks-of-modern-web-apps-b84dbfe34fd8',
      thumbnail: '/react.webp'
    },
    {
      title: 'Mastering Python: Fundamental Tips and Advice for Aspiring Developers.',
      description: 'Are you a budding developer that is excited to learn Python, one of the most functional and popular programming languages available? This blog article is meant to act as your Python coding guide, regardless of your level of programming knowledge. We’ll present you practical pointers, counsel, and a well-organized study schedule to assist you on your journey to becoming an expert Python programmer.',
      link: 'https://medium.com/@emmamwitimi14/mastering-python-fundamental-tips-and-advice-for-aspiring-developers-2457866b5ed8',
      thumbnail: '/pp.webp'
    }
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{article.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{article.description}</p>
              <a
                href={article.link}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 dark:text-teal-400 dark:hover:text-teal-600"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
