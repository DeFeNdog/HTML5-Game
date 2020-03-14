Prizewheel.Menu = function(game){
  this.ready = false;
};

Prizewheel.Menu.prototype = {

  preload : function() {

  },

  create: function () {

    // images
    this.menuBg = game.add.image(0, 0, 'menuBg');

    // logo
    this.menuLogo = game.add.sprite(game.world.centerX, game.world.centerY-80, 'preloadAssets', 'menuLogo');
    this.menuLogo.anchor.setTo(0.5);

    // start button
    this.startButton = game.add.button(game.world.centerX, game.world.centerY+150, 'preloadAssets', this.startGame, this, 'button1B', 'button1A', 'button1B');
    this.startButton.anchor.setTo(0.5);
    this.startButton.onInputOver.add(this.startButtonOver, this);
    this.startButton.onInputOut.add(this.startButtonOut, this);
    this.startText = this.add.text(game.world.centerX, game.world.centerY+152, 'Play Game', { fill: '#ffffff' });
    this.startText.font = 'Lemon';
    this.startText.fontSize = 36;
    this.startText.anchor.setTo(0.5); 

    // volume button
    this.muteButton = game.add.button(1025, 100, 'preloadAssets', this.toggleMute, this, 'muteB', 'muteA', 'muteB');
    this.muteButton.onInputOver.add(this.muteButtonOver, this);
    this.muteButton.onInputOut.add(this.muteButtonOut, this);
    this.muteButton.anchor.setTo(0.5);

    // volume symbols
    this.uiMute = game.add.sprite(1020, 100, 'preloadAssets', 'uiMute');
    this.uiMute.anchor.setTo(0.5);
    this.uiUnmute = game.add.sprite(1020, 100, 'preloadAssets', 'uiUnmute');
    this.uiUnmute.anchor.setTo(0.5);
    this.uiUnmute.visible = false;

    // audio
    this.introMusic = game.add.audio('introMusic');
    this.introMusic.allowMultiple = false;
    this.introMusic.play('',0,0.7,true);

    // button press
    this.buttonPress = game.add.audio('buttonPress');

  },

  startGame: function () {

    // Change the state to the actual game.
    this.introMusic.destroy();
    this.buttonPress.play();
    this.state.start('Game');

  },

  startButtonOver: function() {

    // Button
    game.add.tween(this.startButton).to({
      rotation: -5 * Math.PI / 180
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.startButton.scale).to({
      x: 1.1,
      y: 1.1
    }, 100, Phaser.Easing.Linear.Out, true);

    // Text
    game.add.tween(this.startText).to({
      rotation: -5 * Math.PI / 180
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.startText.scale).to({
      x: 1.1,
      y: 1.1
    }, 100, Phaser.Easing.Linear.Out, true);

  },

  startButtonOut: function() {

    // Button
    game.add.tween(this.startButton).to({
      rotation: 0
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.startButton.scale).to({
      x: 1,
      y: 1
    }, 100, Phaser.Easing.Linear.Out, true);

    // Text
    game.add.tween(this.startText).to({
      rotation: 0
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.startText.scale).to({
      x: 1,
      y: 1
    }, 100, Phaser.Easing.Linear.Out, true);

  },

  muteButtonOver: function() {

    // Button
    game.add.tween(this.muteButton).to({
      rotation: -5 * Math.PI / 180
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.muteButton.scale).to({
      x: 1.1,
      y: 1.1
    }, 100, Phaser.Easing.Linear.Out, true);

    // symbols
    game.add.tween(this.uiMute).to({
      rotation: -5 * Math.PI / 180
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.uiMute.scale).to({
      x: 1.1,
      y: 1.1
    }, 100, Phaser.Easing.Linear.Out, true);

    game.add.tween(this.uiUnmute).to({
      rotation: -5 * Math.PI / 180
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.uiUnmute.scale).to({
      x: 1.1,
      y: 1.1
    }, 100, Phaser.Easing.Linear.Out, true);

  },

  muteButtonOut: function() {

    // Button
    game.add.tween(this.muteButton).to({
      rotation: 0
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.muteButton.scale).to({
      x: 1,
      y: 1
    }, 100, Phaser.Easing.Linear.Out, true);

    // symbols
    game.add.tween(this.uiMute).to({
      rotation: 0
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.uiMute.scale).to({
      x: 1,
      y: 1
    }, 100, Phaser.Easing.Linear.Out, true);

    game.add.tween(this.uiUnmute).to({
      rotation: 0
    }, 100, Phaser.Easing.Linear.Out, true);
    game.add.tween(this.uiUnmute.scale).to({
      x: 1,
      y: 1
    }, 100, Phaser.Easing.Linear.Out, true);

  },

  toggleMute: function() {

    if (!this.game.sound.mute) {
      this.game.sound.mute = true;
      this.uiUnmute.visible = true;
      this.uiMute.visible = false;
    } else {
      this.game.sound.mute = false;
      this.uiUnmute.visible = false;
      this.uiMute.visible = true;
    }

    this.buttonPress.play();

  }

};