import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../guards/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent, 
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([   //use forChild instead of forRoor when in feature module
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ]}
    ]),
    SharedModule  
  ]
})
export class ProductModule { }
