import React from 'react';
import { motion } from 'framer-motion';

const points = [
  { icon: '🚀', title: 'Fast Process', desc: 'Quick and efficient turnaround.' },
  { icon: '🔒', title: 'Secure', desc: 'Your information is fully protected.' },
  { icon: '💰', title: 'Great Value', desc: 'Get the best market price.' },
  { icon: '🤝', title: 'Trusted Service', desc: 'Hundreds of happy sellers.' },
];

const WhyChooseUs = () => (
  <section className="bg-white dark:bg-gray-900 text-black dark:text-white p-8">
    <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {points.map((item, index) => (
        <motion.div
          key={index}
          className="text-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.4 }}
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;