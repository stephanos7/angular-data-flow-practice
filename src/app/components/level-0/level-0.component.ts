import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-0',
  templateUrl: './level-0.component.html',
  styleUrls: ['./level-0.component.css']
})
export class Level0Component implements OnInit {
dataToPass: string;
  constructor() { }

  ngOnInit() {
  }

  onSend(data):void{
    this.dataToPass = data;
      console.log(data);
  }
  
}
