import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router , NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-player-num',
  templateUrl: './player-num.page.html',
  styleUrls: ['./player-num.page.scss'],
})
export class PlayerNumPage implements OnInit {

  playerNum:Boolean=true;
  playerName:Boolean=false;
  playerN=0;
  player1="Player1";
  player2="Player2";
  player3="Player3";
  player4="Player4";
  constructor(public modalController: ModalController,private router:Router) { }

  ngOnInit() {
  }
  dismiss() {
     // using the injected ModalController this page
     // can "dismiss" itself and optionally pass back data
     this.modalController.dismiss({
       'dismissed': true
     });
   }

   selectPlayer(x){
     this.playerN=x;
     console.log(x);
     this.playerNum=false;
     this.playerName=true;
     }
 startGame(){
   let navigationExtras: NavigationExtras = {
   queryParams: {
     special: JSON.stringify({playerNum:this.playerN,players:[this.player1,this.player2,this.player3,this.player4]})
   }
 };
this.dismiss();
  this.router.navigate(['/game-play'], navigationExtras);

 }
 getValue(t){
   console.log(t.id);
   console.log(t.value);
   if (t.id=='player1') {
       this.player1=t.value
   }else if(t.id=='player2'){
     this.player2=t.value;
   }else if(t.id=='player3'){
     this.player3=t.value;
   }else if(t.id=="player4"){
     this.player4=t.value;
   }
 }
}
