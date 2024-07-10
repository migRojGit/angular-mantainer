import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { CustomerService } from './services/customerservice';
import { EventService } from './services/eventservice';
import { IconService } from './services/iconservice';
import { AppBreadcrumbService } from './services/app-breadcrumb.service';
import { MenuService } from './services/app.menu.service';
import { ProductService } from './services/productservice';
import { PhotoService } from './services/photoservice';
import { NodeService } from './services/nodeservice';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy},
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, MenuService, AppBreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
