import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class StatementResolverService implements Resolve<any> {

  constructor(private _CommonService: CommonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this._CommonService.searchStatementById(route.paramMap.get('id'));
  }

}