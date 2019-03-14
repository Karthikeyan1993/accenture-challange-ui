import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statement-view',
  templateUrl: './statement-view.component.html',
  styleUrls: ['./statement-view.component.css']
})
export class StatementViewComponent implements OnInit {
  statement;
  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this.statement = this._router.snapshot.data.statement.data;
  }

}