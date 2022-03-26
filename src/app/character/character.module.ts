import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { GenderModule } from 'src/core/pipe/icon-state/gender.module';
import { FilmComponent } from './film/film.component';
import { SpinLoaderModule } from 'src/shared/components/spin-loader/spin-loader.module';


@NgModule({
  declarations: [
    CharacterComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    GenderModule,
    SpinLoaderModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
