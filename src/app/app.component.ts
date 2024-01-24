import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('floatFadeIcon', [
      state('start', style({ transform: 'translateY(-5)', opacity: 1 })),
      state('end', style({ transform: 'translateY(-10px)', opacity: 0 })),
      transition('start <=> end', animate('1000ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  title = 'the-bake-angular';
  state: 'start' | 'end' = 'start';

  floatFade() {
    this.state = (this.state === 'start' ? 'end' : 'start');
    setTimeout(() => this.floatFade(), 2000);
  }

  ngOnInit() {
    this.floatFade();
  }
}