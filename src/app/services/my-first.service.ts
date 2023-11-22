import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = []

  constructor() {
    this.init()
  }

  init() : void {
    this.insert({
      name: 'Paul',
      email: 'nadola@mail.com',
      message: "Hello World!"
    });
    this.insert({
      name: 'John',
      email: 'john@mail.com',
      message: "Hello World! - John"
    });
    this.insert({
      name: 'Jack',
      email: 'jack@mail.com',
      message: "Hello World!-Jack"
    });
  }

  insert(message: {name: string, email:string, message:string}): void {
    this.messages.push(message)
  }

  getAllMessages():any[] {
    return this.messages
  }
  
  deleteMessages(index: number): void {
    this.messages.splice(index, 1)
  }
}
