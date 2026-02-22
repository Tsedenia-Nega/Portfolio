import StatsService from "../services/statsService.js";

export const getStats = async (req, res) => {
  try {
    const stats = await StatsService.getDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStats = async (req, res) => {
  try {
    
    const updated = await StatsService.updateManualStats(req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
