import { Component, Input, inject } from '@angular/core';
import { BmiResponse } from '../../interfaces/bmi-response';
import { BmiapiService } from '../../services/bmiapi.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-bmi-consult',
  standalone: true,
  imports: [],
  templateUrl: './bmi-consult.component.html',
  styles: ``
})
export class BmiConsultComponent {
  bmiResponseSET :BmiResponse|null =null
  BmiapiService: BmiapiService = inject(BmiapiService);
  errorResponse = false;
  private readonly host = environment.apiUrl;
  bmiString: string = "";
  numberconvert :number = 0
  @Input ({required: true}) weight :number = 0;
  @Input ({required: true}) height :number = 0;
  
  constructor(){ }
  ngOnInit(){
    this.consult(this.weight,this.height)
  }
  consult(weight:number,height:number){
    this.BmiapiService.getBMIResponse(height,weight).subscribe({
      next:(result)=>{
        this.bmiResponseSET = result
      },
      error:()=>{
        this.errorResponse = true  
      },
      complete:()=>{ 

      }
    })
    console.log(this.host)    
  }
}
