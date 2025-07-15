// src/components/Header.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ onExport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="bg-gradient-to-b from-blue-950 to-blue-900 shadow-lg py-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 120,
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500"
              whileHover={{
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.6 },
              }}
            >
              {/* Replace with your actual logo path */}
              <img
                src="./logo.jpg"
                alt="FWT Logo"
                className="w-full h-full object-contain bg-white p-1"
              />
            </motion.div>
            <motion.h1
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                textShadow: "0 0 10px rgba(255, 140, 0, 0.7)",
              }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              FWT Resume Builder
            </motion.h1>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#features"
            className="text-blue-100 hover:text-orange-300 transition font-medium"
            whileHover={{
              y: -3,
              scale: 1.05,
              textShadow: "0 0 8px rgba(255, 165, 0, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Features
          </motion.a>
          <motion.a
            href="#examples"
            className="text-blue-100 hover:text-orange-300 transition font-medium"
            whileHover={{
              y: -3,
              scale: 1.05,
              textShadow: "0 0 8px rgba(255, 165, 0, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Samples
          </motion.a>
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={onExport}
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-blue-950 px-5 py-2.5 rounded-lg flex items-center font-bold shadow-lg"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(255, 140, 0, 0.8)",
              background: [
                "linear-gradient(to right, #ff8c00, #ffaa00)",
                "linear-gradient(to right, #ffaa00, #ff8c00)",
              ],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0 0 15px rgba(255, 140, 0, 0.5)",
            }}
          >
            <i className="fas fa-download mr-2"></i>{" "}
            <span className="hidden md:inline">Export</span>
          </motion.button>
          <motion.button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-orange-300"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8 }}
          >
            <i className="fas fa-bars text-2xl"></i>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            ></motion.div>
            <motion.div
              className="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-blue-900 to-blue-950 z-50 shadow-2xl"
              initial={{ x: 300, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                },
              }}
              exit={{
                x: 300,
                opacity: 0,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                },
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500">
                      <img
                        src="/logo.png"
                        alt="FWT Logo"
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-orange-400">
                      FWT Resume
                    </h2>
                  </div>
                  <motion.button
                    onClick={closeMobileMenu}
                    className="text-orange-300"
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <i className="fas fa-times text-2xl"></i>
                  </motion.button>
                </div>
                <nav className="space-y-6 mb-8">
                  <motion.a
                    href="#features"
                    className="block text-blue-100 text-lg py-3 border-b border-blue-700"
                    onClick={closeMobileMenu}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    whileHover={{
                      x: 10,
                      color: "#ffaa33",
                      textShadow: "0 0 10px rgba(255, 165, 0, 0.7)",
                    }}
                  >
                    Features
                  </motion.a>
                  <motion.a
                    href="#examples"
                    className="block text-blue-100 text-lg py-3 border-b border-blue-700"
                    onClick={closeMobileMenu}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: 0.2 },
                    }}
                    whileHover={{
                      x: 10,
                      color: "#ffaa33",
                      textShadow: "0 0 10px rgba(255, 165, 0, 0.7)",
                    }}
                  >
                    Examples
                  </motion.a>
                  <motion.a
                    href="#resume-builder"
                    className="block text-orange-400 font-bold text-lg py-3"
                    onClick={closeMobileMenu}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: 0.3 },
                    }}
                    whileHover={{
                      x: 10,
                      scale: 1.05,
                      textShadow: "0 0 15px rgba(255, 165, 0, 0.9)",
                    }}
                  >
                    Build Resume
                  </motion.a>
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4 },
                  }}
                >
                  <motion.button
                    onClick={() => {
                      onExport();
                      closeMobileMenu();
                    }}
                    className="w-full py-3.5 rounded-lg font-bold text-blue-950 bg-gradient-to-r from-orange-500 to-orange-400 shadow-xl"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(255, 140, 0, 0.8)",
                      background: [
                        "linear-gradient(to right, #ff8c00, #ffaa00)",
                        "linear-gradient(to right, #ffaa00, #ff8c00)",
                      ],
                      transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-download mr-2"></i> Export Resume
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
