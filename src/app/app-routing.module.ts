import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeGridComponent } from './pages/tree-grid/tree-grid.component';

const routes: Routes = [
  //Lazy loading standalone component
  {
    path: '',
    loadComponent: () =>
      import('./pages/tree-grid/tree-grid.component').then(
        (m) => m.TreeGridComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
