import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Database, Code2, Cpu, Terminal } from "lucide-react";

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Full-stack Developer",
    "Backend Architect",
    "Frontend Engineer",
    "Creative Developer",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-5 text-white selection:bg-cyan-500/30 font-sans overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Circuitry Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url('/portfoli.jpg')`,
            filter: "brightness(0.6) contrast(1.1)",
          }}
        />

        
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90" />

        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 h-screen flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1 space-y-8 pt-32 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase"
          >
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            System.Architect.Verified
          </motion.div>

          <div className="space-y-5">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.85]">
              TSEDENIA <span />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 font-light">
                NEGA
              </span>
            </h1>

            <div className="h-10 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center font-bold gap-2 text-xl font-mono text-cyan-400 tracking-wider"
                >
                  <Terminal size={18} />
                  <span>{roles[roleIndex].toUpperCase()}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-slate-400 text-base max-w-md leading-relaxed font-light">
            Engineering{" "}
            <span className="text-white">robust backend infrastructures</span>{" "}
            and high-performance{" "}
            <span className="text-white">frontend systems</span>. Turning
            complex logic into seamless digital experiences.
          </p>

          <div className="flex items-center gap-8 pt-4">
            <button className="px-10 py-3 bg-white border border-white rounded-sm transition-all duration-300 hover:bg-black group">
              <span className="text-black text-xs font-bold uppercase tracking-widest group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-white group-hover:to-purple-500">
                View Work
              </span>
            </button>
            <button className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-white transition-all">
              <Download
                size={16}
                className="text-cyan-500 group-hover:animate-bounce"
              />
              Download_CV
            </button>
          </div>
        </div>

        {/* RIGHT: THE CIRCULAR PORTAL */}
        <div className="flex-1 relative flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
          
            <div className="relative w-64 h-64 lg:w-[420px] lg:h-[420px] rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-transparent to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-[#050505] relative shadow-2xl">
                <img
                  src="/me.jpg"
                  alt="Tsedenia Nega"
                  className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-1000 brightness-90"
                />
              </div>

              {/* Orbiting Specialty Tags */}
              <div className="absolute inset-[-30px] pointer-events-none">
                {/* Top Left Badge */}
                <div className="absolute top-10 left-[-20px] p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl">
                  <Database size={18} className="text-purple-400" />
                  <div className="text-[9px] font-mono">
                    <p className="text-slate-500">DB.STRUCTURE</p>
                    <p className="text-white">POSTGRES / MONGO</p>
                  </div>
                </div>

                {/* Bottom Right Badge */}
                <div className="absolute bottom-10 right-[-20px] p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl">
                  <Code2 size={18} className="text-cyan-400" />
                  <div className="text-[9px] font-mono">
                    <p className="text-slate-500">FRONTEND</p>
                    <p className="text-white">REACT / NEXT.JS</p>
                  </div>
                </div>

                {/* Center Right Badge */}
                <div className="absolute top-1/2 -right-16 -translate-y-1/2 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl">
                  <Cpu size={18} className="text-emerald-400" />
                  <div className="text-[9px] font-mono">
                    <p className="text-slate-500">BACKEND</p>
                    <p className="text-white">NODE.JS / EXPRESS</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="fixed bottom-0 w-full p-6 flex justify-between text-[9px] font-mono text-slate-700 tracking-[0.4em] z-50">
        <div className="flex gap-10">
          <span>REGION: ADDIS_ABABA // ET</span>
          <span className="hidden md:inline">NODE_V: 20.x.LTS</span>
        </div>
        <div className="flex items-center gap-3 text-cyan-500/60">
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
          <span>FULLSTACK_ARCH_ACTIVE</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
