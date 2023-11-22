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

  constructor(public general: GeneralService, private taskService: TaskService) { }

  ngOnInit(): void {

    this.getAllTasks();

  }

  onModalClosed() {
    this.toggleDialog();
    this.getAllTasks();
  }

  toggleDialog(): void {
    this.general.showDialog = !this.general.showDialog;
  }

  getAllTasks(): void{
    this.subscription = this.taskService.getAllTask().subscribe({
      next: lTasks => this.listTasks = lTasks,
      error: er => console.error(er),
      complete: () => console.log("Observable completado")

    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
