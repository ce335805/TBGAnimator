import {AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, ViewChild} from '@angular/core';

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

    this.frameWidth = 1131;
    this.frameHeight = 800;
    this.gridWidth = this.frameWidth / 1.2;
    this.gridHeight = this.frameHeight / 1.2;
    this.sin60 = 0.86602540378;
    this.cos60 = 0.5;
  }

  @Input() angle: number;
  unitLength: number;
  frameWidth: number;
  frameHeight: number;
  gridWidth: number;
  gridHeight: number;
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

  @HostListener('wheel', ['$event']) onMouseWheel(event: WheelEvent) {
    this.onScroll(event);
  }

  onScroll(e: WheelEvent): void {
    if (e.deltaY > 0 && this.unitLength > 3) {
      this.unitLength = this.unitLength - 0.02 * this.unitLength;
    } else if (e.deltaY < 0 && this.unitLength < 30) {
      this.unitLength = this.unitLength + 0.02 * this.unitLength;
    }
    this.draw();
  }

  private draw() {
    this.context.save();
    this.context.clearRect(0, 0, this.frameWidth, this.frameHeight);
    this.drawScale();
    this.context.strokeStyle = 'rgb(0,64,255)';
    this.context.lineWidth = 1.5;
    this.drawHexagonGrid();
    this.context.translate(this.frameWidth / 2, this.frameHeight / 2);
    this.context.rotate((Math.PI / 180) * this.angle);
    this.context.translate(-this.frameWidth / 2, -this.frameHeight / 2);
    this.context.strokeStyle = 'rgb(0,187,4)';
    this.drawHexagonGrid();
    this.context.restore();
  }

  private drawHexagonGrid() {
    this.context.save();
    const hightOfLine = (1 + this.cos60) * this.unitLength;
    const widthOfColumn = 2 * this.sin60 * this.unitLength;
    this.context.translate((this.frameWidth - this.gridWidth) / 2, (this.frameHeight - this.gridHeight) / 2);
    const numberOfLines = this.gridHeight / (Math.floor(hightOfLine));
    for (let line = 0; line < numberOfLines; line++) {
      const parity = 2 * (line % 2) - 1;
      const numberOfColumns = this.gridWidth / Math.floor(widthOfColumn);
      this.drawLine(numberOfColumns);
      this.context.translate(parity * this.sin60 * this.unitLength, (this.cos60 + 1) * this.unitLength);
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

  private drawScale() {
    this.context.save();
    const nm = this.unitLength / (0.142);
    const yOffset = this.frameHeight - this.gridHeight;
    const fontSize = 20;
    this.context.font = fontSize + 'px Arial';
    this.context.beginPath();
    this.context.moveTo(5, yOffset);
    this.context.lineTo(15, yOffset);
    this.context.moveTo(10, yOffset);
    this.context.lineTo(10, nm + yOffset);
    this.context.moveTo(5, nm + yOffset);
    this.context.lineTo(15, nm + yOffset);
    this.context.strokeStyle = 'rgb(40,40,40)';
    this.context.lineWidth = 2;
    this.context.stroke();
    this.context.fillText('1nm', fontSize / 2 + 8, yOffset + nm / 2 + fontSize / 4, 100);
    this.context.restore();
  }

}
