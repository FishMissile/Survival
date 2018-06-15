function Intro() {
    this.setup = function () {
        background(00, 00, 00)
        console.log("Show Intro")
        Player();
        rectMode(CORNER)
        chooseName = createDiv('Choose your name');
        chooseName.style('font-size', '18px');
        chooseName.style('font-family', 'Arial');
        chooseName.style('color', '#cccccc');
        chooseName.position(150,120)
        namebox = createInput('')
        namebox.position(150, 150)
        button = createButton('Begin');
        var col = color(5, 100, 5, 100)
        button.style('background-color', col);
        button.position(200, 200);
        button.mousePressed(createCharacter);

    }
    this.draw = function () {
        DrawIntroScreen()

    }

    function DrawIntroScreen() {




        mouseClicked = function () {
            player.visible = true;

        }
    }

}
    function createCharacter() {
        player.name = namebox.value()
        mgr.showScene(Game);
        namebox.remove()
        button.remove()
        chooseName.remove()
        console.log(player.name)
    
    }