import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatementComponent } from './statement/statement.component';
import { StatementListComponent } from './statement/statement-list/statement-list.component';
import { StatementViewComponent } from './statement/statement-view/statement-view.component';
import { StatementResolverService } from './statement-resolver.service';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'statement'
  },
  {
    path: 'statement',
    component: StatementComponent,
    children: [
      {
        path: '',
        component: StatementListComponent
      }, {
        path: 'view/:id',
        component: StatementViewComponent,
        resolve: { statement: StatementResolverService }
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
  constructor() {

  }
}