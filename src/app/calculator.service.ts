import { Injectable } from '@angular/core';
import { ICalculator, OperationSign } from './models';

@Injectable({ providedIn: 'platform' })
export class CalculatorService {

    public calculate(calculator: ICalculator): void {
        switch (calculator.operation) {
            case OperationSign.Add:
                calculator.result = +calculator.firstNumber + +calculator.secondNumber
                break;
            case OperationSign.Subtract:
                calculator.result = calculator.firstNumber - calculator.secondNumber
                break;
            case OperationSign.Multiply:
                calculator.result = calculator.firstNumber * calculator.secondNumber
                break;
            case OperationSign.Devide:
                calculator.result = calculator.firstNumber / (calculator.secondNumber < 0 ? 1 : calculator.secondNumber)
                break;
        }
    }
}
