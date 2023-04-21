import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/';

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer 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'
    })
  };

  getCompletion(prompt: string): Observable<any> {
    const data = {
      prompt: prompt,
      model: 'text-davinci-003',
      max_tokens: 100
    };
    const url = 'https://api.openai.com/v1/completions';
    return this.http.post<any>(url, data, this.httpOptions);
  }

}
