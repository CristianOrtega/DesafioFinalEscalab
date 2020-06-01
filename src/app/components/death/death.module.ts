import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathRoutingModule } from './death-routing.module';
import { DeathComponent } from './death.component';


@NgModule({
  declarations: [DeathComponent],
  imports: [
    CommonModule,
    DeathRoutingModule
  ]
})
export class DeathModule { }
