import { Component } from '@angular/core';
import { ThemeService } from '../app-logic/theme.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent {
  isDarkMode: boolean = false;

  constructor(public themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }
}
