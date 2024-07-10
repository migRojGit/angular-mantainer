import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppBreadcrumbService } from 'src/app/services/app-breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './app-breadcrumb.component.html'
})
export class AppBreadcrumbComponent implements OnDestroy {

  subscription: Subscription;

  items: MenuItem[];

  constructor(public breadcrumbService: AppBreadcrumbService) {

      this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
          this.items = response;
      });
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }
}
