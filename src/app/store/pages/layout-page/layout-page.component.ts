import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent implements OnInit {

  ngOnInit(): void { }

}
