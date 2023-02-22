import {Injectable} from '@angular/core';
import {BaseHttpService} from "./base-http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService {

  url = "products"

  constructor() {
    super();
  }

}
