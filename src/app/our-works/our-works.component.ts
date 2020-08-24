import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.css']
})
export class OurWorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public works = [
    {
      image:'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio1.jpg'
    },
    {
      image:'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio2.jpg'
    },
    {
      image:'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio3.jpg'
    },
    {
      image:'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio4.jpg'
    },
    {
      image:'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio5.jpg'
    },
    {
      image:'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio6.jpg'
    }
  ]

}
