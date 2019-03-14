import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.css']
})
export class PaginationControlsComponent {

  @Input('rowData') rowData;
  @Input('page') page;
  @Input('limit') limit;
  @Output() pageChange: EventEmitter<any> = new EventEmitter<number>();
  totalPages;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = this.getTotalNumberOfPages();
  }

  getTotalNumberOfPages = () => {
    return Math.ceil(this.rowData.length / this.limit) || 1;
  }

  getNextPage = () => {
    if (this.page < this.totalPages) {
      this.pageChange.emit(++this.page);
    }
  }

  getPreviousPage = () => {
    if (this.page <= this.totalPages && this.page > 1) {
      this.pageChange.emit(--this.page);
    }
  }

  getLastPage = () => {
    if (this.page >= 1) {
      this.pageChange.emit(this.totalPages);
    }
  }

  getFirstPage = () => {
    if (this.page >= 1) {
      this.pageChange.emit(1);
    }
  }

}