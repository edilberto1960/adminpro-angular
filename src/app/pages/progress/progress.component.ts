import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  porcentaje: number = 50;
  porcentaje2: number = 100;

  constructor() { }

  ngOnInit() {
  }

  // changeValue( amount: number) {

  //   this.porcentaje = this.porcentaje + amount;
  // }

  changeAmount (event: number) {
console.log('PASAMOS POR PROGRESS.COMPONENT.TS');

    console.log('Valore de Event: ', event);
    this.porcentaje = event;
  }

  changeAmount2 (event: number) {

    console.log('Valore de Event: ', event);
    this.porcentaje = event;
  }

}
