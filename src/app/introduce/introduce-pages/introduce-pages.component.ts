import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger, AnimationEvent} from "@angular/animations";


const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.3s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.3s ease-out', style({
    opacity: 0
  }))
])

const fadeIn = trigger('fadeIn', [
  enterTransition
]);

const fadeOut = trigger('fadeOut', [
  leaveTrans
]);


@Component({
  selector: 'app-introduce-pages',
  templateUrl: './introduce-pages.component.html',
  styleUrls: ['./introduce-pages.component.scss'],
  animations: [
    fadeIn,
    fadeOut
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class IntroducePagesComponent implements OnInit {

  tabActived = 1;

  constructor() { }

  ngOnInit(): void {
  }

  animationDone(event: AnimationEvent) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.tabActived = 2;
    }
  }

}
