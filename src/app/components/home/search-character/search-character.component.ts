import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  @Output() public filter = new EventEmitter<string>();
  @Output() public tryLuck = new EventEmitter<boolean>();

  characterName: string;

  constructor() { 
    this.characterName = '';
  }

  ngOnInit() {
  }


  onSearch() : void {
    this.filter.emit(this.characterName);
  }

  onTryLuck(): void {
    this.tryLuck.emit(true);
  }

}
