import { Component, OnInit } from '@angular/core';
import { useAnimation, trigger, state, style, animate, transition } from '@angular/animations';
import { transAnimation } from '../anim';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss'],
  animations: [
    trigger('anim', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        useAnimation(transAnimation, {
          params: {
            height: '200px',
            opacity: 1,
            backgroundColor: 'yellow',
            time: '1s'
          }
        })
      ]),
      transition('closed => open', [
        useAnimation(transAnimation, {
          params: {
            height: '100px',
            opacity: 0.5,
            backgroundColor: 'green',
            time: '1s'
          }
        })
      ]),
    ])
  ]
})

// transition('open => closed', [
//   useAnimation(transAnimation, {
//     params: {
//       height: 0,
//       opacity: 1,
//       backgroundColor: 'red',
//       time: '1s'
//     }
//   })
export class AnimComponent implements OnInit {

  isOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
