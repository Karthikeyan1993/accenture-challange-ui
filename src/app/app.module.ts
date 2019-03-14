import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common//http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TableFilterPipe } from './table-filter.pipe';
import { TableSortPipe } from './table-sort.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng7LoadingSpinnerComponent } from './ng7-loading-spinner/ng7-loading-spinner.component';
import { StatementComponent } from './statement/statement.component';

import { HttpInterceptorService } from './http-interceptor.service';
import { CommonService } from './common.service';
import { StatementListComponent } from './statement/statement-list/statement-list.component';
import { StatementViewComponent } from './statement/statement-view/statement-view.component';
import { NgxDataGridComponent } from './ngx-data-grid/ngx-data-grid.component';
import { NamedTemplateDirective } from './named-template.directive';
import { PaginationControlsComponent } from './pagination-controls/pagination-controls.component';
import { PaginatorPipe } from './paginator.pipe';
import { StatementResolverService } from './statement-resolver.service';
import { StatementUtilPipe } from './statement-util.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, TableFilterPipe, TableSortPipe, PageNotFoundComponent, Ng7LoadingSpinnerComponent, StatementComponent, StatementListComponent, StatementViewComponent, NgxDataGridComponent, NamedTemplateDirective, PaginationControlsComponent, PaginatorPipe, StatementUtilPipe],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true,}]
})
export class AppModule { }
