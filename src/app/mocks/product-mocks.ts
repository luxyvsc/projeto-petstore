import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceMock {


  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${environment.apiUrl}v1/products-highlights`)
      .pipe(
        tap(console.log)
      )
  }


}
