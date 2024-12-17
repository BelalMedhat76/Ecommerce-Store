

"use client";

import Image from "next/image";

const PromotionSection = () => {
  return (
    <section className="relative bg-gray-50 py-12 md:py-24 px-6 md:px-16">
      {/* Promotion Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Content Section */}
        <div
          className="p-8 bg-white shadow-lg rounded-lg animate-fade-in-up
          transition-all duration-500 hover:shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            End of Season Clearance <br /> Sale up to 50%
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to the new range of shaving products from master barber.
            We have over three decades of experience.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition duration-300">
            Shop Now →
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/promotion.jpg" // Replace with your image path
            alt="Sale Products"
            width={600}
            height={400}
            className="rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

   
      {/* Testimonial Section */}
      <div className="container mx-auto mt-16 px-6 md:px-16 bg-gray-100 py-12 rounded-lg">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Are Saying
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Testimonial 1 */}
          <div className="flex-1 bg-white p-6 shadow-md rounded-lg text-center transition-all duration-300 hover:shadow-xl">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/blog1.jpg" // Replace with customer image
                alt="Customer 1"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "This product exceeded my expectations! It's a game-changer."
            </p>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-500">Regular Customer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-1 bg-white p-6 shadow-md rounded-lg text-center transition-all duration-300 hover:shadow-xl">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/blog2.jpg" // Replace with customer image
                alt="Customer 2"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "I've never been happier with my purchases. Amazing quality!"
            </p>
            <p className="font-semibold text-gray-800">Jane Smith</p>
            <p className="text-gray-500">First-Time Buyer</p>
          </div>

          {/* Testimonial 3 */}
          <div className="flex-1 bg-white p-6 shadow-md rounded-lg text-center transition-all duration-300 hover:shadow-xl">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/blog3.jpg" // Replace with customer image
                alt="Customer 3"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "Incredible value for money! Highly recommend to others."
            </p>
            <p className="font-semibold text-gray-800">Mark Williams</p>
            <p className="text-gray-500">Loyal Customer</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
  
    </section>
  );
};

export default PromotionSection;
