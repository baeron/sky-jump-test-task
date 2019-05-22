import { Component, Input } from "@angular/core";
import { Report } from "../../../../../models/report";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "[sj-table-body]",
  templateUrl: "./table-body.component.html",
  styleUrls: ["./table-body.component.scss"]
})
export class TableBodyComponent {
  @Input() report: Report;
  @Input() columns: string[];
}
