import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: "/",
      name: "home",
      exact: true
    },
    {
      link: "/badroute",
      name: "practice",
      exact: true
    }
  ];

  constructor() {

  }
}
