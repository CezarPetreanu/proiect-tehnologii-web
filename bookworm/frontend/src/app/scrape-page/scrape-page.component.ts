import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-scrape-page',
  templateUrl: './scrape-page.component.html',
  styleUrls: ['./scrape-page.component.scss'],
})
export class ScrapePageComponent {
  isDarkMode: boolean = false;

  constructor(
    public themeService: ThemeService,
    private sanitizer: DomSanitizer
  ) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
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
