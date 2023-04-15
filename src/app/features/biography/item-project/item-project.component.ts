import { Component, Input, OnInit } from '@angular/core';

interface Proyecto {
  titulo: string;
  subtitulo: string;
  url: string;
}

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent implements OnInit {
  

  @Input() listaProyectos!: Proyecto;

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
