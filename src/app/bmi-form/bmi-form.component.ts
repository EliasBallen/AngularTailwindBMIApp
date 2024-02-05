import { Component, inject } from '@angular/core';
import { BmiResponse } from '../interfaces/bmi-response';
import { BmiapiService } from '../services/bmiapi.service';
import { environment } from '../../environments/environment';
//import { ConsultBMIAPIService } from '../services/consult-bmiapi.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BmiConsultComponent } from '../components/bmi-consult/bmi-consult.component';

@Component({
  selector: 'app-bmi-form',
  standalone: true,
  imports: [ReactiveFormsModule, BmiConsultComponent],
  templateUrl: './bmi-form.component.html',
  styles: ``
})
export class BmiFormComponent {
  viewRequest = false
  bmiForm = new FormGroup({
    weight: new FormControl<number>(100,[Validators.required,Validators.min(1)]),
    height: new FormControl<number>(2,[Validators.required, Validators.min(0.1)])
  })
  //response :BmiResponse = {bmi:24,diagnosis:"test"}
  
  bmiRequestFormSend(){
    console.log("Form Values")
    console.log(this.bmiForm.value.height + " height")
    console.log(this.bmiForm.value.weight + " weight")
    this.viewRequest = true
  }
}
