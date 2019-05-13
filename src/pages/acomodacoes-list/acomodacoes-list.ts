import { AcomodacoesProvider } from './../../providers/acomodacoes/acomodacoes';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-acomodacoes-list',
  templateUrl: 'acomodacoes-list.html',
})
export class AcomodacoesListPage {
  acomodacoes: any[];
  inicioCarregamento: number;

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, 
              private acomodacoesProvider: AcomodacoesProvider) {
    this.inicioCarregamento = navParams.data.inicioCarregamento;
  }

  ionViewDidLoad() {
    this.acomodacoes = [];
  //   this.infiniteScroll.enable(true);
    this.getAllAcomodacoes();
  }

  getAllAcomodacoes() {
    this.acomodacoesProvider.getAll()
      .then((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var acomodacao = result[i];
          this.acomodacoes.push(acomodacao);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.acomodacoes.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }

        this.toast.create({ message: moment().valueOf() - this.inicioCarregamento + "ms" }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar as acomodações. Erro: ' + error, position: 'botton', duration: 3000 }).present();
      });
  }

  // getAcomodacoes() {
  //   setTimeout(() => {
  //     this.getAllAcomodacoes();
  //   }, 500);
  // }

  openAcomodacao(id: number) {
    let inicioGet = moment().valueOf();
    this.acomodacoesProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('AcomodacaoDetailPage', { 
          dadosAcomodacao: result,
          duracaoGet: moment().valueOf() - inicioGet
        });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar a acomodação. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

  }

}
