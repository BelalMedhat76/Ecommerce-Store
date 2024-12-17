"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background Image */}
      <header className="relative bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/contact1.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-20"
        >
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-6">We’d love to hear from you! Reach out to us anytime.</p>
        </motion.div>
      </header>

      {/* Contact Information */}
      <section className="py-16 px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-4"
        >
          How Can We Help?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-700 mb-6"
        >
          If you have any questions or need assistance, please feel free to contact us through the form below.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          <p>Email: <Link href="mailto:support@yourstore.com" className="text-blue-600">belalmedhat0102@gmail.com</Link></p>
          <p>Phone: <Link href="tel:+15551234567" className="text-blue-600">+20 1026654990</Link></p>
        </motion.div>
      </section>

      {/* New Contact Section (Address Section) */}
      <section className="py-16 px-8 bg-gray-200">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold text-center mb-6"
        >
          Our Location
        </motion.h2>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Visit us at our store located at:
          </p>
          <p className="text-xl font-semibold text-gray-800">
            123 E-Commerce Street, Suite 45, New York, NY 10001
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-8 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold text-center mb-6"
        >
          Send Us a Message
        </motion.h2>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out" required />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out" required />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
            <textarea id="message" rows="6" className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out" required></textarea>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            type="submit"
            className="mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Send Message
          </motion.button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-gray-100 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl font-semibold mb-4"
  >
    Connect With Us
  </motion.h2>
  <div className="flex justify-center space-x-8">
    <Link href="https://www.facebook.com/belal.m.amer.1?locale=en_EN">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl text-blue-600 hover:text-blue-700 transition duration-300"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </motion.div>
    </Link>
    <Link href="https://www.instagram.com/belal.medhat_/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-4xl text-pink-600 hover:text-pink-700 transition duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </motion.div>
    </Link>
    <Link href="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-4xl text-blue-500 hover:text-blue-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </motion.div>
    </Link>
  </div>
</section>

    </div>
  );
};

export default ContactPage;
