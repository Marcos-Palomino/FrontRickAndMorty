import { createAction, props } from '@ngrx/store';
import { Character } from '../../features/rick-and-morty/models/character.model';

export const loadCharacters = createAction(
  '[Character List] Load Characters',
  props<{ page: number }>()
);

export const loadCharactersSuccess = createAction(
  '[Character List] Load Characters Success',
  props<{ characters: Character[], currentPage: number, totalPages: number }>()
);

export const loadCharactersFailure = createAction(
  '[Character List] Load Characters Failure',
  props<{ error: any }>()
);

export const loadCharacterById = createAction(
  '[Character Detail] Load Character By Id',
  props<{ id: number }>()
);

export const loadCharacterByIdSuccess = createAction(
  '[Character Detail] Load Character By Id Success',
  props<{ character: Character }>()
);

export const loadCharacterByIdFailure = createAction(
  '[Character Detail] Load Character By Id Failure',
  props<{ error: any }>()
);
