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

  getCompletion(prompt: string, model: string, maxTokens: number): Observable<any> {
    const data = {
      prompt: prompt,
      model: model,
      max_tokens: maxTokens
    };
    const url = 'https://api.openai.com/v1/completions';
    return this.http.post<any>(url, data, this.httpOptions);
  }

}
