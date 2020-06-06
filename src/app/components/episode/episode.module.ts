import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { SearchEpisodeComponent } from './search-episode/search-episode.component';


@NgModule({
  declarations: [
    EpisodeComponent,
    SearchEpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ]
})
export class EpisodeModule { }
