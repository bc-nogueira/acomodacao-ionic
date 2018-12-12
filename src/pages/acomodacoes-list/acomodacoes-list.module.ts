import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcomodacoesListPage } from './acomodacoes-list';

@NgModule({
  declarations: [
    AcomodacoesListPage,
  ],
  imports: [
    IonicPageModule.forChild(AcomodacoesListPage),
  ],
})
export class AcomodacoesListPageModule {}
