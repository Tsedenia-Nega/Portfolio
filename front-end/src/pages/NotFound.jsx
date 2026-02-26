import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
       

        <h1 className="text-8xl font-black italic tracking-tighter text-white mb-2">
          4<span className="text-cyan-500 text-glow">0</span>4
        </h1>

        <p className="text-slate-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8">
          Error: Page_Not_Found
        </p>

    
        <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          The coordinates you entered do not exist in the current repository.
          Let's get you back to the main console.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-cyan-500 transition-all shadow-xl"
        >
          <Home size={18} /> Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
