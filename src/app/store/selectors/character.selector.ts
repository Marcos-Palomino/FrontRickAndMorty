import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '../reducers/character.reducer';

export const selectCharacterState = createFeatureSelector<CharacterState>('character');

export const selectAllCharacters = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.characters
);

export const selectCharacterById = (id: number) => createSelector(
  selectCharacterState,
  (state: CharacterState) => state.characters.find(character => character.id === id)
);

export const selectCurrentPage = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.paginateList.currentPage
);

export const selectTotalPages = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.paginateList.totalPages
);

export const selectPageSize = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.paginateList.pageSize
);

export const selectCharacterError = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.error
);

// Nuevo selector para obtener el estado de loading
export const selectLoading = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.loading
);
