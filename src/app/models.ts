export enum OperationSign {
    Add = "Add (+)",
    Subtract = "Subtract (-)",
    Multiply = "Multiply (*)",
    Devide = "Devide (/)"
}

export interface ICalculator {
    firstNumber: number,
    secondNumber: number,
    result: number,
    operation: OperationSign
}