import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppBreadcrumbService } from 'src/app/services/app-breadcrumb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(
    private breadcrumbService: AppBreadcrumbService,
    private form: FormBuilder,
  ) {
    this.breadcrumbService.setItems([
      {label: 'Búsqueda'}
    ])
   }

  ngOnInit(): void {
  }

  formGroup: FormGroup = this.form.group({
    a: ['', [, Validators.required]],
    b: ['', [ Validators.minLength(16),Validators.required]],
    c: ['', [ Validators.minLength(16),Validators.required]],
    d: ['', [ Validators.minLength(16),Validators.required]],
  })

}
