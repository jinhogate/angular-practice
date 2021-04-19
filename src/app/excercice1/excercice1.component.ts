import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-excercice1',
  templateUrl: './excercice1.component.html',
  styleUrls: ['./excercice1.component.css']
})
export class Excercice1Component implements OnInit {
  name: string = "KOSSI JORJINHO GBEGNON";
  polices = [
    { nom: "Arial", valeur: "Arial" },
    { nom: "Times", valeur: "Times" },
    { nom: "Georgia", valeur: "Georgia" },
    { nom: "Courier New", valeur: "Courier New" }
  ];
  aligns = ["left", "center", "right"];
  alignValue: string = "center";
  taille: number;
  police: string;

  constructor() { }

  ngOnInit() {
  }

  getCorrectSize() {
    return this.taille ? this.taille + 'px' : '70px';
  }

}
