import { Category } from './../interfaces/product';
import { Observable} from 'rxjs';

export class CategoriesServiceMock {


  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {
      observer.next([
        {id: 'dasdasd', name: 'Ração', subcategories: ['Ração seca'], url: '', description: ''},
        {id: 'dasdasd', name: 'Brinquedos', subcategories: ['pelucia'], url: '', description: ''}
      ]);
      observer.complete();
    });
  }
}
