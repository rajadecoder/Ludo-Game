import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerNumPageRoutingModule } from './player-num-routing.module';

import { PlayerNumPage } from './player-num.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerNumPageRoutingModule
  ],
  declarations: [PlayerNumPage]
})
export class PlayerNumPageModule {}
