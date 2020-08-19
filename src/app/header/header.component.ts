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
        document.getElementById('navbar').classList.add('solid');
        document.getElementById('navbar').classList.remove('bg-transparent');
      }
    else{
      document.getElementById('navbar').classList.remove('solid');
      document.getElementById('navbar').classList.add('bg-transparent');

    }
  }

}
