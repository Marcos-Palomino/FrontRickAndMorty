import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./features/rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule)
  },
  { path: '', redirectTo: '/rick-and-morty', pathMatch: 'full' },
  { path: '**', redirectTo: '/rick-and-morty' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
