import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommonService {
  readonly BASE_URL = 'http://localhost:5000/api/v1/statement/';
  constructor(private _http: HttpClient) { }

  getDumpData = (): Observable<any[]> => {
    return this._http.get<any>('assets/data.json');
  }

  getStatementData = () => {
    return this._http.get<any>(`${this.BASE_URL}` + 'all');
  }

  searchStatementById=(id)=>{
    return this._http.get<any>(`${this.BASE_URL}` + id);
  }

}