import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Wrench,
  Cpu,
  GraduationCap,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      category: "Frontend Architecture",
      icon: <Layout size={24} />,
      items: ["Tailwind CSS","Javascript", "React", "Next.js"],
    },
    {
      category: "Backend Engineering",
      icon: <Cpu size={24} />,
      items: [
        "Node.js",
        "Express",
        "PHP",
        "Soap UI",
        "REST API",
        "Postman",
        "Swagger",
      ],
    },
    {
      category: "Database Management",
      icon: <Database size={24} />,
      items: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "supabase",
        "Prisma",
        "Firebase",
      ],
    },
    {
      category: "Tools and Others",
      icon: <Wrench size={24} />,
      items: ["C++","Java","Git", "GitHub", "Figma", "Netlify", "Render", "Vercel"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 font-sans pt-32 pb-32 overflow-x-hidden">
      <section className="relative z-10 max-w-5xl mx-auto px-6">
        {/* CENTERED HEADER: THE HOOK */}
        <div className="text-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 text-cyan-500/40"
          >
            <div className="h-px w-10 bg-current" />
            
            <div className="h-px w-10 bg-current" />
          </motion.div>

          <h1 className="text-4xl lg:text-5xl font-light tracking-[0.2em] text-white uppercase">
            About{" "}
            <span className="font-black italic text-slate-500 tracking-normal">
              Tsedenia
            </span>
          </h1>

          <div className="max-w-3xl mx-auto pt-4 space-y-6">
            <p className="text-slate-300 text-xl lg:text-2xl font-light leading-relaxed">
              "I don't just write code; I build{" "}
              <span className="text-white font-medium border-b border-cyan-500/50">
                resilient digital ecosystems
              </span>
              ."
            </p>
            <p className="text-slate-400 text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              With a foundation in Computer Science from{" "}
              <span className="text-white">Addis Ababa University</span>, I
              specialize in bridging the gap between{" "}
              <span className="text-white">complex backend logic</span> and{" "}
              <span className="text-white">seamless user experiences</span>. I
              focus on writing high-performance, maintainable code that solves
              real-world business challenges.
            </p>
          </div>
        </div>

        {/* 2-COLUMN GRID SYSTEM */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-10 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl hover:border-cyan-500/40 transition-all duration-700"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors">
                      {group.category}
                    </h3>
                  </div>
                  <CheckCircle2
                    size={16}
                    className="text-slate-800 group-hover:text-cyan-500/40 transition-colors"
                  />
                </div>

                {/* Skill Tags Grid */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-400 group-hover:text-white group-hover:border-cyan-500/30 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                 
                  <ShieldCheck
                    size={14}
                    className="text-slate-700 group-hover:text-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        <div className="mt-20 flex flex-wrap justify-center gap-16 text-center">
          <div className="flex items-center gap-3 group">
            <GraduationCap
              className="text-cyan-500 group-hover:scale-110 transition-transform"
              size={20}
            />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500">
              Addis Ababa University // BSc in Computer Science
            </span>
          </div>
          <div className="flex items-center gap-3 group">
            <Globe
              className="text-cyan-500 group-hover:scale-110 transition-transform"
              size={18}
            />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500">
              Available for Work Worldwide 
            </span>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;
