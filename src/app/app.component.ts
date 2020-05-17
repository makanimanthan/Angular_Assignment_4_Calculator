import { Component, OnInit } from '@angular/core';
import { OperationSign, ICalculator } from './models';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public calculator: ICalculator;

  public operationList: string[] = [];
  title = 'Angular Calculator';

  constructor(public calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.calculator = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operation: null
    };

    this.operationList.push(OperationSign.Add);
    this.operationList.push(OperationSign.Subtract);
    this.operationList.push(OperationSign.Multiply);
    this.operationList.push(OperationSign.Devide);
  }
}
