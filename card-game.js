class VisualCard {
    constructor(card) {
    this.card = card;
    }

    x = 90;
    y = 40;
    isDragging = false;
    xOffset = 0;
    yOffset = 0;

    dragging() {
    if (mouseX > this.x && mouseY > this.y && mouseX < this.x +150 && mouseY < this.y + 200) {
        this.isDragging = true;
        this.xOffset = mouseX - this.x;
        this.yOffset = mouseY - this.y;
        return true;
    }
    }

    getIcon() {
        if(this.card.suit === "Hearts") {
            return "♥";
        } else if (this.card.suit === "Spades") {
            return "♠";
        } else if (this.card.suit === "Clubs") {
            return "♣";
        } else if (this.card.suit === "Diamonds") {
            return "♦";
        }
    }
    drag() {
        if (this.isDragging) {
        this.x = mouseX - this.xOffset;
        this.y = mouseY - this.yOffset;
        }
    }


    draw() {
        this.drag();
        push();
        translate(this.x, this.y)

        fill("black")
        rect(0, 0, 150, 200, 5);

        fill(this.card.color)
        textSize(100);
        textAlign(CENTER);
        text(this.getIcon(), 75, 115);

        textSize(25);
        textAlign(LEFT);
        text(this.card.name, 15, 30);

        textSize(25);
        textAlign(RIGHT);
        text(this.card.name, 135, 170);

        pop();
    }
}

let dealer = new Dealer();
let hand = dealer.getHand();
let visualHand = [];

for (let index = 0; index < hand.length; index++) {
    const card = hand[index];
    let visualCard = new VisualCard(card);
    visualCard.x = index * 170 + 20
    visualHand.push(visualCard);
    
}

var setup = function () {
    createCanvas(1000,800);
};
var draw = function () {
    background("forestgreen");
    for (let index = 0; index < visualHand.length; index++) {
        const visualCard = visualHand[index];
        visualCard.draw();
    }
};

var mousePressed = function () {
    for (let index = 0; index < visualHand.length; index++) {
        const visualCard = visualHand[index];
        visualCard.dragging();
    }
};
var mouseReleased = function () {
    for (let index = 0; index < visualHand.length; index++) {
        const visualCard = visualHand[index];
        visualCard.isDragging = false;
    }
};