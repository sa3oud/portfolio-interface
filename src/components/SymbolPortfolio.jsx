import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Book,
  Globe,
  Star,
  Github,
  Linkedin,
  Mail,
  Search,
  Building2,
  Fingerprint,
  Network,
  Eye,
  Lock
} from 'lucide-react';

const SymbolPortfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    profile: {
      icon: <User size={32} />,
      content: (
        <div className="space-y-8">
          {/* Ultra Minimal Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mb-12"
          >
            <div className="text-center">
              <div className="text-5xl font-light mb-2">Asφ</div>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-blue-500 to-slate-700"></div>
              <div className="text-sm text-gray-400 mt-2">Solutions Architect</div>
            </div>
          </motion.div>

          {/* Roles */}
          <div className="grid grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
            >
              <Search size={40} className="text-emerald-400" />
              <div className="mt-4 text-emerald-400">IT Investigator</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
            >
              <Building2 size={40} className="text-blue-400" />
              <div className="mt-4 text-blue-400">E-Architect</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
            >
              <Fingerprint size={40} className="text-purple-400" />
              <div className="mt-4 text-purple-400">Forensic Examiner</div>
            </motion.div>
          </div>
        </div>
      )
    },
    languages: {
      icon: <Globe size={32} />,
      content: (
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <div className="text-2xl mb-2">🇫🇷</div>
            <h3 className="font-bold">French</h3>
            <p className="text-sm text-gray-300">Native</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <div className="text-2xl mb-2">🇳🇱</div>
            <h3 className="font-bold">Dutch</h3>
            <p className="text-sm text-gray-300">Fluent</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <div className="text-2xl mb-2">🇬🇧</div>
            <h3 className="font-bold">English</h3>
            <p className="text-sm text-gray-300">Fluent</p>
          </motion.div>
        </div>
      )
    },
    books: {
      icon: <Book size={32} />,
      content: (
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center text-center"
          >
            <Book className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="font-bold mb-2">Ethymolonautia</h3>
            <p className="text-sm text-gray-300">Literary Journey</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center text-center"
          >
            <Book className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="font-bold mb-2">Anycase Apology</h3>
            <p className="text-sm text-gray-300">Philosophical Reflections</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center text-center"
          >
            <Book className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="font-bold mb-2">Mum, we'll not meet in heaven</h3>
            <p className="text-sm text-gray-300">Personal Memoir</p>
          </motion.div>
        </div>
      )
    },
    contact: {
      icon: <Mail size={32} />,
      content: (
        <div className="flex justify-center space-x-8">
          <motion.a
            href="mailto:sahmad01@outlook.fr"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <Mail size={40} className="text-red-400" />
          </motion.a>
          <motion.a
            href="https://github.com/Sa3oud"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <Github size={40} className="text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/saad-sahmad"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <Linkedin size={40} className="text-blue-400" />
          </motion.a>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div className="flex justify-center space-x-12 mb-12">
        {Object.entries(sections).map(([key, section]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(activeSection === key ? null : key)}
            className={`cursor-pointer p-4 rounded-full ${
              activeSection === key ? 'bg-blue-500/20 backdrop-blur-sm' : 'bg-gray-800'
            }`}
          >
            {section.icon}
          </motion.div>
        ))}
      </div>

      {activeSection && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg"
        >
          {sections[activeSection].content}
        </motion.div>
      )}
    </div>
  );
};
