import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ReactiveTaskComponent } from './reactive-task/reactive-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent,
    TaskFormComponent,
    ReactiveTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
