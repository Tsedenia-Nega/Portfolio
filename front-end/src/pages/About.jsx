import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Layout,
  Wrench,
  Cpu,
  GraduationCap,
  Globe,
  CheckCircle2,
  Briefcase,
  Award,
} from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      category: "Frontend Architecture",
      icon: <Layout size={20} />,
      items: ["Tailwind CSS", "Javascript", "React", "Next.js"],
    },
    {
      category: "Backend Engineering",
      icon: <Cpu size={20} />,
      items: ["Node.js", "Express", "PHP", "REST API", "Postman", "Swagger"],
    },
    {
      category: "Database Management",
      icon: <Database size={20} />,
      items: [
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Supabase",
        "Prisma",
        "Firebase",
      ],
    },
    {
      category: "Tools and Others",
      icon: <Wrench size={20} />,
      items: ["C++", "Java", "Git", "GitHub", "Figma", "Netlify", "Vercel"],
    },
  ];

  const techIcons = [
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "Express.js", slug: "express", color: "ffffff" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "MongoDB", slug: "mongodb", color: "47A248" },
    { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    { name: "MySQL", slug: "mysql", color: "4479A1" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-30 pb-32 overflow-x-hidden">
      <section className="max-w-6xl mx-auto px-6">
        {/* --- HEADER (Corrected Font & Condensed Text) --- */}
        <div className="text-center mb-20">
          <motion.h1 className="text-5xl md:text-5xl font-bold tracking-tight text-white mb-6">
            About <span className="text-cyan-500 font-black">Me</span>
          </motion.h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-slate-300 text-xl md:text-2xl font-light leading-relaxed">
              "I don't just write code; I build{" "}
              <span className="text-cyan-400 border-b border-cyan-500/50">
                resilient digital ecosystems
              </span>
              ."
            </p>
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Computer Science Graduate from Addis Ababa University specializing
            in
            <span className="text-white">
              {" "}
              high-performance backend logic
            </span>{" "}
            and
            <span className="text-white"> creative frontend experiences</span>.
          </p>
        </div>

        {/* {/* --- SKILL CARDS  */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              className="p-16 bg-[#0f172a]/60 border-2 border-white/10 rounded-[2rem] hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-cyan-400 p-2 bg-cyan-500/5 rounded-lg border border-cyan-500/10">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold uppercase  text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs text-slate-400 group-hover:text-white transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ICON MARQUEE (Smaller Icon Size) --- */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-8 mb-24 border-y border-white/5 bg-[#0f172a]/30">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap items-center px-4"
          >
            {[...techIcons, ...techIcons, ...techIcons].map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[120px] h-[130px] bg-[#1e293b]/80 border border-white/10 rounded-2xl shadow-md"
              >
                <img
                  src={`https://img.icons8.com/color/48/${tech.slug}.png`}
                  alt={tech.name}
                  className="w-10 h-10 mb-3 object-contain"
                  onError={(e) => {
                    e.target.src = `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;
                  }}
                />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mb-14 font-sans">
          <h2 className="text-4xl font-bold text-center mb-24 uppercase tracking-tighter">
            Professional <span className="text-cyan-500 ">Journey</span>
          </h2>
          {/* --- EDUCATION & CERTIFICATES --- */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-8 bg-[#0f172a]/60 border-2 border-white/5 rounded-[2.5rem] shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 italic">
                <GraduationCap className="text-cyan-500" size={20} /> Education
              </h3>
              <p className="text-cyan-500 font-mono text-[10px] uppercase">
                2021 — 2025
              </p>
              <h4 className="text-lg font-bold">BSc in Computer Science</h4>
              <p className="text-slate-400 text-sm">Addis Ababa University</p>
            </div>

            <div className="p-8 bg-[#0f172a]/60 border-2 border-white/5 rounded-[2.5rem] shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 italic">
                <Award className="text-cyan-500" size={20} /> Certifications
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-sm">
                    Full-Stack Website Development — Evangadi Networks
                  </p>
                </div>
                <div>
                  <p className="font-bold text-sm">
                    Android Development — Udacity
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

            {/* INTERNSHIP (LEFT SIDE) */}
            <div className="relative flex flex-col md:flex-row items-center mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:w-[50%] w-full md:pr-12"
              >
                <div className="bg-[#0f172a]/60 p-10 rounded-[2.5rem] border-2 border-white/5 hover:border-[#2DD4BF]/20 transition-all shadow-2xl text-center md:text-left">
                  <span className="text-[#2DD4BF] font-mono text-sm uppercase tracking-[0.3em] block mb-2">
                    June 2024 — Sep 2024
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    IT Intern
                  </h3>
                  <p className="text-slate-300 text-xl italic mb-6">
                    Commercial Bank of Ethiopia
                  </p>

                  <div className="flex justify-center md:text-left">
                    <p className="text-slate-400 text-lg leading-relaxed max-w-[95%]">
                      Spearheaded system troubleshooting and network assistance
                      for institutional users, ensuring 99.9% uptime for
                      critical banking workstations.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#020617] border-4 border-slate-800 z-10" />
              <div className="md:w-[50%]" />
            </div>

            {/* CURRENT ROLE (RIGHT SIDE) */}
            <div className="relative flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-[50%]" />

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#020617] border-4 border-[#2DD4BF] z-10 shadow-[0_0_20px_#2DD4BF]" />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:w-[50%] w-full md:pl-12 mt-10 md:mt-0"
              >
                <div className="bg-[#0f172a]/60 p-10 rounded-[2.5rem] border-2 border-white/5 hover:border-[#2DD4BF]/20 transition-all shadow-2xl text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-3 justify-center md:justify-start">
                    <span className="text-[#2DD4BF] font-mono text-sm uppercase tracking-[0.3em]">
                      Dec 2025 — Present
                    </span>
                    <span className="px-3 py-1 bg-[#2DD4BF]/10 text-[#2DD4BF] text-[10px] font-bold rounded-full border border-[#2DD4BF]/30 uppercase tracking-widest animate-pulse">
                      Active
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold pb-2 text-white">
                    Project Manager
                  </h3>
                  <p className="text-slate-300 text-xl italic mb-6">
                    Commercial Bank of Ethiopia
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <p className="text-slate-400 text-lg leading-relaxed max-w-[95%]">
                      Currently architecting integrated digital systems and
                      maintaining core technical infrastructure to optimize
                      digital banking operations across the institution.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FREELANCE (LEFT SIDE) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:w-[50%] w-full md:pr-12"
              >
                <div className="bg-[#0f172a]/60 p-10 rounded-[2.5rem] border-2 border-white/5 hover:border-[#2DD4BF]/20 transition-all shadow-2xl text-center md:text-left">
                  <span className="text-[#2DD4BF] font-mono text-sm uppercase tracking-[0.3em] block mb-2">
                    2025 — Present
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    Freelance Developer
                  </h3>
                  <p className="text-slate-300 text-xl italic mb-6">
                    Worldwide
                  </p>

                  <div className="flex justify-center md:text-left">
                    <p className="text-slate-400 text-lg leading-relaxed max-w-[95%]">
                      Delivering custom full-stack solutions, from
                      high-performance E-commerce platforms to scalable SaaS
                      architectures, focused on clean code and user-centric
                      design.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#020617] border-4 border-slate-800 z-10" />
              <div className="md:w-[50%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
