import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { PlayerNumPage } from '../modals/player-num/player-num.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public audio:AudioService,public modalController: ModalController) {
    this.audio.preload('roll', 'assets/audio/roll.mp3');
    this.audio.preload('six', 'assets/audio/six.mp3');
    this.audio.preload('move', 'assets/audio/move.mp3');
  }

  async presentModal() {
      const modal = await this.modalController.create({
        component: PlayerNumPage
      });
      return await modal.present();
    }
}
