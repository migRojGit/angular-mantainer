
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimeNgModule,
    PagesModule
  ],
  exports: [
    ComponentsModule,
    PrimeNgModule,
    PagesModule
  ]
})
export class SharedModule { }
