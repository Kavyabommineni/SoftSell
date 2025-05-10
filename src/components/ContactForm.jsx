import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) formErrors.name = 'Name is required', valid = false;
    if (!formData.email) formErrors.email = 'Email is required', valid = false;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.company) formErrors.company = 'Company is required', valid = false;
    if (!formData.licenseType) formErrors.licenseType = 'License Type is required', valid = false;
    if (!formData.message) formErrors.message = 'Message is required', valid = false;

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Thank you for reaching out! Your message has been submitted successfully.');
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
      setErrors({});
    }
  };

  return (
    <motion.section
      className="py-16 bg-gray-50 dark:bg-gray-800 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading text-center mb-6 text-gray-800 dark:text-white">
            Contact Us
          </h2>

          {successMessage && (
            <motion.div
              className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {successMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'Company', name: 'company', type: 'text' },
            ].map(({ label, name, type }) => (
              <motion.div key={name} variants={fadeInUp} transition={{ duration: 0.3 }}>
                <label
                  htmlFor={name}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                />
                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
              </motion.div>
            ))}

            <motion.div variants={fadeInUp} transition={{ duration: 0.3 }}>
              <label
                htmlFor="licenseType"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                License Type
              </label>
              <select
                name="licenseType"
                id="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select License Type</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="enterprise">Enterprise</option>
              </select>
              {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.3 }}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
