import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="Content">
      <app-zoom class="Zoom" (zoomChanged)="changeZoom($event)"></app-zoom>
      <app-grid class="Grid" [angle] = "angle" [unitLength]="unitLength"></app-grid>
      <app-explainations class="explainations"></app-explainations>
      <app-angle-selection class="AngleSelection" (angleChanged)="changeAngle($event)"></app-angle-selection>
    </div>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {
  }

  angle: number;
  unitLength: number;

  ngOnInit(): void {
  }

  public changeAngle(angle: number): void {
    this.angle = angle;
  }

  public changeZoom(unitLength: number): void {
    this.unitLength = unitLength;
  }

}
