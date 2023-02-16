import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BoldDirective } from "./directives/bold.directive";
import { UnderlineDirective } from "./directives/underline.directive";
import { MouseEnterDirective } from "./directives/mouse-enter.directive";
import { EventDirective } from "./directives/event.directive";
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './components/injection/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/injection/menu/home/home.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent],
  imports: [
    BrowserModule,
    UnderlineDirective,
    BoldDirective,
    MouseEnterDirective,
    EventDirective,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
