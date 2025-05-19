import { bootstrapApplication } from '@angular/platform-browser';
//import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

console.log('✅ Bootstrapping App with HttpClient');

bootstrapApplication(AppComponent).catch(err => console.error(err));
