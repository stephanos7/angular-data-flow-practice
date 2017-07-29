import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-1',
  templateUrl: './level-1.component.html',
  styleUrls: ['./level-1.component.css'],
  inputs: ['dataAtLvl1']
})
export class Level1Component implements OnInit {
dataAtLvl1 : String;

  constructor() { }

  ngOnInit() {
  }

  onSend(data):void{
    this.dataAtLvl1 = data;
    console.log(this.dataAtLvl1);
  }

}
