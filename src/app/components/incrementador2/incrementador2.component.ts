
import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';


@Component ({
  selector: 'app-incrementador2',
  templateUrl: './incrementador2.component.html',

})
export class Incrementador2Component implements OnInit {

  @Input() progressBar: number = 20;
  @Input() leyenda: string = 'Leyenda';

  @Output() connectToProgressBar: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;


  constructor() {

   }

  ngOnInit() {

  }

  /*--------Change in input div from incrementador2.component.html--------*/
  inInputChange(inputValue: number) {

    // let elemHTML: any = document.getElementsByName('progressBar')[0];

    console.log('Valor desde input ', inputValue);
    if (inputValue >= 100) {
      this.progressBar = 100;


    } else if (inputValue <= 0) {
      this.progressBar = 0;

    } else {
        this.progressBar = inputValue;
    }
    this.txtProgress.nativeElement.value = this.progressBar;
    // elemHTML.value = this.progressBar;
    this.connectToProgressBar.emit(this.progressBar);
  }

  /*--------Change the value of progressBar from buttons and put in input--------*/

  changeValueOf(value: number) {

    this.progressBar = this.progressBar + value;
    this.connectToProgressBar.emit(this.progressBar);
    this.txtProgress.nativeElement.focus();

    if ( (this.progressBar + value) >= 100 ) {
      this.progressBar = 100;
      this.connectToProgressBar.emit(this.progressBar);
      return;
    }

    if ( this.progressBar + value <= 0 ) {
      this.progressBar = 0;
      this.connectToProgressBar.emit(this.progressBar);
      return;
    }
  }



}
