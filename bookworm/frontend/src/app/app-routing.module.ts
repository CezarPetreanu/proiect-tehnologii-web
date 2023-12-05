import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempluComponent } from './exemplu/exemplu.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { MyListsComponent } from './my-lists/my-lists.component';
import { ScrapePageComponent } from './scrape-page/scrape-page.component';

const routes: Routes = [
  {
    path: '',
    component: ScrapePageComponent,
    data: { animation: 'ScrapePage' },
  },
  {
    path: 'account',
    component: AccountPageComponent,
    data: { animation: 'AccountPage' },
  },
  {
    path: 'lists',
    component: MyListsComponent,
    data: { animation: 'ListPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
