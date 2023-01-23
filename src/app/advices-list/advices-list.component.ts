import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdviceDetails } from '../models/advice-details';

@Component({
  selector: 'app-advices-list',
  templateUrl: './advices-list.component.html',
  styleUrls: ['./advices-list.component.css']
})
export class AdvicesListComponent implements OnInit {

  @Input() advicesDetailsList : AdviceDetails[] = []
  results: AdviceDetails[] = [];

  @Output() categorySelectedEvent = new EventEmitter<AdviceDetails>();

  constructor() { }
  ngOnInit(): void {
  }

  searchCategory(searchText: string) {
    if (!searchText) return;

    console.log (searchText);
    
    this.results = this.advicesDetailsList
      .filter(category => category.category.toLowerCase()
      .includes(searchText.toLowerCase()))
  }

  selectCategory(category: AdviceDetails) {
    this.categorySelectedEvent.emit(category)
  }

}
