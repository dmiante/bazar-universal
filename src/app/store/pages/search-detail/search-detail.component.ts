import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-detail.component.html',
})
export class SearchDetailComponent implements OnInit {
  public product?: Product;

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((productID) => {
      const key = Object.values(productID);
      this.productService.searchProductById(Number(key)).subscribe((list) => {
        this.product = list;
      });
    });
  }
}
