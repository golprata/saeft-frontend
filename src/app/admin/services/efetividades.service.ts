import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Efetividade } from '../classes/efetividades.model';
import { environment } from './../../../environments/environment';


// import * as rxjs from 'rxjs';

@Injectable()
export class EfetividadeService {

  constructor(private http: HttpClient) { }

  getEfetividades(){
    return this.http.get<Efetividade[]>(`${environment.api_url}/admin/efetividades`)
    .pipe(
      tap(console.log)
    );
    // .map(result => result);
  }

}
