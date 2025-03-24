export const simulationData = {
  totalEnergyCharged: { total: 3000 },
  chargePointData: [
    { chargePoint: 1, power: 5 },
    { chargePoint: 2, power: 8 },
    { chargePoint: 3, power: 11 },
    { chargePoint: 4, power: 7 },
    { chargePoint: 5, power: 6 }
  ],
  exemplaryDayData: [
    { hour: '00:00', powerDemand: 2 },
    { hour: '06:00', powerDemand: 10 },
    { hour: '12:00', powerDemand: 22 },
    { hour: '18:00', powerDemand: 30 },
    { hour: '23:00', powerDemand: 5 }
  ],

  chargingEventsFrequency: {
    year: 12000,
    month: 1000,
    week: 250,
    day: 35
  },
  aggregatedChartData: [
    { timeUnit: 'Day', events: 35, maxPower: 40, energyConsumed: 120 },
    { timeUnit: 'Week', events: 250, maxPower: 80, energyConsumed: 850 },
    { timeUnit: 'Month', events: 1000, maxPower: 200, energyConsumed: 3200 }
  ]
};
