import { Injectable } from '@angular/core';
import { BmiResponse } from '../interfaces/bmi-response';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmiapiService {
  
  constructor(private http:HttpClient){}
  
  getBMIResponse(height:number,weight:number):Observable<BmiResponse>{
    
//    const response: Observable<Object> = this.http.get(`${environment.apiUrl}??weight=${(weight)}&height=${height}&weightType=kg&heightType=m`)
  const response: Observable<Object> = this.http.get(`${environment.apiUrl}?weight=${weight}&height=${height}&weightType=kg&heightType=m`)
    return new Observable<BmiResponse>(observer =>
      response.subscribe({
        next: (result:any) => {
          const bmiResponse: BmiResponse = {
            'BMI': Number(result.BMI),
            'diagnosis': result.diagnosis
          };
          // Enviar la respuesta modificada al observador
          observer.next(bmiResponse);
          observer.complete();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      })
      )
  }

}
