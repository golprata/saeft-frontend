import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Role } from '../classes/roles.model';
import { ROLES } from './mock-roles';
import { environment } from './../../../environments/environment';


// import * as rxjs from 'rxjs';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get<Role[]>(`${environment.api_url}/admin/roles`)
    // .map(res => res.json());
    .pipe(
      tap(console.log)
    );
  }

}
