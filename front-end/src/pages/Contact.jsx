import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import API from "../services/api"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await API.post("/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
       
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get In <span className="text-cyan-500">Touch</span>
          </motion.h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a question or want to work together? Drop me a message and I'll
            get back to you as soon as possible.
          </p>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid lg:grid-cols-5">
            {/* LEFT SIDE: CONTACT INFO (2 Columns width) */}
            <div className="lg:col-span-2 bg-white/[0.02] p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-2xl font-semibold mb-10">
                Contact Information
              </h3>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                      Email
                    </p>
                    <p className="text-lg font-medium">tsedenia301@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="text-lg font-medium">+251 954 235 894</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">
                      Location
                    </p>
                    <p className="text-lg font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: THE FORM (3 Columns width) */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    Subject
                  </label>
                  <input
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none placeholder:text-slate-600"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-cyan-900/20"
                >
                  {status === "loading" ? "Processing..." : "Send Message"}
                 
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 py-4 rounded-xl text-center flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={18} /> Message transmitted
                      successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 text-red-400 py-4 rounded-xl text-center flex items-center justify-center gap-2"
                    >
                      <AlertCircle size={18} /> Error sending message. Please
                      try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
