import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress2',
  templateUrl: './progress2.component.html',

})
export class Progress2Component implements OnInit {

  progressBar1: number = 10;
  progressBar2: number = 15;


  constructor() {

   }

  ngOnInit() {

  }

  connectToProgressBarFunction( event ) {

    console.log('Valor de Emilt ', event);

  }




}
