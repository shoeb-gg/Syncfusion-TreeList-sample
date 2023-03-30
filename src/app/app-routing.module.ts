import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Lazy loading standalone component
  {
    path: '',
    loadComponent: () =>
      import('./pages/tree-grid/tree-grid.component').then(
        (m) => m.TreeGridComponent
      ),
  },
  {
    path: 'img',
    loadComponent: () =>
      import('./pages/opt-img/opt-img.component').then(
        (m) => m.OptImgComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
