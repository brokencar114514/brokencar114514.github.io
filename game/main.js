const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#333',
    scene: [mainScene,GameScene]
    
    
};

const game = new Phaser.Game(config);