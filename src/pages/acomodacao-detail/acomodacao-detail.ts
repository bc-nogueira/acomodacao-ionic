import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-acomodacao-detail',
  templateUrl: 'acomodacao-detail.html',
})
export class AcomodacaoDetailPage {
  acomodacao: any;
  urls: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.acomodacao = this.navParams.data.dadosAcomodacao.acomodacao;
    this.urls = this.navParams.data.dadosAcomodacao.urls;
  }

  tipoEmTexto(tipo) {
    switch(tipo) {
      case 0:
        return 'Apartamento';
      case 1:
        return 'Casa';
      case 2:
        return 'Hotel';
    }
  }
}
