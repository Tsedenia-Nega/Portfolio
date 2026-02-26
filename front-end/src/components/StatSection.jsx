import React, { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";

const StatsSection = () => {
  // 1. Added yearsOfExperience to the state object
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalClients: 0,
    yearsOfExperience: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await API.get("/stats");
        // 2. Ensure your Backend response includes 'yearsOfExperience'
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
        // Fallback to show something if the API fails
        setStats({ totalProjects: 15, totalClients: 8, yearsOfExperience: 2 });
      }
    };
    fetchStats();
  }, []);

  // 3. Mapping data dynamically from the 'stats' state
  const statItems = [
    {
      label: "Years Experience",
      value:
        stats.yearsOfExperience < 10
          ? `${stats.yearsOfExperience}`
          : stats.yearsOfExperience,
      suffix: "+",
      isSpecial: false,
    },
    {
      label: "Projects Completed",
      value: stats.totalProjects,
      suffix: "+",
      isSpecial: false,
    },
    {
      label: "Happy Clients",
      value: stats.totalClients,
      suffix: "+",
      isSpecial: false,
    },
    {
      label: "Availability",
      value: "Open",
      suffix: " to Work",
      isSpecial: true,
    },
  ];

  return (
    <section className="py-12 bg-[#020617] text-white border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
        {statItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center md:border-r md:last:border-r-0 border-white/5"
          >
            <h2
              className={`text-3xl md:text-4xl font-black italic tracking-tighter mb-1 ${
                item.isSpecial ? "text-white" : "text-cyan-500"
              }`}
            >
              {item.value}
              <span className="text-slate-500 not-italic font-medium text-lg ml-1">
                {item.suffix}
              </span>
            </h2>

            <p className="text-slate-500 uppercase tracking-[0.2em] text-[9px] font-bold">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
