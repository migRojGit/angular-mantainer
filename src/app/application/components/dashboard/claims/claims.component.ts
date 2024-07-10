import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/services/app-breadcrumb.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html'
})
export class ClaimsComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      {label: 'Reclamos'}
    ])
   }

  ngOnInit(): void {
  }

}
