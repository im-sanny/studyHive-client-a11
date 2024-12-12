import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_ast14f7', 'template_sdkoue5', form.current, {
        publicKey: 'W-3scYNsYYELOYrTr',
      })
      .then(
        () => {
          toast.success('Message sent Successfully!');
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send message');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold">Contact with Us</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden"
      >
        <div className="md:flex">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-purple-600">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-3 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                <FaPaperPlane />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Illustration */}
          <div className="hidden md:block w-1/2">
            <img
              src="https://i.ibb.co/Q9bDb08/2885557.jpg"
              alt="Contact Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
