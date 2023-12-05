import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './app-logic/theme.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isDarkMode = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.isDarkMode;
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = this.themeService.isDarkMode;
  }
}
