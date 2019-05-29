import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsJapanPage } from './deals-japan';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DealsJapanPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsJapanPage), IonicImageViewerModule,
    ComponentsModule
  ],
})
export class DealsPageModule { }
