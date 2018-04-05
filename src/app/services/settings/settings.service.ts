import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {


  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'defalut'

  };

  constructor( @Inject(DOCUMENT) private _document) {
     this.cargarAjustes();
  }


  cargarAjustes() {

    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      // //.log( 'Cargando del localstorage' );
      this.aplicarTema(this.ajustes.tema);

    } else {
       //console.log( 'Usando valores por defecto' );

    }

  }

  aplicarTema( tema: string ) {

    //.log('VALOR DE TEMA ',  tema);

    const url = `assets/css/colors/${ tema }.css`;
    // //.log( 'VALOR DE THIS_DOCUMENT ',this._document.getElementById('tema').setAttribute('href', url ));
  //  this._document.getElementById('tema').setAttribute('href', url );
    this._document.getElementById('theme').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }



  guardarAjustes() {
   // //.log('Valor de Ajustes ', this.ajustes);
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

}

interface Ajustes {

  temaUrl: string;
  tema: string;

}
