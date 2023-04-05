class startGame extends Phaser.Scene {
  constructor() {
    super("startGame");
  }
  preload() {
    //this.load.bitmapFont('atari', 'assets/fonts/atari-smooth.png', 'assets/fonts/atari-smooth.xml');
    // this.load.bitmapFont('atari', 'assets/fonts/Lato_0.png', 'assets/fonts/lato.xml');

  }
  create() {

    gameSettings = JSON.parse(localStorage.getItem('NSsave'));
    if (gameSettings === null || gameSettings.length <= 0) {
      localStorage.setItem('NSsave', JSON.stringify(defaultValues));
      gameSettings = defaultValues;
    }

    this.cameras.main.setBackgroundColor(0x000000);

    //var title = this.add.bitmapText(game.config.width / 2, 100, 'topaz', 'SquareDots', 150).setOrigin(.5).setTint(0xc76210);
    this.TitleText = this.add.text(game.config.width / 2, 125, 'NumberSlide', { fontFamily: 'PixelFont', fontSize: '100px', color: '#FaFaFa', align: 'left' }).setOrigin(.5)

    var startTime = this.add.bitmapText(game.config.width / 2, 275, 'topaz', 'PLAY', 50).setOrigin(.5).setTint(0xFaFaFa);
    startTime.setInteractive();
    startTime.on('pointerdown', this.clickHandler, this);
    var bestScoreText = this.add.bitmapText(game.config.width / 2, 475, 'topaz', gameSettings.bestScore, 50).setOrigin(.5).setTint(0xFaFaFa);


  }
  clickHandler() {

    this.scene.start('playGame');
    this.scene.launch('UI');
  }

}