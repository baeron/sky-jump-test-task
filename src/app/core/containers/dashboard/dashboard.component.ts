import { Component, OnInit } from "@angular/core";

import { Report } from "../../../../../models/report";
import { ReportService } from "../../services/report.service";
@Component({
  selector: "sj-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  private _totalReport: Report[];
  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    this.reportService.getReport().subscribe(report => {
      this._totalReport = report;
    });
  }
}
