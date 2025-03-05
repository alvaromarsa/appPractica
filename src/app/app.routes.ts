import { Routes } from "@angular/router";
import { SubnauticaComponent} from "./pages/subnautica/subnautica.component";
import { SubmarinosComponent } from './pages/subnautica/submarinos/submarinos.component';
import { UnicornioComponent } from "./pages/unicornio/unicornio.component";


export const routes: Routes = [
  {
    path: '',
    component: SubnauticaComponent,
  },
  {
    path: 'Unicornio',
    component: UnicornioComponent,
  },

  {
    path: '**',//con esto decimos que si el path que metemos no existe en ninguno de los que hay, redirige al path '', que es el counter
    redirectTo: ''

  }
];
