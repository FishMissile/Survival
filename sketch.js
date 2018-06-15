var gridx = 20
var gridy = 20
var by = gridy;
var bx = gridx;
var mapheight = 300;
var mapwidth = 760;
var mgr;
var burning = false;
var campfire;   
var burnout;
var foragebar;
var fprogress = 54

function setup() {
	createCanvas(800, 600);

	player = new Player()

	mgr = new SceneManager();
	mgr.wire();
	mgr.showScene(Intro);
}

