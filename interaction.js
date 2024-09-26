
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.positionInitialeX = 0;
  this.positionInitialeY = 0;
  this.positionFinaleX = 0;
  this.positionFinaleY= 0;
  this.clicked = false;

	// Developper les 3 fonctions gérant les événements

  DnD.prototype.Drag = function(evt){
    var position = getMousePosition(canvas,evt);
    this.positionInitialeX  = position.x;
    this.positionInitialeY = position.y;
    this.clicked = true;
    console.log('drag x : ',this.positionInitialeX ,' y : ',this.positionInitialeY)
  }

  DnD.prototype.Move = function(evt){

  }

  DnD.prototype.Drop = function(evt){
    if(this.clicked){
      var position = getMousePosition(canvas,evt);
      this.positionFinaleX = position.x;
      this.positionFinaleY = position.y;
      console.log('drop x : ',this.positionFinaleX ,' y : ',this.positionFinaleY)
    }
  

  }

	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.Drag, false);

  canvas.addEventListener('mousemove', this.Move, false);
  
  canvas.addEventListener('mouseup', this.Drop, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



