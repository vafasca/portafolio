import { Component, OnInit } from '@angular/core';
interface Proyecto {
  titulo: string;
  subtitulo: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  listaProyectos: Proyecto[] = [
    { titulo: 'proyecto 1', subtitulo: 'subtitulo 1', url: 'imagen1' },
    { titulo: 'proyecto 2', subtitulo: 'subtitulo 2', url: 'imagen2' },
    { titulo: 'proyecto 3', subtitulo: 'subtitulo 3', url: 'imagen3' },
    { titulo: 'proyecto 4', subtitulo: 'subtitulo 4', url: 'imagen4' },
    { titulo: 'proyecto 5', subtitulo: 'subtitulo 5', url: 'imagen5' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
