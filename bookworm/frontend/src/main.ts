import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ThemeService } from './app/app-logic/theme.service';
import { AppModule } from './app/app.module';

const themeService = new ThemeService();

themeService.darkMode$.subscribe((darkMode) => {
  document.body.classList.toggle('dark-mode', darkMode);
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
