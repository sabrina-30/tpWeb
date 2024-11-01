function Drawing() {
    this.shapeArray = new Map()
}

function Shape(startX, startY, thickness, color) {
    this.startX = startX;
    this.startY = startY;
    this.thickness = thickness;
    this.color = color;
}

// Rectangle
function Rectangle(startX, startY, thickness, color, largeur, hauteur) {
    Shape.call(this, startX, startY, thickness, color);
    this.largeur = largeur;
    this.hauteur = hauteur;
}


// Ligne
function Line(startX, startY, thickness, color, endX, endY) {
    Shape.call(this, startX, startY, thickness, color);
    this.endX = endX;
    this.endY = endY;
}

