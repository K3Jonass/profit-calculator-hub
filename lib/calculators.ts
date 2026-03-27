export function calculateShopifyProfit({
  revenue,
  productCost,
  adsCost,
  fees,
  shipping,
}: {
  revenue: number;
  productCost: number;
  adsCost: number;
  fees: number;
  shipping: number;
}) {
  const totalCosts =
    Number(productCost) +
    Number(adsCost) +
    Number(fees) +
    Number(shipping);

  const netProfit = Number(revenue) - totalCosts;
  const margin = Number(revenue) > 0 ? (netProfit / Number(revenue)) * 100 : 0;

  return {
    netProfit,
    totalCosts,
    margin,
  };
}

export function calculateDropshippingProfit({
  orders,
  sellingPrice,
  productCost,
  adsCost,
  shipping,
}: {
  orders: number;
  sellingPrice: number;
  productCost: number;
  adsCost: number;
  shipping: number;
}) {
  const revenue = Number(orders) * Number(sellingPrice);
  const costs =
    Number(orders) * Number(productCost) +
    Number(adsCost) +
    Number(shipping);

  const profit = revenue - costs;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

  return {
    revenue,
    costs,
    profit,
    margin,
  };
}

export function calculateMRR({
  customers,
  monthlyPrice,
}: {
  customers: number;
  monthlyPrice: number;
}) {
  const mrr = Number(customers) * Number(monthlyPrice);
  const arr = mrr * 12;

  return {
    mrr,
    arr,
  };
}

export function calculateFreelanceRate({
  targetIncome,
  monthlyExpenses,
  billableHours,
}: {
  targetIncome: number;
  monthlyExpenses: number;
  billableHours: number;
}) {
  const totalNeeded = Number(targetIncome) + Number(monthlyExpenses);
  const hourlyRate =
    Number(billableHours) > 0 ? totalNeeded / Number(billableHours) : 0;

  return {
    totalNeeded,
    hourlyRate,
  };
}

export function calculateBreakeven({
  fixedCosts,
  profitPerSale,
}: {
  fixedCosts: number;
  profitPerSale: number;
}) {
  const breakevenSales =
    Number(profitPerSale) > 0 ? Number(fixedCosts) / Number(profitPerSale) : 0;

  return {
    breakevenSales,
  };
}