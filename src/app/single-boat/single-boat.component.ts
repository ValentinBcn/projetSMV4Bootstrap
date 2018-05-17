import { Component, OnInit } from '@angular/core';

import { dataApi } from '../dataApi.service';

@Component({
  selector: 'app-single-boat',
  templateUrl: './single-boat.component.html',
  styleUrls: ['./single-boat.component.css']
})
export class SingleBoatComponent implements OnInit {
  id: string;
  consume: number;
  present: number;
  
  
  constructor(_id: string,_consume:number,_present:number) {
    this.id = _id;
    this.consume = _consume;
    this.present = _present;
   }
   changePresence(){
    console.log("changer presence")
  
    //this.present = !this.present
    
  }
  ngOnInit() {
  }

}
