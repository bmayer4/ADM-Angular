import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,   //to share it with anything that imports this module
    CommonModule,
    FormsModule    //don't need to import it to export it out
  ]
})
export class SharedModule { }
