import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeQuizzComponent } from './components/poke-quizz/poke-quizz.component';

const routes: Routes = [{ path: '', component: PokeQuizzComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
