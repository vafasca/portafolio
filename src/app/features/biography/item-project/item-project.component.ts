import { Component, Input, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/shared/models/proyecto.interface';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.css']
})
export class ItemProjectComponent implements OnInit {
  

  @Input() listaProyectos!: Proyectos;

  defaultImage = "https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
