class mainScene extends Phaser.Scene {
  
  constructor() { super({ key: 'mainScene' }); }
  
  create(){
    
    
    this.scene.start('GameScene')
  }
  
  
  
}