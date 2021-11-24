import { Category } from './../interfaces/product';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  [x: string]: any;

  constructor(
    private http: HttpClient,
  ) { }

  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {
        this.http.get<Category[]>(`${environment.apiUrl}v1/categories`).subscribe(
          categories => {
            observer.next(categories);
            observer.complete();
          },
          () => {
            observer.error('error_on_get_categories');
            observer.complete();
          }
        )
    });

  }
}

