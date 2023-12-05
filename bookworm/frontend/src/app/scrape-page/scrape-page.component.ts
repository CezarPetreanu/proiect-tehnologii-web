import { Component } from '@angular/core';
import { ThemeService } from '../app-logic/theme.service';
import { MockDataService } from '../app-logic/mock-data-service.service';
import { ScrapedItem } from '../../../../backend/scraped-item';

@Component({
  selector: 'app-scrape-page',
  templateUrl: './scrape-page.component.html',
  styleUrls: ['./scrape-page.component.scss'],
})
export class ScrapePageComponent {
  isDarkMode: boolean = false;
  scrapedItems: ScrapedItem[];

  constructor(
    public themeService: ThemeService,
    private mockDataService: MockDataService
  ) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
    this.scrapedItems = this.mockDataService.getData();
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
