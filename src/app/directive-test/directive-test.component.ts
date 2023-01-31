import { Component, inject, OnInit } from "@angular/core";
import { MouseEnterDirective } from "../directives/mouse-enter.directive";
import { EventDirective } from "../directives/event.directive";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-directive-test",
  templateUrl: "./directive-test.component.html",
  imports: [CommonModule],
  styleUrls: ["./directive-test.component.css"],
  hostDirectives: [MouseEnterDirective, EventDirective],
  standalone: true,
})
export class DirectiveTestComponent implements OnInit {
  public eventDirective = inject(EventDirective);

  ngOnInit(): void {
    this.eventDirective.data = {
      id: 1,
      header: "header test",
      body: "body test",
    };
  }
}
