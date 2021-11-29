import { Injectable } from '@angular/core';
import { AnimalType, Product, ProductsGetResponse } from '../interfaces/product';
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


  products: Array<Product> =[
    {
      name: "Product",
      description: "Product",
      value: 204.9,
      promotional_value: 184.41,
      featured_image: "image_url",
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 424,
      installment_available: true,
      installment_count: 2,
      featured: true,
      category: "Medicina e Sa\u00fade",
      subcategory: "Antipulgas e Carrapatos",
      animal_type: AnimalType.Dog,
      url: "/url",
      created_at: "2021-04-12 21:28:35.881119+00:00",
      id: "EJf7MU4hES59rlLMJrdH"
    },
    {
      name: "Product2",
      description: "Product2",
      value: 204.9,
      promotional_value: 184.41,
      featured_image: "image_url",
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 424,
      installment_available: true,
      installment_count: 2,
      featured: true,
      category: "Medicina e Sa\u00fade",
      subcategory: "Antipulgas e Carrapatos",
      animal_type: AnimalType.Dog,
      url: "/url",
      created_at: "2021-04-12 21:28:35.881119+00:00",
      id: "EJf7MU4hES59rlLMJrdH"
    }
  ]
  getProducts2()  {
    return new Observable<ProductsGetResponse>(observer => {
        observer.next({
            products: [this.product],
            cursor: ''
        }
        );
          observer.complete();
    });
  }

}
