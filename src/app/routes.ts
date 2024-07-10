import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './application/components/dashboard/search/search.component';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./application/application.module')
      .then(m => m.ApplicationModule),
  }
];
