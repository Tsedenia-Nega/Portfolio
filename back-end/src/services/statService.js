import StatsRepository from "../repositories/statRepository.js";

class StatsService {
  async getDashboardStats() {
    const stats = await StatsRepository.getStats();
    if (!stats) {
      return { totalProjects: 0, totalClients: 0, yearsOfExperience: 0 };
    }
    return stats;
  }

  async updateManualStats(data) {

    if (data.totalProjects < 0 || data.totalClients < 0) {
      throw new Error("Stats numbers cannot be negative");
    }
    return await StatsRepository.updateStats(data);
  }
}

export default new StatsService();
