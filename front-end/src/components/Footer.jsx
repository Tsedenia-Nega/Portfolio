import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you use react-router

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/Tsedenia-Nega",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/tsedenia-nega-392849284/",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=tsedenia301@gmail.com",
      color: "hover:text-[#2DD4BF]",
    },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-16 pb-8 font-sans overflow-hidden">
      {/* Subtle Glow Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#2DD4BF]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* 1. Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold  text-white mb-2">
              Tsedenia <span className="text-cyan-500  font-black">Nega</span>
            </h2>
            <p className="text-slate-500 text-md font-bold  mb-4">
              FullStack Developer
            </p>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mx-auto md:mx-0">
              Building resilient digital ecosystems through high-performance
              logic and creative design.
            </p>
          </div>

          {/* 2. Quick Links (Navigation) */}
          <div className="text-center">
            <h3 className="text-white font-bold uppercase  text-sm mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 ">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cyan-700 transition-colors text-md font-medium"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Social Section */}
          <div className="flex flex-col items-center  gap-6">
            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm md:mr-2">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 border border-white/10 rounded-2xl text-slate-400 transition-all duration-300 ${link.color} hover:border-[#2DD4BF]/30 hover:scale-110 shadow-lg`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
              Available for new opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar: Symmetrical and Centralized Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center pt-8 border-t border-white/5 gap-6">
          {/* Left spacer for desktop symmetry */}
          <div className="hidden md:block" />

          {/*  Copyright */}
          <p className="text-cyan-700 text-md text-center">
            © {new Date().getFullYear()} Tsedenia Nega. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;