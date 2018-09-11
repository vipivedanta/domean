import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';

const routes: Routes = [
	{ path : 'tasks', component : TasksComponent },
	{ path : 'create-task', component : CreateTaskComponent }
];

@NgModule({
  exports : [ RouterModule ], 
  imports : [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
