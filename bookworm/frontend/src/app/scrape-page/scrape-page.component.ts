import { Component } from '@angular/core';
import { ThemeService } from '../app-logic/theme.service';
import { MockDataService } from '../app-logic/mock-data-service.service';
import { ScrapedItem } from '../../../../backend/scraped-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scrape-page',
  templateUrl: './scrape-page.component.html',
  styleUrls: ['./scrape-page.component.scss'],
})
export class ScrapePageComponent {
  getDetails(item: ScrapedItem) {
    return item.authors.join(', ') + ', ' + item.year.toString();
  }

  isDarkMode: boolean = false;
  searchQuery: string = '';
  scrapedItems: ScrapedItem[] = [];

  constructor(public themeService: ThemeService, private http: HttpClient) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }

  search() {
    const requestBody = { searchQuery: this.searchQuery };

    this.http
      .post<ScrapedItem[]>('http://127.0.0.1:5000/scrape', requestBody)
      .subscribe((data) => {
        this.scrapedItems = data;
      });
  }
  /*
  getLogo() {
    const sourcePath = this.isDarkMode
      ? '../../assets/biglogo dark.svg'
      : '../../assets/biglogo.svg';
    return this.sanitizer.bypassSecurityTrustResourceUrl(sourcePath);
    // https://angular.io/guide/security#xss
  }*/
}
