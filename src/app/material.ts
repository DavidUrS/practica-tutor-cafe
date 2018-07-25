import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      BrowserAnimationsModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      BrowserAnimationsModule
    ],
})
export class MaterialComponents { }