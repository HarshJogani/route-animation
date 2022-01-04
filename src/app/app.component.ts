import { Component } from '@angular/core';
import { fader, slider, transform, stepper } from './route-animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    stepper,
    fader,
    transform,
    stepper
  ]
})
export class AppComponent {
  title = 'route-animation';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
