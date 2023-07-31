import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  displayValue:string = '';
  showValue:string = '0';

  onBtnClk(value:string){
    this.displayValue += value;
    this.showValue = this.displayValue

  }
  onEqual(){
    this.displayValue = eval(this.displayValue)
    this.showValue = this.displayValue
  }
  onClear(){
    this.displayValue = '';
    this.showValue = '0';
  }

}
