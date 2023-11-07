import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempluComponent } from './exemplu/exemplu.component';
import { AccountPageComponent } from './account-page/account-page.component';

const routes: Routes = [
  { path: '', component: ExempluComponent },
  {
    path: 'account',
    component: AccountPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
