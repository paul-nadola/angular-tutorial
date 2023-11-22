import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = []


  constructor(
    private service: MyFirstService
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  // onSubmit(): void {
  //   this.isSubmitted = true
  //   this.messages.push ({
  //     'name' : this.name,
  //     'email': this.email,
  //     'message': this.message
  //   })
  //   console.log(this.messages)
  //   // console.log(this.name, this.email, this.message)
  // }
   onSubmit(): void {
    this.isSubmitted = true
    this.service.insert ({
      'name' : this.name,
      'email': this.email,
      'message': this.message
    })
    console.log(this.messages)
    // console.log(this.name, this.email, this.message)
  }

  // deleteMessage(index: number): void {
  //   this.messages.splice(index, 1)
  // }
  deleteMessage(index: number): void {
    this.service.deleteMessages(index)
  }

}
