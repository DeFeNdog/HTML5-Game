Prizewheel.Game = function(game){

  this.canSpin = true;
  this.slices = 8;
  this.slicePrizes = ["Free Installation", "$100 Off", "Mystery Gift", "20% Off", "Free Delivery", "$250 Off", "Mystery Gift", "10% Off"];

};

Prizewheel.Game.prototype = {

  preload : function() {

  },

  create : function() {

    var gameBg = this.add.image(0, 0, 'gameBg');

    // audio
    this.gameMusic = game.add.audio('gameMusic');
    this.gameMusic.allowMultiple = false;
    this.gameMusic.play('',0,1,true);
    this.spinningMusic = game.add.audio('spinningMusic');
    this.spinningMusic.allowMultiple = false;
    this.applause = game.add.audio('applause');
    this.applause.allowMultiple = false;
    this.winMusic = game.add.audio('winMusic');
    this.winMusic.allowMultiple = false;

    // wheel
    this.gameWheel = game.add.sprite(game.width / 2, game.height / 2, "gameWheel");
    this.gameWheel.anchor.set(0.5);

    // pin button
    this.gamePin = game.add.sprite(game.width / 2, game.height / 2, "gamePin");
    this.gamePin.anchor.set(0.5);
    this.gamePin.inputEnabled = true;
    this.gamePin.events.onInputUp.add(this.spin, this);

    // text
    this.prizeText = this.add.text(game.world.centerX, 670, '', { fill: '#ffffff' });
    this.prizeText.font = 'Lemon';
    this.prizeText.fontSize = 36;
    this.prizeText.anchor.setTo(0.5);

  },

  update: function() {

  },

  spin: function(){

    // can we spin the wheel?
    if(this.canSpin){

      this.gameMusic.pause();
      this.applause.pause();
      this.winMusic.pause();
      this.spinningMusic.play('',0,1,true);

      // resetting text field
      this.prizeText.setText('');

      // the wheel will spin round from 2 to 4 times. This is just coreography
      var rounds = game.rnd.between(2, 5);

      // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
      var degrees = game.rnd.between(0, 360);

      // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
      this.prize = this.slices - 1 - Math.floor(degrees / (360 / this.slices));

      // now the wheel cannot spin because it's already spinning
      this.canSpin = false;

      // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
      // the quadratic easing will simulate friction
      var spinTween = game.add.tween(this.gameWheel).to({
        angle: 360 * rounds + degrees
      }, 3000, Phaser.Easing.Quadratic.Out, true);

      /*
      spinTween.onUpdateCallback(function(twn,percent,twnData){
        //console.log(wheel.angle);
        //console.log( Math.floor(degrees / (360 / slices)) );
      }, this);
      */

      // once the tween is completed, call winPrize function
      spinTween.onComplete.add(this.winPrize, this);

    }

  },

  winPrize: function(){

    this.spinningMusic.pause();
    this.applause.play();
    this.winMusic.play();

    // now we can spin the wheel again
    this.canSpin = true;

    // writing the prize you just won
    this.prizeText.setText(this.slicePrizes[this.prize]);

  },

};