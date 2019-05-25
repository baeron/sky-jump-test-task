import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CoreRoutingModule]
})
export class CoreModule {}
