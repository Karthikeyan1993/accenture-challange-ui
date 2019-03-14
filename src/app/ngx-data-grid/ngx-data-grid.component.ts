import { Component, OnInit, Input, ContentChildren, TemplateRef, QueryList, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { NamedTemplateDirective } from '../named-template.directive';
import { TableSortPipe } from '../table-sort.pipe';
import { TableFilterPipe } from '../table-filter.pipe'
@Component({
  selector: 'app-ngx-data-grid',
  templateUrl: './ngx-data-grid.component.html',
  styleUrls: ['./ngx-data-grid.component.css']
})
export class NgxDataGridComponent implements OnInit {
  page = 1;
  paginationLimit = 20;
  @Input('rowData') rowData;
  @Input('colDefs') colDefs;
  @Input('prop') prop;
  @Input('direction') direction;
  @ContentChildren(NamedTemplateDirective) _TemplateRef: QueryList<NamedTemplateDirective>;
  headerTemplate: TemplateRef<any>;
  bodyTemplate: TemplateRef<any>;
  constructor(private _ChangeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.rowData = this.rowData ? this.rowData : [];
    this.colDefs = this.colDefs ? this.colDefs : [];
  }

  ngOnChanges(simple: SimpleChanges) {
    if (simple['direction']) {
      this.direction = simple['direction'].currentValue;
    }
    if (simple['prop']) {
      this.prop = simple['prop'].currentValue;
    }
  }

  ngAfterContentInit() {
    this._TemplateRef.forEach((ele: any) => {
      switch (ele.pTemplate) {
        case "header": {
          this.headerTemplate = ele.template;
          break;
        }
        case "body": {
          this.bodyTemplate = ele.template;
          break;
        }
      }
    });
  }
}