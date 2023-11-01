import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempluComponent } from './exemplu/exemplu.component';

const routes: Routes = [{ path: '', component: ExempluComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
