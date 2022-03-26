import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherRoutingModule } from './searcher-routing.module';
import { SearcherComponent } from './searcher.component';
import { CardComponent } from './card/card.component';
import { GenderModule } from 'src/core/pipe/icon-state/gender.module';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinLoaderModule } from 'src/shared/components/spin-loader/spin-loader.module';


@NgModule({
  declarations: [
    SearcherComponent,
    CardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenderModule,
    SpinLoaderModule,
    SearcherRoutingModule
  ]
})
export class SearcherModule { }
