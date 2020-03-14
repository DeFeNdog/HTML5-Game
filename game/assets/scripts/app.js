var winW, winH, calcH, game, scaleRatio;
window.onload = function() {

  // window sizing
  winW   = window.innerWidth;
  winH   = window.innerHeight;
  calcH  = Math.round((winW / 16) * 9);

  // game
  game = new Phaser.Game(1136, 745, Phaser.CANVAS, 'gameshow');

  // states
	game.state.add('Boot', Prizewheel.Boot);
  game.state.add('Preloader', Prizewheel.Preloader);
	game.state.add('Menu', Prizewheel.Menu);
	game.state.add('Game', Prizewheel.Game);
	game.state.start('Boot');

}

window.onresize = function(event) {

};