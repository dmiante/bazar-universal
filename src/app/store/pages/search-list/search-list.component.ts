import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { ListProductsComponent } from '../../components/list-products/list-products.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [CommonModule, ListProductsComponent],
  templateUrl: './search-list.component.html',
})
export class SearchListComponent implements OnInit {
  public products: Product[] = [];
  public term: string = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.term = Object.values(params).toString();
    });
    this.productService.searchProduct(this.term).subscribe((p) => {
      this.products = p;
    });
  }
}
