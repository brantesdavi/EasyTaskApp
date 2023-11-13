import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TaskCardComponent } from './task-card.component';

@NgModule({
  declarations: [
    TaskCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskCardComponent
  ],
  providers: [
    DatePipe
  ]
})
export class TaskCardModule { }
