import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {

  private httpClient = inject(HttpClient)
  abstract url: string;
  private URL_DOMAIN = "myDomainURL"

  get() {
    return this.httpClient.get(`${this.URL_DOMAIN}/${this.url}`)
  }
}
