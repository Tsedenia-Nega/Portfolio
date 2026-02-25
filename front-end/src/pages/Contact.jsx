import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import api from "../services/api";

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
      await api.post("/contact", formData);
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
        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT COLUMN: CONTACT DETAILS */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-bold mb-6">Contact Information</h1>
              <p className="text-slate-400 text-lg max-w-md">
                I'm currently open to new opportunities and collaborations. Feel
                free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-500 border border-white/10">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">
                    Email
                  </p>
                  <p className="text-lg text-white">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-500 border border-white/10">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">
                    Phone
                  </p>
                  <p className="text-lg text-white">+251 911 000 000</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-500 border border-white/10">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold tracking-wider">
                    Address
                  </p>
                  <p className="text-lg text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="bg-white/[0.02] border border-white/5 p-8 lg:p-10 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">
                  Subject
                </label>
                <input
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-500/50 transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-cyan-400 text-sm text-center flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} /> Message sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
