import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="container mx-auto px-6 max-w-6xl"
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-800 mb-20"
          variants={itemAnimation}
        >
          Contactez-nous
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            variants={itemAnimation}
            className="bg-white shadow-2xl rounded-2xl p-10 space-y-10 border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Restons en Contact
            </h3>
            <div className="space-y-8">
              <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">contact@key-solution-tech.com</p>
                </div>
              </div>
              <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Téléphone</p>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Adresse</p>
                  <p className="text-gray-600">
                    123 Avenue de l'Innovation
                    <br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemAnimation}
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-2xl p-10 space-y-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  required
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
