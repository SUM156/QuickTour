import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-blue-100 py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-10">
          Got questions or want to plan your next tour with us? We’d love to hear from you.
        </p>

        <form className="bg-blue-50 p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-left text-blue-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-left text-blue-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-left text-blue-700 font-medium">Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full mt-2 p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp Shortcut */}
        <div className="mt-10">
          <p className="text-gray-700 mb-2">Or contact us directly on WhatsApp:</p>
          <a
            href="https://wa.me/92 321 3819909"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition duration-300"
          >
            📲 +92 321 3819909
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
