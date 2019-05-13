import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openListAcomodacoes() {
    this.navCtrl.push('AcomodacoesListPage', {
      inicioCarregamento: moment().valueOf()
    });
  }

}
