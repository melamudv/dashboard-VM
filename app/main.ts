import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { MODAL_DIRECTIVES  } from 'ng2-bs3-modal/ng2-bs3-modal';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  MODAL_DIRECTIVES

]);


