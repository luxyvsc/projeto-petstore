import { TestBed } from '@angular/core/testing';
import { Category } from '../interfaces/product';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesService);
  });

  it('should test get categories', () => {
    service.getCategories().subscribe(categories => {
      expect(categories.length).toEqual(1);
      expect(categories[0].name).toEqual('Racao');
    })

    const req = httpTestingController.expectOne('http://petshop-sp.ue.r.appspot.com/v1/categories');

    expect(req.request.method).toEqual('GET');

    const categories: Array<Category> = [
      {id: 'dasdasd', name: 'Racao', subcategories: ['racao seca'], url: '', description: ''},
      {id: 'dasdasd', name: 'Brinquedos', subcategories: ['pelucia'], url: '', description: ''}
    ]
    req.flush(categories);

  });
})
