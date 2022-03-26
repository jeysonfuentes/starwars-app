import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPeople } from 'src/core/models/people.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() character: IPeople | undefined;
  @Output() goToCharacter = new EventEmitter<IPeople>();
  constructor() {

  }
  goToDetail() {
    this.goToCharacter.emit(this.character);
  }
}
