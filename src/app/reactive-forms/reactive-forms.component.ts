import { Component, OnInit } from '@angular/core';
import { FormsTasksService } from '../forms-tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  users:any;
  private usersSubscription!: Subscription;


  constructor( private formtasks: FormsTasksService){
    this.formtasks.users().subscribe((data )=> {
      this.users = data;
    })

  }

  submit(data:any){
    this.formtasks.saveUser(data).subscribe((result)=>{
      console.log(result)
    })
  }
}
