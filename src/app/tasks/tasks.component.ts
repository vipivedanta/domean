import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  taskArray = new Array();
  task : Task = {
  		id : 1, 
  		title : 'Learn MEAN stack',
  		status : 0
  };

  constructor() {
  	this.taskArray.push( this.task );
  }

  ngOnInit() {
  }

}
