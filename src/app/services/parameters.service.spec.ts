import { Parameters } from './../interfaces/parameters';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ParametersService } from './parameters.service';

describe('ParametersService', () => {
  let service: ParametersService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ParametersService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be get parameters',() => {
    service.getParameters().subscribe( parameters => {
      expect(parameters.company_name).toEqual('Petstore LTDA');
    })

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/parameters')

    expect(req.request.method).toEqual('GET');

    const parameters: Parameters = {
      company_name: "Petstore LTDA",
      tradeMark: "parameters",
      email: "petshop@gmail.com",
      address: "rua da consolação",
      address_complement: "2843, casa 07",
      city: "São Paulo",
      state: "sp",
      zip_code: "04783-022",
      social_networks: ['empresa1, nome1'],
      phones: [
        { 'country_code': '+55', 'number': '11993239', 'type': 'whatsapp' }
      ],
    }

    req.flush(parameters);
  })

  it('should be created', () => {
    expect(service);
  });
});
