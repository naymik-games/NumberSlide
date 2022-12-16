class UI extends Phaser.Scene {

  constructor() {

    super("UI");
  }
  preload() {



  }
  create() {
    this.Main = this.scene.get('playGame');

    //this.header = this.add.image(game.config.width / 2, 10, 'uiheader').setOrigin(.5, 0).setTint(slideColors[0]);

    this.score = this.add.text(50, 45, this.Main.board.score, { fontFamily: 'PixelFont', fontSize: '170px', color: '#fafafa', align: 'left' }).setOrigin(0, .5)
    this.scoreLabel = this.add.text(50, 135, 'SCORE', { fontFamily: 'PixelFont', fontSize: '70px', color: '#DC5639', align: 'left' }).setOrigin(0, .5)

    this.matchCount = this.add.text(425, 45, this.Main.board.matchCount, { fontFamily: 'PixelFont', fontSize: '170px', color: '#fafafa', align: 'left' }).setOrigin(0, .5)
    this.matchLabel = this.add.text(380, 135, 'MATCHES', { fontFamily: 'PixelFont', fontSize: '70px', color: '#DC5639', align: 'left' }).setOrigin(0, .5)



    var progressBox = this.add.graphics();
    this.progressBar = this.add.graphics();
    progressBox.fillStyle(slideColors[0], 0.8);
    progressBox.fillRect(625, 40, 250, 50);

    this.progressLabel = this.add.text(750, 135, this.Main.board.progress, { fontFamily: 'PixelFontWide', fontSize: '110px', color: '#DC5639', align: 'left' }).setOrigin(0, .5)


    this.Main.events.on('score', function () {

      this.score.setText(this.Main.board.score)
      this.matchCount.setText(this.Main.board.matchCount)
      this.progressBar.clear();
      this.progressBar.fillStyle(0x2B2B2B, 1);
      this.progressBar.fillRect(635, 50, 230 * (this.Main.board.scoreProgress / this.Main.levelGoal), 30);

      this.progressLabel.setText(this.Main.board.progress)
    }, this);



  }

  update() {

  }



}