import Stats from "../models/Stats.js";

class StatsRepository {
  async getStats() {
    
    return await Stats.findOne({});
  }

  async updateStats(data) {
    return await Stats.findOneAndUpdate({}, data, { new: true, upsert: true });
  }
}

export default new StatsRepository();
