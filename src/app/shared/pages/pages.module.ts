import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadRequestComponent } from './bad-request/bad-request.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    BadRequestComponent,
    NotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BadRequestComponent,
    NotFoundComponent,
    UnauthorizedComponent
  ]
})
export class PagesModule { }
