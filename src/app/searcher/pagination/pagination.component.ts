import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalResults: number = 0;
  @Input() sizePage: number = 10;
  @Output() changePage = new EventEmitter<number>();
  currentPage: number = 0;
  pages: number[] = [];
  private maxShowPages: number = 9
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    const numberPages = this.totalResults % this.sizePage > 0
    ? this.totalResults / this.sizePage + 1
    : this.totalResults / this.sizePage;
    this.pages = Array.from({length: numberPages}, (_, i) => i + 1)
    this.currentPage = 1;
  }

  nextPage() {
    this.currentPage += 1;
    this.changePage.emit(this.currentPage)
  }

  previusPage() {
    this.currentPage -= 1;
    this.changePage.emit(this.currentPage)
  }

  selectPage(number) {
    this.currentPage = number;
    this.changePage.emit(number)
  }
}
