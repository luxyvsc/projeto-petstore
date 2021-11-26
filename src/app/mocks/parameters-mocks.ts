import { Parameters } from './../interfaces/parameters';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametersServiceMock {

  constructor(private http: HttpClient) { }

  getParameters() {
    return this.http.get<Parameters[]>(`${environment.apiUrl}v1/parameters`)
      .pipe(
        tap(console.log)
      )
  }
}
