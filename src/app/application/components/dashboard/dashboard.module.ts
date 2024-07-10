import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AttentionsComponent } from './attentions/attentions.component';
import { ClaimsComponent } from './claims/claims.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ResumeComponent } from './resume/resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    AttentionsComponent,
    ClaimsComponent,
    DocumentationComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
   
  ]
})
export class DashboardModule { }
