import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  public searchInput = new FormControl('');
  public product: Product[] = [];
  public searchTerm: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSearch(): void {
    const value: string = this.searchInput.value || '';
    if (value) {
      this.productService.searchProduct(value).subscribe((listProducts) => {
        this.product = listProducts;
      });
      // this.router.navigateByUrl(`/items?q=${value}`);
      this.router.navigate(['/items'], { queryParams: { q: `${value}` } });
    }
  }
}
