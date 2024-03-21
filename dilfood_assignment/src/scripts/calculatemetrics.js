export const calculateMetrics = (data) => {
  const { totalSales, totalRevenue, totalUsers, salesByYear, revenueByYear } = data.reduce((acc, item) => {
    // Increment total sales, revenue, and users
    acc.totalSales += item.sales;
    acc.totalRevenue += item.revenue;
    acc.totalUsers += item.userActivity;

    // Calculating sales and revenue by year
    acc.salesByYear[item.year] = (acc.salesByYear[item.year] || 0) + item.sales;
    acc.revenueByYear[item.year] = (acc.revenueByYear[item.year] || 0) + item.revenue;

    return acc;
  }, {
    totalSales: 0,
    totalRevenue: 0,
    totalUsers: 0,
    salesByYear: {},
    revenueByYear: {}
  });

  const length = data.length;
  const averageSalePerMonth = totalSales / length;
  const averageRevenuePerMonth = totalRevenue / length;
  const averageUsersPerMonth = totalUsers / length;

  return {
    totalSales,
    averageSalePerMonth,
    totalRevenue,
    averageRevenuePerMonth,
    totalUsers,
    averageUsersPerMonth,
    salesByYear,
    revenueByYear
  };
};
