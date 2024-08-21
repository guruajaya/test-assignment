import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = "https://fakestoreapi.com/products"

  constructor(private http: HttpClient) { }
  getProductList(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
