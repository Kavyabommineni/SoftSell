import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      quote: 'SoftSell helped us sell our unused software licenses quickly and easily. The process was seamless!',
      author: 'Jane Doe',
      position: 'Software Manager, TechCorp'
    },
    {
      quote: 'I was skeptical at first, but SoftSell delivered as promised. Great experience!',
      author: 'John Smith',
      position: 'CTO, Innovatech'
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Customer Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-700 rounded shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
          >
            <p className="italic">"{t.quote}"</p>
            <h4 className="font-semibold mt-4">{t.author}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-300">{t.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;