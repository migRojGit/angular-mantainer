import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
   ApplicationComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
  ],
  exports: [
    
  ]
})
export class ApplicationModule { }
