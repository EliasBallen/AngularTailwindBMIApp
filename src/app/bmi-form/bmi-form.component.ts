import { Component, inject } from '@angular/core';
import { BmiResponse } from '../interfaces/bmi-response';
import { BmiapiService } from '../services/bmiapi.service';

@Component({
  selector: 'app-bmi-form',
  standalone: true,
  imports: [],
  templateUrl: './bmi-form.component.html',
  styles: ``
})
export class BmiFormComponent {
  
  bmiResponseSET :BmiResponse = {
    bmi:22.00, 
    diagnosis:"testChange"
  }
  bmiService: BmiapiService = inject(BmiapiService)

  newAlert(){
    console.log(this.bmiService.getBMIResponse())
    alert("clicked"+ this.bmiService.getBMIResponse())
    
  }
}
