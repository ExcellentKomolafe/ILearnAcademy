import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((p) => !p);

  return (
    <header className="fixed inset-x-4 top-4 z-50 rounded-3xl backdrop-blur-md bg-slate-900/60 shadow-md border border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-sky-500 to-indigo-500 flex items-center justify-center shadow">
            <span className="text-white font-bold">IA</span>
          </div>
          <span className="text-lg font-semibold  text-white">Ilearn Academy</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8  text-slate-200">
          <Link to="/" className="text-base hover:opacity-90 transition-opacity">Home</Link>
          <Link to="/question" className="text-base hover:opacity-90 transition-opacity">Past Questions</Link>
          <Link to="/about" className="text-base hover:opacity-90 transition-opacity">About</Link>
         
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-linear-to-r from-sky-600 to-indigo-600 text-white text-sm font-medium shadow hover:brightness-105 transform transition"
          >
           Register
          </Link>
         
        </div>

        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
        >
          {isOpen ? <FaTimes className="w-5 h-5  text-white" /> : <FaBars className="w-5 h-5  text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-[92vw] max-w-xs bg-slate-900 shadow-2xl border-l border-white/6 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={toggleMenu} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-linear-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-semibold">
                    IA
                  </div>
                  <span className="font-medium  text-slate-100">Ilearn Academy</span>
                </Link>

                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="p-2 rounded-md  hover:opacity-60 duration-300  bg-slate-800 transition"
                >
                  <FaTimes className="w-5 h-5  text-slate-100" />
                </button>
              </div>

              <nav className="flex py-10 bg-slate-900/20 flex-col gap-4 backdrop-blur-3xl shadow-2xl text-slate-100">
                <Link to="/" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:opacity-60 duration-300  bg-slate-800 transition">
                  Home
                </Link>
                <Link to="/question" onClick={toggleMenu} className="py-3 px-3 rounded-lg hover:opacity-60 duration-300  bg-slate-800 transition">
                  Past Questions
                </Link>
                <Link to="/about" onClick={toggleMenu} className="py-3 px-3 rounded-lg  hover:opacity-60 duration-300  bg-slate-800 transition">
                  About
                </Link>
               
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-200/10">
                <Link
                  to="/signup"
                  onClick={toggleMenu}
                  className="block w-full text-center py-3 rounded-xl bg-linear-to-r from-sky-600 to-indigo-600 text-white font-medium mb-3 hover:brightness-105 transition"
                >
                 Register
                </Link>
                
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
