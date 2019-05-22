import { Component, Input } from "@angular/core";
import { Report } from "../../../../../models/report";

@Component({
  selector: "sj-table-header",
  templateUrl: "./table-header.component.html",
  styleUrls: ["./table-header.component.scss"]
})
export class TableHeaderComponent {
  activateIndex: number[] = [];
  activateInnerIndex: number[] = [];
  isActive = true;
  tHeader = [
    "Source",
    "Leads",
    "% of Leads",
    "Revenue Leads",
    "Revenue Cals",
    "Revenue Full",
    "Cost",
    "P/L",
    "ROI",
    "CPL",
    "RPL"
  ];
  columns = [
    "source",
    "leads",
    "percentOfLeads",
    "revenueLeads",
    "revenueCAlls",
    "revenueFull",
    "cost",
    "pl",
    "ROI",
    "CPL",
    "RPL"
  ];
  @Input() _totalReport: Report[];
  toogleItems(index: number) {
    if (this.activateIndex.includes(index)) {
      this.activateIndex = this.activateIndex.filter(item => item !== index);
    } else {
      this.activateIndex.push(index);
    }
  }
  toogleInnerItems(index: number) {
    if (this.activateInnerIndex.includes(index)) {
      this.activateInnerIndex = this.activateInnerIndex.filter(item => item !== index);
    } else {
      this.activateInnerIndex.push(index);
    }
  }
}
