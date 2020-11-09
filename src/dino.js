const MovingObject = require("./moving_object.js")
const Util = require("./util.js")

// const DINO = ['blue.jpg', 'green.jpg', 'yellow.jpg', 'purple.jpg'];
const length = 50;

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}




function Dino(param) {
    MovingObject.call(this, { pos: param["pos"], vel: Util.randomVec(5), color: random_item(COLOR), radius: RADIUS, game: param["game"] });
}

// Dino.prototype = Object.create(MovingObject.prototype);
// Dino.prototype.constructor = Dino;

Util.inherits(Dino, MovingObject)

module.exports = Dino;


// https://open.appacademy.io/learn/swe-in-person/javascript/prototypal-inheritance