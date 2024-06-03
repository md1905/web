import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberConverterService {

  private apiUrl = environment.baseUrl + '/convert';

  constructor(private http: HttpClient) { }

  convertNumber(number: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { number });
  }
}
