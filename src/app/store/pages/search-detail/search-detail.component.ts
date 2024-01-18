import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { switchMap } from 'rxjs';

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
    .pipe(
      switchMap(({id}) => this.productService.getProductById(id))
    )
    .subscribe(product => {
      if(!product) return this.router.navigate(['/items'])
      this.product = product
      return
    })
  }


}
