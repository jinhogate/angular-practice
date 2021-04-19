import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Historique } from '../models/historique.model';
import { Excercice2Service } from '../services/excercice2.service';

@Component({
  selector: 'app-excercice2',
  templateUrl: './excercice2.component.html',
  styleUrls: ['./excercice2.component.css']
})
export class Excercice2Component implements OnInit {
  operations: String[];
  resultat: number;
  historique: Historique = new Historique(new Date(),"Opération",0);
  historiqueList: Historique[];
  constructor(private excercice2Service: Excercice2Service) { }
  ngOnInit() {
    this.operations = this.excercice2Service.operations;
    this.excercice2Service.onGetAllHistorique().subscribe(
      data =>{
        this.historiqueList = data;
        this.historiqueList.forEach(value=>{
          console.log(value.heure)
        })
      }
    );
  }
  onCalculer(form: NgForm) {
    const nombre1 = Number(form.value['nombre1'] ? form.value['nombre1'] : "0");
    const nombre2 = Number(form.value['nombre2'] ? form.value['nombre2'] : "0");
    const operation = form.value['operation'] ? form.value['operation'] : "Addition";
    this.resultat = this.excercice2Service.onApplyOpperation(nombre1, nombre2, operation);
    //handling historique
    const date = new Date();
    this.historique = new Historique(date,operation,this.resultat);
    this.excercice2Service.onAddHistorique(this.historique);
    form.setValue({nombre1:'',nombre2:'',operation:'Choisir une opération'});//reset le formulaire
  }
  onReset(){
    this.historiqueList=this.excercice2Service.onResetHistorique();
  }
}
