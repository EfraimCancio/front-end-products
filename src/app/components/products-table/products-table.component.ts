import { Component, OnInit } from '@angular/core';
import { iProduct } from 'src/app/interfaces/iProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})

export class ProductsTableComponent implements OnInit {
  products: iProduct[] = [ ];

  constructor(
       private productsService: ProductsService
  ){ }

 ngOnInit(): void {
    this.getAllProducts()
    console.log('Produtos = ', this.products)
  }

  getAllProducts = () => {
    this.productsService.findAll()
      .subscribe(products => this.products = products);

  }
}
