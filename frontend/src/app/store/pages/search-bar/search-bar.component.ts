import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  public searchInput = new FormControl('');
  public product: Product[] = [];

  constructor(
    private productService: ProductsService,
    private fb: FormBuilder
    ) {}

  onSearch(): void {
    const value: string = this.searchInput.value || '';
    console.log({ value });
    this.productService
      .searchProduct(value)
      .subscribe((p) => (this.product = p));
  }
}
