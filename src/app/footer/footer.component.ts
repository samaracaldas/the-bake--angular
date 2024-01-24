import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('floatFadeIcon', [
      state('start', style({ transform: 'translateY(-5)', opacity: 1 })),
      state('end', style({ transform: 'translateY(-10px)', opacity: 0 })),
      transition('start <=> end', animate('1000ms ease-in-out'))
    ])
  ]
})
export class FooterComponent {
  state: 'start' | 'end' = 'start';

  floatFade() {
    this.state = (this.state === 'start' ? 'end' : 'start');
    setTimeout(() => this.floatFade(), 2000);
  }

  ngOnInit() {
    this.floatFade();
  }
}
