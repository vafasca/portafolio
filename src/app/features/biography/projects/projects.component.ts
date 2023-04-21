import { Component, OnInit } from '@angular/core';
import { OpenaiService } from 'src/app/shared/services/openai.service';
import { Proyectos } from 'src/app/shared/models/proyecto.interface';


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

  constructor(private openaiService: OpenaiService) {}

  prompt = 'Genera una descripcion corta para un proyecto en mi potafolio';
  // model = 'text-davinci-003';
  // maxTokens = 100;

  getCompletion() {
    this.openaiService.getCompletion(this.prompt)
      .subscribe(response => response.choices[0].text);
  }

  ngOnInit(): void {
    //this.getCompletion()
  }
}
