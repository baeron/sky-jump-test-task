const TOTAL_REPORT = [
  {
    id: 6,
    source: "GoogleDispplay",
    leads: 497,
    percentOfLeads: 16.4,
    revenueLeads: 5510.82,
    revenueCAlls: 1371,
    revenueFull: 6883.82,
    cost: 4583.71,
    pl: 2300.11,
    ROI: 50.2,
    CPL: 9.22,
    RPL: 13.85
  },
  {
    id: 1,
    source: "Facebook",
    leads: 1.672,
    percentOfLeads: 55,
    revenueLeads: 17771.75,
    revenueCAlls: 5241,
    revenueFull: 23012.75,
    cost: 17442.1,
    pl: 5570.65,
    ROI: 31.9,
    CPL: 10.43,
    RPL: 13.76,
    /*
    reportAnHour: [
      {
        id: 2,
        source: "2:00 am",
        leads: 1.672,
        percentOfLeads: 55,
        revenueLeads: 17771.75,
        revenueCAlls: 5241,
        revenueFull: 23012.75,
        cost: 17442.1,
        pl: 5570.65,
        ROI: 31.9,
        CPL: 10.43,
        RPL: 13.76,
        reportByLead: [
          {
            id: 3,
            source: "Pricise Leads",
            leads: 1.672,
            percentOfLeads: 55,
            revenueLeads: 17771.75,
            revenueCAlls: 5241,
            revenueFull: 23012.75,
            cost: 17442.1,
            pl: 5570.65,
            ROI: 31.9,
            CPL: 10.43,
            RPL: 13.76
          },
          {
            id: 4,
            source: "All Web Leads",
            leads: 1.672,
            percentOfLeads: 55,
            revenueLeads: 17771.75,
            revenueCAlls: 5241,
            revenueFull: 23012.75,
            cost: 17442.1,
            pl: 5570.65,
            ROI: 31.9,
            CPL: 10.43,
            RPL: 13.76
          }
        ]
      },
      {
        id: 5,
        source: "3:00 am",
        leads: 1.672,
        percentOfLeads: 55,
        revenueLeads: 17771.75,
        revenueCAlls: 5241,
        revenueFull: 23012.75,
        cost: 17442.1,
        pl: 5570.65,
        ROI: 31.9,
        CPL: 10.43,
        RPL: 13.76
      }
    ]
    */
  }
];
exports.getAll = (req, res) => {
  try {
    res.send(TOTAL_REPORT);
  } catch (err) {
    res.status(500).send({
      message: err.message
    });
  }
};
