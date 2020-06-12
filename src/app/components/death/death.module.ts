import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathRoutingModule } from './death-routing.module';
import { DeathComponent } from './death.component';
import { DeathListComponent } from './death-list/death-list.component';


@NgModule({
  declarations: [DeathComponent, DeathListComponent],
  imports: [
    CommonModule,
    DeathRoutingModule
  ]
})
export class DeathModule { }
