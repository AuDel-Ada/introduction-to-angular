import { Component } from '@angular/core';
import { AdviceDetails } from './models/advice-details';
import { adviceDetailsList } from './mock/advices-mock'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEMI-MARATHON'

  advicesDetailsList = adviceDetailsList

  selectedCategory: AdviceDetails | undefined;
  updateSelectedCategory(category: AdviceDetails) {
    this.selectedCategory = category
  }
 }
