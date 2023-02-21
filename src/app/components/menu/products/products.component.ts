import {Component, inject, InjectionToken, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {first, map, Observable} from "rxjs";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";

function getRouterPathParam$(name: string): Observable<string> {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.paramMap.pipe(map((paramMap) => paramMap.get(name) || ""));
}

interface Logger {
  log: (value: string) => void
}

const LOGGER_TOKEN = new InjectionToken<Logger>("Logger Injection Token",
  {
    factory: () => {
      return {
        log: console.log
      }
    }
  }
)

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  providers: [{
    provide: LOGGER_TOKEN,
    useFactory: () => {
      const http = inject(HttpClient);
      return {
        log: (value: string) => http.post('thisdomain', {value}).pipe(first()).subscribe()
      }
    }
  }]
})
export class ProductsComponent implements OnInit {

  public productId = 0;

  constructor(private productService: ProductService) {
    getRouterPathParam$("id")
      .subscribe((productId) => {
        this.productId = Number(productId);
        console.debug("productId", productId);
      });
    const logger = inject(LOGGER_TOKEN).log;
    logger("test");
  }

  ngOnInit(): void {
    this.productService.get().subscribe();
  }

}
