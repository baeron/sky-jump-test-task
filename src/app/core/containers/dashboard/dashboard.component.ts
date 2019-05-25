import { Component, OnInit } from "@angular/core";

import { Report } from "../../../../../models/report";
import { ReportService } from "../../services/report.service";
import { Observable, timer } from "rxjs";
import * as _ from "lodash";
@Component({
  selector: "sj-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  headerName: string;
  selectBy: string;
  private _timerStart = 0;
  private _timerEnd = 15000;
  private _totalReport: Report[];
  private _levelNames: Array<Object> = [
    { name: "Buyer" },
    { name: "Source" },
    { name: "AgeGroup" },
    { name: "Compaign" },
    { name: "Hour" },
    { name: "Daily" }
  ];
  firstSelectedOption: string;
  secondSelectedOption: string;
  thirdSelectedOption: string;
  private selectList = {
    firstSelect: "",
    secondSelect: "",
    thirdSelect: ""
  }
  private lavelName: string;
  private defaultFirstLevelValue = "Source";
  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.getReport();
  }

  getReport() {
    timer(this._timerStart, this._timerEnd).subscribe(() => {
      this.reportService.getReport().subscribe(report => {
        if (!this.selectBy) {
          this._totalReport = report;
        } else {
          this.sortData(this.selectBy);
        }
      });
    });
  }

  onSelect(data: string) {
    this.selectBy = data;
    this.sortData(this.selectBy);
  }
  onSelectRow(data) {
    debugger;
    console.log(data);
  }

  selectFirstOption(selectedValue) {
    this.firstSelectedOption = selectedValue;
  }
  selectSecondOption(selectedValue) {
    this.secondSelectedOption = selectedValue;
    // вот здесь должен быть запрос с двумя параметрами
    // firstSelectedOption и secondSelectedOption
  }

  selectThirdOption(selectedValue) {
    this.thirdSelectedOption = selectedValue;
  }

  getDataByOneParametr(firstSelect: string) {

  }

  getReportByTwoParams() {

  }

  getReportByThreParams() {

  }

  sortData(headerName: string) {
    switch (headerName) {
      case "Source":
        this._totalReport = _.sortBy(this._totalReport, item => item.source);
        break;
      case "Leads":
        this._totalReport = _.sortBy(this._totalReport, item => item.leads);
        break;
      case "% of Leads":
        this._totalReport = _.sortBy(
          this._totalReport,
          item => item.percentOfLeads
        );
        break;
      case "Revenue Leads":
        this._totalReport = _.sortBy(
          this._totalReport,
          item => item.revenueLeads
        );
        break;
      case "Revenue Cals":
        this._totalReport = _.sortBy(
          this._totalReport,
          item => item.revenueCAlls
        );
        break;
      case "Revenue Full":
        this._totalReport = _.sortBy(
          this._totalReport,
          item => item.revenueFull
        );
        break;
      case "Cost":
        this._totalReport = _.sortBy(this._totalReport, item => item.cost);
        break;
      case "P/L":
        this._totalReport = _.sortBy(this._totalReport, item => item.pl);
        break;
      case "ROI":
        this._totalReport = _.sortBy(this._totalReport, item => item.ROI);
        break;
      case "CPL":
        this._totalReport = _.sortBy(this._totalReport, item => item.CPL);
        break;
      case "RPL":
        this._totalReport = _.sortBy(this._totalReport, item => item.RPL);
        break;
      default:
        console.log("something went wrong");
    }
  }
}
