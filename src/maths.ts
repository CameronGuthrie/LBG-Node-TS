// export function add(a: number, b: number): number {
//     return a + b;
// }

// export function subtract(a: number, b: number): number {
//     return a - b;
// }

export interface MathsOperations {
    add(a:number, b:number): number;
    subtract(a:number, b:number): number;
}

export class Calculator implements MathsOperations {
    add(a: number, b: number): number {
        return a + b;
    }
    
    subtract(a: number, b: number): number {
        return a - b;
    }
}
