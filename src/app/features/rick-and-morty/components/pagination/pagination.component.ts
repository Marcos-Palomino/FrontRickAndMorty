import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RickAndMortyFacade } from '../../../../core/facades/rick-and-morty.facade';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pagination$!: Observable<{ currentPage: number, totalPages: number }>;

  constructor(private facade: RickAndMortyFacade) {}

  ngOnInit(): void {
    this.pagination$ = combineLatest([
      this.facade.getCurrentPage(),
      this.facade.getTotalPages()
    ]).pipe(
      map(([currentPage, totalPages]) => ({ currentPage, totalPages }))
    );
  }

  previousPage(currentPage: number): void {
    this.facade.previousPage(currentPage);
  }

  nextPage(currentPage: number, totalPages: number): void {
    this.facade.nextPage(currentPage, totalPages);
  }
}
