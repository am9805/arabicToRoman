import { TestBed } from '@angular/core/testing';

import { RomanNumbersService } from './roman-numbers.service';

describe('RomanNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service).toBeTruthy();
  });
  it('1 >>  I', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(1)).toEqual('I');
  });
  it('2 >>  II', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(2)).toEqual('II');
  });
  it('3 >>  III', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(3)).toEqual('III');
  });
  it('4 >>  IV', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(4)).toEqual('IV');
  });
  it('5 >>  V', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(5)).toEqual('V');
  });
  it('6 >>  VI', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(6)).toEqual('VI');
  });
  it('8 >>  VIII', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(8)).toEqual('VIII');
  });
  it('10 >>  X', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(10)).toEqual('X');
  });
  it('20 >>  XX', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(20)).toEqual('XX');
  });
  it('35 >>  XXXV', () => {
    const service: RomanNumbersService = TestBed.get(RomanNumbersService);
    expect(service.arabicToRoman(35)).toEqual('XXXV');
  });
});
