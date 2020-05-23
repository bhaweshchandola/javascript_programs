class some{
	constructor(){
  	this.some = "hello"
    this._x = "old_val"
  }
  
  one(){
  	console.log(this.some);
  }
  
  get x(){
  	return this._x
  }
  
  set x(mess){
  	this._x = mess
  }
   
}

y = new some()
console.log(y.x)
y.x = "new value"
console.log(y.x)
