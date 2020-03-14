var Prizewheel = {};

Prizewheel.Boot = function(game){};

Prizewheel.Boot.prototype = {

  preload: function() {

    game.load.atlas('bootAssets',   'dist/images/boot-assets.png', 'dist/data/boot-assets.json');
    game.load.image('menuBg',       'dist/images/menu-bg.jpg');

  },

  create: function(){

	  // responsive
	  game.scale.scaleMode             = Phaser.ScaleManager.SHOW_ALL;
	  game.scale.pageAlignHorizontally = true;
	  game.scale.pageAlignVertically   = true;
    //game.scale.refresh();
    //game.scale.windowConstraints.bottom = "visual";

	  // basic
    game.stage.backgroundColor = '#0b3763';

  },

  update: function(){
    this.state.start('Preloader');
  }

};