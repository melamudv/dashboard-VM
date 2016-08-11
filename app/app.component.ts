import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
  selector: 'my-app',
  template: `   
    <router-outlet></router-outlet>
  `,
  // styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
  // providers: [
  //   HeroService
  // ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}


