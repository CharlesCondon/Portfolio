var drops = [];

function setup() {
    var initCanvas = createCanvas(windowWidth, windowHeight);
        for (var i = 0; i < 500; i++) {
            drops[i] = new Drop();
    }
    initCanvas.parent("background");
}

function draw() {
    background(0, 0, 0);
        for (var i = 0; i < drops.length; i++) {
            drops[i].fall();
            drops[i].show();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

