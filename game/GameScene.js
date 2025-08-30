var yun;
var yun2;


const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;
const Random = Phaser.Math.Between;

class GameScene extends Phaser.Scene {
  
  constructor() { super({ key: 'GameScene' }); }
  
  
  
     

  
preload() {
    
    this.load.audio('bgm','./audio/bgm.mp3');
    
    this.load.image('b0','./assets/background/sl/forest_long.png');
    this.load.image('b1','./assets/background/sl/forest_mid.png');
    
     this.load.image('b2','./assets/background/sl/forest_back.png');
      this.load.image('b3','./assets/background/sl/forest_mountain.png');
      
       this.load.image('b4','./assets/background/sl/forest_sky.png');
   
   
   
    
    this.load.spritesheet('button', './assets/buttons/Small Square Buttons.png', {
    frameWidth: 15,   // 每个按钮的宽度
    frameHeight: 15,  // 每个按钮的高度
    margin: 1,        // 如果图块之间有空隙，就写出来
    spacing: 1
});
    
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: './repo/rexui.js',
            sceneKey: 'rexUI'
        });      
    
       this.load.image('background', './assets/background/1.png');
       this.load.image('yun','./assets/background/4.png');
       
       
    
    
   }
   
   
create() {
    
    
    this.bgWidth = 750; // 背景宽度

    // 创建两个背景Container
    this.bgContainers = [];

    for (let i = 0; i < 2; i++) {
      const container = this.add.container(i * this.bgWidth+3, 0);

      const textures = ['b4','b3','b2','b1','b0'];
      const yPositions = [395, 350, 335, 325, 320];
      const depths = [5,4,3,2,1];

      for (let j=0; j<textures.length; j++){
        let bg = this.add.image(0, yPositions[j], textures[j])
          .setDisplaySize(this.bgWidth, 300)
          .setOrigin(0,0)
          .setDepth(depths[j]);
        container.add(bg);
      }

      this.bgContainers.push(container);
    }
    
    
    
    
/*
    
  var bk0=  this.add.image(0,395,'b0')
    .setDisplaySize(750,300).setOrigin(this.width,0).setDepth(5);
var bk1=    this.add.image(0,350,'b1').setDisplaySize(750,300).setOrigin(this.width,0).setDepth(4);
    
  var bk2=   this.add.image(0,335,'b2').setDisplaySize(750,300).setOrigin(this.width,0).setDepth(3);
   
var bk3=    this.add.image(0,325,'b3').setDisplaySize(750,300).setOrigin(this.width,0).setDepth(2);

var bk4=  this.add.image(0,320,'b4').setDisplaySize(750,300).setOrigin(this.width,0).setDepth(1);
   
   */

    
    
    var bgm = this.sound.add('bgm');
    bgm.play({loop:true});
    
        /*   var to = toast(this,'你好');
           to.setInteractive();
           to.on('pointerdown', () => {
        console.log('按钮被按下');
        // 这里执行点击后的逻辑，如切换场景、触发技能等
    });*/

}
    update(){
      
      
      const speed = 2;

    this.bgContainers.forEach(container => {
      container.x -= speed;

      // 如果整个Container移出屏幕左侧
      if(container.x <= -this.bgWidth){
        // 移动到最右侧
        const rightMost = Math.max(...this.bgContainers.map(c => c.x));
        container.x = rightMost + this.bgWidth;
      }
    });


        
        
    }
    
    
    


  
  
}