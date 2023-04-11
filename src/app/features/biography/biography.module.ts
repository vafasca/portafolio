import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiographyRoutingModule } from './biography-routing.module';
import { BiographyComponent } from './biography.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BiographyComponent
  ],
  imports: [
    CommonModule,
    BiographyRoutingModule,
    SharedModule
  ]
})
export class BiographyModule { }
