import { PrimeNgModule } from './../prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    LayoutModule
  ]
})
export class ComponentsModule { }
