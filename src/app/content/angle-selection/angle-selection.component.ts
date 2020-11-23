import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-angle-selection',
  templateUrl: './angle-selection.component.html',
  styleUrls: ['./angle-selection.component.css']
})
export class AngleSelectionComponent implements OnInit {

  constructor() {
    this.angle = 0.0;
  }
  angle: number;
  @Output() angleChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public changeAngle(): void{
    this.angleChanged.emit(this.angle);
  }

}
