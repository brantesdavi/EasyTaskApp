import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board.component';
import { TaskCardModule } from '../task-card/task-card.module';



@NgModule({
  declarations: [
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    TaskCardModule
  ],
  exports:[
    KanbanBoardComponent
  ]
})
export class KanbanBoardModule { }
