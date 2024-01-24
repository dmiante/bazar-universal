import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { ListProductsComponent } from '../../components/list-products/list-products.component';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [CommonModule, ListProductsComponent],
  templateUrl: './search-list.component.html',
})
export class SearchListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((p) => (this.products = p));
  }
}
