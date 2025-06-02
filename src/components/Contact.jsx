import React from 'react';
import emailjs from '@emailjs/browser';
import { data } from '../data';

export function Contact() {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { from_name: formData.name, from_email: formData.email, message: formData.message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      () => setStatus("Please Try Again")
    );
  };

  return (
    <section id="contact" className="py-12 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
       <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words">
      <span className="flex items-center">
        <i className="fas fa-envelope mr-2 text-blue-500 dark:text-blue-300"></i>
        Email:
        <span
          className="text-gray-600 dark:text-gray-400 ml-2 cursor-pointer"
          onClick={handleCopyEmail}
        >
          {copied ? '(Copied!)' : '(Click link to copy)'}
        </span>
      </span>
      <a
        href={`mailto:${data.contact.email}`}
        className="text-blue-500 hover:underline ml-1 break-all cursor-pointer"
        onClick={handleCopyEmail}
      >
        {data.contact.email}
      </a>
    </p>
        <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words mt-2">
          <span className="flex items-center">
            <i className="fab fa-linkedin mr-2 text-blue-500 dark:text-blue-300"></i>
            LinkedIn:
          </span>
          <a href={data.contact.linkedin} target="_blank" className="text-blue-500 hover:underline ml-1 break-all">
            {data.contact.linkedin}
          </a>
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 animate-slide-up">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Your Good Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter Your Good Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Speak Your Heart</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full p-2 mt-1 border rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" placeholder="Enter Your Message"></textarea>
          </div>
          <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`mt-2 text-sm ${
                    status.includes("sent successfully") ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {status}
                </p>
              )}
        </form>
      </div>
    </section>
  );
}