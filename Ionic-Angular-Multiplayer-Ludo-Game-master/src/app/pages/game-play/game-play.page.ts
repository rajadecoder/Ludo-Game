import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],

})
export class GamePlayPage implements OnInit {
  playerNum:number;
  turnArray:any=[];
  players;
  player1;
  player2;
  player3;
  player4;
  constructor(public audio:AudioService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.playerNum = JSON.parse(params.special).playerNum;
        this.players = JSON.parse(params.special).players;
      }
      console.log(this.playerNum,this.players);
      if (this.playerNum==2) {
          this.turnArray=[3,1];
      }
      else if (this.playerNum==3) {
          this.turnArray=[3,0,1];
      }
      else if (this.playerNum==4) {
          this.turnArray=[3,0,1,2];
      }
      for(var i=0;i<4-this.playerNum;i++){
        this.players.pop()
      }
      console.log(this.players);
      if (this.players.length==2) {
          this.player1=this.players[0];
          this.player3=this.players[1];
      }
      else if (this.players.length==3) {
            this.player1=this.players[0];
            this.player2=this.players[1];
            this.player3=this.players[2];
        }
        else if (this.players.length==4) {
              this.player1=this.players[0];
              this.player2=this.players[1];
              this.player3=this.players[2];
              this.player4=this.players[3];
          }
      this.nextTurn();
    });
   }

  turn:number=0;
  showColoredAnimation:Boolean=false;
  animateHome=['','','',''];
  ngOnInit() {
  }
  animateCol:any=[
    [
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0]
    ],
    [
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0]
    ],
    [
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0]
    ],
    [
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0]
    ],
  ];

  rollDiceB=true;

  posStart=[0,13,26,39];  //red ,green ,blue ,yellow

  homeShow=[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
  locationShow=[
    [[0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0]],  //for red
    [[0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0]],    //for green
    [
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],],   //for blue
      [
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],
        [0],[0]],   //for yellow
      ]
      locationShowColored:any=[
        [[0],[0],[0],[0],[0]],
        [[0],[0],[0],[0],[0]],
        [[0],[0],[0],[0],[0]],
        [[0],[0],[0],[0],[0]]
      ]
      homeLeft=[4,4,4,4];
      homeWon=[0,0,0,0];
      lastThrowValue;

      pieces={
        0:'red',
        1:'green',
        2:'blue',
        3:'yellow'
      }

      diceColor='white';
      random=0;
      dice=['cubeRed','cubeGreen','cubeBlue','cubeYellow'];
      changeDiceColor(color){
    //    this.diceColor=color;
      }
      turnCounter=-1;
      nextTurn(){
        this.turnCounter++;
      if (this.turnCounter>=this.playerNum) {
        this.turnCounter=0;
      }
      this.turn=this.turnArray[this.turnCounter];
      this.rollDiceB=true;
      }

      rollDice(){
        if (this.rollDiceB) {
          this.rollDiceB=false;

          var min = 1;
          var max = 24;
          var xRand=360;//this.getRandom(max,min);
          var yRand=1440;//this.getRandom(max,min);
          //  console.log(xRand,yRand);
          this.audio.play('roll');
          var cube = document.getElementById(this.dice[this.turn]);
          cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
          cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';


          setTimeout(()=>{
            var random=this.getRandomNumber(7,1);
            if (random==6) {
              xRand =90;// this.getRandom(max, min);
              yRand =180;//this.getRandom(max, min);
              this.six=true;
            }else if(random==1){
              xRand=180;
              yRand=180;
              this.six=false;
            }else if(random==2){
              xRand=180;
              yRand=0;
              this.six=false;
            }
            else if(random==3){
              xRand=180;
              yRand=90;
              this.six=false;
            }
            else if(random==5){
              xRand=-90;
              yRand=0;
              this.six=false;
            }
            else if(random==4){
              xRand=0;
              yRand=90;
              this.six=false;
            }
            //  console.log(xRand,yRand);
            cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
            //console.log(random);
            setTimeout(()=>{
              if (random==6) {
                var colorP=0;
                  for(var i=0;i<5;i++){
                    if (this.locationShowColored[this.turn][i][1]) {
                        colorP=this.locationShowColored[this.turn][i][1];
                    }else if(this.locationShowColored[this.turn][i][0]){
                      colorP++;
                    }
                  }

                if (!this.homeLeft[this.turn] && this.homeWon[this.turn]+colorP==4) {
                  this.nextTurn();
                      }
                console.log(random);
                if (this.homeLeft[this.turn]+this.homeWon[this.turn]==4) {
                  this.locationShow[this.turn][this.posStart[this.turn]][0]=1;
                  this.homeLeft[this.turn]--;
                  this.homeShow[this.turn][0]=0;
                  this.locationShow[this.turn][this.posStart[this.turn]].push(1);
                  console.log('roll dice again');
                  this.rollDiceB=true;
                }else{
                  console.log('choose your move');
                  this.lastThrowValue =random;
                  this.animateHome[0]='';
                  this.animateHome[1]='';
                  this.animateHome[2]='';
                  this.animateHome[3]='';
                  this.animateHome[this.turn]='animateP';
                  for (let p = 0; p < this.animateCol[this.turn].length; p++) {
                    this.animateCol[0][p][0]=0;
                    this.animateCol[1][p][0]=0;
                    this.animateCol[2][p][0]=0;
                    this.animateCol[3][p][0]=0;
                  }
                  for (let k = 0; k < this.animateCol[this.turn].length; k++) {
                    this.animateCol[this.turn][k][0]='animateP';
                  }
                }
                this.audio.play('six');

              }else {
                var positions=[];
                var colorP=0;
                  for(var i=0;i<5;i++){
                    if (this.locationShowColored[this.turn][i][1]) {
                        colorP+=this.locationShowColored[this.turn][i][1];
                        positions.push(i);
                    }else if(this.locationShowColored[this.turn][i][0]){
                      colorP++;
                    }
                  }
                  var next=true;
                  if (!this.homeLeft[this.turn] && this.homeWon[this.turn]+colorP==4 && positions.length>=1) {
                  for(var t=0;t<positions.length;t++){
                    if (5 - positions[t]<= random) {
                      next=false;
                    }else{
                    }
                  }
                  if (next) {
                    this.nextTurn();
                  }


                        }
                console.log("pieces in colored regin is ",colorP);
                if (this.homeLeft[this.turn]+this.homeWon[this.turn]==4) {
                  setTimeout(()=>{

                  this.nextTurn();
                  console.log('next turn ',this.turn);
                },250)
                }
                else{

                  this.lastThrowValue = random ;

                  console.log('choose your move');
                  for (let p = 0; p < this.animateCol[this.turn].length; p++) {
                    this.animateCol[0][p][0]=0;
                    this.animateCol[1][p][0]=0;
                    this.animateCol[2][p][0]=0;
                    this.animateCol[3][p][0]=0;
                  }
                  for (let k = 0; k < this.animateCol[this.turn].length; k++) {
                    this.animateCol[this.turn][k][0]='animateP';
                  }
                }

              }

            },500)
          },500)
        }
        else{
          console.log("not allowed to roll dice");
        }

      }

      getRandom(max, min) {
        return (Math.floor(Math.random() * (max-min)) + min) * 90;
      }
      getRandomNumber(max, min) {
        return (Math.floor(Math.random() * (max-min)) + min);
      }


      moveOut(p,pos){
        console.log('moving out ',p);
        if (this.pieces[this.turn]==p) {


          //  var index= this.lastThrowValue.findIndex(v=>v==6);
          //  console.log(index);
          var start=this.posStart[this.turn];
          var value = this.lastThrowValue;
          if (value==6 ) {
            this.lastThrowValue=0;
            if (this.locationShow[this.turn][start][0]==1) {
              this.locationShow[this.turn][start][0]=1;
              if (this.locationShow[this.turn][start][1]) {
                this.locationShow[this.turn][start][1]+=1;
              }else if (this.locationShow[this.turn][start][1]==0) {
                this.locationShow[this.turn][start][1]+=1;
              }else{
                this.locationShow[this.turn][start].push(1);
              }



            }
            else{
              if (this.locationShow[this.turn][start][1]) {
                this.locationShow[this.turn][start][1]+=1;
              }else if (this.locationShow[this.turn][start][1]==0) {
                this.locationShow[this.turn][start][1]+=1;
              }else{
                this.locationShow[this.turn][start].push(1);
              }
              this.homeShow[this.turn][pos]=0;
              this.locationShow[this.turn][start][0]=1;
            }
            for (let k = 0; k < this.animateCol[this.turn].length; k++) {
              this.animateCol[0][k][0]=0;
              this.animateCol[1][k][0]=0;
              this.animateCol[2][k][0]=0;
              this.animateCol[3][k][0]=0;
            }
            this.animateHome[0]='';
            this.animateHome[1]='';
            this.animateHome[2]='';
            this.animateHome[3]='';
            this.homeShow[this.turn][pos]=0;
            console.log(p,' position showed on box 0');
            this.homeLeft[this.turn]-=1;
            this.rollDiceB=true;
          }else{
            console.log('no 6 to move out');
          }
        }else{
          console.log("its not your turn");
        }
      }
      loop=true;
      valueMove=0;
      posCounterMove=0;
      y=0;
      move(p,k,call){

        var moveDelay=0;
        if (this.pieces[this.turn]==p) {
          if (this.posCounterMove==0) {
          this.y=k
          this.valueMove=this.lastThrowValue;
          if (k==0 && p!='red' && call) {
            if(this.locationShow[this.turn][0][1]){
              this.locationShow[this.turn][0][1]-=1;
              if(this.locationShow[this.turn][0][1]){
              //  this.locationShow[this.turn][0][1]-=1;
              }else{
                this.locationShow[this.turn][0][0]=0;
              }
            }else{
              this.locationShow[this.turn][0][0]=0;
            }
          }
        }
          if (this.valueMove) {this.audio.play('move');
          for (let k = 0; k < this.animateCol[this.turn].length; k++) {
            this.animateCol[0][k][0]=0;
            this.animateCol[1][k][0]=0;
            this.animateCol[2][k][0]=0;
            this.animateCol[3][k][0]=0;
          }
          this.animateHome[0]='';
          this.animateHome[1]='';
          this.animateHome[2]='';
          this.animateHome[3]='';
            var counter=0;

            var value=this.valueMove;
            var start=this.posStart[this.turn];

            var y=this.y;

            //  for (let i = y+1; i <=y+value;i++) {
            var i=y+1+this.posCounterMove;
            console.log("i is y is  value move is ",i+" ",y," "+value);
            if (i==51 && p=='red') {
              this.loop=false;
              console.log("red should be inside");
              this.lastThrowValue=value-this.posCounterMove-1;
              if (y==50) {
                if(this.locationShow[this.turn][50][1]){
                  this.locationShow[this.turn][50][1]-=1;
                  if (this.locationShow[this.turn][50][1]){

                  }else{
                    this.locationShow[this.turn][50][0]=0;
                  }
                }else{
                  this.locationShow[this.turn][50][0]=0;
                }
              }
              if(this.locationShow[this.turn][50][1]){
              }else{
                this.locationShow[this.turn][50][0]=0;
              }

              this.moveColored(p,0,true);
              this.posCounterMove=0;
              this.y=0;

              //break;
            }else if(i==12 && p=='green'){
              this.loop=false;
              console.log('green shoul be inside here');
              this.lastThrowValue=value-this.posCounterMove-1;
              if (y==11) {
                if(this.locationShow[this.turn][11][1]){
                  this.locationShow[this.turn][11][1]-=1;
                  if (this.locationShow[this.turn][11][1]){

                  }else{
                    this.locationShow[this.turn][11][0]=0;
                  }
                }
                else{
                  this.locationShow[this.turn][11][0]=0;
                }
              }
              if(this.locationShow[this.turn][11][1]){
              }else{
                this.locationShow[this.turn][11][0]=0;
              }

              this.moveColored(p,0,true);
              this.posCounterMove=0;
              this.y=0;

              //break;
            }else if(i==25 && p=='blue'){
              this.loop=false;
              this.lastThrowValue=value-this.posCounterMove-1;
              if (y==24) {
                if(this.locationShow[this.turn][24][1]){
                  this.locationShow[this.turn][24][1]-=1;
                  if (this.locationShow[this.turn][24][1]){

                  }else{
                    this.locationShow[this.turn][24][0]=0;
                  }
                }else{
                  this.locationShow[this.turn][24][0]=0;
                }
              }

              if(this.locationShow[this.turn][25][1]){
              }else{
                this.locationShow[this.turn][25][0]=0;
              }

              console.log('blue shoul be inside here');
              this.moveColored(p,0,true);
              this.posCounterMove=0;
              this.y=0;

              //  break;
            }else if(i==38 && p=='yellow'){
              this.loop=false;
              this.lastThrowValue=value-this.posCounterMove-1;
              console.log('yellow shoul be inside here');
              //this.lastThrowValue=value-this.posCounterMove;
              if (y==37) {
                if(this.locationShow[this.turn][37][1]){
                  this.locationShow[this.turn][37][1]-=1;
                  if (this.locationShow[this.turn][37][1]){

                  }else{
                    this.locationShow[this.turn][37][0]=0;
                  }
                }else{
                  this.locationShow[this.turn][37][0]=0;
                }
              }
              if(this.locationShow[this.turn][37][1]){
              }else{
                this.locationShow[this.turn][37
                ][0]=0;
              }
              this.moveColored(p,0,true);
              this.posCounterMove=0;
              this.y=0;

              //    break;
            }
            else if (i==52 && p!='red') {

              //   this.loop=false;
              //   console.log("its ",p,' last col',i);
              //   console.log('moving ',p," from 0 to ",value-this.posCounterMove);
              //   this.lastThrowValue=value-this.posCounterMove;
              // //  alert(this.lastThrowValue);
              //
              /// decrease number of piece on first move
                  if (this.locationShow[this.turn][51][1]) {
                    this.locationShow[this.turn][51][1]-=1;
                    if (this.locationShow[this.turn][51][1]) {
                    }else{
                      this.locationShow[this.turn][51][0]=0;
                    }
                  }else{
                    this.locationShow[this.turn][51][0]=0;
                  }

                  if (this.valueMove==1) {  //if value is 1 just show 0 and increase piece else
                    if (this.locationShow[this.turn][0][1]) {
                      this.locationShow[this.turn][0][1]+=1;
                    }else{
                      this.locationShow[this.turn][0][1]=1;
                    }
                    this.locationShow[this.turn][0][0]=1;
                    this.posCounterMove=0;
                    this.rollDiceB=true;
                    this.nextTurn();
                //    this.changeDiceColor(this.pieces[this.turn]);
                  }
                  else{

                    this.lastThrowValue=this.lastThrowValue-this.posCounterMove-1;


                    console.log("calling move functioon with vlue ",this.lastThrowValue,this.posCounterMove);
                    console.log(this.posCounterMove);

                    if (this.lastThrowValue) {
                    this.posCounterMove=0;
                    if (this.locationShow[this.turn][51][1]) {
                      this.locationShow[this.turn][51][1]-=1;
                      if (this.locationShow[this.turn][51][1]) {
                      }else{
                        this.locationShow[this.turn][51][0]=0;
                      }
                    }else{
                      this.locationShow[this.turn][51][0]=0;
                    }
                    this.locationShow[this.turn][0][0]=1;

                    this.move(p,0,true);
                    return 0;
                  }else{
                    if (this.locationShow[this.turn][0][1]) {
                      this.locationShow[this.turn][0][1]+=1;
                    }else{
                      this.locationShow[this.turn][0][1]=1;
                    }
                    this.locationShow[this.turn][0][0]=1;
                    this.posCounterMove=0;
                    this.rollDiceB=true;
                    this.nextTurn();
                    this.changeDiceColor(this.pieces[this.turn]);
                    return 0;
                  }
                  }


              //   this.posCounterMove=0
              //   this.y=0;
              //   if (this.lastThrowValue==1) {
              //     // if (this.locationShow[this.turn][51][1]) {
              //     //   this.locationShow[this.turn][51][1]-=1;
              //     // }else{
              //     //   this.locationShow[this.turn][51][0]=0;
              //     // }
              //     this.locationShow[this.turn][0][0]=1;
              //
              //
              //     if (value!=6) {
              //       this.turn++;
              //       if (this.turn==2) {
              //         this.turn=0;
              //       }
              //       console.log("turn changed ",this.turn);
              //       this.changeDiceColor(this.pieces[this.turn]);
              //     }
              //
              //     this.y=0;
              //     this.posCounterMove=0;
              //     this.rollDiceB=true;
              //   }
              //   else if(this.lastThrowValue>1){
              //   //  this.posCounterMove++;
              //     this.lastThrowValue-=1;
              //     this.move(p,0,true);
              //     // if (this.locationShow[this.turn][51][1]) {
              //     //   this.locationShow[this.turn][51][1]-=1;
              //     // }
              //     // else{
              //     //   this.locationShow[this.turn][51][0]=0;
              //     // }
              //     // if (this.locationShow[this.turn][0][1]) {
              //     //   this.locationShow[this.turn][0][1]-=1;
              //     // }else{
              //     //   this.locationShow[this.turn][0][0]=0;
              //     // }
              //     console.log('move function run ',p);
              //   }

              }
              else {
                console.log("moving from",i," to ",value);
                if ( i>=y+2) {
                  if (!this.locationShow[this.turn][i-1][1]) {
                    this.locationShow[this.turn][i-1][0]=0;
                  }
                }
                if (i==51) {
                  if (this.locationShow[this.turn][51][1]) {
                    this.locationShow[this.turn][51][1]+=1;
                  }else{
                    this.locationShow[this.turn][51][1]=1;
                  }
                }

                if(i==y+1){
                  if (this.locationShow[this.turn][y][1]) {
                    this.locationShow[this.turn][y][1]-=1;
                  if (this.locationShow[this.turn][y][1]) {
                  }else{
                    this.locationShow[this.turn][y][0]=0;
                    console.log("hiding ",y);
                  }
                }else{
                  this.locationShow[this.turn][y][0]=0;
                  console.log("hiding ",y);

                }
              }


                this.locationShow[this.turn][i][0]=1;
                if(i==y+value){
                  this.loop=true;
                  if (this.locationShow[this.turn][i][1] ) {
                    this.locationShow[this.turn][i][1]+=1;
                    //    console.log('number of pices left at position',i,' is',this.locationShow[this.turn][i][1])
                  }else if (this.locationShow[this.turn][i][1]==0) {
                    this.locationShow[this.turn][i][1]+=1;
                    console.log('number of pices left at position',i,' is',this.locationShow[this.turn][i][1])
                  }
                  else if(this.locationShow[this.turn][i].length==1){
                    this.locationShow[this.turn][i].push(1);
                    //  console.log('number of pices left at position',i,' is',this.locationShow[this.turn][i][1])
                  }
                  var s=y+value;
                  if (i != 47 && i != 34 && i!=21 && i!=8 && i!=0 && i!=13 && i!=26 && i!=39) {

                  if (this.locationShow[0][i][1]>=1 && this.turn!=0) {
                    console.log('cutting red at position',s);
                    console.log(this.locationShow[0]);
                    this.cutPiece(0,s,i);

                  }else if (this.locationShow[1][i][1]>=1 && this.turn!=1) {
                    console.log('cutting green at position',s);
                    this.cutPiece(1,s,i);
                  }else if (this.locationShow[2][i][1]>=1 && this.turn!=2) {
                    console.log('cutting blue at position',s);
                    this.cutPiece(2,s,i);
                  }else if (this.locationShow[3][i][1]>=1 && this.turn!=3) {
                    console.log('cutting yellow at pposition',s);
                    this.cutPiece(3,s,i);
                  }
                }


                  if (!this.six) {
                  this.nextTurn();
                }else{
                  this.six=false;
                }
                  this.y=0;
                  this.posCounterMove=0;
                  this.rollDiceB=true;
                }
                else if (this.posCounterMove<value){

                  setTimeout(()=>{
                    this.posCounterMove++;

                    this.move(p,k-1,true);
                  },350)

                }
                counter++;
                moveDelay=250;


            }

            //  }
          }
          else{
            console.log('no vlaue to move');
          }
        }
        else{
          console.log("not your turn");
        }
      }
      posCounter=0;

      cutPiece(piece,from,i){
        var start=from-1;
        console.log(from);
        if (start>=0) {

        if (this.posCounter==0) {
          this.locationShow[piece][from][0]=0;
          console.log('hiding at ',from);
          if(this.locationShow[piece][from][1]){
            this.locationShow[piece][from][1]-=1;
          }
        }else{

          if (!this.locationShow[piece][from][1] ) {
            this.locationShow[piece][from][0]=0;
            console.log('hiding at ',from);
          }
        }

        var home=false;
        if (start==this.posStart[piece]) {
          console.log('home is',this.posStart[piece]);
          console.log("last location is ",start);
          home=true;
          this.posCounter=0;
          this.rollDiceB=true;
          this.homeLeft[piece]+=1;
          console.log('home left is ',this.homeLeft[this.turn]);
          for(var t=0;t<4;t++){
            if (this.homeShow[piece][t]==0) {
              this.homeShow[piece][t]=1;
              break;
            }
          }
        }else{
          this.locationShow[piece][start][0]=1;
        }

        if (!home) {
          setTimeout(()=>{
            this.posCounter++;
            this.cutPiece(piece,start,i);
          },120);
        }
      }

    else{
      if (this.locationShow[piece][0][1]) {
        this.locationShow[piece][0][1]-=1;
      }else{
        this.locationShow[piece][0][0]=0;
      }

          console.log("changing direction");
          this.cutPiece(piece,51,i);
      }
      }


      posCounterColored=0;
      valueColored=0;
      six=false;
      moveColored(p,from,call){  //which piece and how much to move
      //  console.log("moving ",p," from "+p+'0'+" to "+this.lastThrowValue);
      if (this.pieces[this.turn]==p) {
        if (this.posCounterColored==0) {
          this.valueColored=this.lastThrowValue;
          this.lastThrowValue=0;
          console.log("value is ",this.valueColored);
        }
        //  this.valueColored--;
        var value=this.valueColored;
        var i=from+this.posCounterColored;
        console.log("i is ",i);
        if (value>(5-from)) {
            alert("you can not move");
            this.lastThrowValue=value;
            this.posCounterColored=0;
            this.valueColored=0;
            this.rollDiceB=true;
            return 0;

        }


        ///  decrease the amount of piece on first move
          if (this.posCounterColored==0 && !call) {
            if (this.locationShowColored[this.turn][from][1]) {
              this.locationShowColored[this.turn][from][1]-=1;
              if (this.locationShowColored[this.turn][from][1]) {
              }else{
                this.locationShowColored[this.turn][from][0]=0;
              }
            }else{
              this.locationShowColored[this.turn][from][0]=0;
            }
          }

          //hide the previous locatioon
            if (i>0) {
              if (this.locationShowColored[this.turn][i-1][1]) {

              }else{
                this.locationShowColored[this.turn][i-1][0]=0;
                console.log("hiding ",i-1);
              }
            }
            if (i>=5) {
              //alert("one piece home");
              this.showColoredAnimation=true
              setTimeout(()=>{
                this.showColoredAnimation=false;
              },1500);
              this.homeWon[this.turn]+=1;
              this.posCounterColored=0;
              this.valueColored=0;
              this.lastThrowValue=0;
              this.rollDiceB=true;
              return 0;
            }
            this.locationShowColored[this.turn][i][0]=1;

            if (this.posCounterColored<value ) {
              setTimeout(()=>{
                this.posCounterColored++;
                this.moveColored(p,from,true);
              },350);
            }
            else{
              console.log("finish moving color");
              if (this.locationShowColored[this.turn][i][1]) {
                this.locationShowColored[this.turn][i][1]+=1;
              }else{
                this.locationShowColored[this.turn][i][1]=1;
              }
                this.posCounterColored=0;
                this.valueColored=0;
                this.lastThrowValue=0;
                if (!this.six) {

                this.nextTurn();
                }else{
                  console.log("roll dice again");
                  this.six=false;
                }
                this.rollDiceB=true;

            }


          }else{
            console.log("not your turn");

          }
          }

      }
