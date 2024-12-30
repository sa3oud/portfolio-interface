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
  Book,
  Code,
  Workflow,
  Server,
  CloudLightning,
  Blocks
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
            <Workflow size={40} className="text-green-400" />
            <div className="mt-4 text-green-400">n8n Expert</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
          >
            <Server size={40} className="text-blue-400" />
            <div className="mt-4 text-blue-400">Magento Dev</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
          >
            <Code size={40} className="text-purple-400" />
            <div className="mt-4 text-purple-400">PHP Developer</div>
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
    apps: {
      icon: <Blocks size={32} />,
      content: (
        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <CloudLightning size={48} className="text-blue-400 mb-4" />
            <h3 className="font-bold mb-2">App 1</h3>
            <div className="flex space-x-4 mt-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Terminal className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <CloudLightning size={48} className="text-purple-400 mb-4" />
            <h3 className="font-bold mb-2">App 2</h3>
            <div className="flex space-x-4 mt-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Terminal className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <CloudLightning size={48} className="text-green-400 mb-4" />
            <h3 className="font-bold mb-2">App 3</h3>
            <div className="flex space-x-4 mt-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Terminal className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center"
          >
            <CloudLightning size={48} className="text-yellow-400 mb-4" />
            <h3 className="font-bold mb-2">App 4</h3>
            <div className="flex space-x-4 mt-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Terminal className="w-6 h-6 cursor-pointer" />
              </motion.div>
            </div>
          </motion.div>
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
