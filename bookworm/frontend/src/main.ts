import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ThemeService } from './app/app-logic/theme.service';
import { AppModule } from './app/app.module';

// Create an instance of ThemeService
const themeService = new ThemeService();

// Subscribe to the darkMode$ observable
themeService.darkMode$.subscribe((darkMode) => {
  // Update the body class based on the dark mode state
  document.body.classList.toggle('dark-mode', darkMode);
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
