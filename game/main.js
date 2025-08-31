const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#333',
    physics: { 
    default: 'arcade', 
    arcade: { gravity: { y: 0 }, debug: false } 
  },
    scene: [mainScene,GameScene,PauseMenu,DinoGame]
    
    
};

const game = new Phaser.Game(config);