import { AppBreadcrumbService } from './../../../services/app-breadcrumb.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [MessageService, TerminalService]
})

export class DashboardComponent implements OnInit {

  constructor(
      private breadcrumbService: AppBreadcrumbService ) {
        this.breadcrumbService.setItems([
          {label: 'Dashboard'}
        ])
       }

  ngOnInit() {


  }



  ngOnDestroy() {

  }

}
