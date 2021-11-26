import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  products!: Product;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(`${id}`).subscribe(
      Products => this.products = Products
    )
  }

  public swiperConfig: SwiperOptions = {
    direction: 'horizontal',
    keyboard: true,
    grabCursor: true,
    pagination: {el: '.swiper-pagination', clickable: true,}
  }
}

