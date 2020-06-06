import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { Character } from '../../core/model/character';
import { CharacterService } from '../../core/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCharactersAreShowed: boolean;
  serieName: string;
  characterList: Character[];
  pageSize: number;
  page: number;
  totalRecords: number;

  constructor(private characterService: CharacterService) { 
    this.page = 1;
    this.pageSize = 8;
    this.allCharactersAreShowed = true;
    this.characterList = [];
    this.serieName = '';
  }

  ngOnInit() {
    this.findAllCharacters();
  }


  onSearchBySerieName(serie: string) : void {
    if (serie === '') {
      this.serieName = '';
      this.allCharactersAreShowed = true;
      this.findAllCharacters();
    } else {
      this.serieName = serie;
      this.allCharactersAreShowed = false;
      this.findCharacterByCategory(this.serieName);
    }
  }

  onSearch(name: string): void {
    this.resetValues();
    if (this.allCharactersAreShowed) {
        if (name !== '') {
          this.findCharactersByName(name);
        } else {
          this.findAllCharacters();
        } 
    } else {
      if (name !== '') {
        this.findAllCharacters();
      } else {
        this.findCharacterByCategory(this.serieName);
      }
      
    }
  }

  onTryLuck(event: boolean): void {
    if (event) {
      this.resetValues();
      this.findCharactersByLucky();
    }
  }

  pageChanged(page: number): void {
    this.page = page;
  }

  private findAllCharacters(): void {
    this.characterService.findAllCharacters().pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
    });
  }

  private findCharacterByCategory(serie: string): void {
    this.characterService.findCharacterByCategory(serie).pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
    });
  }

  private findCharactersByName(name: string): void {
    this.characterService.findCharacterByName(name).pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
    });
  }

  private findCharactersByLucky(): void {
    this.characterService.findRandomCharacter().pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
    });
  }

  private resetValues(): void {
    this.page = 1;
    this.characterList = [];
    this.totalRecords = 0;
  }

}
