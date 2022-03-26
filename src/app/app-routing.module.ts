import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/searcher', pathMatch: 'full' },
  { path: 'searcher', loadChildren: () =>  import('./searcher/searcher.module').then((m) => m.SearcherModule)},
  { path: 'character', loadChildren: () =>  import('./character/character.module').then((m) => m.CharacterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
