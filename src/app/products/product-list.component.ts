import { Component, OnInit } from "@angular/core"
import { Product } from "../../models/product";
import { TouchSequence } from "selenium-webdriver";
import { ProductService } from "../services/product.service";

@Component({
    //selector: 'pm-products',     //don't need this after adding routing
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {  //value is input value
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Product[];
    products: Product[];

    constructor(private productService: ProductService) {}

      ngOnInit(): void {   //executed after constructor
          this.productService.getProducts().subscribe(
              products => {
                  this.products = products
                  this.filteredProducts = this.products;  //remove this line to see how it works
                },
              error => this.errorMessage = <any>error
          );
      }

      toggleImage(): void {
        this.showImage = !this.showImage;
      }

      performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(p => p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        //return this.products.filter(p => p.productName.toLocaleLowerCase().includes(filterBy));   also works
      }

      onNotify(message: string): void {
        this.pageTitle = 'Product List' + message  
      }
}