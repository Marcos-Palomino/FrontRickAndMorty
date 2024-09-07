import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RickAndMortyService } from '../../core/services/rick-and-morty.service';
import {
  loadCharacters,
  loadCharactersSuccess,
  loadCharactersFailure,
  loadCharacterById,
  loadCharacterByIdSuccess,
  loadCharacterByIdFailure
} from '../actions/character.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private rickAndMortyService: RickAndMortyService
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacters),
      mergeMap(({ page }) =>
        this.rickAndMortyService.getCharacters(page).pipe(
          map(data =>
            loadCharactersSuccess({
              characters: data.results,
              currentPage: page,
              totalPages: data.info.pages
            })
          ),
          catchError(error => of(loadCharactersFailure({ error })))
        )
      )
    )
  );

  loadCharacterById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacterById),
      mergeMap(({ id }) =>
        this.rickAndMortyService.getCharacterById(id).pipe(
          map(character => loadCharacterByIdSuccess({ character })),
          catchError(error => of(loadCharacterByIdFailure({ error })))
        )
      )
    )
  );
}
