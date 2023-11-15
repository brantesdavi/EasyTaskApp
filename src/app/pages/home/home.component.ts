import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/shared/general.service';
import { Task } from '../../models/task.model';
import { TaskService } from 'src/app/services/task/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  listTasks: Task[]=[];
  task: Task | undefined;
  subscription: Subscription | undefined

  // listTasks: Task[] = [
  //   {
  //     taskId: 0,
  //     title: "Title: High priority mobile app design",
  //     description: "Title: High priority mobile app design",
  //     priorityId: 4,
  //     createdAt: new Date(),
  //     deadline: new Date(),
  //     subtasks: [
  //       {
  //         subtaskId: 0,
  //         description: "Do something",
  //         done: false
  //       },
  //     ],
  //   }
  // ]

  constructor(public general: GeneralService, private taskService: TaskService) { }

  ngOnInit(): void {

    this.subscription = this.taskService.getAllTask().subscribe({
      next: lTasks => this.listTasks = lTasks,
      error: er => console.error(er),
      complete: () => console.log("Observable completado")

    });

  }

  // taskResultToTasks(tasks: Task[]){
  //   tasks.forEach(t=> {
  //     this.task = {
  //       taskId: t.taskId,
  //       title: t.title,
  //       description: t.description,
  //       priorityId: t.priorityId,
  //       createdAt: t.createdAt,
  //       deadline: t.deadline,
  //       // subtasks?: Subtask[]Number
  //     }
  //   })
  // }


  toggleDialog(): void {
    this.general.showDialog = !this.general.showDialog;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
