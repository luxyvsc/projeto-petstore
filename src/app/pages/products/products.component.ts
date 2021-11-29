import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product, ProductsGetResponse } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: ProductsGetResponse;

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.service.getProducts2()
      .subscribe(products => {this.products = products
        console.log(this.products)});

    }
}
