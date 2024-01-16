import { Component } from '@angular/core';
import { ThemeService } from '../app-logic/theme.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss'],
})
export class MyListsComponent {
  isDarkMode: boolean = false;

  constructor(public themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });
  }
}
