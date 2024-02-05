import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiFormComponent } from './bmi-form/bmi-form.component';
import { TitleComponent } from './title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { BmiInfoComponent } from './bmi-info/bmi-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BmiFormComponent,TitleComponent,HttpClientModule, BmiInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "frontendBMI_App"
}
