import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempluComponent } from './exemplu/exemplu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AccountPageComponent } from './account-page/account-page.component';
import { ScrapePageComponent } from './scrape-page/scrape-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './theme.service';
import { MyListsComponent } from './my-lists/my-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    ExempluComponent,
    AccountPageComponent,
    ScrapePageComponent,
    MyListsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
