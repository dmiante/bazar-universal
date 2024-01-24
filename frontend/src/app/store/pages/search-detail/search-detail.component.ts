import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-detail.component.html',
})
export class SearchDetailComponent implements OnInit {

  public product?: Product

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.productService.searchProductById(id)))
      .subscribe((product) => {
        if (!product) return this.router.navigate(['/items']);
        this.product = product;
        return;
      });
  }


}
