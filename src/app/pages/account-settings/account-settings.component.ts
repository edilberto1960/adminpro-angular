import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // primera opcion para accesar a Dom
  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {


    this.colocarCheck();

  }

  changeTheme(theme: string, link: any) {
    console.log('Tema escogido ', theme, link);
    this.applyCheck(link);
    this. _ajustes.aplicarTema(theme);

    // const url: string = `assets/css/colors/${ theme }.css`;
    // this._document.getElementById('theme').setAttribute('href', url);
    // this._ajustes.ajustes.tema = theme;
    // this._ajustes.ajustes.temaUrl = url;
    // this._ajustes.guardarAjustes();

  }

   applyCheck(link: any) {

    const selectores: any = document.getElementsByClassName('selector');


    // tslint:disable-next-line:prefer-const
    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

   }


  colocarCheck() {

    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');

    // tslint:disable-next-line:prefer-const
    let tema = this._ajustes.ajustes.tema;

    for ( const ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }

  }


}
