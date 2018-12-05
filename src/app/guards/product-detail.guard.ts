import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({    //since it is a service
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,  //current route info, state provides router state info
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('from guard: ', +next.url[1].path);   // 0 is products and 1 is id in '/products/id'  
      let id = +next.url[1].path;
      if (isNaN(id) || id < 1) {
        this.router.navigate(['/products']);  //would want to route to error page in real app
        return false
      }
    return true;
  }
}
