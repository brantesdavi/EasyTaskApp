import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  subtasks: { title: string }[] = [];
  novaSubtask: string = '';

  adicionarSubtask() {
    if (this.novaSubtask.trim() !== '') {
      this.subtasks.push({ title: this.novaSubtask });
      this.novaSubtask = ''; // Limpar o input após adicionar
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
