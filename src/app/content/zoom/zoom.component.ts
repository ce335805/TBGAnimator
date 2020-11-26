import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css', './../content.component.css']
})
export class ZoomComponent implements OnInit {

  constructor() {
    this.unitLength = 10;
  }
  unitLength: number;
  @Output() zoomChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public changeZoom(): void{
    this.zoomChanged.emit(this.unitLength);
  }

}
