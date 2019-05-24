import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe} from "rxjs";
import { tap } from "rxjs/operators";

import { Report } from "../../../../models/report";
// import { TOTAL_REPORT } from "../../../../mock/dummy-report";

const REPORTS = "http://localhost:3000/api/reports/";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  constructor(private http: HttpClient) {}
  getReport(): Observable<Report[]> {
    return this.http.get<Report[]>(REPORTS).pipe(
      tap(_ => console.log("fetch data from report"))
    );
  }
}
