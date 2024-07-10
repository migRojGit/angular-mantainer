import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/services/app-breadcrumb.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html'
})
export class DocumentationComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      {label: 'Documentos'}
    ])
   }

  ngOnInit(): void {
  }

}
