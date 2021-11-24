import { Category, Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {

  category!: Category;

  public categories: Category[] = [];

  constructor(
    private CategoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getCategory();
    console.log(this.categories)
  }

  public getCategory() {
    this.CategoriesService.getCategories().subscribe(categoryList => this.categories = categoryList )


  }



}


