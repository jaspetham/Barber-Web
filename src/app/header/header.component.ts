import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }


  @HostListener ('window:scroll', [])
  onWindowScroll(){
    if (document.body.scrollTop > 80 ||     
      document.documentElement.scrollTop > 80) {
        document.getElementById('myNavbar').classList.add('solid');
        document.getElementById('myNavbar').classList.remove('bg-transparent');
      }
    else{
      document.getElementById('myNavbar').classList.remove('solid');
      document.getElementById('myNavbar').classList.add('bg-transparent');

    }
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }

  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }
  toService(){
    document.getElementById("service").scrollIntoView({behavior:"smooth"});
  }
  

}
