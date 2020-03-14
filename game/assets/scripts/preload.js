Prizewheel.Preloader = function(game){
  this.loaderReady = false;
  this.loaderText;
};

/*
Prizewheel.WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },
    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Lemon']
    }

};
*/

Prizewheel.Preloader.prototype = {

  preload: function(){

  },

  create: function(){

    WebFont.load({
      google: {
        families: ['Lemon']
      }
    });

    // events
    this.load.onLoadStart.add(this.loadStart, this);
    this.load.onFileComplete.add(this.fileComplete, this);
    this.load.onLoadComplete.add(this.loadComplete, this);

    // background
    var menuBg = this.add.image(0, 0, 'menuBg');

    this.loadLayer = game.add.group();

    // loader bar
    this.loaderBar = game.add.sprite(game.world.centerX, game.world.centerX, 'bootAssets', 'loaderBar');
    this.loadLayer.add(this.loaderBar);

    // loader fill
    this.loaderFill = game.add.sprite(game.world.centerX, game.world.centerX, 'bootAssets', 'loaderFill');

    this.load.setPreloadSprite(this.loaderFill, 0); 
    this.loadLayer.add(this.loaderFill);

    // loader frame
    this.loaderFrame = game.add.sprite(game.world.centerX, game.world.centerX, 'bootAssets', 'loaderFrame');
    this.loadLayer.add(this.loaderFrame);

    // center group
    this.loadLayer.centerX = game.world.centerX;
    this.loadLayer.centerY = game.world.centerY;

    this.loadCustom();

  },

  loadStart: function() {

    this.loaderText = this.add.text(game.world.centerX, game.world.centerY + 60, 'Loading ...', { fill: '#0b3763' });
    this.loaderText.anchor.setTo(0.5);

  },

  fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {

    this.loaderText.setText("Load status: " + progress + "%");
    //this.loaderBar.scale.set(0.3);
    //this.loaderBar.width + 20;

  },

  loadCustom:function() {

    // menu assets
    game.load.audio('introMusic', ['dist/audio/intro.mp3', 'dist/audio/intro.ogg']);
    game.load.audio('buttonPress', ['dist/audio/button-press.mp3', 'dist/audio/button-press.ogg']);
    game.load.atlas('preloadAssets', 'dist/images/preload-assets.png', 'dist/data/preload-assets.json');

    // game assets
    game.load.image('gameBg', 'dist/images/game-bg.jpg');
    game.load.audio('tickFx', ['dist/audio/tick2.mp3', 'dist/audio/tick2.ogg']);
    game.load.image('gameWheel', 'dist/images/wheel.png');
    game.load.image('gamePin', 'dist/images/pin.png');
    game.load.audio('spinningMusic', ['dist/audio/spinning.mp3', 'dist/audio/spinning.ogg']);
    game.load.audio('gameMusic', ['dist/audio/game.mp3', 'dist/audio/game.ogg']);
    game.load.audio('spinningMusic', ['dist/audio/spinning.mp3', 'dist/audio/spinning.ogg']);
    game.load.audio('winMusic', ['dist/audio/win.mp3', 'dist/audio/win.ogg']);
    game.load.audio('applause', ['dist/audio/applause.mp3', 'dist/audio/applause.ogg']);
    game.load.start();

  },

  loadComplete: function() {

    this.loaderReady = true;

  },

  update: function(){

    if(this.loaderReady === true) {
      this.state.start('Menu');
    }

  }

};