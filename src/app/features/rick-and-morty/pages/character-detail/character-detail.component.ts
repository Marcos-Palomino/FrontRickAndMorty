import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyFacade } from '../../../../core/facades/rick-and-morty.facade';
import { EMPTY, Observable } from 'rxjs';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character | undefined>;
  loading$: Observable<boolean> = this.rickAndMortyFacade.getLoading();

  constructor(
    private route: ActivatedRoute,
    private rickAndMortyFacade: RickAndMortyFacade
  ) {
    this.character$ = EMPTY;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickAndMortyFacade.loadCharacterById(Number(id));
      this.character$ = this.rickAndMortyFacade.getCharacterById(Number(id));
    }
  }
}
