import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CoreModule } from "../app/core/core.module";
import { SharedModule } from "../app/shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
