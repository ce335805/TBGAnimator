import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="Content">
        <p>This is where the content goes!</p>
    </div>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
