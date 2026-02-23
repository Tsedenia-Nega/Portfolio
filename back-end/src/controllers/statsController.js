import StatService from "../services/statService.js";

export const getStats = async (req, res) => {
  try {
    const stats = await StatService.getDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStats = async (req, res) => {
  try {
    
    const updated = await StatService.updateManualStats(req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
