import { Component, OnDestroy } from '@angular/core';
import { ThemeService } from '../app-logic/theme.service';
import { ScrapedItem } from '../../../../backend/scraped-item';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Component({
  selector: 'app-scrape-page',
  templateUrl: './scrape-page.component.html',
  styleUrls: ['./scrape-page.component.scss'],
})
export class ScrapePageComponent implements OnDestroy {
  getDetails(item: ScrapedItem) {
    return item.authors.join(', ') + ', ' + item.year.toString();
  }

  isDarkMode: boolean = false;
  searchQuery: string = '';
  scrapedItems: ScrapedItem[] = [];
  active: boolean = false;
  page: number = 3;
  paused: boolean = false;
  interval: NodeJS.Timeout | null = null;

  constructor(public themeService: ThemeService, private http: HttpClient) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
      this.active = false;
    });
  }

  scrape() {
    if (this.paused == false) {
      const requestBody = { searchQuery: this.searchQuery, page: this.page };
      this.http
        .post<ScrapedItem[]>('http://127.0.0.7:5000/scrape', requestBody)
        .subscribe((data) => {
          this.scrapedItems = this.scrapedItems.concat(data);
          this.page++;
        });
    }
  }

  pause() {
    this.paused = !this.paused;
  }

  search() {
    if (/[a-zA-Z\d]/.test(this.searchQuery)) {
      this.active = true;
      this.page = 1;
      this.scrapedItems = [];
      this.paused = false;

      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.interval = setInterval(() => {
        if (this.active) this.scrape();
      }, 3000);
    }
  }

  savejson() {
    const content = JSON.stringify(this.scrapedItems, null, 2);
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = 'downloaded_file.json';
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
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
