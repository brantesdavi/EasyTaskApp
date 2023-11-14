import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/shared/general.service';
import { Task } from '../../models/task.model';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // listTasks: Task[]=[];


  listTasks: Task[] = [
    {
      taskId: 0,
      title: "Title: High priority mobile app design",
      description: "Title: High priority mobile app design",
      priorityId: 2,
      createdAt: new Date(),
      deadline: new Date(),
      subtasks: [
        {
          subtaskId: 0,
          description: "Do something",
          done: false
        },
      ],
    }
  ]
  constructor(public general: GeneralService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe(tasks => {

      this.listTasks = tasks;

    });
  }

  toggleDialog(): void {
    this.general.showDialog = !this.general.showDialog;
  }
}
