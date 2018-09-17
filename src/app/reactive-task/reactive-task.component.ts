import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-task',
  templateUrl: './reactive-task.component.html',
  styleUrls: ['./reactive-task.component.css']
})
export class ReactiveTaskComponent{


  /*name = new FormControl('');*/
  profile =  new FormGroup({
  	 firstName : new FormControl(''),
  	 lastName : new FormControl('')
  });

  constructor(){
  	/*this.name.setValue('vipin')*/
  	this.profile.setValue({
  		firstName : 'Chethak',
  		lastName : 'Raj'
  	});
  }

  randomName(){
  	this.profile.setValue({
  		firstName : 'Vipin',
  		lastName : 'Ramani Raghavan'
  	});
  }

}
