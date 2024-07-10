import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/domain/customer';
import { AppBreadcrumbService } from 'src/app/services/app-breadcrumb.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

  public countries !: Country[];

  constructor(
    private breadcrumbService : AppBreadcrumbService,
    private countryService    : CountryService
  ) {
    this.breadcrumbService.setItems([
      {label: 'Resumen'}
    ])
  }

  ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((res) => {
        this.countries = res
      })
  }

}
