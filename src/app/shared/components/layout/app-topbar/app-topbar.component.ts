import { Component, OnInit } from '@angular/core';
import { ApplicationComponent } from 'src/app/application/application.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app-topbar.component.html'
})
export class AppTopbarComponent implements OnInit {
  

  constructor(
    public app: ApplicationComponent
  ) { }

  ngOnInit(): void {
  }

}
