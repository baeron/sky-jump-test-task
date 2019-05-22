import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./containers";
import { TableHeaderComponent, TableBodyComponent } from "./components";

const coreRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, TableHeaderComponent, TableBodyComponent],
  imports: [CommonModule, RouterModule.forRoot(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
