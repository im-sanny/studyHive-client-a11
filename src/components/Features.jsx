/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ClipboardListIcon,
  FilterIcon,
  FolderEditIcon,
  AwardIcon,
} from 'lucide-react';
AOS.init({
  duration: 800, // Reduced duration for smoother effect
  easing: 'ease-in-out', // Smoother easing function
  once: true, // Animate only once
  offset: 100, // Trigger animation when element is 100px in view
  disable: false, // Enable AOS on all devices
  startEvent: 'DOMContentLoaded', // Trigger on page load
});

const featureData = [
  {
    icon: ClipboardListIcon,
    title: 'Create Assignments Easily',
    description:
      'Seamlessly create assignments with intuitive fields including title, description, marks, difficulty level, and due date.',
    color: 'bg-rose-50',
    textColor: 'text-rose-400',
    badges: [
      'Create Assignments',
      'Assignment Management',
      'Task Distribution',
      'Due Date Tracking',
    ],
    aos: 'fade-right',
    duration: 2000,
  },
  {
    icon: FilterIcon,
    title: 'Explore and Filter Assignments',
    description:
      'Browse through assignments created by users and filter them based on difficulty levels. Efficiently organize and find tasks.',
    color: 'bg-pink-50',
    textColor: 'text-pink-400',
    badges: [
      'View Assignments',
      'Filter by Difficulty',
      'Task Organization',
      'Assignment Catalog',
    ],
    aos: 'fade-up',
    duration: 1500,
  },
  {
    icon: FolderEditIcon,
    title: 'Manage Your Assignments',
    description:
      'Empower users to update or delete their assignments effortlessly. Maintain task accuracy and relevance.',
    color: 'bg-blue-50',
    textColor: 'text-blue-400',
    badges: [
      'Update Assignments',
      'Delete Assignments',
      'User-Specific Tasks',
      'Task Modification',
    ],
    aos: 'fade-down',
    duration: 1500,
  },
  {
    icon: AwardIcon,
    title: 'Submit and Evaluate Assignments',
    description:
      'Submit assignments with ease and receive timely evaluation and feedback. Streamline the marking and grading process.',
    color: 'bg-green-50',
    textColor: 'text-green-400',
    badges: [
      'Submit Assignments',
      'Feedback Provision',
      'Submission Status',
      'Marking and Grading',
    ],
    aos: 'fade-left',
    duration: 2000,
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  textColor,
  badges,
  aos,
  duration,
}) => (
  <motion.div
    data-aos={aos}
    data-aos-duration={duration}
    data-aos-easing="ease-in-out" // Specific easing for each card
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 }, // Smooth hover effect
    }}
    className={`${color} rounded-lg p-6 flex flex-col justify-between h-full shadow-md hover:shadow-lg transition-all duration-300`}
  >
    <div className="flex flex-col items-start">
      <div className="mb-4">
        <Icon className={`w-10 h-10 ${textColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
    </div>

    <div className="flex flex-wrap gap-2 mt-auto">
      {badges.map((badge, index) => (
        <span key={index} className="px-2 py-1 text-xs rounded-full badge">
          {badge}
        </span>
      ))}
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-1">
      <div className="text-center lg:mb-12">
        <p className="badge uppercase p-3 bg-rose-50 text-rose-400">
          StudyHive Features
        </p>

        <h1 className="text-4xl max-w-3xl mx-auto font-bold my-6">
          Powerful Tools for Learning
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
