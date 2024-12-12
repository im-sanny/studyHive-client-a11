/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

const faqData = [
  {
    question: 'How do I create an account on StudyHive?',
    answer:
      'Creating an account on StudyHive is easy! Simply navigate to the registration page and fill out the required information, including your email address, username, and password. Once registered, you can access all the features and functionalities of StudyHive, including creating assignments, joining study groups, and submitting your work.',
  },
  {
    question: 'Can I create assignments for specific difficulty levels?',
    answer:
      "Yes, absolutely! When creating an assignment, you have the option to specify the difficulty level as easy, medium, or hard. This helps ensure that the assignments cater to a diverse range of learners with varying levels of proficiency and expertise. Whether you're looking to challenge yourself with a difficult assignment or provide additional support for beginners, StudyHive allows you to customize assignments according to your preferences.",
  },
  {
    question: "How can I view the assignments I've submitted on StudyHive?",
    answer:
      "To view the assignments you've submitted on StudyHive, simply navigate to the 'My Submitted Assignments' page, accessible from your user dashboard. Here, you'll find a comprehensive list of all the assignments you've completed and submitted. You can review the assignment titles, status, marks obtained, and any feedback provided by instructors. This page offers a convenient way to track your progress and stay organized throughout your learning journey.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center
        p-6 text-left focus:outline-none group"
      >
        <span
          className="text-lg font-semibold text-gray-800 dark:text-gray-100
        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            className={`w-6 h-6 text-gray-500 dark:text-gray-400
            group-hover:text-blue-600 dark:group-hover:text-blue-400
            transition-colors ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: {
                duration: 0.3,
                ease: 'easeInOut',
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.2,
                ease: 'easeInOut',
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  return (
    <div className="  min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700">
            <HelpCircle className="mr-2 w-5 h-5" />
            <span className="text-sm font-medium">How it works</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Questions, Our Answers
          </h1>

          <p className="max-w-2xl mx-auto text-lg">
            Find quick answers to the most common questions about
            StudyHive&apos;s features and functionality.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <div
            className="inline-flex items-center space-x-2
          bg-white dark:bg-gray-800 px-6 py-3 rounded-full
          shadow-md dark:shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <MessageCircleQuestion className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <p className="text-gray-700 dark:text-gray-200">
              Still have questions?{' '}
              <a
                href="/contact"
                className="text-blue-600 dark:text-blue-400
                hover:underline font-semibold"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
