import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: CharacterListComponent },
        { path: ':id', component: CharacterDetailComponent }
    ]),
    SharedModule
]
})
export class RickAndMortyModule { }
