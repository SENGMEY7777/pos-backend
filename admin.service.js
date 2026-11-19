const db = require('./config/database');

exports.getStats = async () => {
  return { totalUsers: 0, totalOrders: 0, totalRevenue: 0 };
};
