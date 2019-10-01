import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  public arabicToRoman(arabic) {
    let romanNumber = '';
    if (arabic <= 10) {
      romanNumber = this.getPrincipalNumber(arabic);
    }
    if (arabic > 10 && arabic <= 39) {
      const firstNumber = Number(arabic.toString().charAt(0));
      const indexSecond = Number(arabic.toString().charAt(1));
      if (firstNumber === 1 || indexSecond === 0) {
        romanNumber = 'X';
      }
      if (firstNumber === 2 && indexSecond !== 0 || firstNumber === 3 && indexSecond === 0) {
        romanNumber = 'XX';
      }
      if (firstNumber === 3 && indexSecond !== 0) {
        romanNumber = 'XXX';
      }
      const secondNumber = this.arabicToRoman(indexSecond);
      romanNumber = romanNumber.concat(secondNumber);
    }

    return romanNumber;
  }

  getPrincipalNumber(number) {
    const principalNumbers = ['X', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return principalNumbers[number];
  }
}
