import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { SubnauticaComponent } from './app/pages/subnautica/subnautica.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Aquí se inyecta ActivatedRoute
}).catch(err => console.error(err));
