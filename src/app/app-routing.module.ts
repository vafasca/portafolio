import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/biography', pathMatch: 'full'
  },
  {
    path: 'biography',
    loadChildren: () =>
      import('./features/biography/biography.module').then(
        (m) => m.BiographyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
