import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Correct import for Swiper styles
import { motion } from 'framer-motion';

// Why Shop With Us Section with Swiper
const WhyShopWithUs = () => {
  return (
    <section className="py-16 bg-gray-50 px-20"> {/* Added padding for spacing */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-semibold text-center mb-12"
      >
        Why Shop With Us?
      </motion.h2>

      <Swiper
        spaceBetween={20}      // Space between each slide
        slidesPerView="auto"  // Make slides responsive, showing as many as the screen allows
        loop={true}            // Infinite loop when navigating
        autoplay={{
          delay: 3000,         // Auto slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay even after user interaction
        }}
        breakpoints={{
          320: { slidesPerView: 1 },  // 1 slide for small screens
          640: { slidesPerView: 2 },  // 2 slides for medium screens
          1024: { slidesPerView: 3 }, // 3 slides for larger screens
        }}
        className="swiper-container"
      >
        {/* Free Shipping Slide */}
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl transition-transform duration-300 ease-in-out transform hover:scale-110">🚚</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-center text-gray-700">
              Enjoy free shipping on all orders over $50. No hidden fees or surprises!
            </p>

          </motion.div>
        </SwiperSlide>

        {/* Secure Payment Slide */}
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-md hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl transition-transform duration-300 ease-in-out transform hover:scale-110">💳</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-center text-gray-700">
              Shop with confidence using our secure payment system. Your data is safe with us.
            </p>
          </motion.div>
        </SwiperSlide>

        {/* 24/7 Support Slide */}
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-yellow-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl transition-transform duration-300 ease-in-out transform hover:scale-110">📞</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">24/7 Customer Support</h3>
            <p className="text-center text-gray-700">
              Our friendly support team is available anytime to assist with your orders and inquiries.
            </p>
          </motion.div>
        </SwiperSlide>

        {/* Quality Assurance Slide */}
        <SwiperSlide>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col items-center bg-red-100 p-6 rounded-lg shadow-md hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl transition-transform duration-300 ease-in-out transform hover:scale-110" >🔒</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-center text-gray-700">
              We guarantee the highest quality in every product we offer. Enjoy worry-free shopping.
            </p>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WhyShopWithUs;
