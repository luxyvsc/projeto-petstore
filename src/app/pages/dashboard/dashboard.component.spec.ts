import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { CategoriesFeaturedComponent } from './../../components/categories-featured/categories-featured.component';
import { ProductsService } from 'src/app/services/products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ProductsServiceMock } from 'src/app/mocks/product-mocks';
import { MockComponent } from 'ng-mocks';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
      DashboardComponent,
      MockComponent(CategoriesFeaturedComponent),
      MockComponent(ProductItemComponent)
    ],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });
});
