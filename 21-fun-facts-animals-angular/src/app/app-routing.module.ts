import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFunFactsComponent } from './components/add-fun-facts/add-fun-facts.component';
import { GetAnimalsComponent } from './components/get-animals/get-animals.component';

const routes: Routes = [
  { path: '', component: GetAnimalsComponent },
  { path: 'add', component: AddFunFactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
