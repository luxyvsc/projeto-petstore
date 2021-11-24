import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products!: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(products => this.products = products);
  }

}
