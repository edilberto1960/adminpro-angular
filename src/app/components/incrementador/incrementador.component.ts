import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() leyenda1: string = 'Leyenda1';
  @Input() porcentaje: number = 100;
  @Input() porcentaje3: number = 75;
  @Output() changeAmount: EventEmitter<number> = new EventEmitter();

  constructor() {

  //  console.log('Valor de Leyenda ', this.leyenda  );

   }

  ngOnInit() {

  //  console.log('Valor de Leyenda ', this.leyenda  );
  }

    onChanges(newValue: number) {

    if (newValue >= 100) {
      this.porcentaje = 100;


    } else if (newValue <= 0) {
      this.porcentaje = 0;

    } else {
        this.porcentaje = newValue;
    }
    //  elemHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;
    // this.changeAmount.emit(this.porcentaje);
  }


  changeValueFromButton( amount2: number) {

    this.porcentaje = this.porcentaje + amount2;
    this.changeAmount.emit(this.porcentaje);
  }
}
