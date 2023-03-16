import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Observable, of, Subject, takeUntil} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.scss']
})
export class ProductPagesComponent implements OnInit, OnDestroy {

  private unSubscribe$ = new Subject<void>();
  productList$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList$ = this.productService.getProductList({});
    //   .pipe(takeUntil(this.unSubscribe$)).subscribe(s => {
    //   if (s) {
    //     return of(s);
    //   }
    // })
  }


  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }

}
