class DinoGame extends Phaser.Scene {
  constructor() {
    super('DinoGame');
  }

  preload() {
    // 只需要恐龙和障碍物的图
    this.load.image('dino', 'assets/ca.jpg');
    this.load.image('cactus', 'assets/cactus.jpg');
  }

  create() {
    // 获取当前画布宽高
    this.W = this.scale.width;
    this.H = this.scale.height;

    // === 地面：绘制一个灰色矩形 ===
    this.ground = this.add.rectangle(this.W / 2, this.H - 50, this.W, 100, 0x888888);
    this.physics.add.existing(this.ground, true); // true = 静态物体

    // === 小恐龙 ===
    this.dino = this.physics.add.sprite(this.W * 0.2, this.H - 250, 'dino')
      .setScale(this.W / 1500 * 0.5); // 按屏幕宽度缩放
    this.dino.setCollideWorldBounds(true);
    this.dino.setGravityY(1200);

    // 碰撞检测：恐龙和地面
    this.physics.add.collider(this.dino, this.ground);

    // 点击屏幕跳跃
    this.input.on('pointerdown', () => {
      if (this.dino.body.touching.down) {
        this.dino.setVelocityY(-800); // 跳起来
      }
    });

    // === 障碍物组 ===
    this.cactusGroup = this.physics.add.group();
    this.physics.add.collider(this.dino, this.cactusGroup, this.gameOver, null, this);

    // 定时生成障碍物
    this.time.addEvent({
      delay: 2000,
      callback: this.spawnCactus,
      callbackScope: this,
      loop: true
    });

    // 分数
    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'Score: 0', { 
      fontSize: Math.floor(this.W / 20) + 'px', 
      fill: '#000' 
    });
  }

  update() {
    // 分数随时间增加
    this.score += 1;
    this.scoreText.setText('Score: ' + this.score);
  }

  spawnCactus() {
    // 在右边生成障碍物
    const cactus = this.cactusGroup.create(this.W, this.H - 150, 'cactus')
      .setScale(this.W / 800 * 0.5);
    cactus.setVelocityX(-300); // 往左移动
  }

  gameOver() {
    this.physics.pause();
    this.dino.setTint(0xff0000);
    this.add.text(this.W / 2 - 100, this.H / 2, 'Game Over', { 
      fontSize: Math.floor(this.W / 10) + 'px', 
      fill: '#f00' 
    });
  }
}