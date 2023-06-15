import { Component } from '@angular/core';

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
      link: "/pokemon",
      name: "pokemon",
      exact: true
    },
    {
      link: "/badLink",
      name: "badLink",
      exact: true
    }
  ];

  constructor() {

  }
}
