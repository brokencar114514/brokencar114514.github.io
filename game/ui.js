
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
    });
}


var toast = function(scene,string) {
    return toast = scene.rexUI.add.toast({
            x: 200,
            y: 300,

            background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 20, 0x4e342e),
            text: scene.add.text(0, 0, '', {
                fontSize: '24px'
            }),
            space: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
            },
        })
            .showMessage(string)
    
}