import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {BoldDirective} from "./directive-composition-api/directives/bold.directive";
import {UnderlineDirective} from "./directive-composition-api/directives/underline.directive";
import {MouseEnterDirective} from "./directive-composition-api/directives/mouse-enter.directive";
import {EventDirective} from "./directive-composition-api/directives/event.directive";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from './injection/menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './injection/menu/home/home.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { CatBlogComponent } from './image-optimization/components/cat-blog/cat-blog.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, CatBlogComponent],
  imports: [
    BrowserModule,
    UnderlineDirective,
    BoldDirective,
    MouseEnterDirective,
    EventDirective,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
