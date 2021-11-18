import { TestBed } from '@angular/core/testing';
import { Category } from '../interfaces/product';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CategoriesService);

    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should test get categories', () => {
    service.getCategories().subscribe(categories => {
      expect(categories.length).toEqual(2);
      expect(categories[0].name).toEqual('Ração');
    })

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/categories');

    expect(req.request.method).toEqual('GET');

    const categories: Array<Category> = [
      {id: 'dasdasd', name: 'Ração', subcategories: ['Ração seca'], url: '', description: ''},
      {id: 'dasdasd', name: 'Brinquedos', subcategories: ['pelucia'], url: '', description: ''}
    ]
    req.flush(categories);

    httpTestingController.verify();

  });
})
