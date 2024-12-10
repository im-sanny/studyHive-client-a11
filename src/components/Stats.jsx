/* eslint-disable react/prop-types */
import { MdAssignment } from 'react-icons/md';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Users, TrendingUp, Activity } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, color }) => {
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, Math.round);

  useEffect(() => {
    animate(count, value, { duration: 3 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`
        relative overflow-hidden rounded-2xl
        p-6 shadow-lg transform transition-all
        duration-300 hover:scale-105
        ${color} text-white
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-full">
          <Icon className="w-8 h-8" />
        </div>
        <div className="absolute top-0 right-0 opacity-10">
          <Icon className="w-24 h-24" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline space-x-2">
          <motion.span className="text-4xl font-bold">
            {roundedCount}
          </motion.span>
          <span className="text-xl">
            {label.includes('%') || label.includes('+') ? label.slice(-1) : ''}
          </span>
        </div>
        <p className="text-sm opacity-80 capitalize">
          {label.replace(/[+%]/g, '')}
        </p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const statsData = [
    {
      icon: MdAssignment,
      value: 2000,
      label: 'Assignments+',
      color: 'bg-gradient-to-br from-purple-600 to-indigo-600',
    },
    {
      icon: Users,
      value: 7500,
      label: 'Students',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      value: 172,
      label: 'Growth%',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
    {
      icon: Activity,
      value: 17,
      label: 'Bounce Rate%',
      color: 'bg-gradient-to-br from-orange-500 to-amber-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          StudyHive Insights
        </h2>
        <p className="max-w-2xl mx-auto">
          Real-time analytics and performance metrics of our learning platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
