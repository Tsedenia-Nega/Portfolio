import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Database,
  Code2,
  Cpu,
  Globe,
  Layers,
  Box,
  Terminal,
  Cloud,
} from "lucide-react";

const Home = () => {
  // Precise node positions to match the geometric "web" in the image
  const nodes = [
    { icon: Terminal, top: "25%", left: "42%", label: "Backend" },
    { icon: Cloud, top: "15%", left: "75%", label: "Cloud" },
    { icon: Box, top: "35%", left: "95%", label: "DevOps" },
    { icon: Database, top: "65%", left: "95%", label: "Database" },
    { icon: Code2, top: "85%", left: "75%", label: "Frontend" },
    { icon: Cpu, top: "75%", left: "45%", label: "Systems" },
    { icon: Globe, top: "50%", left: "38%", label: "Global" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 font-sans overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-30"
          style={{
            backgroundImage: `url('/port.jpg')`, // Using the hexagonal background
            filter: "hue-rotate(10deg) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/50 to-transparent" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 h-screen flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-10 bg-cyan-500" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-cyan-400">
              Engineering Portfolio
            </span>
          </motion.div>

          <div className="space-y-1">
            <h2 className="text-4xl lg:text-5xl font-light tracking-widest text-slate-300 uppercase">
              Tsedenia <span className="font-bold text-white">Nega</span>
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">
                CREATIVE <br /> DEVELOPER
              </span>
            </h1>
          </div>

          <p className="text-slate-400 text-sm max-w-sm leading-relaxed border-l border-white/10 pl-4">
            I build advanced web applications with a focus on{" "}
            <span className="text-white">elegant design</span> and{" "}
            <span className="text-white">robust system architecture</span>.
          </p>

          <div className="pt-4">
            <button className="group relative px-6 py-2 bg-transparent border border-cyan-500/50 rounded-sm transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                <Download size={14} /> Download My CV
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT: THE HEXAGONAL PORTAL */}
        <div className="flex-1 relative flex justify-center items-center h-[600px]">
          <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
            {/* 1. The Hexagon Frame (CSS Clip Path) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-64 lg:w-72 lg:h-80 z-10 p-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent shadow-[0_0_50px_rgba(6,182,212,0.2)]"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <div
                className="w-full h-full bg-[#020617] flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <img
                  src="/me.jpg"
                  alt="Tsedenia Nega"
                  className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                />
              </div>
            </div>

            {/* 2. Background Hexagon Glows */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-cyan-500/20 rotate-12"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />

            {/* 3. Orbiting Geometric Nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ top: node.top, left: node.left }}
              >
                <div className="group relative flex items-center justify-center w-full h-full bg-black/80 border border-white/20 rounded-full hover:border-cyan-400 transition-all cursor-crosshair">
                  <node.icon
                    size={16}
                    className="text-white/70 group-hover:text-cyan-400"
                  />

                  {/* Glowing Connection Point */}
                  <div className="absolute -inset-1 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Label */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-widest uppercase">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* 4. Tech Particle Effects */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-pulse" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="fixed bottom-0 w-full p-6 flex justify-between items-center text-[9px] font-mono text-slate-600 tracking-[0.5em] z-50">
        <span>ADDIS_ABABA // 2026</span>
        <div className="flex items-center gap-2 text-cyan-500/50">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
          CORE_SYSTEM_ACTIVE
        </div>
      </footer>
    </div>
  );
};

export default Home;
