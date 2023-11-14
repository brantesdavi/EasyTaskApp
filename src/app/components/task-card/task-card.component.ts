import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;
  progress: number = 0 ;

  totalTasks: number = 0
  completedTasks: number = 0;
  status: string = ''

  variavel: string = 'red'; // ou qualquer valor desejado

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.task.deadline = this.datePipe.transform(this.task.deadline, 'dd/MM/yyyy');
    this.totalTasks = this.task.subtasks.length;
    this.completedTasks = this.task.subtasks.filter((subtk: any) => subtk.isDone).length;

    this.progress = this.calculateProgress(this.totalTasks, this.completedTasks)
    console.log(this.task.priority["color"])

  }

  calculateProgress(total: number, completed: number): number {

    if (total === 0) {
      return 0; // Evita a divisão por zero
    }

    const progress = (completed / total) * 100;
    return Math.round(progress);
  }

}
