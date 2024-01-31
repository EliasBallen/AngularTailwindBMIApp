import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiFormComponent } from './bmi-form/bmi-form.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BmiFormComponent,TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
