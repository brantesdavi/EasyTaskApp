import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

  @Input() listTasks: Task[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
