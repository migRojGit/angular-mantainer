import { Routes } from '@angular/router';
import { SearchComponent } from './components/dashboard/search/search.component';
import { ApplicationComponent } from './application.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClaimsComponent } from './components/dashboard/claims/claims.component';
import { DocumentationComponent } from './components/dashboard/documentation/documentation.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';



export const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path:'search',
        component: SearchComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'claims',
        component: ClaimsComponent
      },
      {
        path: 'documentation',
        component: DocumentationComponent
      }
    ]
  },

]
