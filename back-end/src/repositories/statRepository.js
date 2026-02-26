import Stats from "../models/Stats.js";

class StatsRepository {
  async getStats() {
    
    return await Stats.findOne({});
  }

  async updateStats(data) {
    return await Stats.findOneAndUpdate({}, data, { returnDocument: "after" });
  }
}

export default new StatsRepository();
