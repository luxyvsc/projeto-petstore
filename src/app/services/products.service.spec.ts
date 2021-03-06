import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnimalType, Product, ProductsGetResponse } from '../interfaces/product';
import { ProductsServiceMock } from '../mocks/product-mocks';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let serviceProduct: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    serviceProduct = TestBed.inject(ProductsService);
  });

  it('should test get list products', () => {
    serviceProduct.getProducts2().subscribe(products => {
      expect(products.products.length).toEqual(2);
      expect(products.products[0].id).toEqual("EJf7MU4hES59rlLMJrdH");
    })
    // Vamos conferir qual url foi chamada pelo metodo getProducts()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products');
    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET')
    const productsget: ProductsGetResponse = {
      cursor: '',
      products: [
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
    }
    req.flush(productsget);
  });

  it('should get product', () => {
    serviceProduct.getProduct('ID1').subscribe(product => {
      expect(product.name).toEqual('Ra????o Seca');
    })
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/ID1')

    expect(req.request.method).toEqual('GET');

    const product: Product = {
      name: "Ra????o Seca",
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
    }

    req.flush(product);
  });

  it('should be created', () => {
    expect(serviceProduct);
  });
});
