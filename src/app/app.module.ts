import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopBarComponent} from './topbar/top-bar.component';
import {ContentComponent} from './content/content.component';
import { AngleSelectionComponent } from './content/angle-selection/angle-selection.component';
import { GridComponent } from './content/grid/grid.component';
import {FormsModule} from '@angular/forms';
import {ZoomComponent} from './content/zoom/zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ContentComponent,
    AngleSelectionComponent,
    GridComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
