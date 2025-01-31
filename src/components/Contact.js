import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/yourFormId', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmissionSuccess(false);
      }
    } catch (error) {
      setSubmissionSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">Feel free to drop a message or contact me through the following:</p>
              <ul className="text-gray-600">
                <li>Email: emmamwitimi14@gmail.com</li>
                <li>Phone: +254718600533</li>
                <li>Location: Nairobi - Kenya</li>
              </ul>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-teal-600 text-white rounded-md ${isSubmitting ? 'opacity-50' : 'hover:bg-teal-700'}`}
              >
                {isSubmitting ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="4" strokeLinecap="round"></circle>
                      <path
                        d="M4 12a8 8 0 0116 0"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="opacity-50"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
              {submissionSuccess !== null && (
                <div className={`mt-4 text-center ${submissionSuccess ? 'text-green-600' : 'text-red-600'}`}>
                  {submissionSuccess ? 'Message sent successfully!' : 'Something went wrong, please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
