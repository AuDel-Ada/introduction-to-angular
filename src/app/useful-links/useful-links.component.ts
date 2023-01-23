import { Component, Input, OnInit } from '@angular/core';
import { usefulLink } from '../models/useful-link';
import { usefulLinks } from '../mock/usefulLinks-mock';

@Component({
  selector: 'app-useful-links',
  templateUrl: './useful-links.component.html',
  styleUrls: ['./useful-links.component.css']
})
export class UsefulLinksComponent implements OnInit {

  ngOnInit(): void {
  }

  usefulLinksList = usefulLinks

  onVote (buttonText: string, star: number) {
  //   if (buttonText === 'Utile !') {
  //     star++;
  //     buttonText = 'Laisse tomber';
  //   } else {
  //     star--;
  //     buttonText = 'Utile!';
  //   }
  // }
  console.log ("debut")
  console.log (buttonText)
  console.log (star)
  star =+1
  buttonText = 'Laisse tomber'
  console.log ("fin")
  }
}
