export interface Report {
  id?: number;
  source: string;
  leads: number;
  percentOfLeads: number;
  revenueLeads: number;
  revenueCAlls: number;
  revenueFull: number;
  cost: number;
  pl: number;
  ROI: number;
  CPL: number;
  RPL: number;
  reportAnHour?: Array<Report>;
  reportByLead?: Array<Report>;
}
