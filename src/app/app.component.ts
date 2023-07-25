import { Component, ViewChild } from '@angular/core';
import { Offcanvas, Toast } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('myToast',{static:true}) toastEl: any
  @ViewChild('Offcanvas',{static:true}) OffcanvasEle: any
  public progress:number = 0;
  public interval:any;
  public hideStartBtn:boolean = false;
  public hideToggle:boolean = false;

  title = 'my-bootstrap-app';
  
  toast:any
  constructor(){
    setTimeout(() => {
    this.toast = new Toast(this.toastEl.nativeElement,{})
    this.OffcanvasEle = new Offcanvas(this.OffcanvasEle.nativeElement,{})
    }, 2000);
  }
  startprogress(){
    this.hideStartBtn = true;
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress++;
      } else if (this.progress == 100) {
        clearInterval(this.interval);
        this.toast.show();
        this.hideToggle = true
        this.OffcanvasEle.hide();
      }
    }, 100)
  }
}
