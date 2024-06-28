import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/component/main/app.config';
import { AppComponent } from './app/component/main/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
