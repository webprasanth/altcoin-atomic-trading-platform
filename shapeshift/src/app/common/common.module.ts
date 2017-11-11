import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShapeshiftInputComponent} from './shapeshift-input/shapeshift-input.component';
import {ShapeshiftButtonComponent} from './shapeshift-button/shapeshift-button.component';
import {MatButtonModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShapeshiftStatusSpinnerComponent} from './shapeshift-status-spinner/shapeshift-status-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ShapeshiftInputComponent,
    ShapeshiftButtonComponent,
    ShapeshiftStatusSpinnerComponent,
  ],
  exports: [
    ShapeshiftInputComponent,
    ShapeshiftButtonComponent,
    ShapeshiftStatusSpinnerComponent,
  ],
})
export class ShapeShiftCommonModule {
}
