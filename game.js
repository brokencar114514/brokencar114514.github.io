
class GameScene extends Phaser.Scene {
    
    
    
}
    
const Random = Phaser.Math.Between;

let yun;
let yun2;

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;


function preload() {
    
    this.load.spritesheet('button', './assets/buttons/Small Square Buttons.png', {
    frameWidth: 15,   // 每个按钮的宽度
    frameHeight: 15,  // 每个按钮的高度
    margin: 1,        // 如果图块之间有空隙，就写出来
    spacing: 1
});
    
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });      
    
       this.load.image('background', './assets/background/1.png');
       this.load.image('yun','./assets/background/4.png');
       
       // this.load.image()
    
    
   }

function create() {
    
    let an = createButton(this,'a')
    .setX(300)
    .setY(300);
    
    
    
   /*
        var buttons = this.rexUI.add.buttons({
            x: 250, y: 300,
            orientation: 'y',

            buttons: [
                createButton(this, 'A'),
                createButton(this, 'B'),
            ],

            space: { item: 8 }

        })
            // Add a header child, which is not part of buttons
            .add(createButton(this, 'Header'),
                {
                    index: 0
                }
            )
            // Add a footer child, which is not part of buttons
            .add(createButton(this, 'Footer'))
            .layout()
            // .drawBounds(this.add.graphics(), 0xff0000) ;
    
    */
    
    
   /* 
    this.add.image(this.game.config.width-200,this.game.config.height-350,'background').setDisplaySize(500,700);
yun =   this.add.image(250,550,'yun');
  */
    
    /*
        // 设置背景图 - 使用TileSprite
        // 参数：x坐标, y坐标, 宽度, 高度, 图片键名
        this.forest_bg = this.add.tileSprite(
            0, // x坐标 - 通常设置为0或画布中心，取决于你的布局需求
            0, // y坐标
            this.game.config.width , // 宽度设置为游戏画布宽度
            this.game.config.height -50, // 高度设置为游戏画布高度
            'forest_background' // 预加载的图片键名
        );
        // 将TileSprite的原点设置为左上角 (0,0)，方便布局
        this.forest_bg.setOrigin(0, 0);
    
    */
    
    }
    
    function update(){
        if(yun){
        yun.setX(yun.x-3);
        console.log(yun.x)
        }
        if (yun.x <= -270) {
            yun.setVisible(false);
            yun = null;
            yun = yun2;
           /*   yun.setX(250);
            yun.setY(550); */
            
          //   yun.setVisible(true);

            
        }
       
        //console.log(yun.x)
            
    }
function log(string){
    
    console.log(string);
    
}

var createButton = function (scene, text) {
    return scene.rexUI.add.label({
        width: 100,
        height: 40,
        background: /*scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, COLOR_LIGHT)*/
        scene.add.image(0,0,'button',0).setDisplaySize(60,20),
        text: scene.add.text(0, 0, text, {
            fontSize: 18
        }),
        space: {
            left: 10,
            right: 10,
        }
    }).setInteractive()
    .on('pointerover', function () {
        this.getElement('background').setFrame(1); // hover
    })
    .on('pointerout', function () {
        this.getElement('background').setFrame(0); // normal
    })
    .on('pointerdown', function () {
        this.getElement('background').setFrame(2); // 按下
    })
    .on('pointerup', function () {
        this.getElement('background').setFrame(0); // 弹起
        console.log('按钮被点击:', text);
    });
}
