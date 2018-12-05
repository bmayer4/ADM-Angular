import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './guards/product-detail.guard';

export const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ]},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},  //blank url
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}  //no match url, would want 404 page to show in real app
];