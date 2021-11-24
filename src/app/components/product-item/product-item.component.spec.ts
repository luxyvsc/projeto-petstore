import { AnimalType, Product } from './../../interfaces/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';

const product: Product = {
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
}

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
