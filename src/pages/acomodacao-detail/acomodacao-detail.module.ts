import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcomodacaoDetailPage } from './acomodacao-detail';

@NgModule({
  declarations: [
    AcomodacaoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AcomodacaoDetailPage),
  ],
})
export class AcomodacaoDetailPageModule {}
