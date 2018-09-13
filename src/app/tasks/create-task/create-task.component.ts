import { Component, OnInit } from '@angular/core';
import { TasksComponent } from '../tasks.component';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers : [ TasksComponent ]
})
export class CreateTaskComponent implements OnInit {

  constructor( private task:TasksComponent) { }

  ngOnInit() {
  }

  saveTask(newTask){
  	console.log(newTask)
  	this.task.pushTask(newTask)
  }

}
