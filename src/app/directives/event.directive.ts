import { Directive, HostListener, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { take } from "rxjs";

interface DataEntity {
  id: number;
  header: string;
  body: string;
}

@Directive({
  selector: "[appEvent]",
  standalone: true,
})
export class EventDirective {
  data: any;

  constructor(private httpClient: HttpClient, private ngZone: NgZone) {}

  @HostListener("click")
  public onClick() {
    if (!this.data) {
      throw new Error("Data not defined");
    }
    this.ngZone.runOutsideAngular(() =>
      this.httpClient
        .post("my-domain", {
          user: "userLogged",
          data: this.data,
        })
        .pipe(take(1))
        .subscribe()
    );
  }
}
