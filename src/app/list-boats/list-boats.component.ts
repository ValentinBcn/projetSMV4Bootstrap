import { Component, OnInit } from '@angular/core';
import { dataApi } from '../dataApi.service';
import { SingleBoatComponent } from '../single-boat/single-boat.component';

@Component({
  selector: 'app-list-boats',
  templateUrl: './list-boats.component.html',
  styleUrls: ['./list-boats.component.css']
})
export class ListBoatsComponent implements OnInit {

  datas = [];
  presences = [];
  consos = [];
  arraytest = [];
  disableButton = false;
  boats : SingleBoatComponent[] =   [];
  
  
  constructor(private _dataservice: dataApi) { }

  ngOnInit() {
    this._dataservice.getBoats()
    .subscribe(resEmployeeData => this.datas = resEmployeeData)
   
  }


  InitializeListofBoats(){
    console.log("boats id ", this.datas[0].boatId);
    
    for(var i=0; i<this.datas.length;i++){
      this.boats.push(new SingleBoatComponent(this.datas[i].boatId,this.datas[i].consume,this.datas[i].present));
      console.log("bateau :", this.boats[i].consume)
    }
    this.disableButton = true;
  
  }

  suitPresent(){
    console.log("appel fonction1");
    this._dataservice.changerLaPresence().subscribe();
   /* this._dataservice.getBoats()
    .subscribe(resEmployeeData => this.datas = resEmployeeData)*/
    //this._dataservice.getBoats().subscribe(resEmployeeData => this.datas = resEmployeeData);
  }

 
 

}
