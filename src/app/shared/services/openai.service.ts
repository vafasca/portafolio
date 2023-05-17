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
      'Authorization': 'Bearer '
    })
  };

  getCompletion(prompt: string): Observable<any> {
    const data = {
      prompt: prompt,
      model: 'text-davinci-003',
      temperature: 0.2,
      max_tokens: 100,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0
    };
    const url = 'https://api.openai.com/v1/completions';
    return this.http.post<any>(url, data, this.httpOptions);
  }

}
