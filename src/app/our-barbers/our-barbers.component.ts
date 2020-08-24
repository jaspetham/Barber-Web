import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-barbers',
  templateUrl: './our-barbers.component.html',
  styleUrls: ['./our-barbers.component.css']
})
export class OurBarbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barbers =[
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team1.jpg',
      name: 'Solicon Man',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team2.jpg',
      name: 'Bob Robert',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team3.jpg',
      name: 'Jason Dough',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team4.jpg',
      name: 'Batman Superman',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
  ]

}
