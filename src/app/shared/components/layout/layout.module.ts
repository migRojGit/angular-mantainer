import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBreadcrumbComponent } from './app-breadcrumb/app-breadcrumb.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppMenuitemComponent } from './app-menu/app-menuitem/app-menuitem.component';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { LoaderComponentsComponent } from './loader-components/loader-components.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppBreadcrumbComponent,
    // AppFooterComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopbarComponent,
    LoaderComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppBreadcrumbComponent,
    // AppFooterComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppTopbarComponent,
    LoaderComponentsComponent
  ]
})
export class LayoutModule { }
