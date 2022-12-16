class startGame extends Phaser.Scene {
  constructor() {
    super("startGame");
  }
  preload() {
    //this.load.bitmapFont('atari', 'assets/fonts/atari-smooth.png', 'assets/fonts/atari-smooth.xml');
    // this.load.bitmapFont('atari', 'assets/fonts/Lato_0.png', 'assets/fonts/lato.xml');

  }
  create() {
    /*
      gameSettings = JSON.parse(localStorage.getItem('SDsave'));
      if (gameSettings === null || gameSettings.length <= 0) {
        localStorage.setItem('SDsave', JSON.stringify(defaultValues));
        gameSettings = defaultValues;
      }
    */
    this.cameras.main.setBackgroundColor(0x000000);

    //var title = this.add.bitmapText(game.config.width / 2, 100, 'topaz', 'SquareDots', 150).setOrigin(.5).setTint(0xc76210);
    this.modeText = this.add.text(game.config.width / 2, 100, 'NumberSlide', { fontFamily: 'PixelFont', fontSize: '100px', color: '#FaFaFa', align: 'left' }).setOrigin(.5)

    var startTime = this.add.bitmapText(game.config.width / 2 - 50, 275, 'topaz', 'Play Time', 50).setOrigin(0, .5).setTint(0xFaFaFa);
    startTime.setInteractive();
    startTime.on('pointerdown', this.clickHandler, this);



  }
  clickHandler() {

    this.scene.start('playGame');
    this.scene.launch('UI');
  }

}