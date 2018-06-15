function Game() {

    this.setup = () => {
        background(0, 0, 0)

        pname = createP(player.name)
        pname.position(20, 15)
        pname.style('font-size', '18px');
        pname.style('font-family', 'Arial');
        pname.style('color', '#cccccc');

        wood = createP("Wood: ")
        wood.position(width / 2, height / 2)
        wood.style('font-size', '18px');
        wood.style('font-family', 'Arial');
        wood.style('color', '#cccccc');
        stone = createP("Stone: ")
        stone.position(width / 2, height / 2 + 20)
        stone.style('font-size', '18px');
        stone.style('font-family', 'Arial');
        stone.style('color', '#cccccc');
        forage = createButton("Forage")
        forage.position(width - 100, 50)
        forage.style('background-color', "grey")
        forage.style('border-color', "black")
        forage.style("font-size", "12px")
        forage.style("cursor", "pointer")

        makefire = createButton("Make Campfire")
        makefire.position(width - 100, height / 2)
        makefire.style('background-color', "grey")
        makefire.style('border-color', "black")
        makefire.style("font-size", "12px")
        makefire.style("cursor", "pointer")
        makefire.hide();

        campfire = createButton("Stoke Fire")
        campfire.position(width - 100, 70)
        campfire.style('background-color', "grey")
        campfire.style('border-color', "black")
        campfire.style("font-size", "12px")
        campfire.style("cursor", "pointer")
        campfire.hide();
        //        forage.style("border-radius", "8px")
        forage.mousePressed(Forage);
        makefire.mousePressed(CampFire);
        campfire.mousePressed(StokeFire);

    }

    this.draw = () => {
        DrawShit();
    }
    function DrawShit() {
        let wood = player.inventory.wood
        let stone = player.inventory.stone
        let stat = player.status

        background(100, 100, 100);
        fill(200, 200, 200);
        textSize(16)
        noStroke()
        rect(width - 100, 50, fprogress, 20)
        text(wood, width / 2 + 80, height / 2 + 20, 100, 40)
        text(stone, width / 2 + 80, height / 2 + 40, 100, 40)
        text(stat, 20, 75, 200, 40)

        MakeFire();
        player.NearFire();
    }
    function MakeFire() {
        if (player.inventory.wood > 3) {
            makefire.show();
        }
    }
    function CampFire() {
        player.inventory.wood -= 4
        campfire.show();
        makefire.remove();
    }

    function StokeFire() {
        if (player.inventory.wood > 0) {

            burning = true;
            campfire.hide()
            player.inventory.wood -= 1
            burnout = setInterval(BurnOut, 30000)
        }

    }

    function BurnOut() {
        clearInterval(burnout)
        campfire.show()
        burning = false;
    }
    function Forage() {
        foragebar = setInterval(ForageBar, 98)

        forage.hide()

        function ForageBar() {
            if (fprogress < 1) {
                clearInterval(foragebar)
                fprogress = 54

                let foragetry = int(random(1, 8))
                switch (foragetry) {
                    case 1:
                        player.inventory.wood += 1
                        break;
                    case 2:
                        player.inventory.stone += 1
                        break;
                    case 3:
                        player.inventory.wood += 1
                        player.inventory.stone += 1
                        break;
                    default:
                        break;

                }
                forage.show()
            }
            fprogress--
        }
    }

}
