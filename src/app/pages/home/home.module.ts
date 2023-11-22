import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TaskCardModule } from 'src/app/components/task-card/task-card.module';
import { DialogModule } from 'src/app/components/dialog/dialog.module';
import { KanbanBoardModule } from 'src/app/components/kanban-board/kanban-board.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TaskCardModule,
    DialogModule,
    KanbanBoardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
