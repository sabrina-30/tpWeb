Rectangle.prototype.paint = function(ctx) {
    console.log("Dessin du rectangle");
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.strokeRect(this.startX, this.startY, this.largeur, this.hauteur);
};

Line.prototype.paint = function(ctx) {
    console.log("Dessin de la ligne");
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx,canvas) {
    console.log("Dessin de toutes les formes");
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.shapeArray.forEach(element => element.paint(ctx));
};
