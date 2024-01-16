import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './app-logic/theme.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isDarkMode = false;

  constructor(
    public themeService: ThemeService,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.isDarkMode;
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    this.isDarkMode = this.themeService.isDarkMode;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
