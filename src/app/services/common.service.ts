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
  getnewproductList(): Observable<any> {
    return this.http.get("http://localhost:3000/user")
  }
  deleteItem(id:number): Observable<any> {
    return this.http.delete("http://localhost:3000/user" + '/' + id)
  }
  
}
