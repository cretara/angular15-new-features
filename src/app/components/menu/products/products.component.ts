import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";

function getRouterPathParam$(name: string): Observable<string> {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.paramMap.pipe(map((paramMap) => paramMap.get(name) || ""));
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true
})
export class ProductsComponent {

  public productId = 0;

  constructor() {
    getRouterPathParam$('id')
      .subscribe((productId) => {
        this.productId = Number(productId);
        console.debug("productId", productId);
      })
  }

}
