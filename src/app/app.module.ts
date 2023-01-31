import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { BoldDirective } from './directives/bold.directive';
import { UnderlineDirective } from './directives/underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveTestComponent,
  ],
  imports: [
    BrowserModule,
    UnderlineDirective,
    BoldDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
