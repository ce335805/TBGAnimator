import {AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterViewInit, OnChanges {

  @ViewChild('gridCanvas', {static: false}) gridCanvas: ElementRef;

  constructor() {
    this.angle = 0.;
    this.unitLength = 10;

    this.frameWidth = 1006;
    this.frameHight = 750;
    this.sin60 = 0.86602540378;
    this.cos60 = 0.5;
  }

  @Input() angle: number;
  @Input() unitLength: number;
  frameWidth: number;
  frameHight: number;
  sin60: number;
  cos60: number;

  public context: CanvasRenderingContext2D;

  viewInitialized = false;

  ngOnChanges() {
    if (!this.viewInitialized) {
      return;
    }
    this.draw();
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this.context = (this.gridCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.draw();
  }


  private draw() {
    this.context.save();
    this.context.clearRect(0, 0, this.frameWidth, this.frameHight);
    this.context.strokeStyle = 'rgb(0,200,20)';
    this.drawHexagonGrid();
    this.context.translate(this.frameWidth / 2 , this.frameHight / 2);
    this.context.rotate((Math.PI / 180) * this.angle);
    this.context.translate(- this.frameWidth / 2 , - this.frameHight / 2);
    this.context.strokeStyle = 'rgba(0,0,200,0.7)';
    this.drawHexagonGrid();
    this.context.restore();
  }

  private drawHexagonGrid() {
    this.context.save();
    const topLineOffset = 20;
    const hightOfLine = (1 + this.cos60) * this.unitLength;
    const widthOfColumn = 2 * this.sin60 * this.unitLength;
    this.context.translate(0, - hightOfLine * topLineOffset);
    const numberOfLines = this.frameHight / (Math.floor(hightOfLine)) + topLineOffset;
    for (let line = 0; line < numberOfLines; line++) {
      const numberOfColumns = this.frameWidth / Math.floor(widthOfColumn) + line;
      this.drawLine(numberOfColumns);
      this.context.translate(-this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
    }
    this.context.restore();
  }

  private drawLine(numberInLine: number) {
    this.context.save();
    for (let col = 0; col < numberInLine; col++) {
      this.drawHexagon();
      this.context.translate(2 * this.sin60 * this.unitLength, 0);
    }
    this.context.restore();
  }

  private drawHexagon() {
    this.context.beginPath();
    this.context.moveTo(-this.sin60 * this.unitLength, this.cos60 * this.unitLength);
    this.context.lineTo(-this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
    this.context.lineTo(0, (2 * this.cos60 + 1) * this.unitLength);
    this.context.lineTo(this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
    this.context.lineTo(this.sin60 * this.unitLength, this.cos60 * this.unitLength);
    this.context.stroke();
  }
}
