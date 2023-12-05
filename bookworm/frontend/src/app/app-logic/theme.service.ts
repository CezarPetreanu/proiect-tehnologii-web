import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(
    this.getInitialTheme()
  );
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {}

  private getInitialTheme(): boolean {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme ? JSON.parse(storedTheme) : false;
  }

  get isDarkMode() {
    return this.darkModeSubject.value;
  }

  toggleDarkMode() {
    const newTheme = !this.isDarkMode;
    this.darkModeSubject.next(newTheme);
    localStorage.setItem('darkMode', JSON.stringify(newTheme));
  }
}
