import { TaskService } from 'src/app/services/task/task.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, Subtask } from '../../models/task.model';
import { GeneralService } from 'src/app/services/shared/general.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Output() modalClosed: EventEmitter<any> = new EventEmitter();

  subtasks: Subtask[] = [];
  novaSubtask: string = '';
  form!: FormGroup;
  TaskService: any;

  constructor(private formBuilder: FormBuilder,  private taskService: TaskService, public general: GeneralService, ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      priorityId: ['', Validators.required],
      deadline: ['']
    })
  }

  // adicionarSubtask() {
  //   if (this.novaSubtask.trim() !== '') {
  //     this.subtasks.push({ title: this.novaSubtask });
  //     this.novaSubtask = '';
  //     console.log(this.subtasks)
  //   }
  // }

  // {
  //   "title": "string",
  //   "description": "string",
  //   "createdAt": "2023-11-15T15:59:08.574Z",
  //   "deadline": "2023-11-15T15:59:08.575Z",
  //   "priority": {
  //     "priorityId": 3
  //   }
  // }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      const taskData: Task = {
        title: formData.title,
        description: formData.description,
        createdAt: new Date(),
        deadline: formData.deadline,
        priority: {
          priorityId: formData.priorityId,
        },
        subtasks: this.subtasks
      };

      this.taskService.createTask(taskData).subscribe({
        next: () => {
          this.modalClosed.emit()
        }
      });
    }
  }


  handleDatepickerValueChange(newValue: string) {
    this.form.patchValue({
      deadline: new Date(newValue)
    });
  }

}
