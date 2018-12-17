import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-acomodacao-detail',
  templateUrl: 'acomodacao-detail.html',
})
export class AcomodacaoDetailPage {
  acomodacao: any;
  urls: any[];
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  acomodacaoPosition: any;
  currentPosition: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.acomodacao = this.navParams.data.dadosAcomodacao.acomodacao;
    this.urls = this.navParams.data.dadosAcomodacao.urls;
    this.posicaoAtual();
  }

  posicaoAtual() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.currentPosition = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude
        );

        const currentPositionMarker = new google.maps.Marker({
          position: this.currentPosition,
          map: this.map,
          title: 'Você está aqui!'
        });

        this.calculateRoute();
      },
      (error) => console.log(error),
      { enableHighAccuracy: false, timeout: 30000 },
    );
  }

  ionViewDidLoad() {
    this.initializeMap();
  }

  initializeMap() {
    this.acomodacaoPosition = new google.maps.LatLng(
      parseFloat(this.acomodacao.latitude), parseFloat(this.acomodacao.longitude)
    );

    const mapOptions = {
      zoom: 13,
      center: this.acomodacaoPosition,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const acomodacaoMarker = new google.maps.Marker({
      position: this.acomodacaoPosition,
      map: this.map,
      title: this.acomodacao.titulo
    });
  }

  calculateRoute() {
    if (this.acomodacaoPosition && this.currentPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.currentPosition,
        destination: this.acomodacaoPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
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
