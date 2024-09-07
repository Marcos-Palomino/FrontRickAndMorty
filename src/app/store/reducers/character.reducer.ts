import { createReducer, on } from '@ngrx/store';
import {
  loadCharacters,
  loadCharactersSuccess,
  loadCharactersFailure,
  loadCharacterById,
  loadCharacterByIdSuccess,
  loadCharacterByIdFailure
} from '../actions/character.actions';
import { Character } from '../../features/rick-and-morty/models/character.model';

export interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
  error: any;
  loading: boolean;
  paginateList: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
}

export const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
  error: null,
  loading: false,
  paginateList: {
    currentPage: 1,
    totalPages: 0,
    pageSize: 10
  }
};

export const characterReducer = createReducer(
  initialState,

  on(loadCharacters, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadCharactersSuccess, (state, { characters, currentPage, totalPages }) => ({
    ...state,
    characters,
    paginateList: {
      ...state.paginateList,
      currentPage,
      totalPages
    },
    loading: false,
    error: null
  })),

  on(loadCharactersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(loadCharacterById, state => ({
    ...state,
    loading: true
  })),

  on(loadCharacterByIdSuccess, (state, { character }) => ({
    ...state,
    selectedCharacter: character,
    loading: false,
    error: null
  })),

  on(loadCharacterByIdFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
