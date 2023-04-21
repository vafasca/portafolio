import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyRoutingModule } from './biography-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

//Modules
import { SharedModule } from 'src/app/shared/shared.module';

//Componentes
import { BiographyComponent } from './biography.component';
import { AboutComponent } from './about/about.component';
import { IconCarrouselComponent } from './icon-carrousel/icon-carrousel.component';
import { ProjectsComponent } from './projects/projects.component';

//Ng-boostrap Style
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

//Angular Material Style
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ItemProjectComponent } from './item-project/item-project.component';

@NgModule({
  declarations: [
    BiographyComponent,
    AboutComponent,
    IconCarrouselComponent,
    ProjectsComponent,
    ItemProjectComponent
  ],
  imports: [
    CommonModule,
    BiographyRoutingModule,
    SharedModule,
    NgbCarouselModule,
    MatCardModule,
    MatButtonModule,
    LazyLoadImageModule
  ]
})
export class BiographyModule { }
