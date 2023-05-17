import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiURI!: string;

  constructor(private http: HttpClient) {
    this.apiURI = 'http://localhost:3000';
   }

  getInfo(endpoint: string): Observable<any>{
    const api = `${this.apiURI}/${endpoint}`;
    return this.http.get<any>(api);
  }
}
