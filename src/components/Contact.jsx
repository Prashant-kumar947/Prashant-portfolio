import React from 'react';

const Contact = () => (
  <section id="contact" className="p-8 bg-white shadow-md rounded-lg mx-auto max-w-md animate-slideInUp">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Me</h2>
    <form action="https://formsubmit.co/el/waxuha" method="POST" className="space-y-4">
      <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 rounded-md shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
      <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 rounded-md shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
      <textarea name="message" placeholder="Your Message" required className="w-full p-4 rounded-md shadow-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">Send</button>
    </form>
  </section>
);

export default Contact;