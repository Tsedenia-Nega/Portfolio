import React, { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [stats, setStats] = useState({ totalProjects: 0, totalClients: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await API.get("/stats");
      setStats(data);
    };
    fetchStats();
  }, []);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold text-blue-500"
          >
            {stats.totalProjects}+
          </motion.h2>
          <p className="text-gray-400 uppercase tracking-widest mt-2">
            Projects
          </p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-purple-500">
            {stats.totalClients}+
          </h2>
          <p className="text-gray-400 uppercase tracking-widest mt-2">
            Happy Clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
