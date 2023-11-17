import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioMainComponent } from './components/portfolio-main/portfolio-main.component';

const routes: Routes = [
  {path:'', component:PortfolioMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling:'enabled'
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
