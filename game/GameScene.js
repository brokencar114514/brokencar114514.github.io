const COLOR_MAIN = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var content = `Ciallo～(∠・ω< )⌒☆`;

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        })
    }

    preload() { 
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
 
        this.load.atlas('portraits', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/characters/portraits.png', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/characters/portraits.json');
        
        this.load.image('sun','./assets/ca.jpg');
    }

    create() {
        

        // Fixed size of textbox, and text game object
        createTextBox(this, 0, 550, {
            width: 600,
            height: 150,
            title: '孙昌赫'
        })
            .start(content, 50).setDisplaySize(350,120)



    }

    update() { }
}

const GetValue = Phaser.Utils.Objects.GetValue;
var createTextBox = function (scene, x, y, config) {
    var width = GetValue(config, 'width', 0);
    var height = GetValue(config, 'height', 0);
    var wrapWidth = GetValue(config, 'wrapWidth', 0);
    var fixedWidth = GetValue(config, 'fixedWidth', 0);
    var fixedHeight = GetValue(config, 'fixedHeight', 0);
    var titleText = GetValue(config, 'title', undefined);
    var typingMode = GetValue(config, 'typingMode', 'page');
    var maxLines = (width > 0) ? 0 : 3;

    var textBox = scene.rexUI.add.textBox({
        x: x, y: y,
        width: width, height: height,

        typingMode: typingMode,

        background: scene.rexUI.add.roundRectangle({ radius: 20, color: COLOR_MAIN, strokeColor: COLOR_LIGHT, strokeWidth: 2 }),

        icon: scene.rexUI.add.transitionImagePack({
            width: 40, height: 40,
            key: 'sun'
        }),

        // text: getBuiltInText(scene, wrapWidth, fixedWidth, fixedHeight),
        text: getBBcodeText(scene, wrapWidth, fixedWidth, fixedHeight, maxLines),
        expandTextWidth: (width > 0),
        expandTextHeight: (height > 0),

        action: scene.rexUI.add.aioSpinner({
            width: 30, height: 30,
            duration: 1000,
            animationMode: 'ball'
        }).setVisible(false),

        title: (titleText) ? scene.add.text(0, 0, titleText, { fontSize: '24px', }) : undefined,

        separator: (titleText) ? scene.rexUI.add.roundRectangle({ height: 3, color: COLOR_DARK }) : undefined,

        space: {
            left: 20, right: 20, top: 20, bottom: 20,

            icon: 10, text: 10,

            separator: 6,
        },

        align: {
            title: 'center',
            action: 'bottom'
        }
    })
        .setOrigin(0)
        .layout();

    textBox
        .setInteractive()
        .on('pointerdown', function () {
            if (typingMode === 'page') {

                var icon = this.getElement('action');
                icon.stop().setVisible(false);
                this.resetChildVisibleState(icon);

                if (this.isTyping) {
                    this.stop(true);
                } else {
                    this.typeNextPage();
                }
            }
        }, textBox)
        .on('pageend', function () {
            if (this.isLastPage) {
                return;
            }

            var icon = this.getElement('action');
            icon.setVisible(true).start();
            this.resetChildVisibleState(icon);

        }, textBox)
        .on('complete', function () {
            console.log('all pages typing complete')
        })
    //.on('type', function () {
    //})

    return textBox;
}

var getBuiltInText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.add.text(0, 0, '', {
            fontSize: '20px',
            wordWrap: {
                width: wrapWidth
            },
            maxLines: 3
        })
        .setFixedSize(fixedWidth, fixedHeight);
}

var getBBcodeText = function (scene, wrapWidth, fixedWidth, fixedHeight) {
    return scene.rexUI.add.BBCodeText(0, 0, '', {
        fixedWidth: fixedWidth,
        fixedHeight: fixedHeight,

        fontSize: '20px',
        wrap: {
            mode: 'word',
            width: wrapWidth
        },
        maxLines: 3
    })
}