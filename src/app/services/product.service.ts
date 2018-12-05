import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})  //an instance of the service is now available for injection anywhere in app
export class ProductService {
    private productUrl = 'api/products/products.json'
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<Product | undefined> {
        return this.getProducts().pipe(
          map((products: Product[]) => products.find(p => p.productId === id))
        );
      }

    handleError(err: HttpErrorResponse) {
    //in real app, would not log error to console
    let errorMessage = '';
    if (err.error instanceof(ErrorEvent)) {
        //a client side or network error
        errorMessage = `An error occured: ${err.error.message}`
    } else {
        //backlend returned an unsuccessful response code
        errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }
}