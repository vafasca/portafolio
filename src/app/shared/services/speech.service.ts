import { Injectable } from '@angular/core';
declare const webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {//SpeechRecognition

  recognition: any;
  constructor() {
    this.recognition = new webkitSpeechRecognition();
   }


}
