import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadCharacters, loadCharacterById } from '../../store/actions/character.actions';
import {
  selectAllCharacters,
  selectCharacterById,
  selectCurrentPage,
  selectTotalPages,
  selectCharacterError,
  selectLoading
} from '../../store/selectors/character.selector';
import { Character } from '../../features/rick-and-morty/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyFacade {
  constructor(private store: Store) {}

  loadInitialCharacters(): void {
    this.loadCharacters(1);
  }

  loadCharacters(page: number): void {
    this.store.dispatch(loadCharacters({ page }));
  }

  loadCharacterById(id: number): void {
    this.store.dispatch(loadCharacterById({ id }));
  }

  getAllCharacters(): Observable<Character[]> {
    return this.store.select(selectAllCharacters);
  }

  getCharacterById(id: number): Observable<Character | undefined> {
    return this.store.select(selectCharacterById(id));
  }

  getCurrentPage(): Observable<number> {
    return this.store.select(selectCurrentPage);
  }

  getTotalPages(): Observable<number> {
    return this.store.select(selectTotalPages);
  }

  getCharacterError(): Observable<any> {
    return this.store.select(selectCharacterError);
  }

  getLoading(): Observable<boolean> {
    return this.store.select(selectLoading);
  }

  previousPage(currentPage: number): void {
    if (currentPage > 1) {
      this.loadCharacters(currentPage - 1);
    }
  }

  nextPage(currentPage: number, totalPages: number): void {
    if (currentPage < totalPages) {
      this.loadCharacters(currentPage + 1);
    }
  }
}
