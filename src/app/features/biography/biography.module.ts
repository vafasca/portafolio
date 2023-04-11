import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiographyRoutingModule } from './biography-routing.module';
import { BiographyComponent } from './biography.component';


@NgModule({
  declarations: [
    BiographyComponent
  ],
  imports: [
    CommonModule,
    BiographyRoutingModule
  ]
})
export class BiographyModule { }
