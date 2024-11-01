
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line
	document.getElementById('spinnerWidth').onclick = (e) => this.currLineWidth = e.target.value
	document.getElementById('colour').onclick = (e) => this.currColour = e.target.value


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


	this.onInteractionStart = function(dnd){
		
	}.bind(this)

	this.onInteractionUpdate = function(dnd){
		if(this.currEditingMode === editingMode.rect){
			this.currentShape = new Rectangle(dnd.positionInitialeX,dnd.positionInitialeY,this.currLineWidth,
				this.currColour,dnd.positionFinaleX - dnd.positionInitialeX,dnd.positionFinaleY - dnd.positionInitialeY);
		}else{
			this.currentShape = new Line(dnd.positionInitialeX,dnd.positionInitialeY,this.currLineWidth,
				this.currColour,dnd.positionFinaleX ,dnd.positionFinaleY );
		}
		drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx);
	}.bind(this)

	this.onInteractionEnd = function(dnd){
			var uuid = generateUUID()
			drawing.shapeArray.set(uuid,this.currentShape)
			drawing.paint(ctx,canvas)
			// updateShapeList(uuid,this.currentShape)
			// document.getElementById("remove"+uuid).onclick =(event) => removeEventListener(drawing,event.currentTarget.dispatchEvent.substring(6),ctx,canvas)
			this.currentShape.paint(ctx);
	}.bind(this)

	function generateUUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			const r = Math.random() * 16 | 0;
			const v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	

};


