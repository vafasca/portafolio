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

  listaProyectos: Proyectos[] = [
    { titulo: 'proyecto 1', subtitulo: 'subtitulo 1', description: 'Descripcion', url: ['https://images.unsplash.com/photo-1581789164394-810293cd79ce', 'https://m.media-amazon.com/images/I/91t2ISLcxdL.jpg', 'https://e0.pxfuel.com/wallpapers/935/242/desktop-wallpaper-oneplus-6-neversettle-oneplus-oneplus6-oneplus6t-wallpa-fondo-de-pantalla-oscuros-fondo-de-pantalla-de-supreme-fondo-de-pantalla-de-tecnologia-oneplus-dark-thumbnail.jpg'] },
    { titulo: 'proyecto 2', subtitulo: 'subtitulo 2', description: 'Description', url: ['https://images.unsplash.com/photo-1562690868-60bbe7293e94', 'https://imagessl3.casadellibro.com/a/l/t5/83/9788484416883.jpg'] },
    { titulo: 'proyecto 3', subtitulo: 'subtitulo 3', description: 'Description', url: ['https://images.unsplash.com/photo-1536677813196-8fed27bcecdc', 'https://contentv2.tap-commerce.com/cover/large/9789873820724_1.jpg?id_com=1113', 'https://wallpaperslinks.com/app/king-include/uploads/2022/10/893366-1-bkack-and-dark-negro-oscuro-(6).jpg'] },
    { titulo: 'proyecto 4', subtitulo: 'subtitulo 4', description: 'Description', url: ['https://images.unsplash.com/photo-1599198688091-926a8df3c9be', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyp4XfQYqvBzhGc4GfikV2dRWii0iasZAIQZ2-KAZCztOibNOv_7aRBL5cmz1G6vHdEM&usqp=CAU']}
  ];

  prompt!: any;
  historialRespuestas: string[] = [];
  speechSynthesisUtterance: SpeechSynthesisUtterance;
  responde!: any;
   //probando
  prompt_intro2 = `Te voy a proporcionar los proyectos que desarrollo Bruno Ortiz y su contenido, de manera personal. Todos los proyectos que hizo Bruno Ortiz estan unicamente en el archivo que te comparti, el titulo, subtitulo, descripcion e imagenes ${JSON.stringify(this.listaProyectos, null, 0)}`;
  prompt_history!:string;
  prompt_api!: string;
  //prompt_intro3 = "Cuando respondas y no cuentas con esa informacion proporcionada, No compartas o responde que no te cuentas con esa informacion";
  prompt_intro =  "Nombre: Alejandro. \n Profesión de Alejandro: Asistente virtual, para la pagina web que es el portafolio de Bruno Ortiz. \nProfesion de Bruno Ortiz: Ingeniero de Sistemas \nPersonalidad de Bruno Ortiz: Sarcastico y gracioso. \nPasatiempos de Bruno Ortiz: Los 2 unicos pasatiempos son Jugar a Dota 2 y leer novelas \nEdad de Alejandro: 18 anios. \nEdad de Bruno Ortiz: 28 anios";
  objeto!: object;
  constructor(
    private openaiService: OpenaiService,
    private speechService: SpeechService,
    private infoService: ApiServiceService,
    private router: Router) {
    this.speechSynthesisUtterance = new SpeechSynthesisUtterance();
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
      console.log('array'+this.listaProyectos[0]);
      //const firstWord = transcript.replace(/[^\w\s]|_/g, "").trim().split(' ')[0];
      // if (firstWord.toLowerCase() === 'alejandro') {
        this.historialRespuestas.push(transcript)
        console.log(this.historialRespuestas);
        this.prompt_history = `Este es el historial de conversacion: ${this.historialRespuestas}`;
      this.getCompletion(transcript);//al api la pregunta
      console.log('Transcript completo:', transcript);
      //this.historialRespuestas.push(transcript);
      //prueba redicrect
      //window.open('https://www3.animeflv.net/', '_blank');
    //}
    //
    const palabra = "abrir";
    if (transcript.toLowerCase().includes(palabra) && transcript.toLowerCase().includes('facebook')) {
      window.open('https://www.facebook.com/', '_blank');
    } else if (transcript.toLowerCase().includes(palabra) && transcript.toLowerCase().includes('youtube')) {
      window.open('https://www.youtube.com/', '_blank');
    } else if (transcript.toLowerCase().includes(palabra) && transcript.toLowerCase().includes('instagram')) {
      window.open('https://www.youtube.com/', '_blank');
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
  
  // processTranscript(transcript: string) {
  //   // Aquí puedes realizar cualquier lógica de procesamiento con el texto transcrito
  //   // Por ejemplo, enviarlo a un servidor, mostrarlo en la interfaz, etc.
  //   // También puedes llamar a otros servicios o componentes para realizar acciones adicionales
  //   console.log('Procesando texto:', transcript);
  //   //this.getCompletion(transcript)
  // }
 

  getCompletion(prompt: any) {
    console.log(this.objeto);
    this.prompt_api = `Informacion:${JSON.stringify(this.objeto)} `;
    //console.log("estooooooo recibo yo:"+prompt);
    //console.log("history string format: "+"***"+this.historialRespuestas.join("\n")+"***");
    //console.log("lo que recibe openai"+this.prompt_history);
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
    //this.getCompletion()
    this.getInfo('limitacionBot');
    this.startListening();
  }
}
