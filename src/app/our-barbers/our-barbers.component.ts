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
      name: 'Jasper',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team2.jpg',
      name: 'Bob',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team3.jpg',
      name: 'Jason',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
    {
      profilePic: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/team/team4.jpg',
      name: 'Batman',
      twitter: 'fab fa-twitter',
      facebook:'fab fa-facebook',
      instagram:'fab fa-instagram',
      
    },
  ]

}
