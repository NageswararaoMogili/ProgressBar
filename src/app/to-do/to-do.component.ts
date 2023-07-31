import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {

  toDoList:any[] =['nagesh', 'koti', 'raja'];
  todo='';
  edit:boolean = false;

  @ViewChild('todoData', {static:true}) todoData!:ElementRef;

  onSubmit(){
    // this.toDoList.push(this.todoData.nativeElement.value)
    this.edit = false;
    this.toDoList.push(this.todo)
    console.log(this.todo)
    this.todo = '';
  }

  onEdit(i:any){
    this.edit = true;
    this.todo = this.toDoList[i]
    console.log(this.toDoList[i])
    
  }
  onDelete(i:any){
      this.toDoList.splice(i, 1)
  }
}
