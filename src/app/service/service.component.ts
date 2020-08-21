import {faCut} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  faCut = faCut;
  public contents:any;
  constructor() { 
    this.contents = [
      {
        icon:'flaticon-cut',
        title:'Haircut',
        desc:'Any cut to your taste followed by a shave with straight razor, skin toner and shoulder massage'
      },
      {
        icon:'flaticon-shaving-razor',
        title:'Shaving',
        desc:'Any cut to your taste followed by a shave with straight razor, skin toner and shoulder massage'
      },
      {
        icon:'flaticon-beard',
        title:'Beard',
        desc:'Any cut to your taste followed by a shave with straight razor, skin toner and shoulder massage'
      },
      {
        icon:'flaticon-nail-scissors',
        title:'Trimming',
        desc:'Any cut to your taste followed by a shave with straight razor, skin toner and shoulder massage'
      },
      {
        icon:'flaticon-salon',
        title:'Facial',
        desc:'Any cut to your taste followed by a shave with straight razor, skin toner and shoulder massage'
      },
      {
        icon:'flaticon-hair-dryer',
        title:'Styling',
        desc:'Any cut to your taste followed by a shave with straight razor, skin toner and shoulder massage'
      },
    ]
  }
  


  ngOnInit(): void {
  }

}
