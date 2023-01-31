import { Component } from "@angular/core";
import { MouseEnterDirective } from "../directives/mouse-enter.directive";

@Component({
  selector: "app-directive-test",
  templateUrl: "./directive-test.component.html",
  styleUrls: ["./directive-test.component.css"],
  hostDirectives: [MouseEnterDirective],
})
export class DirectiveTestComponent {}
