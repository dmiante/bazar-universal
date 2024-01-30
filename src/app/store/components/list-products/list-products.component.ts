import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { SearchListComponent } from '../../pages/search-list/search-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'card-list-products',
  standalone: true,
  imports: [CommonModule, SearchListComponent, RouterLink, RouterOutlet],
  templateUrl: './list-products.component.html',
})
export class ListProductsComponent implements OnInit {
  @Input()
  public product!: Product;

  ngOnInit(): void {
    if (!this.product) throw Error('Product property is required');
  }
}
