

function TextButton (gameToAddTo, title, picture, method, style, x, y, callBackClass){
	this.button = gameToAddTo.add.button(0, 0, picture, this.perform,
	callBackClass ? callBackClass : this, 1, 0, 2);

	this.method = method;
	this.active = true;
	this.button.anchor.setTo(0.5, 0.5);

		
	this.text = gameToAddTo.add.text(0, 0, title, style);
	this.text.anchor.setTo(0.5, 0.5);

	if(x && y)
		this.setXandY(x,y);
}

TextButton.prototype.perform = function(){
	if(this.active)
		this.method();
}

TextButton.prototype.destroy = function(){
	this.button.destroy();
	this.text.destroy();
}

TextButton.prototype.setActive = function(activity){
	this.active = activity;
}


TextButton.prototype.setWidth = function(width){
	this.button.width = width;
}

TextButton.prototype.setHeight = function(height){
	this.button.height = height;
}


TextButton.prototype.setXandY = function(x, y){
	this.button.x = x;
	this.button.y = y;
	this.text.x = x;
	this.text.y = y;
}