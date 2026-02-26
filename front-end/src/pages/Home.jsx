import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Database,
  Code2,
  Cpu,
  Globe,
  Box,
  Terminal,
  Cloud,
} from "lucide-react";

const Home = () => {
  const [index, setIndex] = useState(0);

  const roles = ["Fullstack Developer", "AI Enthusiast", "Creative Developer"];

  // Cycle roles every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { icon: Terminal, top: "28%", left: "45%", label: "Backend" },
    { icon: Cloud, top: "22%", left: "68%", label: "Cloud" },
    { icon: Box, top: "45%", left: "82%", label: "DevOps" },
    { icon: Database, top: "72%", left: "78%", label: "Database" },
    { icon: Code2, top: "85%", left: "55%", label: "Frontend" },
    { icon: Cpu, top: "72%", left: "32%", label: "Systems" },
    { icon: Globe, top: "45%", left: "25%", label: "Global" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-hidden selection:bg-cyan-500/30">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')",
            filter: "hue-rotate(10deg) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 h-screen flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* LEFT CONTENT */}
        <div className="flex-1 pl-35 space-y-4">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-cyan-500/50" />
            <span className="text-xs tracking-widest text-cyan-400 font-medium">
              {/* Engineering Portfolio */}
            </span>
          </motion.div>

          {/* Name */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Tsedenia <span className="text-cyan-300">Nega</span>
            </h2>
          </div>

          {/* Animated Role */}
          <div className="h-20 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-3xl lg:text-4xl font-light tracking-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  {roles[index]}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base max-w-md leading-relaxed font-light">
            I build modern web applications focused on{" "}
            <span className="text-white font-medium">
              elegant user experiences
            </span>{" "}
            and{" "}
            <span className="text-white font-medium">
              scalable system architecture
            </span>
            .
          </p>

          {/* Button */}
          <div className="pt-4">
            <button className="group px-8 py-3 border border-white/20 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300">
              <span className="text-sm font-medium tracking-wide flex items-center gap-2">
                <Download size={16} className="text-cyan-400" />
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CIRCULAR PORTAL */}
        <div className="flex-1 relative flex justify-center items-center h-[500px]">
          <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
            {/* Profile Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 z-10 p-[2px] bg-white/10 rounded-full shadow-2xl">
              <div className="w-full h-full bg-[#020617] rounded-full overflow-hidden flex items-center justify-center border-[4px] border-[#020617]">
                <img
                  src="/me.jpg"
                  alt="Tsedenia Nega"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ top: node.top, left: node.left }}
              >
                <div className="group relative flex items-center justify-center w-full h-full bg-black border border-white/10 rounded-full hover:border-cyan-400 transition-all cursor-pointer">
                  <node.icon
                    size={16}
                    className="text-white/40 group-hover:text-cyan-400 transition-colors"
                  />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-wide">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full px-10 py-6 flex justify-between items-center text-xs text-slate-500 tracking-wide z-50">
        <span>Addis Ababa // 2026</span>
        <div className="flex items-center gap-2 text-cyan-500/40">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          System Active
        </div>
      </footer>
    </div>
  );
};

export default Home;
