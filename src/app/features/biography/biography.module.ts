import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiographyRoutingModule } from './biography-routing.module';
import { BiographyComponent } from './biography.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from '../about/about.component';
import { IconCarrouselComponent } from '../icon-carrousel/icon-carrousel.component';
import { ProjectsComponent } from '../projects/projects.component';

@NgModule({
  declarations: [
    BiographyComponent,
    AboutComponent,
    IconCarrouselComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    BiographyRoutingModule,
    SharedModule
  ]
})
export class BiographyModule { }
