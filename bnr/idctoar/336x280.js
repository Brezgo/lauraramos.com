(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,21);


(lib.Path_0 = function() {
	this.initialize(img.Path_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,50);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,50);


(lib.Path_1_0 = function() {
	this.initialize(img.Path_1_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,21);


(lib.Path_1_1 = function() {
	this.initialize(img.Path_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,95);


(lib.Path_1_2 = function() {
	this.initialize(img.Path_1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.Path_2 = function() {
	this.initialize(img.Path_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,95);


(lib.Path_2_0 = function() {
	this.initialize(img.Path_2_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,76);


(lib.Path_3 = function() {
	this.initialize(img.Path_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,6);


(lib.Path_4 = function() {
	this.initialize(img.Path_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,43);


(lib.Path_5 = function() {
	this.initialize(img.Path_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.bgjpgcopy = function() {
	this.initialize(img.bgjpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,333);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(3.1,-7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.9,-16.3,179.9,17.4);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG9BVIAAiRIgTAAIAAgUIAmAAIAAClgAmbAwIgOgDIgLgEIAAh5IATAAIAABBQAGgCAEgEQAGgDADgDQAHgGACgIQADgJABgKIAAgUIATAAIAAAUQAAAPgFAMQgEAKgJAJIgHAGIgJAEIgJAEIgIACIAAAYIAKADIAPABIAKgBIAKgDIAKgEIAKgIIAGgJQAEgFACgFIAEgPQACgJgBgKIAAgpIAUAAIAAApQAAAMgDALQgBAKgDAHQgEAJgEAFIgIALQgGAGgIAFIgOAHIgQAEIgNABIgQgBgAtIAwIgNgDIgMgEIAAh5IATAAIAABBQAGgCAFgEQAGgDADgDQAGgGADgIQADgJAAgKIAAgUIATAAIAAAUQAAAPgEAMQgFAKgJAJIgHAGIgJAEIgJAEIgIACIAAAYIALADIAOABIAKgBIAKgDIALgEIAKgIIAFgJQAEgFACgFIAEgPQACgJAAgKIAAgpIAUAAIAAApQgBAMgCALQgCAKgDAHQgEAJgEAFIgIALQgGAGgHAFIgPAHIgPAEIgNABIgRgBgANPAvIgBgOQgBgHgDgGQgCgGgGgHQgEgFgIgFIghgXIgDAIQgCAFgBAEQgCAGAAAGIAAASIAAAaIgUAAIAAgaIABgQIABgLIACgKIADgIIADgIIAFgIIgPgmIATgGIAPAnIAOAJIAOALIAXg7IARAHIgXA/QAIAIAFAHQAGAIACAHQADAIABAIIABAPgAJ7AvIAAgTIBNAAIAAhIQAAgDgCgDQgBgDgCgDIgGgDIgGgBIgpAAIgCADIgCAGIgBAGQAAAGADADIAGAHQAEADAGABIAJADIgEASIgPgEQgIgDgGgEQgGgGgEgHQgEgGAAgLQAAgHACgHIAEgLQADgGAEgEIA0AAQAHAAAHADQAGACAGAGQAFAFACAGQADAGAAAIIAABbgAICAvIAAhrIgUAAIAAgUIAoAAIAAB/gAFHAvIAAhYQgBgFgBgDIgEgGIgHgEQgDgBgEAAIgqAAIAABrIgTAAIAAh/IA9AAQAIAAAHADQAHADAGAFQAFAGADAGQADAIAAAIIAABYgAC/AvIAAhrIgTAAIAAgUIAnAAIAAB/gAB5AvIAAhrIgTAAIAAgUIAnAAIAAB/gAgGAvIAAhYQAAgFgBgDIgFgGIgGgEQgDgBgEAAIgPAAQgHAAgEACQgGADgDAFQgDAEgCAHQgBAGgBAJIABAMIABAKIACAJIACALIABANIAAAQIgqAAIAAgTIAVAAIAAgKIgCgIIgBgHIgBgHIAAgJIAAgLIAAgLIADgKQACgEADgFIAFgGIgWAAIAAgUIBFAAQAHAAAIADQAHADAEAFQAGAGADAGQADAIAAAIIAABYgAjuAvIAAgTIAoAAIAAhFQAAgFgCgDIgDgHIgHgFQgDgCgFAAIgKACQgFABgFAEQgGAEgEAIQgFAIgCAMIgNBHIgUAAIAGgiIAFgYQACgKAAgIIgBgMIgDgMIgFgLIgGgLIARgJIAEAHIAEAHIACAIIACAJQAFgJAEgFQAGgFAFgEQAFgDAGgCQAGgBAGAAQAJAAAHAEQAHADAFAGQAFAFADAHQADAIABAIIAABYgAnlAvIAAhYQAAgFgCgDIgDgGIgHgEQgEgBgEAAIgOAAQgHAAgFACQgFADgDAFQgDAEgCAHQgCAGABAJIAAAMIABAKIACAJIABALIABANIABAQIgpAAIAAgTIAUAAIAAgKIgCgIIAAgHIgBgHIgBgJIAAgLIABgLIACgKQABgEAEgFIAFgGIgWAAIAAgUIBEAAQAJAAAHADQAHADAFAFQAFAGADAGQAEAIAAAIIAABYgAqbAvIAAgTIApAAIAAhFQgBgFgBgDIgEgHIgHgFQgDgCgEAAIgKACQgFABgGAEQgGAEgEAIQgEAIgDAMIgNBHIgTAAIAGgiIAEgYQACgKAAgIIgBgMIgCgMIgGgLIgFgLIARgJIAEAHIADAHIADAIIACAJQAFgJAEgFQAFgFAFgEQAFgDAGgCQAHgBAGAAQAIAAAHAEQAHADAGAGQAFAFADAHQADAIAAAIIAABYgAJEgRIAAgrIgSAAIAAgUIAmAAIAAA/gAA3gRIAAgrIgTAAIAAgUIAmAAIAAA/g");
	this.shape.setTransform(-25.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-8.4,173.2,16.9);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOgBCIAAgUIAoAAIAAhFQAAgEgCgDIgEgHIgGgFQgEgCgEAAIgKABQgFACgGAEQgFAEgFAIQgEAHgCANIgOBHIgTAAIAGgjIAFgYQACgJAAgIIgBgNIgDgLIgFgLIgGgLIARgJIAEAGIADAHIADAJIACAJQAFgJAEgFQAFgGAGgDQAFgDAGgCQAGgBAGAAQAIAAAIADQAHAEAFAFQAFAGADAHQADAHAAAIIAABZgALyBCIAAgUIBJAAIABgBIAAgCIgBgHQgBgEgCgDQgDgEgFgEIgMgIIgIgEIgKgFIgKgEIgJgFQgIgFgEgHQgEgIAAgMIAAgYIATAAIAAAYQAAAGADAEQACAEAEADIAKAGIAOAGIAXg1IAUAAIgaA9QAJAGAGAGIAIAMIADAKIABAJIgBANIgBAKgAJ+BCIgBgOQgBgHgDgGQgDgHgFgGQgEgGgIgFIghgWIgEAHQgCAEAAAFQgCAFAAAIIAAASIAAAaIgUAAIAAgaIABgQIABgNIACgKIADgHIADgIIAEgHIgOgnIATgFIAPAnIAOAJIAOAKIAXg6IARAGIgYA/QAJAHAFAIQAFAIADAIQADAIABAIIABAPgAHzBCIAAhsIgTAAIAAgTIAnAAIAAB/gAGzBCIAAhZQAAgEgCgDIgEgGIgGgEQgEgCgEAAIgOAAQgHAAgFADQgFACgDAFQgEAFgBAHQgCAGAAAIIABAMIABAKIACAKIABALIABANIABAQIgqAAIAAgUIAVAAIAAgJIgCgJIgBgHIgBgIIAAgIIgBgLIABgKIADgKQABgFADgEIAGgHIgWAAIAAgTIBEAAQAIAAAIADQAHADAFAFQAFAFADAHQADAHAAAIIAABZgADLBCIAAgUIAoAAIAAhFQAAgEgCgDIgEgHIgGgFQgEgCgEAAIgKABQgFACgGAEQgFAEgFAIQgEAHgCANIgOBHIgTAAIAGgjIAFgYQACgJAAgIIgBgNIgDgLIgFgLIgGgLIARgJIAEAGIADAHIADAJIACAJQAFgJAEgFQAFgGAGgDQAFgDAGgCQAGgBAGAAQAIAAAIADQAHAEAFAFQAFAGADAHQADAHAAAIIAABZgABYBCIAAhsIg9AAIAAgTIBiAAIAAATIgRAAIAABsgAgSBCIAAhsIgUAAIAAgTIAmAAIAAB/gAh/BCIAAgUIAoAAIAAhFQAAgEgCgDIgEgHIgGgFQgEgCgEAAIgKABQgFACgGAEQgFAEgFAIQgEAHgCANIgOBHIgTAAIAGgjIAFgYQACgJAAgIIgBgNIgDgLIgFgLIgGgLIARgJIAEAGIADAHIADAJIACAJQAFgJAEgFQAFgGAGgDQAFgDAGgCQAGgBAGAAQAIAAAIADQAHAEAFAFQAFAGADAHQADAHAAAIIAABZgAjpBCIAAhsIhMAAIAAgTIBgAAIAAB/gAk1BCIAAhIIAUAAIAABIgAmgBCIAAhsIgUAAIAAgTIAnAAIAAB/gAnkBCIAAhZQAAgEgCgDQgBgEgDgCIgGgEQgEgCgEAAIgwAAIAAgTIAwAAQAIAAAHADQAHADAGAFQAFAFADAHQADAHAAAIIAABZgAqdBCIAAgUIA/AAIAAhYIg/AAIAAgTIBTAAIAABrIARAAIAAAUgArQBCIAAhsIgTAAIAAgTIAnAAIAAB/gAsgBCIAAhsIg9AAIAAgTIBhAAIAAATIgRAAIAABsgAuOBCIAAhsIhMAAIAAgTIBgAAIAAB/gAvaBCIAAhIIAUAAIAABIgAK8ABIAAgrIgSAAIAAgTIAmAAIAAA+g");
	this.shape.setTransform(71.5,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-21.6,197.5,13.2);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOLBHQgIgDgFgEQgFgFgCgHQgDgFgCgHIgCgNIAAgMIAAg3IA7AAQAKAAAHAEQAGAFAEAHQAEAHACAIQACAJAAAKIgBAQIgEAPIgGAOIgJAKQgFAFgIACQgHACgKABQgKAAgHgEgAOBAPIABAQQABAIADAFQADAHAGADQAFADAIABQAJAAAGgDQAHgEAEgHQADgGACgIQACgJAAgLIgBgLIgCgLQgCgEgDgDQgEgDgGAAIgqAAgADmBJIgQgFIAAhsIARAAIAABgIAEABIAFAAIAFABIAFAAQALAAAJgFQAIgEAGgIQAFgIADgJQACgKAAgLIgBgMIgCgJIgFgEQgCgCgEAAIgGABIgEAEIgEAFIgDAHIgOgIIAFgKIAGgIQAEgEAFgCQAEgCAHAAQAFAAAGACQAFACAFAFQAEAFADAJQADAJAAAMQAAAPgEANQgEAOgIAIQgIAKgLAGQgMAFgOABQgLAAgJgCgAs2BJIgQgFIAAhsIARAAIAABgIAFABIAFAAIAEABIAFAAQAMAAAIgFQAJgEAFgIQAGgIACgJQADgKAAgLIgBgMIgDgJIgEgEQgDgCgEAAIgFABIgFAEIgDAFIgDAHIgPgIIAFgKQADgFAEgDQADgEAFgCQAFgCAGAAQAFAAAGACQAGACAEAFQAFAFACAJQADAJAAAMQAAAPgEANQgEAOgHAIQgIAKgMAGQgLAFgPABQgLAAgJgCgARMBJIAAgRIBDAAIAAg/IgBgGIgDgFIgEgDIgGgBIgkAAIgDADIgBAFIgBAGQAAAEACAEIAGAFIAJADIAIADIgEAQIgNgEQgHgCgFgEQgGgEgDgHQgEgGAAgIQAAgHACgGQACgFACgFQACgEAEgFIAuAAQAHABAFACQAGACAEAFQAFAEACAGQADAGAAAHIAABQgAQbBJIAAhOIgCgHIgEgFQgCgCgDgCQgDgBgEAAIgrAAIAAgSIArAAQAHAAAHADQAGADAFAEQAEAFADAGQADAHAAAHIAABOgANCBJIAAhfIgRAAIAAgSIAiAAIAABxgALABJIAAhxIA3AAQAIAAAGADQAGADAFAEQAEAFADAGQADAHAAAHIAABOgALRA4IA3AAIAAg9IgBgHIgDgFQgDgCgDgCIgHgBIgmAAgAIlBJIAAgRIA5AAIAAhOIg4AAIAAgSIBJAAIAABgIAPAAIAAARgAG4BJIAAgRIBDAAIAAg/QAAgDgBgDQgBgDgCgCQgCgCgDgBIgFgBIglAAIgCADIgCAFIAAAGQAAAEACAEIAGAFIAIADIAJADIgEAQIgNgEQgHgCgGgEQgFgEgDgHQgEgGAAgIQAAgHACgGIAEgKIAGgJIAuAAQAGABAGACQAGACAEAFQAFAEACAGQACAGAAAHIAABQgAFgBJQAAgIACgHQABgFADgGIAGgKIAIgKIAIgIIAIgJQAEgGACgFQADgFAAgFIgBgFQgBgEgCgCIg/AAIAAg0IARAAIAAAiIA5AAIADAEIADAGIACAIIABALQAAAIgDAHQgDAGgEAHIgKAMIgJAJIgGAIIgFAHIgDAJIAAALgABnBJIAAgRIBDAAIAAg/QAAgDgBgDQgBgDgCgCQgCgCgDgBIgFgBIglAAIgCADIgCAFIAAAGQAAAEACAEIAGAFIAIADIAJADIgEAQIgNgEQgHgCgGgEQgFgEgDgHQgEgGAAgIQAAgHACgGIAEgKIAGgJIAuAAQAGABAGACQAGACAEAFQAFAEACAGQADAGAAAHIAABQgAA0BJIAAhfIgRAAIAAgSIAiAAIAABxgAgHBJIAAhOIgCgHQgBgDgDgCQgCgCgDgCQgDgBgDAAIgrAAIAAgSIArAAQAHAAAGADQAGADAFAEQADAFADAGQADAHAAAHIAABOgAiQBJIAAgRIAjAAIAAg9IgBgHIgDgGIgGgEQgDgCgEAAIgJABQgFABgEAEQgFAEgEAHQgEAGgCALIgMA/IgRAAIAFgfIAEgUQACgKAAgHIgBgKIgCgKIgFgJIgFgLIAPgHIADAFIAEAGIACAIIACAIIAIgNIAJgIQAFgCAFgCQAFgBAGAAQAHAAAHADQAGADAEAFQAFAFADAGQADAHAAAHIAABOgAjsBJIAAhfIgRAAIAAgSIAjAAIAABxgAklBJIAAhOIgBgHIgEgFQgCgCgDgCIgHgBIgNAAQgGAAgEACQgFADgDAEQgDAEgBAGIgBAMIAAALIABAJIACAJIABAKIABALIAAAOIgkAAIAAgRIASAAIAAgIIgCgIIAAgHIgBgHIgBgHIAAgKIABgJIACgJIAEgHIAFgGIgUAAIAAgSIA9AAQAHAAAHADQAGADAEAEQAFAFADAGQACAHAAAHIAABOgAnZBJIAAhfIg2AAIAAgSIBWAAIAAASIgPAAIAABfgApsBJIgBgQIAAgMIgCgJIgCgJQgHACgEAEQgFAFgCAFIgDANIgBARIgRAAIABgWQACgKAEgIQAEgIAHgFQAHgGALgDIgBgIIgBgHIgBgJIAAgJIgZAAIAAgSIAqAAIABATIAAAOIABALIADAMIACANIACANIACAPIAAAQgAuZBJQAAgIACgHQABgFADgGIAGgKIAIgKIAIgIIAIgJQAEgGACgFQADgFAAgFIgBgFQgBgEgCgCIg/AAIAAg0IARAAIAAAiIA5AAIADAEIADAGIACAIIABALQAAAIgDAHQgDAGgEAHIgKAMIgJAJIgGAIIgFAHIgDAJIAAALgAwSBJIAAhfIgRAAIAAgSIAiAAIAABxgAxLBJIAAhOIgCgHQgBgDgCgCQgDgCgDgCQgDgBgDAAIgNAAQgHAAgEACQgEADgDAEQgDAEgBAGQgCAFAAAHIABALIABAJIABAJIACAKIABALIAAAOIglAAIAAgRIATAAIgBgIIgBgIIgBgHIgBgHIAAgHIgBgKIABgJIACgJIAEgHIAGgGIgUAAIAAgSIA9AAQAHAAAGADQAGADAFAEQAFAFACAGQADAHAAAHIAABOgAo2APIAAglIgQAAIAAgSIAhAAIAAA3gArBAPIAAglIgQAAIAAgSIAhAAIAAA3gAvXAPIAAglIgRAAIAAgSIAiAAIAAA3g");
	this.shape.setTransform(-28.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-7.4,237,14.9);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJFBTIAAh0IAUAAIAAB0gAOjAuIgNgDIgMgDIAAh6IAUAAIAABBQAFgCAFgDQAGgDADgEQAGgGADgIQADgIAAgLIAAgUIAUAAIAAAUQAAAPgFAMQgFALgIAIIgIAGIgJAFIgJADIgHACIAAAZIAKACIAPABIAKgBIAKgCIAKgFIAKgIIAGgJQADgDADgHIAEgPQABgIAAgLIAAgpIAUAAIAAApQAAANgDAKQgCAKgDAIQgDAIgEAGIgJAKQgFAHgIAEIgPAHIgPAEIgNABIgRgBgAJrAeQAKgFAHgHQAIgIAFgHQAEgHACgIQADgIAAgGIgBgNIgBgKIgBgHIgCgGIhMAAIAAgUIBZAAQADAFACAGIADANIACAPIABARQAAAIgDAKQgDAJgGAKQgGAKgJAKQgJAJgOAHgACtAuIgNgDIgMgDIAAh6IAUAAIAABBQAFgCAFgDQAGgDADgEQAGgGADgIQADgIAAgLIAAgUIAUAAIAAAUQAAAPgFAMQgFALgIAIIgIAGIgJAFIgJADIgHACIAAAZIAKACIAPABIAKgBIAKgCIAKgFIAKgIIAGgJQADgDADgHQACgGACgJQABgIAAgLIAAgpIAUAAIAAApQAAANgDAKQgCAKgDAIQgDAIgEAGIgJAKQgFAHgIAEIgPAHIgPAEIgNABIgRgBgAMVAtIAAhrIgUAAIAAgUIAnAAIAAB/gALPAtIAAhrIgTAAIAAgUIAnAAIAAB/gAGXAtIAAgTIBAAAIAAhYIg/AAIAAgUIBSAAIAABsIARAAIAAATgAFmAtIAAhYQAAgEgBgEQgCgDgDgDIgGgEQgDgBgEAAIgxAAIAAgUIAxAAQAIAAAHADQAHADAFAFQAFAGADAHQAEAHAAAIIAABYgABkAtIAAhYQAAgEgCgEIgEgGIgGgEQgEgBgEAAIgOAAQgHAAgFACQgFADgDAFQgEAEgBAHQgCAHAAAIIABAMIABALIACAJIABAKIABANIABAQIgqAAIAAgTIAVAAIAAgKIgCgIIgBgHIgBgHIAAgJIgBgLIABgLIADgKQABgEADgEIAGgHIgWAAIAAgUIBEAAQAIAAAIADQAHADAFAFQAFAGADAHQADAHAAAIIAABYgAgpAtIAAhrIgUAAIAAgUIAnAAIAAB/gAhqAtIAAhYQAAgEgBgEIgEgGIgHgEQgDgBgEAAIgPAAQgHAAgEACQgFADgEAFQgDAEgCAHQgBAHAAAIIAAAMIACALIABAJIACAKIABANIAAAQIgpAAIAAgTIAVAAIgBgKIgBgIIgBgHIgBgHIgBgJIAAgLIABgLIACgKQACgEADgEIAGgHIgXAAIAAgUIBFAAQAIAAAHADQAHADAFAFQAGAGADAHQADAHAAAIIAABYgAkoAtIAAhYQAAgEgCgEIgEgGIgGgEQgEgBgEAAIgqAAIAABrIgTAAIAAh/IA9AAQAIAAAIADQAHADAFAFQAFAGADAHQADAHAAAIIAABYgAn2AtIAAgTIBAAAIAAhYIg/AAIAAgUIBSAAIAABsIARAAIAAATgAonAtIAAhYQAAgEgBgEQgCgDgDgDIgGgEQgDgBgEAAIgxAAIAAgUIAxAAQAIAAAHADQAHADAFAFQAFAGADAHQAEAHAAAIIAABYgAqVAtIAAhYQAAgEgBgEIgEgGIgHgEQgDgBgEAAIgPAAQgHAAgEACQgFADgEAFQgDAEgCAHQgBAHAAAIIAAAMIACALIABAJIACAKIABANIAAAQIgpAAIAAgTIAVAAIgBgKIgBgIIgBgHIgBgHIgBgJIAAgLIABgLIACgKQACgEADgEIAGgHIgXAAIAAgUIBFAAQAIAAAHADQAHADAFAFQAGAGADAHQADAHAAAIIAABYgAtjAtIAAhrIgTAAIAAgUIAnAAIAAB/gAujAtIAAhYQAAgEgCgEIgEgGIgGgEQgEgBgEAAIgOAAQgHAAgFACQgFADgDAFQgEAEgBAHQgCAHAAAIIABAMIABALIACAJIABAKIABANIABAQIgqAAIAAgTIAVAAIAAgKIgCgIIgBgHIgBgHIAAgJIgBgLIABgLIADgKQABgEADgEIAGgHIgWAAIAAgUIBEAAQAIAAAIADQAHADAFAFQAFAGADAHQADAHAAAIIAABYgANXgTIAAgrIgSAAIAAgUIAmAAIAAA/gAsggTIAAgrIgTAAIAAgUIAmAAIAAA/g");
	this.shape.setTransform(15.4,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.3,-19.8,205.6,16.6);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)","rgba(255,255,255,0)"],[0,0.525,1],-61.8,-16,22.8,21).s().p("AppCWIAAprITTEqIh8KBg");
	this.shape.setTransform(-28.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-46.9,123.6,93.9);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-0.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-5.4,276.4,17.4);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A10A0IAAhnMArpAAAIAABng");
	this.shape.setTransform(0,4,0.992,0.096);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,3.5,277,1);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQMBpIAAgYIBQAAIAAhvIhQAAIAAgaIBoAAIAACJIAWAAIAAAYgANkBpIAAgYIBQAAIAAhvIhQAAIAAgaIBpAAIAACJIAVAAIAAAYgAKJBpIAAgYIAvAAIABgGIAAgGIgBgNIgBgNIgBgMIgDgQIgBgMIgBgKIgBgLIAAgMIghAAIAAgaIA6AAIAAARIAAANIABAKIAAAIIABAIIAAALIADAQIABAPIACANIAAAOIAAALIAAAJIgCAIIgCAIgAJCBpIAAhvQAAgGgCgDIgFgIQgEgEgEgCQgFgCgFABIgSAAQgIAAgHACQgGAEgEAGQgFAGgBAIQgCAIAAAKIAAAPQAAAIACAFIACANIACAOIABAQIABAUIg1AAIAAgYIAbAAIgBgNIgCgKIAAgJIgCgJIAAgMIgBgOIABgOIADgLIAGgLQADgFAFgDIgeAAIAAgaIBXAAQAKAAAJAFQAKAEAGAGQAHAHADAIQAEAKAAAKIAABvgAGABpIAAhvQAAgGgBgDQgCgFgEgDQgDgEgEgCQgFgCgFABIg1AAIAACHIgYAAIAAihIBNAAQALAAAJAFQAIAEAHAGQAGAHAFAIQADAKAAAKIAABvgADFBpIAAiHIgYAAIAAgaIAxAAIAAChgAArBpIAAgYIAzAAIAAhXQAAgGgCgEIgGgJIgIgGQgEgCgFAAQgGAAgGACQgIABgHAGQgGAEgGAKQgFAKgDAOIgSBbIgXAAIAIgsIAGgdQADgNgBgLQABgIgCgHIgEgOIgFgNIgIgOIAVgLIAEAHIAEAJIAEALQACAFAAAGQAGgLAGgHQAHgHAGgEQAHgEAHgCQAIgBAIAAQAKAAAJAEQAJAEAGAHQAHAHAEAJQAEAKAAAKIAABvgAkbBpIAAiHIhgAAIAAgaIB6AAIAAChgAl7BpIAAhbIAZAAIAABbgAnRBpIAAhvQAAgGgDgDIgEgIQgEgEgFgCQgEgCgFABIg9AAIAAgaIA9AAQAKAAAJAFQAJAEAHAGQAHAHADAIQAEAKAAAKIAABvgArNBpIAAgYIBcAAIABgDIAAgBIgBgJQgBgFgDgEQgDgFgGgFQgFgFgKgFIgLgGIgMgGIgMgGIgMgHQgLgFgEgJQgFgJAAgPIAAggIAYAAIAAAgQAAAHADAFQACAFAGAEQAFADAIADIASAIIAchDIAaAAIghBPQALAHAHAIIAKAOQADAHACAGIABAMIgBAQIgDAMgAtYBpQAAgLABgJQADgKADgHQADgHAGgIIAMgNIAMgLIALgOIAJgPQADgHAAgIIgBgIQgCgFgCgCIhZAAIAAhKIAYAAIAAAwIBQAAIAFAHQADADABAFIAEALIABAPQAAAMgFAJQgEALgHAIQgGAJgHAHIgNAOIgJALQgEAFgCAGQgDAGgCAHQgBAHAAAIgAwoBpIAAiHIhhAAIAAgaIB6AAIAAChgAyIBpIAAhbIAYAAIAABbgAMXAXIAAg1IgXAAIAAgaIAvAAIAABPgAhkAXIAAg1IgWAAIAAgaIAvAAIAABPgAvBAXIAAg1IgYAAIAAgaIAwAAIAABPg");
	this.shape.setTransform(0,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.1,-29,232.3,21);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3FBCA9").s().p("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");
	this.shape.setTransform(0.4,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.5,-1.2,274,24.2);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002A52").s().p("A0yRMMAAAgiXMAplAAAMAAAAiXg");
	this.shape.setTransform(0,0,1.262,1.273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168,-140,336,280);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("EAicAAAMhE3AAA");
	this.shape.setTransform(14,2,0.536,0.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBgIAAhOQAAghgogBIgXAAIAAhPIBGAAQAiAAAZAaQAdAeABA1IAABSg");
	this.shape_1.setTransform(-108.5,-20,0.536,0.536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2CfIAAjHQAAgngnAAIilAAIAAhPIDOAAQAqAAAaAdQAbAeAAAyIAADQgAiSCfIAAirIBhAAIAACrg");
	this.shape_2.setTransform(-123.9,-16.6,0.536,0.536);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxB8QAuABAPgOQASgRADg1IAEhLIiqAAIAAioIBbAAIAABZICwAAIgHCPQgGBogtAlQgmAhhXAAg");
	this.shape_3.setTransform(-94,-19,0.536,0.536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiVCfIAAhPICZAAIiijuIBxAAIBPB8QANgDAHgMQAHgOABgcIAAhDIBhAAIAABNQAAAugXAeQgVAcgmAKIBSB+g");
	this.shape_4.setTransform(-75.4,-16.6,0.536,0.536);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeCfIAAjHQAAgngnAAIh1AAIAAhPICdAAQAqAAAbAdQAbAeAAAzIAADPg");
	this.shape_5.setTransform(-56.7,-16.6,0.536,0.536);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2CfIAAjHQAAgngnAAIilAAIAAhPIDOAAQAqAAAaAdQAbAeAAAyIAADQgAiSCfIAAirIBhAAIAACrg");
	this.shape_6.setTransform(-37.7,-16.6,0.536,0.536);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBgIAAhOQABghgogBIgXAAIAAhOIBGAAQAiAAAZAZQAdAeABA1IAABSg");
	this.shape_7.setTransform(89.8,-20,0.536,0.536);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2CfIAAjHQAAgngnAAIilAAIAAhPIDOAAQAqAAAaAdQAbAeAAAyIAADQgAiSCfIAAirIBhAAIAACrg");
	this.shape_8.setTransform(124,-16.6,0.536,0.536);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXCfIAAhPIBCAAIAAh4QAAgngoAAIhgAAIAADuIhgAAIAAjuIgpAAIAAhPID4AAQA3AAAgAfQAiAggBA4IAADGg");
	this.shape_9.setTransform(3,-16.6,0.536,0.536);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRCfIAAjLQAAgjgnAAIgWAAIAAhPIBFAAQAiAAAZAaQAdAeAAA2IAADPg");
	this.shape_10.setTransform(20,-16.6,0.536,0.536);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA/CfIAAjGQAAgogoAAIhVAAIAADuIhhAAIAAk9IDfAAQArAAAaAdQAbAfAAAxIAADQg");
	this.shape_11.setTransform(37.3,-16.6,0.536,0.536);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABWCfIAAjGQAAgognAAIhDAAIAACCQAAAwgUAcQgWAgguAAIhKAAIAAhPIApAAQAOAAAFgHQAFgGAAgOIAAiEIg6AAIAAhPIEHAAQAqAAAaAdQAbAfAAAxIAADQg");
	this.shape_12.setTransform(59.7,-16.6,0.536,0.536);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhXCfIAAhPIBPAAIAAh3QAAgTgKgLQgJgKgQAAIgQAAIAAhPIA1AAQApAAAaAdQAbAeAAAzIAADPg");
	this.shape_13.setTransform(77.8,-16.6,0.536,0.536);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBgIAAhOQAAghgngBIgWAAIAAhOIBFAAQAiAAAZAZQAdAeAAA1IAABSg");
	this.shape_14.setTransform(-14.3,-20,0.536,0.536);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiPCfIAAhPICSAAIAAh3QAAgognAAIhrAAIAAhPIB5AAQA1AAAiAdQAjAeAAAyIAACBIAsAAIAABPg");
	this.shape_15.setTransform(105.1,-16.6,0.536,0.536);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AWVCtIAAizIBHAAIAACzgAsSA1QAfgFAVgSQAXgUABgcIgBgmIg8AAIAAg6IB+AAIAJDoIg/AAIgHg/IgCAAQgOAfgPAQQgWAWgbABgEAhMAB2IAAiuIiRAAIAAg6IDYAAIAADogAe7B2IAAh8IBGAAIAAB8gAdUB2IhIhtQgOAEgDAWIgLBTIhFAAIANhTQADgYAPgRQAPgTAWgGIhIhTIBSAAIBIBcIABAAQAJAAAEgQIANhMIBFAAIgQBNQgFAXgMANQgNAMgWAHIBHBkgAYDB2IA5iuIinAAIAAg6IEFAAIhNDogAUSB2IAAiuIhsAAIAAg6IDZAAIAAA6IgkAAIAACugAQYB2IAAg5IAzAAIAAhaQAAgbgdAAIgnAAIghCuIhHAAIAkiuIgrAAIAAg6IChAAQAoAAAYAXQAZAXAAApIAACRgAKsB2IAAiuIiRAAIAAg6IDYAAIAADogAIbB2IAAh8IBGAAIAAB8gAD/B2IBAiuIh0AAIAAh0IBGAAIAAA6ICLAAIhWDogAA8B2IAAg5IAyAAIAAhaQAAgbgdAAIgnAAIggCuIhGAAIAkiuIgrAAIAAg6ICfAAQApAAAYAXQAYAXAAApIAACRgAjhB2IAAg5IA6AAIAAh1IgzAAIAAg6IB6AAIAADogAlEB2IAAiuIiSAAIAAg6IDYAAIAADogAnWB2IAAh8IBHAAIAAB8gAxbB2IAAiuIiRAAIAAg6IDYAAIAADogAzsB2IAAh8IBGAAIAAB8gA33B2IAAg5IApAAIgqivIBJAAIAlCwIADAAQAZAAALgWQAJgQACgaIADhwIBJAAIgEBjQgGCFh0AAgA5fB2IAAiuIhMAAIAABfQAAAkgPAUQgQAXgiAAIg2AAIAAg5IAeAAQASAAAAgUIAAhhIgsAAIAAg6IEGAAIAADogEggmAB2IAAiuIhrAAIAAg6IDYAAIAAA6IgjAAIAACugAM1AOIAAhGIgmAAIAAg6IBtAAIAACAgApCAOIAAhGIglAAIAAg6IBsAAIAACAgAtpAOIAAhGIgmAAIAAg6IBtAAIAACAgA+CAOIAAhGIgmAAIAAg6IBtAAIAACAg");
	this.shape_16.setTransform(13.5,20.7,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-29.9,265.2,59.8);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAIA2gzIAIALIgrAoIArApIgIALgAg9AAIA3gzIAHALIgqAoIAqApIgHALg");
	this.shape.setTransform(9.4,9.5,1.515,1.515);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,1.7,18.8,15.7), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHMBxQgOgDgMgEIAAioIAbAAIAACUIAHACIAIABIAHABIAGAAQAUAAANgIQANgGAIgMQAJgLADgQQAEgPAAgSIgBgTQgBgIgDgFQgDgGgEgCQgFgCgFAAQgFAAgEACIgHAFIgFAJIgFAJIgXgMIAJgPQADgHAGgGQAGgFAHgDQAIgDAKAAQAIAAAJADQAJADAHAIQAGAIAFAOQAEANAAATQAAAXgGAVQgGAUgNAPQgMAPgRAKQgSAHgYABQgQAAgNgDgAqbByQgLgBgHgDQgJgBgHgDIAAioIAaAAIAABZIAPgIQAHgEAFgFQAJgIAEgKQAEgMAAgPIAAgbIAaAAIAAAbQAAAVgGAPQgGAQgMALIgKAJIgNAGIgMAEIgLADIAAAjIAOAEIAVABIANgBIAPgEIAOgHQAHgEAGgHIAIgLQAFgHADgJIAGgUQACgMAAgOIAAg4IAbAAIAAA4QAAARgDAOQgDAOgFALQgEALgGAJIgLAPQgIAIgKAHIgVAJQgLAEgKABIgSACQgNAAgKgCgAPZBxQAAgNACgJQACgKAFgIIAJgRIANgNIAMgOIANgOQAGgJADgGQAEgKAAgHIgBgKQgBgFgDgDIhiAAIAAhQIAbAAIAAA1IBYAAIAFAHQADADACAGIADAMQACAHAAAKQAAAMgFAKQgFALgHALQgHAJgIAIIgOAPIgJAMQgFAFgCAHQgEAHgBAHQgCAIAAAIgAMRBxIAAgbIBoAAIAAhiQAAgFgCgEQgBgEgDgDIgIgGQgEgBgEAAIg5AAIgDAFIgDAIIgBAJQAAAHAEAGQADAEAGADQAFAEAIACIANAEIgGAaIgVgHQgKgDgJgHQgIgGgGgKQgFgKAAgNQAAgLADgJQACgJAEgGQADgIAFgGIBJAAQAJgBAKAFQAJAEAGAGQAHAHAEAJQAEAKAAAKIAAB9gALDBxIAAh5QAAgGgCgFQgCgFgEgDQgDgEgFgCQgFgDgGABIhCAAIAAgbIBCAAQALgBAKAFQAKAEAHAIQAIAHAEAJQAEAKAAAMIAAB5gACnBxIAAivIBXAAQALgBAKAFQAKAEAHAIQAHAHAEAJQAEAKAAAMIAAB5gADCBWIBXAAIAAheQAAgGgCgFIgGgIQgEgEgFgCQgFgDgFABIg8AAgAAYBxIAAiUIgaAAIAAgbIA1AAIAACvgAiABxQAAgNACgJQACgKAEgIIAKgRIANgNIAMgOIAMgOIAKgPQAEgKAAgHIgBgKQgBgFgDgDIhiAAIAAhQIAaAAIAAA1IBZAAIAEAHQADADACAGQADAFABAHQABAHAAAKQAAAMgFAKQgFALgGALQgHAJgJAIIgNAPIgKAMQgEAFgDAHQgDAHgCAHQgBAIAAAIgAjnBxIAAiUIhqAAIAAgbICFAAIAACvgAlPBxIAAhkIAbAAIAABkgAmcBxIAAh5QAAgGgCgFQgCgFgEgDQgEgEgEgCQgFgDgGABIhDAAIAAgbIBDAAQALgBAKAFQAKAEAHAIQAHAHAFAJQADAKAAAMIAAB5gAs9BxIAAgbIA3AAIAAheIgCgLQgCgGgEgDQgDgFgFgCQgFgDgGAAIgOACQgIACgHAGQgIAFgGALQgGAKgDAQIgSBjIgbAAIAJgwIAGghQADgOAAgKQAAgIgCgJIgDgQIgHgOIgIgPIAXgNIAFAIIAFAKIAEAMIADAMQAGgLAHgIQAGgIAHgFQAHgEAJgBQAIgCAJAAQALAAAKAEQAKAFAHAHQAHAIAEAKQAFALAAALIAAB5gAvOBxIAAiUIhqAAIAAgbICFAAIAACvgAw3BxIAAhkIAbAAIAABkgAFuAXIAAg6IgZAAIAAgbIA0AAIAABVg");
	this.shape.setTransform(108.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,216.2,23.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(15,32.1);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.2,33);

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.2,12.8);

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4,47.9);

	this.instance_4 = new lib.Path_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-13.5,3.3);

	this.instance_5 = new lib.Path_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-13.5,3.3);

	this.instance_6 = new lib.Path_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(23.6,25.8);

	this.instance_7 = new lib.Path_1_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(9,40.3);

	this.instance_8 = new lib.Path();
	this.instance_8.parent = this;
	this.instance_8.setTransform(9,40.3);

	this.instance_9 = new lib.Path_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(23.6,25.8);

	this.instance_10 = new lib.Path_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(12.5,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,3.3,95,95);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// מציאות
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.5,119.2,1.988,1.988,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({scaleX:1.92,scaleY:1.92,x:27.6,y:118.7,alpha:1},16,cjs.Ease.get(-1)).to({regX:0.1,scaleX:1.67,scaleY:1.67,x:49.1,y:116.4},15).to({scaleX:1.37,scaleY:1.37,x:77,y:113.6,alpha:0},14).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// אפיון 2
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(212.2,141.2,1.941,1.941,0,0,0,0.2,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({regY:0.3,scaleX:1.84,scaleY:1.84,x:214.3,y:141.8,alpha:1},15,cjs.Ease.get(-1)).to({regX:0.3,scaleX:1.55,scaleY:1.55,x:220.1,y:142.8},15).to({regX:0.2,regY:0.2,scaleX:1.09,scaleY:1.09,x:229,y:144.4,alpha:0},15).wait(246));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// אפיון
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(167.4,230.1,2.289,2.289,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({scaleX:2.15,scaleY:2.15,x:166.5,y:229.6,alpha:1},15,cjs.Ease.get(-1)).to({scaleX:1.82,scaleY:1.82,x:164.2,y:228.6},15).to({regX:0,regY:0,scaleX:1.32,scaleY:1.32,x:160.4,y:226.9,alpha:0},15).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Spark
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(60.1,96.8,1.841,1.841,0,0,0,47.5,47.5);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.cache(-15,1,99,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(207).to({_off:false},0).to({x:60.2,y:96.7,alpha:0.699},10).wait(5).to({x:60.1,y:96.8,alpha:0},10).to({_off:true},1).wait(50).to({_off:false},0).to({x:60.2,y:96.7,alpha:0.699},10).wait(5).to({x:60.1,y:96.8,alpha:0},10).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Blue
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},29).to({scaleY:0.16,y:22.5},15).to({startPosition:0},290).to({scaleY:1,y:140},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// פרסום
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(206.8,84.6,1.745,1.745,0,0,0,0.2,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({scaleX:1.62,scaleY:1.62,x:207,y:85.1,alpha:1},15,cjs.Ease.get(-1)).to({regX:0.3,regY:0.3,scaleX:1.31,scaleY:1.31,x:207.8,y:86.8},15).to({regY:0.1,scaleX:0.85,scaleY:0.85,x:208.6,y:88.9,alpha:0},15).wait(269));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(56.9,236.9,1,1,0,0,0,9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:56.6},1,cjs.Ease.get(-0.4)).to({x:51.9},8).to({x:56.9},5).wait(1));

	// text
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190.7,234.4,1,1,0,0,0,108.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3FBCA9").s().p("A13DhIAAnBMArvAAAIAAHBg");
	this.shape.setTransform(170,236.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,214.4,280,45);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/SStIAAnuMA+lAAAIAAHug");
	mask.setTransform(159.8,119.8);

	// Date
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168.3,173.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165).to({_off:false},0).to({scaleY:0.86,y:202.4},7,cjs.Ease.get(-1)).to({scaleY:1,y:201},4).wait(174));

	// Line
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,181.1,0.004,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(155).to({_off:false},0).to({scaleX:1},10).wait(185));

	// בינתחומי
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(169,168.6,0.369,0.369);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,y:181.6,alpha:1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:180.6},3).to({startPosition:0},145).wait(50));

	// בפסיכולוגיה
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(168,157,0.449,0.449);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3).to({startPosition:0},2).to({startPosition:0},3).to({y:124.5},7).to({y:128},3).to({startPosition:0},139).to({startPosition:0},6).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// שיווק
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(142,175.1,2.123,2.123,0,0,0,0.1,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({scaleX:1.98,scaleY:1.98,x:142.7,y:174.8,alpha:1},15,cjs.Ease.get(-1)).to({scaleX:1.67,scaleY:1.67,x:144.2,y:174},15).to({regX:0.2,regY:0.3,scaleX:1.23,scaleY:1.23,x:146.2,y:173.1,alpha:0},15).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBZIgDg6IhbgaQgFgBgDgDQgGgEAMgEIBfgLIABhFIAEgFQAFgEAIAGIA3A5IBYgOQATgBgKAMIg4AsIAxAwIABAFQgCAFgKgBIhSgVIg0AwIgGADIgCAAQgGAAgDgGg");
	this.shape.setTransform(39.5,102.2,0.536,0.536);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20).to({_off:false},0).wait(330));

	// 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBLIgNgyIhJgVQgRgFANgFIBEgOIgHg2IACgEQADgDAHAFIA2AuIBBgJQAPgBgGAKIghAlIAsApIABAEQAAAEgIgBIhFgQIghAmQgCADgDAAQgEAAgEgFg");
	this.shape_1.setTransform(28.2,113.5,0.536,0.536);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(19).to({_off:false},0).wait(331));

	// 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBBIgUgrIhGgTQgQgEALgFIA8gNIgIgtQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQADgDAHAEIA4AmIA9gGIAGABQAGACgDAFIgXAhIApAjQAHAIgNgCIg+gLIggAeQgDADgCAAQgEAAgDgFg");
	this.shape_2.setTransform(25.7,126.1,0.536,0.536);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(18).to({_off:false},0).wait(332));

	// 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFA0IgYgeIg6gSIgGgCQgFgCAGgCIAlgUIAGgdIABgDQACgCAHADIAxAXIA3AAIAGAAQAFABgCAFIgIAaIAcAcQAHAHgMgBIg0gEIgfAWQgDACgDAAQgCAAgDgEg");
	this.shape_3.setTransform(33.6,137,0.536,0.536);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(17).to({_off:false},0).wait(333));

	// 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAhIgRgTIgngJIgEgCQgEgBAFgCIAcgNIABgTIABgCQACgCAEACIAjAOIAlgDIAEAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAIgDATIARAQQAFAEgJAAIgkABIgWAOIgDACQgCAAgCgDg");
	this.shape_4.setTransform(43.1,142.3,0.536,0.536);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(16).to({_off:false},0).wait(334));

	// 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAVIgMgLIgWgGIgCAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABAAABgBIARgJIADgLIAAgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAVAGIAYgCIACAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIgEAMIAMAJQACADgFAAIgWACIgQAJIgCABIgDgBg");
	this.shape_5.setTransform(51.6,144,0.536,0.536);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(15).to({_off:false},0).wait(335));

	// 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAOIgIgGIgNgFIgCAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIAIgGIAFgHIABgBIACAAIANADIAQgCIABAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABgBAAIgBAGIAFAIQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgNACIgMAHIgBAAIgCAAg");
	this.shape_6.setTransform(57.6,144,0.536,0.536);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(14).to({_off:false},0).wait(336));

	// logo
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(185.4,139.6,0.262,0.262);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},14).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.7,131.8,70.3,15.7);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(168.3,113.3);

	// Layer 45
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(442.9,119.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},189,cjs.Ease.get(-1)).to({x:-46.3},20,cjs.Ease.get(-1)).to({_off:true},1).wait(54).to({_off:false,x:442.9},0).to({x:-46.3},21,cjs.Ease.get(-1)).wait(65));

	// Second Text
	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.4,19.5,1,1,0,0,0,20,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:164},164).to({y:-10.5,startPosition:173},9).to({startPosition:300},127).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(87,50,1,1,0,0,0,90,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:29},29).to({regX:90.3,regY:42.8,scaleX:0.48,scaleY:0.48,x:213.3,y:-20.3,startPosition:39},15).to({startPosition:39},290).to({regX:90.4,regY:42.6,alpha:0,startPosition:49},10).to({startPosition:54},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.7,138.8,70.3,15.7);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 40 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6SVuIAAqCMA0lAAAIAAKCg");
	mask.setTransform(167.9,139);

	// btn
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.4,8.1,0.786,0.786,0,0,0,10.1,12.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169).to({_off:false},0).to({scaleY:0.7,y:79.3,startPosition:10},7,cjs.Ease.get(-1)).to({scaleY:0.79,y:58.1},3).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sprk
	this.instance = new lib.Symbol18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.2,29.5,1,1,0,0,0,45,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(350));

	// Logo
	this.instance_1 = new lib.Symbol17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.9,9.7,1,1,0,0,0,5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(350));

	// Blue Hard
	this.instance_2 = new lib.Symbol16("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.7,12,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(350));

	// Btn
	this.instance_3 = new lib.Symbol15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(46,51,0.816,0.816,0,0,0,15,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(350));

	// H2
	this.instance_4 = new lib.Symbol("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.8,0.7,1,1,0,0,0,7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(350));

	// מציאות
	this.instance_5 = new lib.Symbol22("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(38.5,167.1,0.833,0.833,0,0,0,15,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(350));

	// אפיון 2
	this.instance_6 = new lib.Symbol21("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(14.2,-2.4,0.833,0.833,0,0,0,7.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(350));

	// אפיון
	this.instance_7 = new lib.Symbol20("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(50.8,8.2,0.833,0.833,0,0,0,30.1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(350));

	// פרסום
	this.instance_8 = new lib.Symbol13("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(31.4,139.2,0.833,0.833,0,0,0,9.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(350));

	// שיווק
	this.instance_9 = new lib.Symbol2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(51.2,-14,0.833,0.833,0,0,0,25,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(350));

	// Pic
	this.instance_10 = new lib.bgjpgcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-7,-5,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(350));

	// Bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002A52").s().p("A6SV4MAAAgrvMA0lAAAMAAAArvg");
	this.shape.setTransform(168.5,140,0.998,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(350));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-5,349.1,290.6);


// stage content:
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_684 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(684).call(this.frame_684).wait(16));

	// Main
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.8,20.7,1,1,0,0,0,30,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(700));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.8,135.7,349.1,290.6);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Path.png?1494750137336", id:"Path"},
		{src:"images/Path_0.png?1494750137336", id:"Path_0"},
		{src:"images/Path_1.png?1494750137336", id:"Path_1"},
		{src:"images/Path_1_0.png?1494750137336", id:"Path_1_0"},
		{src:"images/Path_1_1.png?1494750137336", id:"Path_1_1"},
		{src:"images/Path_1_2.png?1494750137336", id:"Path_1_2"},
		{src:"images/Path_2.png?1494750137336", id:"Path_2"},
		{src:"images/Path_2_0.png?1494750137336", id:"Path_2_0"},
		{src:"images/Path_3.png?1494750137336", id:"Path_3"},
		{src:"images/Path_4.png?1494750137336", id:"Path_4"},
		{src:"images/Path_5.png?1494750137336", id:"Path_5"},
		{src:"images/bgjpgcopy.jpg?1494750137336", id:"bgjpgcopy"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;