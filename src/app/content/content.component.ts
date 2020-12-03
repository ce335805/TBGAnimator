import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="Content">
      <app-grid class="Grid" [angle] = "angle"></app-grid>
      <app-explainations class="explainations"></app-explainations>
      <app-angle-selection class="AngleSelection" (angleChanged)="changeAngle($event)"></app-angle-selection>
    </div>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {
    this.angle = 0.;
  }

  angle: number;

  ngOnInit(): void {
  }

  public changeAngle(angle: number): void {
    this.angle = angle;
  }
}
