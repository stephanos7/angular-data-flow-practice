import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-2',
  templateUrl: './level-2.component.html',
  styleUrls: ['./level-2.component.css'],
  inputs: ['dataAtLvl2']
})
export class Level2Component implements OnInit {
dataAtLvl2: String;

  constructor() { }

  ngOnInit() {
  }

}
