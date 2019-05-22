import { Injectable } from "@angular/core";

import { Report } from "../../../../models/report";
import { TOTAL_REPORT } from "../../../../mock/dummy-report";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  getReport(): Observable<Report[]> {
    return of(TOTAL_REPORT);
  }
}
