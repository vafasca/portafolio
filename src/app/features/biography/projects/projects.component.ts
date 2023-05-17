import { Component, OnInit } from '@angular/core';
import { OpenaiService } from 'src/app/shared/services/openai.service';
import { Proyectos } from 'src/app/shared/models/proyecto.interface';
import { SpeechService } from 'src/app/shared/services/speech.service';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  listaProyectos!: any;
  prompt!: any;
  historialRespuestas: string[] = [];
  speechSynthesisUtterance: SpeechSynthesisUtterance;
  responde!: any;
   //probando
  //prompt_intro2 = `Te voy a proporcionar los proyectos que desarrollo Bruno Ortiz y su contenido, de manera personal. Todos los proyectos que hizo Bruno Ortiz estan unicamente en el archivo que te comparti, el titulo, subtitulo, descripcion e imagenes ${JSON.stringify(this.listaProyectos, null, 0)}`;
  prompt_history!:string;
  prompt_api!: string;
  //prompt_intro3 = "Cuando respondas y no cuentas con esa informacion proporcionada, No compartas o responde que no te cuentas con esa informacion";
  //prompt_intro =  "Nombre: Alejandro. \n Profesión de Alejandro: Asistente virtual, para la pagina web que es el portafolio de Bruno Ortiz. \nProfesion de Bruno Ortiz: Ingeniero de Sistemas \nPersonalidad de Bruno Ortiz: Sarcastico y gracioso. \nPasatiempos de Bruno Ortiz: Los 2 unicos pasatiempos son Jugar a Dota 2 y leer novelas \nEdad de Alejandro: 18 anios. \nEdad de Bruno Ortiz: 28 anios";
  objeto!: object;
  constructor(
    private openaiService: OpenaiService,
    private speechService: SpeechService,
    private infoService: ApiServiceService,
    private router: Router) {
    this.speechSynthesisUtterance = new SpeechSynthesisUtterance();
  }

  getProyectos(){
    this.infoService.getInfo('proyectosPersonales').subscribe((data) => {
      this.listaProyectos = data;
    });
  }
  getInfo(info: string){
    this.infoService.getInfo(info).subscribe((data) => {
      this.objeto = data[0];
    });
  }

  startListening() {
    this.speechService.recognition.lang = 'es-ES';
    this.speechService.recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
      const transcript = event.results[0][0].transcript;
      console.log('Texto transcrito:', transcript);
        this.historialRespuestas.push(transcript)
        console.log(this.historialRespuestas);
        this.prompt_history = `Este es el historial de conversacion: ${this.historialRespuestas}`;
      this.getCompletion(transcript);//al api la pregunta
      console.log('Transcript completo:', transcript);

    const palabra = "abrir";
    if (transcript.toLowerCase().includes(palabra) && transcript.toLowerCase().includes('facebook')) {
      window.open('https://www.facebook.com/', '_blank');
    } else if (transcript.toLowerCase().includes(palabra) && transcript.toLowerCase().includes('youtube')) {
      window.open('https://www.youtube.com/', '_blank');
    } else if (transcript.toLowerCase().includes(palabra) && transcript.toLowerCase().includes('gmail')) {
      window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
    }
    //
    
      //this.getCompletion(transcript);
      //this.processTranscript(transcript);
    };
    
    this.speechService.recognition.onend = () => {
      //this.startListening(); // Reiniciar el reconocimiento de voz después de una pausa
    };
    this.speechService.recognition.start();
  }
 
  getCompletion(prompt: any) {
    console.log(this.objeto);
    this.prompt_api = `Informacion:${JSON.stringify(this.objeto)} `;
    this.openaiService.getCompletion(this.prompt_history+this.prompt_api+prompt)
      .subscribe(response => {
        this.responde = response.choices[0].text
        console.log(response.choices[0].text);
        this.historialRespuestas.push(response.choices[0].text); // Agregar la respuesta al historial
        //this.speak(this.responde);
      });
  }
  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  ngOnInit(): void {
    this.getProyectos();
    this.getInfo('limitacionBot');
    this.startListening();
  }
}
