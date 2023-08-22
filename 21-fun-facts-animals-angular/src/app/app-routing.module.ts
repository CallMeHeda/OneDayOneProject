import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFunFactsComponent } from './components/add-fun-facts/add-fun-facts.component';

const routes: Routes = [{ path: 'add', component: AddFunFactsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
