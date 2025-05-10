import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const steps = [
  {
    title: "Upload License",
    description: "Securely upload your license details to get started.",
    icon: (
      <svg className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
      </svg>
    ),
  },
  {
    title: "Get Valuation",
    description: "We analyze the license and give you a fair market value.",
    icon: (
      <svg className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.333-1.333 4-2 6 0s0 4.667-3 6c-3 1.333-4.667 4-3 6m0 0v-1m0 1H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Get Paid",
    description: "Receive your payment quickly through secure transfer.",
    icon: (
      <svg className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-3 0-4 2-4 4s1 4 4 4 4-2 4-4-1-4-4-4zM12 4v4m0 8v4m4-8h4m-8 0H4" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => (
  <>
    <Helmet>
      <title>Sell Unused Software Licenses | SoftSell</title>
      <meta name="description" content="SoftSell helps you securely sell unused software licenses. Fast, fair valuations and quick payouts." />
      <meta name="keywords" content="sell software license, unused licenses, software resale, IT asset recovery" />
      <meta name="author" content="SoftSell Team" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="SoftSell - Sell Unused Software Licenses" />
      <meta property="og:description" content="Turn your unused software licenses into cash. Trusted by IT professionals worldwide." />
      <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

    <motion.section
      className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 font-heading"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              variants={fadeUp}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2 font-heading">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  </>
);

export default Home;
