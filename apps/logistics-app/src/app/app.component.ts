import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routerAnimation } from './animations/route-animations';

@Component({
  selector: 'logistics-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation],
})
export class AppComponent {
  public handleRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
