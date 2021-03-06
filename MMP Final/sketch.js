var nameP;
function setup() {
    createCanvas(820, 800);
}

function draw() {
    /* ====  Hero  ==== */

    noStroke();

    // Hair
    /// back
    fill('#262626');

    beginShape();
    curveVertex(600, 400);
    curveVertex(620, 380);
    curveVertex(680, 390);
    curveVertex(700, 490);
    curveVertex(660, 530);
    curveVertex(540, 540);
    curveVertex(410, 500);
    curveVertex(350, 400);
    endShape();

    beginShape();
    curveVertex(220, 400);
    curveVertex(200, 380);
    curveVertex(140, 390);
    curveVertex(120, 490);
    curveVertex(160, 530);
    curveVertex(280, 540);
    curveVertex(410, 500);
    curveVertex(470, 400);
    endShape();

    // Head
    fill('#EFC1AE');

    /// main (l/r)
    beginShape();
    curveVertex(410, 100);
    curveVertex(410, 80);
    curveVertex(220, 120);
    curveVertex(160, 330);
    curveVertex(210, 480);
    curveVertex(410, 520);
    curveVertex(390, 470);
    endShape();

    beginShape();
    curveVertex(410, 100);
    curveVertex(410, 80);
    curveVertex(600, 120);
    curveVertex(660, 330);
    curveVertex(610, 480);
    curveVertex(410, 520);
    curveVertex(430, 470);
    endShape();

    // Headpiece
    /// main
    fill('#FFE64C');

    beginShape();
    curveVertex(160, 260);
    curveVertex(160, 260);
    curveVertex(200, 160);
    curveVertex(410, 80);
    curveVertex(620, 160);
    curveVertex(660, 260);
    curveVertex(660, 260);
    endShape(CLOSE);

    /// star
    fill('#B21818')

    beginShape();
    vertex(410, 150);
    vertex(398, 185);
    vertex(362, 185);
    vertex(391, 205);
    vertex(380, 240);
    vertex(410, 218);
    vertex(440, 240);
    vertex(429, 205);
    vertex(458, 185);
    vertex(422, 185);
    endShape(CLOSE);

    // Hair
    /// top
    fill('#262626');

    beginShape();
    curveVertex(410, 125);
    curveVertex(410, 75);
    curveVertex(550, 60);
    curveVertex(670, 140);
    curveVertex(720, 260);
    curveVertex(700, 400);
    curveVertex(740, 410);
    curveVertex(730, 445);
    curveVertex(680, 460);
    curveVertex(645, 420);
    curveVertex(660, 300);
    curveVertex(620, 220);
    curveVertex(490, 170);
    curveVertex(410, 120);
    curveVertex(380, 80);
    endShape();

    beginShape();
    curveVertex(410, 125);
    curveVertex(410, 75);
    curveVertex(270, 60);
    curveVertex(150, 140);
    curveVertex(100, 260);
    curveVertex(120, 400);
    curveVertex(80, 410);
    curveVertex(90, 445);
    curveVertex(140, 460);
    curveVertex(175, 420);
    curveVertex(160, 300);
    curveVertex(200, 220);
    curveVertex(330, 170);
    curveVertex(410, 120);
    curveVertex(440, 80);
    endShape();

    //earrings
    fill('#B21818');
    ellipse(165, 410, 35, 35);
    ellipse(655, 410, 35, 35);

    // Nose
    fill('#EFC9BA');
    triangle(410, 380, 385, 415, 435, 415);
    fill('#E5BAA7');
    triangle(410, 400, 390, 415, 430, 415);

    // Eyes
    fill('#262626');
    ellipse(260, 330, 100);
    ellipse(560, 330, 100);

    // Eyelashes
    noFill();
    stroke('#262626');
    strokeWeight(5);

    arc(560, 260, 100, 100, PI/8, PI/2);
    arc(570, 270, 100, 100, PI/8, PI/2);
    arc(580, 280, 100, 100, PI/8, PI/2);
    arc(260, 260, 100, 100, PI/2, 7*PI/8);
    arc(250, 270, 100, 100, PI/2, 7*PI/8);
    arc(240, 280, 100, 100, PI/2, 7*PI/8);

        }



