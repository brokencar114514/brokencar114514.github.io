class PauseMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'PauseMenu' });
    }
    
    preload(){
        
        this.load.image('bk','./assets/ui/UI_TravelBook_BookCover01a.png');
        
        
    }

    create() {
        
        
        // 半透明背景
        //this.add.rectangle(400, 300, 800, 600, 0x000000, 0.5);
     let bk =   this.add.image(window.innerWidth/2,350,'bk').setOrigin(0.5).setDisplaySize(280,250).setInteractive();

        // 标题
        this.add.text(window.innerWidth/2, bk.y-95, '暂停菜单', { fontSize: '32px', color: '#fff' }).setOrigin(0.5);

        // 按钮：继续
        let resumeBtn = this.add.text(window.innerWidth/2, bk.y-60, '继续游戏', { fontSize: '24px', color: '#0f0' })
            .setOrigin(0.5)
            .setInteractive();

        resumeBtn.on('pointerup', () => {
            this.scene.stop();              // 停止当前菜单
            this.scene.resume('GameScene'); // 继续游戏
        });

        
    }
}