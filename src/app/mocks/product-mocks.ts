import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceMock {

  product!: Product;
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
      observer.next(this.product);
      observer.complete();
    });
}


}
