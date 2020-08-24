import { Component, OnInit } from '@angular/core';
import {  AdvancedLayout, GridLayout, Image, LineLayout,PlainGalleryConfig,PlainGalleryStrategy} from '@ks89/angular-modal-gallery'

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.css']
})
export class OurWorksComponent implements OnInit {
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '370px', height: '370px' }, { length: 3, wrap: true })
  };

  images: Image[] = [
    new Image(
      0,
      { // modal
        img: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio1.jpg',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(
      1,
      { // modal
        img: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio2.jpg',
        description: 'Description 2'
      }
    ),
    new Image(
      2,
      { // modal
        img: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      }
    ),

    new Image(
      3,
      { // modal
        img: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio4.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      }
    ),

    new Image(
      4,
      { // modal
        img: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio5.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      }
    ),

    new Image(
      5,
      { // modal
        img: 'https://demo.voidcoders.com/htmldemo/barber/main-files/assets/img/portfolio/portfolio6.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      }
    )

  ]
  constructor(){}

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
