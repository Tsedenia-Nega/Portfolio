import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Database,
  Code2,
  Cpu,
  Globe,
  Box,
  Zap,
  Terminal,
  Cloud,
} from "lucide-react";
import Footer from "../components/Footer";
import StatsSection from "../components/StatSection";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const Home = () => {
  const [index, setIndex] = useState(0);

  const roles = ["Fullstack Developer", "AI Enthusiast", "Creative Developer"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { icon: Terminal, top: "15%", left: "50%", label: "Backend" },
    { icon: Database, top: "50%", left: "85%", label: "Database" },
    { icon: Code2, top: "85%", left: "50%", label: "Frontend" },
    { icon: Zap, top: "50%", left: "15%", label: "Fullstack" },
  ];

  const handleDownload = () => {
    const cvUrl = "/Tsedenia_Nega_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Tsedenia_Nega_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-70"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "hue-rotate(10deg) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
      </div>

      {/* MAIN SECTION - Changed h-screen to min-h-screen for mobile scrolling */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 pt-24 lg:pt-0">
        {/* LEFT CONTENT - Adjusted padding and text alignment for mobile */}
        <div className="flex-1 lg:pl-35 space-y-2 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="h-px w-12 bg-cyan-500/50" />
            
          </motion.div>

          <div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Tsedenia <span className="text-cyan-300">Nega</span>
            </h2>
          </div>

          <div className="h-16 lg:h-20 flex items-center justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-2xl lg:text-4xl font-light tracking-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                  {roles[index]}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="text-slate-300 text-sm lg:text-base max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
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

          <div className="pt-6">
            <button
              onClick={handleDownload}
              className="group px-8 py-3 border border-white/20 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300 relative overflow-hidden inline-flex"
            >
              <span className="text-sm font-medium tracking-wide flex items-center gap-2 text-white group-hover:text-cyan-400 transition-colors">
                <Download
                  size={16}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                Download CV
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CIRCULAR PORTAL - Scaled for mobile */}
        <div className="flex-1 relative flex justify-center items-center h-[300px] lg:h-[500px] order-1 lg:order-2">
          <div className="relative w-full h-full max-w-[300px] max-h-[300px] lg:max-w-[400px] lg:max-h-[400px]">
            {/* Profile Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 lg:w-52 lg:h-52 z-10 p-[2px] bg-white/10 rounded-full shadow-2xl">
              <div className="w-full h-full bg-[#020617] rounded-full overflow-hidden flex items-center justify-center border-[4px] border-[#020617]">
                <img
                  src="/my.jpg"
                  alt="Tsedenia Nega"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute w-8 h-8 lg:w-10 lg:h-10 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ top: node.top, left: node.left }}
              >
                <div className="group relative flex items-center justify-center w-full h-full bg-black border border-white/10 rounded-full hover:border-cyan-400 transition-all cursor-pointer">
                  <node.icon
                    size={14}
                    className="text-white/40 group-hover:text-cyan-400 transition-colors"
                  />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cyan-400 opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-wide">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
