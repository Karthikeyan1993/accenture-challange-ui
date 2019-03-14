import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from '../../common.service';
import { TableSortPipe } from '../../table-sort.pipe';
@Component({
  selector: 'app-statement-list',
  templateUrl: './statement-list.component.html',
  styleUrls: ['./statement-list.component.css']
})
export class StatementListComponent implements OnInit {
  data: any;
  colDefs: any;
  prop = '';
  direction = 'asc';
  search;
  isFirstSearch = false;
  constructor(private _CommonService: CommonService, private _TableSortPipe: TableSortPipe,private _ChangeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.initCols();
    this.getStatementData();
  }
  initCols = () => {
    this.colDefs = [{
      displayName: 'ID',
      field: 'id'
    }, {
      displayName: 'NAME',
      field: 'name'
    }, {
      displayName: 'LIMIT_BAL',
      field: 'limit_bal'
    }, {
      displayName: 'SEX',
      field: 'sex',
    }, {
      displayName: 'EDUCATION',
      field: 'education'
    }, {
      displayName: 'MARRIAGE',
      field: 'marriage'
    }, {
      displayName: 'AGE',
      field: 'age'
    }, {
      displayName: 'PAY_0',
      field: 'pay_0'
    }, {
      displayName: 'PAY_2',
      field: 'pay_2'
    }, {
      displayName: 'PAY_3',
      field: 'pay_3'
    }, {
      displayName: 'PAY_4',
      field: 'pay_4'
    }, {
      displayName: 'PAY_5',
      field: 'pay_5'
    }, {
      displayName: 'PAY_6',
      field: 'pay_6'
    }, {
      displayName: 'BILL_AMT1',
      field: 'bill_amt1'
    }, {
      displayName: 'BILL_AMT2',
      field: 'bill_amt2'
    }, {
      displayName: 'BILL_AMT3',
      field: 'bill_amt3'
    }, {
      displayName: 'BILL_AMT4',
      field: 'bill_amt4'
    }, {
      displayName: 'BILL_AMT5',
      field: 'bill_amt5'
    }, {
      displayName: 'BILL_AMT6',
      field: 'bill_amt6'
    }, {
      displayName: 'PAY_AMT1',
      field: 'pay_amt1'
    }, {
      displayName: 'PAY_AMT2',
      field: 'pay_amt2'
    }, {
      displayName: 'PAY_AMT3',
      field: 'pay_amt3'
    }, {
      displayName: 'PAY_AMT4',
      field: 'pay_amt4'
    }, {
      displayName: 'PAY_AMT5',
      field: 'pay_amt5'
    }, {
      displayName: 'PAY_AMT6',
      field: 'pay_amt6'
    }, {
      displayName: 'DEFAULT_PAYMENT_NEXT_MONTH',
      field: 'default_payment_next_month'
    }
    ];
  }

  sort = (key) => {
    this.prop = key;
    this.direction = this.direction == 'asc' ? 'desc' : 'asc';
  }

  getSortClass = (prop) => {
    return {
      'glyphicon-sort': this.prop !== prop,
      'glyphicon-sort-by-attributes': this.prop === prop && this.direction === 'asc',
      'glyphicon-sort-by-attributes-alt': this.prop === prop && this.direction === 'desc'
    };
  }

  getDumpData = () => {
    this._CommonService.getDumpData().subscribe((res) => {
      this.data = res;
    });
  }

  getStatementData = () => {
    this._CommonService.getStatementData().subscribe((res) => {
      this.data = res.data;
    });
  }

  searchById = () => {
    if (this.search.length > 0) {
      this._CommonService.searchStatementById(this.search).subscribe((res) => {
        this.data = [res.data];
      });
    }
  }

  trackSearch = () => {
    if (this.search.length == 0) {
      this.getStatementData();
    }
  }
}