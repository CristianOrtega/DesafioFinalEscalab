import { Component, OnInit } from '@angular/core';

import { take } from 'rxjs/operators';

import { EpisodeService } from '../../core/services/episode.service';
import { Episode } from '../../core/model/episode';
import { Filter } from '../../core/model/filter';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  episodeList: Episode[];
  pageSize: number;
  page: number;
  totalRecords: number;

  constructor(private episodeService: EpisodeService) { 
    this.page = 1;
    this.pageSize = 4;
    this.episodeList = [];
  }

  ngOnInit() {
    this.findAllEpisodes();
  }

  onSearch(filter: Filter): void {
    debugger;
  }

  pageChanged(page: number): void {
    this.page = page;
  }

  private findAllEpisodes(): void {
    this.episodeService.findAllEpisodes().pipe(take(1)).subscribe(resp => {
      this.episodeList = resp;
      this.episodeList.forEach(episode => {
        episode.serieImg = this.getImageForSerie(episode.series);
      });
      this.totalRecords = this.episodeList.length;
    });
  }

  private getImageForSerie(serie: string): string {
    const BREAKING_BAD = 'breaking bad';
    let imagePath = '';
    if (BREAKING_BAD === serie.toLocaleLowerCase()) {
      imagePath = 'assets/images/breakingbad.jpg';
    } else {
      imagePath = 'assets/images/better-call-saul.jpg';
    }
    return imagePath;
  }

}
