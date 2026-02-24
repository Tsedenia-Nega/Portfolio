import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2 } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login success:", data);

      // Optional: store token if backend returns one
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Redirect example
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0f1c] to-[#050505]" />
        <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-cyan-400" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-cyan-400" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
