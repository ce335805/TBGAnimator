import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <div class="HeaderWriting">
      <h1>Twisted Bilayer Graphene (TBG) Animator</h1>
    </div>
  `,
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
