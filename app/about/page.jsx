"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with Background Image */}
      <header className="relative bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: 'url("/about.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-6">Our journey and mission to deliver the best products for you</p>
        </motion.div>
      </header>

      {/* Mission Statement */}
      <section className="py-16 px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-4"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          We are dedicated to providing high-quality products with exceptional customer service. Our goal is to
          offer a curated selection of items that meet the needs and tastes of every shopper, while maintaining
          a commitment to sustainability and ethical practices.
        </motion.p>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-8"
        >
          Meet Our Team
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example Team Member */}
          <div className="w-60 bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-all duration-300">
            <Image src="/about1.jpg" alt="Team Member" width={240} height={240} className="rounded-full mx-auto mb-4"/>
            <h3 className="text-lg font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Add more team members as needed */}
          <div className="w-60 bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-all duration-300">
            <Image src="/about2.jpg" alt="Team Member" width={200} height={50} className="rounded-full mx-auto mb-4"/>
            <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-8"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              Quality
            </motion.h3>
            <p className="text-gray-600">
              We prioritize quality in every product we offer, ensuring that you get only the best.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              Sustainability
            </motion.h3>
            <p className="text-gray-600">
              We are committed to sustainability and work to minimize our environmental impact.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              Customer First
            </motion.h3>
            <p className="text-gray-600">
              Our customers are our priority, and we strive to offer exceptional service at every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-6"
        >
          Ready to Shop?
        </motion.h2>
        <Link href="/shop">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Our Collection
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
