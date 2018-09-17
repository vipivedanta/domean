import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  priorities = ['Low','Medium','Urgent','Very Urgent'];
  model = new Task(1,'learn MEAN stack','Learn MongoDB + ExpressJS + AngularJS + NodeJS Stack','Medium');

  constructor() { }

  ngOnInit() {
  }

  newTask(){
  	this.model = new Task(2,'','','');
  }

  saveTask(){
  	console.log(this.model);
  }

}
