import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BoldDirective } from "./directives/bold.directive";
import { UnderlineDirective } from "./directives/underline.directive";
import { MouseEnterDirective } from "./directives/mouse-enter.directive";
import { EventDirective } from "./directives/event.directive";
import { DirectiveTestComponent } from "./directive-test/directive-test.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UnderlineDirective,
    BoldDirective,
    MouseEnterDirective,
    EventDirective,
    DirectiveTestComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
