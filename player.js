function ConstrainPlayer() {
    if (player.xpos > mapwidth + 1)
        player.xpos = mapwidth + 1;
    if (player.ypos > mapheight - 19)
        player.ypos = mapheight - 19;
    if (player.xpos < 21)
        player.xpos = 21;
    if (player.ypos < 21)
        player.ypos = 21;
}

function Player() {
    this.xpos = 101;
    this.ypos = 101;
    this.energy = 10;
    this.visible = false;
    this.name = "";
    this.status = ""
    this.NearFire = () => {
        if (burning === true) {
            this.status = "You are Warm"
        } else {
            this.status = "You are Cold"
        }
    }
    this.inventory = {
        wood: 0,
        stone: 0

    }

    this.Draw = () => {
        if (visible = true) {
            fill("blue")
            rect(this.xpos, this.ypos, 17, 17)
        }
    }
}