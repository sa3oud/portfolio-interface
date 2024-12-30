import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Boxes,
  Brain,
  Star,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Settings,
  Monitor,
  Network
} from 'lucide-react';

const SymbolPortfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    profile: {
      icon: <User size={32} />,
      content: (
        <div className="grid grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
          >
            <Terminal size={40} className="text-green-400" />
            <div className="mt-4 text-green-400">CLI</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
          >
            <Cpu size={40} className="text-blue-400" />
            <div className="mt-4 text-blue-400">Systems</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
          >
            <Database size={40} className="text-purple-400" />
            <div className="mt-4 text-purple-400">Data</div>
          </motion.div>
        </div>
      )
    },
    projects: {
      icon: <Boxes size={32} />,
      content: (
        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <Cloud size={48} className="text-blue-400 mb-4" />
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Github className="w-6 h-6 cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Monitor className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <Network size={48} className="text-purple-400 mb-4" />
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Github className="w-6 h-6 cursor-pointer" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Monitor className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      )
    },
    skills: {
      icon: <Brain size={32} />,
      content: (
        <div className="grid grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
            >
              <Settings 
                size={32} 
                className="text-gray-400"
                style={{ 
                  transform: `rotate(${45 * i}deg)`,
                  transition: 'transform 0.3s ease-in-out'
                }}
              />
            </motion.div>
          ))}
        </div>
      )
    },
    contact: {
      icon: <Star size={32} />,
      content: (
        <div className="flex justify-center space-x-8">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <Github size={40} className="text-white" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <Linkedin size={40} className="text-blue-400" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
          >
            <Mail size={40} className="text-red-400" />
          </motion.a>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex justify-center space-x-12 mb-12">
        {Object.entries(sections).map(([key, section]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(activeSection === key ? null : key)}
            className={`cursor-pointer p-4 rounded-full ${
              activeSection === key ? 'bg-blue-500' : 'bg-gray-800'
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

export default SymbolPortfolio;
