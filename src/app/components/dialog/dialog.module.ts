import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '../date-picker/date-picker.module';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
