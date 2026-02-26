import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import API from "../services/api";
import {
  LayoutDashboard,
  Mail,
  FolderHeart,
  Save,
  Trash2,
  Plus,
  Edit3,
  X,
  Github,
  ExternalLink,
  CheckCircle,
  UploadCloud,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalClients: 0,
    yearsOfExperience: 0,
  });
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // File Upload States
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Project Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      if (activeTab === "stats") {
        const res = await API.get("/stats");
        setStats(res.data);
      } else if (activeTab === "messages") {
        const res = await API.get("/contacts");
        setMessages(res.data);
      } else if (activeTab === "projects") {
        const res = await API.get("/projects");
        setProjects(res.data);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  // --- IMAGE PREVIEW HANDLER ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // --- STATS HANDLERS ---
  const handleUpdateStats = async (e) => {
    e.preventDefault();
    try {
      await API.put("/stats", stats);
      alert("Statistics Updated.");
    } catch (err) {
      alert("Error updating stats");
    }
  };

  // --- CONTACT HANDLERS ---
  const handleDeleteMessage = async (id) => {
    if (window.confirm("Permanent delete this message?")) {
      await API.delete(`/contacts/${id}`);
      setMessages(messages.filter((m) => m._id !== id));
    }
  };

  // --- PROJECT HANDLERS ---
  const openProjectModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        description: project.description,
        techStack: Array.isArray(project.techStack)
          ? project.techStack.join(", ")
          : project.techStack,
        githubLink: project.githubLink,
        liveLink: project.liveLink,
      });
      setPreviewUrl(project.imageUrl); // Show existing image
    } else {
      setEditingProject(null);
      setFormData({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
      });
      setPreviewUrl(null);
    }
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    // Using FormData to support File Uploads
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("githubLink", formData.githubLink);
    data.append("liveLink", formData.liveLink);
    data.append("techStack", formData.techStack); // Backend should handle comma-split

    if (selectedFile) {
      data.append("image", selectedFile);
    }

    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };

      if (editingProject) {
        await API.put(`/projects/${editingProject._id}`, data, config);
      } else {
        await API.post("/projects", data, config);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      alert("Project Save Failed. Check if Backend uses Multer.");
    }
  };

  const deleteProject = async (id) => {
    if (window.confirm("Remove project from portfolio?")) {
      await API.delete(`/projects/${id}`);
      fetchData();
    }
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white pt-16 font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 border-r border-white/5 p-8 hidden lg:block">
        <h2 className="text-2xl text-center font-bold tracking-tighter text-white mb-12">
          Admin Panel
        </h2>
        <nav className="space-y-3">
          {[
            { id: "stats", label: "Analytics", icon: LayoutDashboard },
            { id: "messages", label: "Messages", icon: Mail },
            { id: "projects", label: "Projects", icon: FolderHeart },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 w-full p-4 rounded-2xl transition-all ${
                activeTab === item.id
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "text-slate-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={20} />
              <span className="font-bold tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 md:p-16 overflow-y-auto">
        {activeTab === "stats" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-black italic mb-10 tracking-tighter">
              System <span className="text-cyan-500">Stats</span>
            </h1>
            <form
              onSubmit={handleUpdateStats}
              className="bg-white/5 border border-white/10 p-10 rounded-[3rem] space-y-8"
            >
              {Object.keys(stats)
                .filter(
                  (k) => !["_id", "__v", "updatedAt", "createdAt"].includes(k),
                )
                .map((key) => (
                  <div key={key}>
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="number"
                      value={stats[key]}
                      onChange={(e) =>
                        setStats({ ...stats, [key]: e.target.value })
                      }
                      className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-cyan-400 font-bold focus:border-cyan-500 outline-none"
                    />
                  </div>
                ))}
              <button className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3">
                <Save size={20} /> Update Stats
              </button>
            </form>
          </motion.div>
        )}

        {activeTab === "messages" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-black mb-10 tracking-tighter">
              Contact Messages
            </h1>
            <div className="grid gap-6">
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className="bg-white/5 border border-white/5 p-8 rounded-[2rem] relative group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-black italic">{msg.name}</h3>
                      <p className="text-cyan-500 text-sm font-mono">
                        {msg.email}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(msg._id)}
                      className="text-slate-600 hover:text-red-500 p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <div className="bg-black/30 p-6 rounded-2xl italic text-slate-300">
                    "{msg.message}"
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "projects" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-black italic tracking-tighter">
                Project <span className="text-cyan-500">Repository</span>
              </h1>
              <button
                onClick={() => openProjectModal()}
                className="bg-white text-black px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-cyan-500 uppercase text-xs tracking-widest"
              >
                <Plus size={20} /> Deploy New
              </button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {projects.map((proj) => (
                <div
                  key={proj._id}
                  className="bg-[#0f172a]/50 border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-cyan-500/30 transition-all"
                >
                  <div className="h-48 bg-slate-800 relative">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between mb-4">
                      <h3 className="text-2xl font-black italic">
                        {proj.title}
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => openProjectModal(proj)}
                          className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => deleteProject(proj._id)}
                          className="p-2 bg-red-500/10 text-red-500 rounded-lg"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#0f172a] border border-white/10 w-full max-w-3xl rounded-[3rem] p-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black italic">
                  {editingProject ? "Update" : "Deploy"}{" "}
                  <span className="text-cyan-500">Project</span>
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-500 hover:text-white"
                >
                  <X size={32} />
                </button>
              </div>

              <form
                onSubmit={handleProjectSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Image Upload Area */}
                <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Cover Image
                  </label>
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-48 h-32 rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          className="w-full h-full object-cover"
                          alt="Preview"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-slate-700 font-mono text-xs">
                          IMG_NULL
                        </div>
                      )}
                    </div>
                    <label className="flex-1 w-full cursor-pointer group">
                      <div className="w-full bg-white/5 border border-dashed border-white/20 group-hover:border-cyan-500/50 rounded-2xl p-8 transition-all text-center">
                        <UploadCloud className="mx-auto text-slate-500 group-hover:text-cyan-400 mb-2" />
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                          {selectedFile
                            ? selectedFile.name
                            : "Choose System File"}
                        </span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Title
                  </label>
                  <input
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 font-bold text-cyan-400"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Tech Stack (comma separated)
                  </label>
                  <input
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 font-bold text-cyan-400"
                    value={formData.techStack}
                    onChange={(e) =>
                      setFormData({ ...formData, techStack: e.target.value })
                    }
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Github Link
                  </label>
                  <input
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 font-bold text-cyan-400"
                    value={formData.githubLink}
                    onChange={(e) =>
                      setFormData({ ...formData, githubLink: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Live Preview Link
                  </label>
                  <input
                    className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-500 font-bold text-cyan-400"
                    value={formData.liveLink}
                    onChange={(e) =>
                      setFormData({ ...formData, liveLink: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="md:col-span-2 bg-cyan-500 text-black font-black py-5 rounded-2xl mt-4 hover:shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-all uppercase tracking-widest text-sm"
                >
                  {editingProject ? "Update Build" : "Post"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
