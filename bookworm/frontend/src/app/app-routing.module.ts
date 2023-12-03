import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempluComponent } from './exemplu/exemplu.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ScrapePageComponent } from './scrape-page/scrape-page.component';

const routes: Routes = [
  { path: '', component: ScrapePageComponent },
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
