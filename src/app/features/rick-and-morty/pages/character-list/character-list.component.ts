import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMortyFacade } from '../../../../core/facades/rick-and-morty.facade';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<Character[]> = this.rickAndMortyFacade.getAllCharacters();
  error$: Observable<any> = this.rickAndMortyFacade.getCharacterError();
  loading$: Observable<boolean> = this.rickAndMortyFacade.getLoading();

  constructor(private rickAndMortyFacade: RickAndMortyFacade) {}

  ngOnInit(): void {
    this.rickAndMortyFacade.loadInitialCharacters();
  }

  trackByCharacterId(index: number, character: Character): number {
    return character.id;
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'alive';
      case 'dead':
        return 'dead';
      default:
        return 'unknown';
    }
  }

  getFirstTwoWords(text: string): string {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ');
  }
}
