class mainScene extends Phaser.Scene {
  
  constructor() { super({ key: 'mainScene' }); }
  
  
  preload(){
  
      
      this.load.audio('click','./audio/click.wav');
    
    this.load.image('button0','./assets/buttons/button0.png');
    this.load.image('button1','./assets/buttons/button1.png');
    
    this.load.image('st0','./assets/buttons/buttonst0.png');
    this.load.image('st1','./assets/buttons/buttonst1.png');
    
    
  }
  
  create(){
      
       var bgm = this.sound.add('click');
    
   
            let button = this.add.image(window.innerWidth/2, window.innerHeight/2, 'button0').setInteractive();
            
            let st = this.add.image(window.innerWidth/2,window.innerHeight/2+130,'st0').setInteractive();
            
            // 按下
        button.on('pointerdown', () => {
            
            bgm.play();
            button.setTexture('button1');
        });

        // 松开
        button.on('pointerup', () => {
            button.setTexture('button0');
             this.scene.start('DinoGame');
            console.log('按钮点击了！');
        });

        // 移出按钮区域时恢复
        button.on('pointerout', () => {
            button.setTexture('button0');
        });
        
        
        st.on('pointerdown', () => {
            
            bgm.play();
            st.setTexture('st1');
        });

        // 松开
        st.on('pointerup', () => {
            st.setTexture('st0');
            this.scene.launch('PauseMenu');
            console.log('按钮点击了！');
        });

        // 移出按钮区域时恢复
        st.on('pointerout', () => {
            st.setTexture('st0');
        });

    
    // this.scene.start('GameScene')
  }
  
  
  
}