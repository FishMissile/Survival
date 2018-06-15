function Explore() {
    var uinamefade = 0;
    this.setup = () => {
        console.log("Show Game")
        grid = new Grid()
        blocks = new Blocks(bx, by)
        Blocks(bx, by)
        bg();
        uiname = createP(player.name)
        uiname.position(20,-15)
        uiname.style('font-size', '18px');
        uiname.style('font-family', 'Arial');
        uiname.style('color', '#cccccc');
        uiname.style('opacity',uinamefade)
        uiname.id = "uiname"

    }

    this.draw = () => {
        fill(0,200,0)
        textSize(16)
        Controls()
        ConstrainPlayer()
        grid.Draw()
        player.Draw()
    }


    function Controls() {
        this.keyPressed = () => {
            if (keyCode === 87) {
                player.ypos -= 20
            } else if (keyCode === 83) {
                player.ypos += 20
            } else if (keyCode === 65) {
                player.xpos -= 20
            } else if (keyCode === 68) {
                player.xpos += 20
            }
            
            return false;
        }
    }

    function Player() {
        this.xpos = 101;
        this.ypos = 101;
        this.energy = 10;

        this.Draw = () => {
            fill("blue")
            rect(this.xpos, this.ypos, 17, 17)
        }
    }

    function bg() {
        for (i = 0; i < 950; i++) {
            by += 20
            if (by >= mapheight) {
                bx += 20
                if (bx > mapwidth) {
                    break;
                }
                by -= mapheight - 20
                Blocks(bx, by)
            }
            new Blocks(bx, by)
        }
    }

    function Blocks(bx, by) {
        this.xx = bx;
        this.yy = by;
        grid.blocks.push(this)
        this.Draw = () => {
            fill(100, 100, 100)
            noStroke();
            rect(this.xx, this.yy, 19, 19)
        }
    }

    function Grid() {
        this.blocks = [];
        this.Draw = () => {
            for (let i = 0; i < this.blocks.length; i++) {
                this.blocks[i].Draw();
            }
        }
    }
}
