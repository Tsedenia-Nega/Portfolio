import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, ShieldCheck, Zap } from "lucide-react";
import axios from "axios";
import API from "../services/api";
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/projects");
        if (Array.isArray(response.data)) {
          setProjects(response.data);
        }
      } catch (error) {
        console.error(" API Connection Failed");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 font-sans pt-20 pb-32 overflow-x-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-cyan-500/30" />
            <span className="text-[10px] font-mono tracking-[0.5em] text-cyan-400 uppercase italic">
              Live.Deployments
            </span>
            <div className="h-px w-10 bg-cyan-500/30" />
          </motion.div>
          <h1 className="text-5xl font-bold tracking-tight">
            Featured{" "}
            <span className=" text-cyan-500 underline decoration-cyan-500/20 underline-offset-8">
              Projects
            </span>
          </h1>
        </div>
        {/* CORE PHILOSOPHY / INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-20 text-center"
        >
          <p className="text-slate-400 text-md leading-relaxed ">
            "Bridging the gap between{" "}
            <span className="text-white font-medium">
              robust server-side logic
            </span>{" "}
            and seamless{" "}
            <span className="text-white font-medium">
              frontend interactivity
            </span>
            . Each deployment is a testament to clean code, where{" "}
            <span className="text-cyan-400">scalable backend architecture</span>{" "}
            meets modern web performance."
          </p>
        </motion.div>
        {/* Z-PATTERN STACK */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-slate-500">
              POLLING_DATABASE...
            </span>
          </div>
        ) : (
          <div className="space-y-24 lg:space-y-32">
            <AnimatePresence>
              {projects.length > 0 ? (
                projects.map((project, idx) => (
                  <motion.div
                    key={project._id || idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    // THE MAGIC LINE: Reverse direction for odd indices
                    className={`flex flex-col ${idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16`}
                  >
                    {/* SIDE A: IMAGE DISPLAY */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-900 border border-white/10">
                        <img
                          src={project.imageUrl || "/placeholder.jpg"}
                          alt={project.title}
                          className="w-full h-full object-cover  transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                      </div>
                    </div>

                    {/* SIDE B: SPECIFICATIONS */}
                    <div
                      className={`w-full lg:w-1/2 space-y-6 ${idx % 2 !== 0 ? "text-right items-end" : "text-left items-start"}`}
                    >
                      <div
                        className={`flex flex-col ${idx % 2 !== 0 ? "items-start" : "items-start"}`}
                      >
                        <span className="text-[10px] font-mono text-cyan-500 tracking-[0.4em] uppercase mb-2">
                          0{idx + 1}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p
                        className={`text-slate-400  text-left leading-relaxed font-light  max-w-lg`}
                      >
                        {project.description}
                      </p>

                      {/* DYNAMIC TECH TAGS */}
                      <div className="flex flex-wrap gap-3 justify-center items-center w-full mt-4">
                        {project.techStack?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm font-mono text-slate-300 hover:border-cyan-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* LINKS & STATUS */}
                      <div
                        className={`flex items-center gap-6 pt-4 ${idx % 2 !== 0 ? "flex-row-reverse" : "flex-row"}`}
                      >
                        <div className="flex gap-4">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noreferrer"
                              className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 transition-all"
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 transition-all"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        {/* <div className="h-px w-12 bg-white/10" /> */}
                        {/* <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600">
                          <ShieldCheck size={12} className="text-cyan-500/40" />
                          <span>ENCRYPTED_SRC</span>
                        </div> */}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 border border-dashed border-white/5 rounded-3xl">
                  <p className="text-slate-600 font-mono text-xs uppercase tracking-widest italic">
                    Awaiting Database Response...
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* SYSTEM LOG FOOTER */}
      <footer className="fixed bottom-0 w-full p-8 flex justify-between items-center text-[8px] font-mono text-slate-800 tracking-[0.5em] z-50 pointer-events-none">
        <div className="flex items-center gap-4">
          <span>T_NEGA_PROJECT_LOG</span>
          <div className="w-24 h-px bg-slate-900" />
        </div>
        <div className="flex items-center gap-2 text-cyan-500/20">
          <Zap size={10} />
          <span>REALTIME_SYNC: ACTIVE</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
