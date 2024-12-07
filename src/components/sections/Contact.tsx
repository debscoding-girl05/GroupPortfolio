import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Gestion des changements dans les champs
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Appel du service EmailJS
    emailjs
      .send(
        "service_kia31ds", // Remplacez par votre service ID
        "template_4abj3dg", // Remplacez par votre template ID
        { ...form }, // Données du formulaire
        "rJLhqbOxG83Z9xwOu" // Remplacez par votre clé publique
      )
      .then(
        (result) => {
          console.log("Email envoyé : ", result.text);
          setStatus("Email envoyé avec succès !");
          setSuccessMessage("Message envoyé avec succès !")
          setForm({ name: "", email: "", subject: "", message: "" }); // Réinitialisation du formulaire

          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        },
        (error) => {
          console.error("Erreur d'envoi : ", error.text);
          setStatus("Erreur lors de l'envoi : " + error.text);
          setSuccessMessage("Erreur lors de l'envoi!")
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        }
      );
  };

  // Animations Framer Motion
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section
      id="contact"
      className="from-gray-50 to-white "
    >
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
        
        <div
          id="contactlimit"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Contact Info */}
          <motion.div
            variants={itemAnimation}
            className="bg-white shadow-2xl rounded-2xl p-10 space-y-10 border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 titrecontact">
              Restons en Contact
            </h3>
            <div className="space-y-8">
              <ContactDetail
                icon={<Mail className="w-7 h-7 text-blue-600" />}
                label="Email"
                value="contact@key-solution-tech.com"
              />
              <ContactDetail
                icon={<Phone className="w-7 h-7 text-blue-600" />}
                label="Téléphone"
                value="+33 1 23 45 67 89"
              />
              <ContactDetail
                icon={<MapPin className="w-7 h-7 text-blue-600" />}
                label="Adresse"
                value={`123 Avenue de l'Innovation\n75001 Paris, France`}
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemAnimation}
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-2xl p-10 space-y-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
          >
            <FormField
              id="name"
              label="Nom"
              type="text"
              value={form.name}
              onChange={handleChanges}
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChanges}
            />
            <FormField
              id="subject"
              label="Sujet"
              type="text"
              value={form.subject}
              onChange={handleChanges}
            />
            <FormField
              id="message"
              label="Message"
              value={form.message}
              onChange={handleChanges}
              textarea
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="focus:outline-none bg-gradient-to-r from-blue-500 to-gray-500  w-full   text-white py-4 px-8 rounded-xl font-bold hover:from-blue-500 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Envoyer le message
            </motion.button>

         
          </motion.form>
        </div>
      </motion.div>
      {successMessage && (
        <div className="fixed left-0 top-0 bottom-0  right-0 flex items-center justify-center">
          <div className="text-blue-500 w-auto h-[50px] bg-white shadow-2xl rounded-2xl p-[40px] flex items-center justify-center">
            <p>{successMessage}</p>
          </div>
        </div>
      )}
    </section>

  );
};

// Composant pour un champ de formulaire
const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  textarea?: boolean;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-700 mb-2"
    >
      {label}
    </label>
    {textarea ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={5}
        className="focus:outline-none w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      ></textarea>
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="focus:outline-none w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
        required
      />
    )}
  </div>

);

// Composant pour un détail de contact
const ContactDetail = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
    <div className="bg-blue-50 p-4 rounded-xl">{icon}</div>
    <div className="ml-4">
      <p className="font-semibold text-gray-800">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

export default Contact;
