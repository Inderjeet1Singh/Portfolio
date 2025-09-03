import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:inderjeet2023mnnit@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full py-16" id="contact">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* Text / Info Section */}
        <div className="lg:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-300 mb-4">
            I'm open to new projects, collaborations, or just a friendly hello.
            Send me a message and I’ll get back to you as soon as possible.
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> inderjeet2023mnnit@gmail.com
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="lg:w-1/2 flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
