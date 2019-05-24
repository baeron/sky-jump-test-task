import { Component, OnInit } from "@angular/core";

import { Report } from "../../../../../models/report";
import { ReportService } from "../../services/report.service";
import { Observable, timer } from 'rxjs';
@Component({
  selector: "sj-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  private _timerStart = 0;
  private _timerEnd = 15000;
  private _totalReport: Report[];
  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    timer(this._timerStart, this._timerEnd)
    .subscribe(() => {
      this.reportService.getReport().subscribe(report => {
        this._totalReport = report;
      });
    });
  }
}
