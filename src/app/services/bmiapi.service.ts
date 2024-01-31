import { Injectable } from '@angular/core';
import { BmiResponse } from '../interfaces/bmi-response';

@Injectable({
  providedIn: 'root'
})
export class BmiapiService {
  bmiResponse: BmiResponse = {
    bmi:24.4,
    diagnosis:"Normal"
  }
  getBMIResponse():BmiResponse{
    /*fetch('https://example.com/', {
      method: 'GET',
      mode: 'no-cors',
    })*/
    
    
    return this.bmiResponse
  }




  constructor() { }
}
