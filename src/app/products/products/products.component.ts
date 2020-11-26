import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Observable<any>;
  products: [];
  constructor(private pdservice: ProductDataService) { }

  ngOnInit(): void {
    this.product = this.pdservice.getAllProducts();
    this.product.subscribe((res) => this.products = res);
  }
}
