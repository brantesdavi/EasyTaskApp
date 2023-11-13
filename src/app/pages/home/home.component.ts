import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listTasks: Task[] = [
    {
      taskId: 0,
      title: "Title: High priority mobile app design",
      description: "Title: High priority mobile app design",
      priority: {
        priorityId: 2,
        name: "High",
        color: "blue",
      },
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
  constructor(public general: GeneralService) { }

  ngOnInit(): void {
  }

}
