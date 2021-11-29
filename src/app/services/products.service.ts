import { Injectable } from '@angular/core';
import { Product, ProductsGetResponse } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${environment.apiUrl}v1/products-highlights`)
      .pipe(
        tap(console.log)
      )
  }

  getProduct(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      this.http.get<Product>(`${environment.apiUrl}v1/product/${id}`).subscribe(
        product => {
          observer.next(product);
          observer.complete();
        },
        error => {
          observer.next(error);
          observer.complete();
        }
      );
    });
  }

  getProducts2() {
    return new Observable<ProductsGetResponse>(observer => {
      this.http.get<ProductsGetResponse>(`${environment.apiUrl}v1/products`).subscribe(
        products => {
          observer.next(products);
          observer.complete();
        },
        error => {
          observer.next(error);
          observer.complete();
        }
      );
    });
  }

}
