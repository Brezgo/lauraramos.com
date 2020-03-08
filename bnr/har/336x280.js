(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

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


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#16101A").s().p("AgEAYQgIAAgCgDQgCgEADgFIAEgVQABgNAOgBQAJgBABAGQAAAEgBAJQgCACgCAPQgBAMgNAAIgBAAg");
	this.shape.setTransform(31.3,23.2,0.349,0.349);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16101A").s().p("AgHAbQgIgBgBgEIABgLQADgDACgTQABgQARABQAJAAAAAHIgDALQgDAGAAAQQgCANgPAAIgBAAg");
	this.shape_1.setTransform(-18,21.7,0.349,0.349);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#16101A").s().p("AgOAXQgDgEAEgGIADgXQABgOAOgCQAJgBACAFQABAEgCAJQgCACgCASQgBAOgOACIgCAAQgGAAgCgEg");
	this.shape_2.setTransform(9.1,21.7,0.349,0.349);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#16101A").s().p("AgOAXQgCgEADgHIADgWQACgOANgCQAJgBACAFQABAEgCAKQgCACgCARQgBAPgOABIgDAAQgGAAgBgEg");
	this.shape_3.setTransform(-29,21.7,0.349,0.349);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#16101A").s().p("AgMAwQgHAAgBgFIABgIIAOhEQACgQAOACQAKABgBAGIgCALIgNBCQgBAIgEACIgIABIgEAAg");
	this.shape_4.setTransform(3.2,22.4,0.349,0.349);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#16101A").s().p("AgLAwQgJgCABgGIADgLQAJgqADgVQABgJAEgDQAEgCAJABQAHABAAAFIgBAJIgNBDQgDAOgKAAIgFgBg");
	this.shape_5.setTransform(-23.7,22.4,0.349,0.349);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#16101A").s().p("AgZAwQgJgCABgHIAFgNIACgWQABgMAFgIIADgFQABgCgCgDQgJgPACgDQACgDATABQAFAAAOgCQALAAAHAHQgWAIgKAUQgGAOgCAbQAAAMgDAEQgCAFgHAAIgGgBgAAhgpIABAAIAAACIgBgCgAAhgpIAAAAg");
	this.shape_6.setTransform(19.8,22.4,0.349,0.349);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#120D16").s().p("AAHAwQgGgBgBgEIACgJIAHglQAEgXgXgDIgPACQgJAAAAgJQAAgKAKgBQAFgBALABQAbAAAKALQAJALgFAaIgIAmQgBAJgGABIgLgBg");
	this.shape_7.setTransform(0.9,22.4,0.349,0.349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#120D16").s().p("AAJAwQgJgBAAgGQADgHAAgEIAFgfQADgNgFgHQgFgHgMgBIgOABQgIAAAAgHQAAgKAJgCIAPAAQAcAAAJAKQAJALgEAbIgGAhQgCAOgNAAIgDAAg");
	this.shape_8.setTransform(25.3,22.4,0.349,0.349);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#120D16").s().p("AAMAvQgJgDACgIQAEgJAAgEIAEgXQADgOgGgIQgGgHgPgBIgRACQgJABAAgKQAAgKALgBIARAAQAfABAKAMQAKALgGAeIgDAVIgFAQQgDAGgGAAIgHgCg");
	this.shape_9.setTransform(32.7,22.4,0.349,0.349);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#120D16").s().p("AgiAwQgFgBAAgHQAAgMAOACQAgADAGgiQAFgYgXgEIgMABQgHAAABgIQAAgIAHgCQAEgBANAAQAgACAFAXQAJAigeAXQgRAPgYgCIgGAAIgEAAg");
	this.shape_10.setTransform(-4.1,22.4,0.349,0.349);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#120D16").s().p("AgeAxQgKgBAAgIQACgMANACQAXADAKgVQAJgQgFgLQgGgMgRAAQgIAAgEgGIgGgHQAkgSAYAYQATAUgUAiQgQAdgoAAIgEAAgAgegpIABABIgBABgAgdgoIAAAAg");
	this.shape_11.setTransform(22.1,22.4,0.349,0.349);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#16101A").s().p("AgPA+QgFgBABgFIACgJQABgHAHgJIAKgOQAKgQgFgGQgEgIgSgBIgNACQgIAAACgKIACgWQADgMAKgFQAFgDAGABQAHABgCAJQgFASAJADIAUAAQAKAAAEACQAEAEgEANQACAOgOAVQgRAagCALQgBAFgGAAQgEAAgHgCg");
	this.shape_12.setTransform(15.1,21.9,0.349,0.349);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#120D16").s().p("AgLA+QgIgCACgFIADgKQABgGAHgIIAJgNQALgRgFgHQgEgIgTAAIgWAAIAJgmQACgHAFgDQAEgBAHAAQAIABABAFQAAACgCAHQgFAMAGADQADACAKgCQATgDAEAJQADAGgDASQgCALgMATQgNATgCALQgBAGgGABIgKgCg");
	this.shape_13.setTransform(-10.5,21.9,0.349,0.349);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#120D16").s().p("AgnAxQgGAAABgJQAAgIAGgBIAMgBQATABAHgCQAKgFABgUQACgRgFgHQgGgKgRACIgJAAQgFgBgBgFQgBgJAPgEQAbgGAPAOQAPAOgEAcQgBAFgEAKQgCAJAMAGQAFACgCAGQgDAHgIAAIgjABIgbgBIgJACIgCgBg");
	this.shape_14.setTransform(-15.8,22.4,0.349,0.349);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#16101A").s().p("AgaAtQgPgGgEgOQgDgJAEgRQAEgTAAgIQACgYAaAGIgKA2QgCAOALAGQALAFAIgHQAJgHAEgMIADgWQABgLgHgBQgJABgEgBQgFgCACgEQAEgGAAgCIASgGQAKgCAIAIQAHAHAAAKIgDATQgFAYgKAKQgSATgTAAQgJAAgJgDg");
	this.shape_15.setTransform(-20.9,22.4,0.349,0.349);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#16101A").s().p("AgXAxIgPgCQgIgCABgIQAAgJAIABIALABQAtABADgjQABgRgMgFQgMgHgGAIQgLANAPAJQADACAAADQAAADgCAEQgFAFgMgCQgPgEAAgLIAAgVQABgMAJgFQAYgPAdAQQAUAJgDAaQgCAYgUAQQgTAOgWAAIgGAAg");
	this.shape_16.setTransform(-7.4,22.4,0.349,0.349);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#16101A").s().p("AgrAwQgIgCABgHIAEgLQAGgWAFgFQAXgVgTgYQAUgJAKAOIAOAYQAGgCAIgTQAGgPASAGQAAAHgUAlQgOAZAYAVQgZAIgKgRQgHgXgIgHQgIADgDAJIgDAPQgCAQgMAAIgGgBg");
	this.shape_17.setTransform(11.6,22.4,0.349,0.349);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#120D16").s().p("AAVAwQgHgBgBgFIACgJIAHgpQADgSgSgDQgPgCgDASIgJAxQgDAPgRgDQgIgCABgFIADgKQAIggABgQQAEgkAfAGQAgAAAKALQAJALgGAeIgGAgQgCAMgMAAIgEgBg");
	this.shape_18.setTransform(-26.6,22.4,0.349,0.349);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#120D16").s().p("AgrAsQgFgFAGgfIAEgRQAFgbAVgJQAUgJAYAOQAOAIAAARIgDATQgFAigGAGQgHAFggAAQggAAgEgFgAgNgPIgIAsQAzAEgKguQgDgOgQgBIAAAAQgLAAgDANg");
	this.shape_19.setTransform(-31.8,22.4,0.349,0.349);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#16101A").s().p("AANAwIgLABQgGABgBgHQgDgKAQgDQAJgCAFgXQAGgVgGgHQgMgNgJASQgMAYgJAYIgHAPQgFAHgJgEQgJgEACgHIAHgMQALgVgEgkQgCgLAHgEQAHgEAEAHQAGAKAGgBQAEgBAIgGQAUgIAMAIQAMAJgBAWQgBALgEAYQgBAPgHAGQgEAFgIAAIgLgCg");
	this.shape_20.setTransform(28.7,22.4,0.349,0.349);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#120D16").s().p("AgnAwIgJAAQgFgCgBgFQAAgEACgDIAHgFQAPgHADgTQADgTgMgMQgFgGADgEQABgCAGgDQAHgEAKAAIAQAAQAYAAAFABQAPACAFAMQAHAQgFAVQgDANgHAZQgBAFgFAAIgKAAQgFgBgBgDIAAgJIAIgoQADgUgQgDQgKgDgDAGQgDADgBALIgIAlQgFAWgXAAIgCAAg");
	this.shape_21.setTransform(5.9,22.4,0.349,0.349);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#93D053").s().p("AgtArQgSgQgBgYQgBgZASgRQASgRAcgBQAbAAAUARQATARAAAYQgBAYgSAQQgRAQgcABIgBAAQgbAAgSgPg");
	this.shape_22.setTransform(-38.6,22.1,0.349,0.349);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#93D053").s().p("AgtAqQgTgRgBgXQgBgYATgRQATgSAbAAQAbgBAUARQATARABAYQABAYgVARQgTASgbAAQgagBgTgQg");
	this.shape_23.setTransform(38.6,22.1,0.349,0.349);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4B4646").s().p("AhtJxIiei1IhgC4QgSgOgWgZIgjgqIllmYQgLgLgBgHQgBgJAKgJQAMgOAGgFQALgJASALQA6AiBVAvICPBQIAMAGQAIADAKgEIhRhcQgRgUACgQQACgQAWgPQAGgEAGACIAKAFQBJAoAaAQQALAGAHgBQAGgCAIgKQEFlOEmjxQCSh5CNhPQANgHAHADQAHACAGALQAEAHAKANQAFAMgOAMQhXBMhtBxQibChiMC9QhSBwgmBBQgiAogGAdQAngoAPgcICNimQDXj2DjixQB6hfB7hIQAOgIAEAAQAKgCAGANQAEAIALAPQAGAOgRAPQjFCti5DiQiuDUiSD5QhPCHheC6QgHAQgGAAIAAAAQgGAAgKgLg");
	this.shape_24.setTransform(10.5,-2,0.349,0.349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-24.1,81.7,48.3);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AgHApQgCgDAAgEQAAgFACgDQADgDAEABQAFgBACADQADADAAAFQAAAEgDADQgDACgEABQgDgBgEgCgAgGAOIgDg5IATAAIgDA5g");
	this.shape.setTransform(0.1,0.1,1.911,1.911,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-8.3,5.6,16.7);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AgHApQgCgDAAgEQAAgFACgDQADgDAEABQAFgBACADQADADAAAFQAAAEgDADQgDACgEABQgDgBgEgCgAgGAOIgDg5IATAAIgDA5g");
	this.shape.setTransform(0.2,0.2,1.212,1.212,-30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-5,7,10);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AgHApQgCgDAAgEQAAgFACgDQADgDAEABQAFgBACADQADADAAAFQAAAEgDADQgDACgEABQgDgBgEgCgAgGAOIgDg5IATAAIgDA5g");
	this.shape.setTransform(-0.2,0.2,1.927,1.927,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-8.3,7.7,16.8);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AgCArIAEgYIgLAAIgEAYIgNAAIAFgYIgOAAIAAgMIAQAAIADgNIgPAAIAAgMIARAAIAEgYIANAAIgEAYIAKAAIAFgYIAMAAIgEAYIAOAAIAAAMIgQAAIgDANIAPAAIAAAMIgSAAIgEAYgAgGAHIALAAIACgNIgKAAg");
	this.shape.setTransform(0,0,0.83,0.83,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3.6,6.6,7.4);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AgCArIAEgYIgLAAIgEAYIgNAAIAFgYIgOAAIAAgMIAQAAIADgNIgPAAIAAgMIARAAIAEgYIANAAIgEAYIAKAAIAFgYIAMAAIgEAYIAOAAIAAAMIgQAAIgDANIAPAAIAAAMIgSAAIgEAYgAgGAHIALAAIACgNIgKAAg");
	this.shape.setTransform(0,0,0.694,0.694,-15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.3,5,6.7);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AgCArIAEgYIgLAAIgEAYIgNAAIAFgYIgOAAIAAgMIAQAAIADgNIgPAAIAAgMIARAAIAEgYIANAAIgEAYIAKAAIAFgYIAMAAIgEAYIAOAAIAAAMIgQAAIgDANIAPAAIAAAMIgSAAIgEAYgAgGAHIALAAIACgNIgKAAg");
	this.shape.setTransform(0,0,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.9,7.5,9.8);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#10D174").s().p("AhcJhQhDgDgjgmQgjgmADhDQADhCAnghQAmghBEAEQBEADAiAmQAjAlgDBBQgDBBgoAjQgjAfg5AAIgNAAgAi6C9IAEg7QADhOAlg3QAjg3Bbg7QBYg5AeglQAdgkACgyQADgyglgdQglgehFgEQh5gGigBHIhPi1QC7hcDIALQClAJBfBVQBfBUgHCGQgGBagrA9QgrA9h2BNQhRAzgWAeQgWAdgDAwIgCAxg");
	this.shape.setTransform(4,-4.4,0.17,0.17,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-15,13.6,20.4);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#10D174").s().p("AhcJhQhDgDgjgmQgjgmADhDQADhCAnghQAmghBEAEQBEADAiAmQAjAlgDBBQgDBBgoAjQgjAfg5AAIgNAAgAi6C9IAEg7QADhOAlg3QAjg3Bbg7QBYg5AeglQAdgkACgyQADgyglgdQglgehFgEQh5gGigBHIhPi1QC7hcDIALQClAJBfBVQBfBUgHCGQgGBagrA9QgrA9h2BNQhRAzgWAeQgWAdgDAwIgCAxg");
	this.shape.setTransform(-2.4,0,0.131,0.131,-30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-7.7,11.6,15.6);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#10D174").s().p("AhcJhQhDgDgjgmQgjgmADhDQADhCAnghQAmghBEAEQBEADAiAmQAjAlgDBBQgDBBgoAjQgjAfg5AAIgNAAgAi6C9IAEg7QADhOAlg3QAjg3Bbg7QBYg5AeglQAdgkACgyQADgyglgdQglgehFgEQh5gGigBHIhPi1QC7hcDIALQClAJBfBVQBfBUgHCGQgGBagrA9QgrA9h2BNQhRAzgWAeQgWAdgDAwIgCAxg");
	this.shape.setTransform(-4.2,0,0.226,0.226);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-13.8,16.7,27.6);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak9AKQgKAAAAgKQAAgDADgDQADgDAEAAIJ7AAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(0,0,0.381,0.381);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABYBmIi9i9QgDgDAAgEQAAgEADgEQAHgFAHAFIC9C/QADADAAADQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(-8.5,3.6,0.381,0.381);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhlBnQgDgDAAgEQAAgFADgDIC9i9QADgDAEAAQAEAAADADQADACAAAFQAAAEgDADIi9C+QgDACgEAAQgEAAgDgCg");
	this.shape_2.setTransform(-8.5,-3.6,0.381,0.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-7.6,25,15.3);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AOXBUIAwgHIgqibIAtAAIAjCQQAMgIAGgOQAGgNACgWIAIhXIAtAAIgIBRQgCAagHARQgVA0hEAMIg7AJgAwRBrQgHgHAAgMQAAgMAHgGQAHgHAMABQAMgBAHAHQAHAGAAAMQAAAMgHAHQgHAGgMAAQgMAAgHgGgAIKBtIAAgjQAYACAZABQAZgBAIgSQAEgLAAgQIAAgfQAAgigSgJQgIgEgLAAQgSAAgfAEIAAgjQAagEAdAAQARABAOAFQANAEAJAJQAIAIAFAMQALAUgBAbIAAAWQAAAOgBALQgCAMgFAMQgFALgIAIQgJAJgOAEQgOAGgSAAQghgBgWgDgAF/BwIgZgCIgHgBIAAghQAiACAiAAQAOAAAHgHQAGgGAFgNQACgJAAgLIABgRIgBgMIAAgMIgCgMIgFgKQgCgEgEgEQgIgHgNAAQgJAAgHADQgHADgDADQgDAEgCAEQgDAHAAAHQAAAGAEAGQACAFAEADQAIAGAHACIAGABIgIAhIgIgBQgUgDgKgEQgegOAAgnQAAgPAFgMQAFgNAHgGQAJgIAKgFQATgJAYAAQAMAAALADQAKACALAHQAKAGAIAKQAIALAFASQAFARAAAUQAAAUgCAOQgCAOgFAKQgDAKgGAHQgGAIgGAFQgHAEgIADQgPAGgTAAIglgBgAkrBqQgOgHgLgMQgKgLgGgTQgGgTAAgXIAAhdIAtAAIAABdQAAAfAJAPQAHAPASABQASgBAIgOQAJgPAAggQAAgegFgPQgEgMgMgDIgNgBIgJABIAAghQAKgEAMAAQAXABAOAIQAdASAABGQAAAvgVAZQgVAagnAAQgRgBgOgGgAMuBuIAoibIhjAAIAAhJIAtAAIAAAoIBjAAIAAAdIgpCfgADoBuIApibIhjAAIAAhJIAsAAIAAAoIBkAAIAAAdIgqCfgAhIBuIAAgiIBUAAIAAhZQAAgigkAAQgUAAgVACIgHACIAAgkQAVgDAgAAQAvABAPASQAJAKACAMQACAMABAQIAABZIAVAAIAAAigAm0BuIAAi8IAsAAIAAC8gAoPBuIAAh7QgBgigkAAIgZABIAACcIgtAAIAAi5QALgDAXgBQAVgDASAAQASAAANADQAMABAJAFQAIAEAFAGQAGAFACAJQADAHACAJIABAUIAAB7gAuVBuIAAi5QALgDAWgBQAVgDAVAAQAoAAASAOQASANAAAdIAACIgAtoguIAAB6IA9AAIAAhmQAAgNgLgEQgJgEgRAAIgYABgAiYAuIAAh8IAsAAIAABWIgdAmgArSAuIAAh8IAsAAIAABWIgdAmgAwTAnIAAgLQAAgOAGgLQAGgJAQgMQAQgLAFgHQAEgHAAgIQAAgKgHgFQgHgEgNAAQgVAAgcANIgRgfQAhgTAlABQAeAAARAOQASAPAAAXQABARgIAMQgHAKgVAPQgOAKgEAFQgDAGAAAJIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-11.8,216.7,23.7);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("ACgBwIAAgjQAJADAGAAQAGAAADgCQAEgCACgDQADgHAAgJIAAhhIgVABIAAghQAtgHAsABQAhgBAQAJQAJAEAFAGQAFAFADAIQADAJABAIIABAUIAAB7IgtAAIAAh7QAAgiglAAIgSABIAABkQAAAhgRAOQgGAFgKAEQgKACgMAAQgNAAgJgDgASBBxIAAh7QAAgiglAAIgfACIgbACIgLABIAAghQAKgCAXgCQAWgCASAAQASAAAMACQAMACAJAEQAIAEAGAGQAFAFADAIQADAJABAIIABAUIAAB7gAQXBxIAAh4IAtAAIAAB4gAO/BxIg4heQgHADgCAGQgDAGgBAKIAABFIgsAAIAAhEIABgNQAAgGADgGQACgHAEgGQAEgFAIgEQAGgEALgEIgrhCIAzAAIA4BdQAHgDACgGQADgGAAgJIAAhFIAtAAIAABEQAAAYgKANQgEAFgHAFQgHAEgKAEIAqBCgAKPBxIAAi5QALgCAWgCQAWgCAUAAQApAAARANQASANAAAdIAACIgAK8grIAAB5IA9AAIAAhlQAAgNgKgEQgJgEgSAAIgYABgAHqBxIg4heQgIADgCAGQgCAGgBAKIAABFIgtAAIAAhEIABgNQABgGADgGQABgHAEgGQAFgFAHgEQAHgEAKgEIgqhCIAzAAIA4BdQAHgDACgGQADgGAAgJIAAhFIAsAAIAABEQABAYgLANQgEAFgGAFQgIAEgJAEIAqBCgAgXBxIAAi5QAKgCAWgCQAWgCATAAQAqAAARANQASANAAAdIAACIgAAVgrIAAB5IA9AAIAAhlQAAgNgLgEQgIgEgSAAIgYABgAjkBxIAAgjIAjAAIAAhDQAAgZgFgLIgFgJQgHgJgPAAQgHAAgGADQgGADgEAFQgJAJgEAIIgBACIgLB+IgsAAIALh3IABgOQAAgagLgeIArAAIAFANIADAQIADAAIACgDIAGgIQAFgFAFgEQAGgEAKgEQALgEANABQAMAAAKAEQALAGAGAHQAHAIADAMQAIATAAAbIAABsgAoXBxIgRi9IArAAIAIBeIAEABQAMAAAGgHQAFgGACgNIAFhFIAqAAIgFBEQgEA5g4AAIgIAAIACAdIAwAAQAZABANgUQANgSADgiIAGhTIArAAIgHBRQgCAcgFAQQgUBAhHAAgAqVBxIAoiaIhjAAIAAhJIAtAAIAAAmIBjAAIAAAdIgpCggAtBBxIAAgjIAjAAIAAhDQAAgZgFgLIgFgJQgIgJgOAAQgHAAgGADQgHADgEAFQgJAJgDAIIgCACIgKB+IgsAAIALh3IAAgOQAAgagKgeIArAAIAEANIAEAQIACAAIACgDIAHgIQAEgFAGgEQAGgEAKgEQAKgEANABQANAAAKAEQALAGAGAHQAGAIAEAMQAIATAAAbIAABsgAytBxIAAi5QALgCAWgCQAVgCAVAAQAoAAASANQASANAAAdIAACIgAyAgrIAAB5IA9AAIAAhlQAAgNgLgEQgJgEgRAAIgYABgAvqAxIAAh9IAsAAIAABXIgdAmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.8,-11.5,239.6,23.1);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("Ak1BoQgHgHAAgLQAAgNAHgGQAHgGAMgBQAMABAHAGQAHAHAAAMQAAALgHAHQgHAGgMABQgMgBgHgGgACgBqIgQi8IArAAIAIBeIAEABQAMgBAGgGQAFgGABgNIAGhFIAqAAIgFBEQgFA5g3AAIgIgBIACAfIAwAAQAYAAANgUQAOgSACgiIAHhTIArAAIgHBSQgCAagFAQQgUBAhHAAgAhPBqIAAh6QAAgiglAAIgYABIAACbIgtAAIAAi4QALgDAWgCQAWgCASAAQASAAANACQAMACAIAFQAJAEAFAGQAFAFADAJQADAHABAJIABAUIAAB6gAk3AjIAAgLQAAgNAGgLQAGgKAQgLQAQgLAFgHQAEgHAAgJQAAgIgHgFQgHgGgMAAQgWABgcAOIgQghQAggRAlgBQAeAAASAPQASAOAAAYQAAAQgHAMQgIAMgUAOQgPAKgDAGQgEAFAAAIIAAAJgABLgeIgGhMIApAAIgGBMgAANgeIgGhMIApAAIgGBMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-11,70.3,22.1);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AFMBwIAAgjQAJADAGAAQAFAAAEgCQAEgCABgDQADgHAAgJIAAhhIgVABIAAghQAtgHAtABQAhgBAQAJQAIAEAGAGQAFAFADAIQADAJABAIIABAUIAAB7IgtAAIAAh7QAAgiglAAIgSABIAABkQAAAhgRAOQgGAFgKAEQgKACgNAAQgMAAgJgDgAjkBwIAAgjQAJADAGAAQAFAAAEgCQAEgCABgDQADgHAAgJIAAhhIgVABIAAghQAtgHAtABQAhgBAQAJQAIAEAGAGQAFAFADAIQADAJABAIIABAUIAAB7IgtAAIAAh7QAAgiglAAIgSABIAABkQAAAhgRAOQgGAFgKAEQgKACgNAAQgMAAgJgDgAKVBxIAAh7QAAgiglAAIgfACIgcACIgKABIAAghQAKgCAXgCQAVgCATAAQASAAAMACQAMACAJAEQAIAEAGAGQAFAFADAIQADAJABAIIABAUIAAB7gAIrBxIAAh4IAtAAIAAB4gABNBxIAAgjIBVAAIAAhYQAAgigmAAQgTAAgVADIgHABIAAgkQAVgCAgAAQAwAAAPASQAIAJADAMQACANAAAQIAABYIAWAAIAAAjgAgFBxIAAi9IArAAIAAC9gAoJBxIgQi9IArAAIAIBeIAEABQAMAAAGgHQAFgGABgNIAGhFIAqAAIgFBEQgFA5g3AAIgIAAIACAdIAwAAQAYABANgUQAOgSACgiIAHhTIArAAIgHBRQgCAcgFAQQgUBAhHAAgAqGBxIAoiaIhjAAIAAhJIAtAAIAAAmIBjAAIAAAdIgpCggAEAAxIAAh9IAtAAIAABXIgeAmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-11.5,141.1,23.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AHbBgIAAgiIAjAAIAAhDQAAgagEgKIgGgJQgHgKgOABQgHgBgHAEQgGADgEAEQgJAKgDAHIgCADIgLB9IgsAAIAMh3IAAgOQAAgagKgdIAqAAIAFANIADAQIADAAIACgEIAGgHQAEgGAHgEQAGgEAJgEQALgDANAAQAMAAAKAFQALAFAGAIQAHAIADALQAIAUAAAcIAABqgAEwBgIAAh7QAAghglAAIgeABIgcADIgLABIAAghQALgDAWgCQAVgCATAAQASAAAMACQAMACAJAFQAIADAGAHQAFAEADAJQADAIABAIIABAUIAAB7gADGBgIAAh3IAtAAIAAB3gAAeBgIAAh7QgBghgjAAQgUAAgcACIAAgiQAbgDAWAAQATAAANACQAMACAJAFQAIADAFAHQAGAEACAJQADAIACAIIABAUIAAB7gAh8BgIg5hdQgHACgDAHQgCAFAAALIAABEIgtAAIAAhDIABgOQABgFACgHQACgGAEgFQAEgFAHgFQAHgFAKgDIgphCIAyAAIA4BdQAHgDACgFQAEgHAAgKIAAhEIAsAAIAABEQAAAYgKAMQgEAGgHAEQgHAFgKADIAqBCgAnLBgIgQi8IAqAAIAIBeIAFAAQALAAAHgGQAFgFABgPIAFhEIArAAIgGBEQgEA4g4AAIgHAAIACAeIAvAAQAZAAANgTQANgTADghIAHhTIArAAIgHBSQgDAagFAQQgTBAhHAAgAorAgIAAh8IAtAAIAABYIgeAkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-9.6,111.2,19.2);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AsUBoQgHgHAAgLQAAgNAHgGQAHgGAMgBQAMABAHAGQAGAHABAMQgBALgGAHQgHAGgMABQgMgBgHgGgACuBpIAAgiQAKADAFAAQAFAAAFgCQADgCABgDQADgHAAgKIAAhhIgVACIAAghQAtgGAtgBQAhABAQAIQAJAEAFAGQAFAFADAJQADAHABAJIABAUIAAB6IgtAAIAAh6QAAgiglAAIgSABIAABjQAAAjgQANQgHAGgKACQgKAEgNAAQgMAAgJgFgAKABqIgQi8IAqAAIAIBeIAFABQALgBAGgGQAFgGACgNIAFhFIArAAIgGBEQgFA5g3AAIgIgBIACAfIAwAAQAYAAANgUQAOgSACgiIAIhTIArAAIgIBSQgCAagFAQQgUBAhHAAgAGUBqIgPi8IAqAAIAIBeIAFABQALgBAGgGQAGgGAAgNIAGhFIArAAIgGBEQgFA5g3AAIgIgBIADAfIAvAAQAYAAANgUQAOgSACgiIAIhTIArAAIgHBSQgDAagFAQQgUBAhHAAgAASBqIAAh6QAAgigkAAIgfABIgbADIgLABIAAghQAKgDAXgCQAVgCATAAQARAAAMACQAMACAJAFQAJAEAFAGQAFAFADAJQADAHABAJIABAUIAAB6gAhXBqIAAh3IAtAAIAAB3gAktBqIAAghIAkAAIAAhFQgBgZgEgKIgFgJQgIgJgOAAQgHAAgGADQgGAEgFAEQgIAJgEAHIgCADIgLB9IgrAAIALh3IAAgNQABgagLgeIAqAAIAFAOIAEAQIACAAIACgEIAGgIQAFgFAGgFQAGgEAKgDQAKgDANgBQAMAAALAGQAKAFAHAHQAGAIAEALQAHAUAAAcIAABqgAqYBqIAAi4QAKgDAXgCQAVgCAVAAQApAAARAOQASANAAAdIAACHgAprgxIAAB6IA9AAIAAhmQAAgNgLgFQgIgDgSAAIgYABgAivAqIAAh8IAsAAIAABXIgdAlgAnVAqIAAh8IAsAAIAABXIgdAlgAsWAjIAAgLQAAgNAGgLQAGgKAQgLQAQgLAEgHQAFgHAAgJQAAgIgHgFQgHgGgMAAQgXABgcAOIgQghQAhgRAlgBQAeAAARAPQATAOgBAYQABAQgIAMQgHAMgVAOQgOAKgEAGQgDAFAAAIIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-11,166.1,22.1);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AEbBwIAAgjQAYACAZAAQAZABAIgUQAEgKAAgRIAAgeQAAgigTgJQgHgEgLAAQgSAAgfAEIAAgjQAagEAdABQARAAAOAEQANAGAJAIQAIAIAFAMQAKAUAAAbIAAAWQAAAOgCAMQgBALgFALQgFANgJAHQgIAIgOAGQgOAEgSAAQgiAAgVgDgAvPBwIAAgjQAKADAFAAQAGAAAEgCQADgCACgDQADgHAAgJIAAhhIgVABIAAghQAtgHAsABQAhgBAQAJQAJAEAFAGQAFAFADAIQADAJABAIIABAUIAAB7IgtAAIAAh7QAAgiglAAIgSABIAABkQAAAhgQAOQgHAFgKAEQgKACgMAAQgMAAgKgDgANzBxIAAgjIAuAAQACgLAAgXIAAhAQAAgQgIgFQgEgCgFAAQgLAAgLADIAAgkQAMgCAPAAQAOAAAKACQAKAEAGAFQAGAFAEAHQAHAOAAAVIAABNIgCAbIgDAVIgCAIgAL+BxIAAgjIAjAAIAAhDQAAgZgEgLIgGgJQgHgJgOAAQgHAAgGADQgHADgEAFQgJAJgDAIIgCACIgLB+IgrAAIALh3IAAgOQAAgagKgeIAqAAIAFANIAEAQIACAAIACgDIAGgIQAFgFAGgEQAGgEAKgEQAKgEANABQAMAAALAEQAKAGAHAHQAGAIAEAMQAHATAAAbIAABsgAHLBxIgQi9IAqAAIAIBeIAFABQALAAAGgHQAGgGABgNIAFhFIArAAIgGBEQgEA5g4AAIgIAAIADAdIAvAAQAZABANgUQANgSADgiIAHhTIArAAIgHBRQgDAcgFAQQgUBAhHAAgADOBxIAAh7QAAgiglAAIgfACIgcACIgKABIAAghQAKgCAXgCQAVgCATAAQASAAAMACQAMACAJAEQAIAEAGAGQAFAFADAIQADAJABAIIABAUIAAB7gABkBxIAAh4IAtAAIAAB4gAhoBxIAAgjIAjAAIAAhDQAAgZgFgLIgFgJQgHgJgPAAQgHAAgGADQgGADgFAFQgIAJgEAIIgBACIgLB+IgsAAIALh3IABgOQAAgagLgeIArAAIAEANIAEAQIADAAIACgDIAGgIQAEgFAGgEQAGgEAKgEQALgEAMABQANAAAKAEQALAGAGAHQAGAIAEAMQAIATAAAbIAABsgAkuBxIAoiaIhjAAIAAhJIAtAAIAAAmIBjAAIAAAdIgpCggAm3BxIAAh7QAAgiglAAIgYABIAACcIgtAAIAAi5QALgCAWgCQAWgCASAAQASAAANACQAMACAIAEQAJAEAFAGQAFAFADAIQADAJABAIIABAUIAAB7gAqgBxIAAgjIAjAAIAAhDQAAgZgEgLIgGgJQgHgJgOAAQgHAAgGADQgHADgEAFQgJAJgDAIIgCACIgLB+IgrAAIALh3IAAgOQAAgagKgeIAqAAIAFANIAEAQIACAAIACgDIAGgIQAFgFAGgEQAGgEAKgEQAKgEANABQAMAAALAEQAKAGAHAHQAGAIAEAMQAHATAAAbIAABsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-11.5,195.1,23.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E3D").s().p("AHJBeIAAgkQAYADAZAAQAZABAIgUQAEgKAAgRIAAgdQAAgjgTgJQgHgEgLAAQgSAAgfAEIAAgjQAagEAdABQARAAAOAEQANAGAJAIQAIAIAFAMQAKAUAAAcIAAAVQAAAOgCAMQgBALgFALQgFANgJAHQgIAIgOAGQgOAEgSAAQgiAAgVgDgAFYBeIAAgiIAjAAIAAhCQAAgagFgLIgFgJQgHgJgPAAQgHAAgGADQgGADgFAFQgIAJgEAIIgBACIgLB9IgsAAIALh2IABgOQAAgagLgeIArAAIAEANIAEAQIADAAIACgDIAGgIQAEgFAGgEQAGgEAKgEQALgEAMABQANAAAKAEQALAGAGAHQAGAIAEAMQAIATAAAcIAABqgACtBeIAAh6QAAgiglAAIgfACIgcACIgKABIAAghQAKgCAXgCQAVgCATAAQASAAAMACQAMACAJAEQAIAEAGAGQAFAFADAIQADAJABAIIABAUIAAB6gABDBeIAAh3IAtAAIAAB3gAjgBeIAAgiIAjAAIAAhCQAAgagEgLIgGgJQgHgJgOAAQgHAAgGADQgHADgEAFQgJAJgDAIIgCACIgLB9IgrAAIALh2IAAgOQAAgagKgeIAqAAIAFANIAEAQIACAAIACgDIAGgIQAFgFAGgEQAGgEAKgEQAKgEANABQAMAAALAEQAKAGAHAHQAGAIAEAMQAHATAAAcIAABqgApLBeIAAi4QAKgCAXgCQAVgCAUAAQApAAASANQASANAAAdIAACHgAoeg9IAAB5IA9AAIAAhlQAAgNgLgEQgJgEgRAAIgYABgAhjAfIAAh9IAtAAIAABYIgeAlgAmIAfIAAh9IAsAAIAABYIgdAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.8,-9.7,117.7,19.5);


(lib.Path_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoyCDIgMkIIRzAHQAHA7ADBGQg6AYhTAVQghAIhqAWQiqAkjwAMQiTAIiIAAQhUAAhQgDg");
	this.shape.setTransform(57.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_97, new cjs.Rectangle(0,0,115,26.9), null);


(lib.Path_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlCPDQjFgTidg5QCAhcBIhxQBViGAmjKQAYiCANjlQARk4AEgnQAXjIBFiIQA+h6BjhYQAugpAggWICaBqQA9AqCCBTQBtBPAyBQQAtBIAbBhQAVBJAPBsQAfDjgCCNQgFDchKDSQg2BThHBZQgYAfgqAuQhJBHhYBAQi7AZioAAQhuAAhngLg");
	this.shape.setTransform(67.7,97.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_94, new cjs.Rectangle(0,0,135.4,194.7), null);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmxESQgyihBPiVQBPiWChgyIBPgYQBcgdBfAQQBcAQBMA2QA3AmAnA1QAoA3AVBBIAcBaQkAAFljBdQiEAiiNAxg");
	this.shape.setTransform(45.2,27.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_79, new cjs.Rectangle(-0.1,0,90.6,55.9), null);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_76, null, null);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8hDIg2g/QCIBSBdCqIgrAJQg7hvhJhXg");
	this.shape.setTransform(11.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_68, new cjs.Rectangle(0.1,0,23.1,26.1), null);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agpg9QAuA1AlA/IgbAHQgWg8gig/g");
	this.shape.setTransform(4.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_67, new cjs.Rectangle(0,0,8.5,12.4), null);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBNQAChtAbhVQALgiAagtQgDAjABA9QADB8AhCAQghAOhAAfQgFhCACg2g");
	this.shape.setTransform(5.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,10.2,39.5), null);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agpg/QgLhXABACQAiA7AhBcQATA2ARBAIhVAcQAHhZgPh7g");
	this.shape.setTransform(5.4,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_65, new cjs.Rectangle(0.2,0.2,10.4,29.8), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/hRQA/A1AoBAQAQAaAIARIgXADQgrhXg9hMg");
	this.shape.setTransform(6.4,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,12.9,16.5), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaIwQj5ggjrgrQgjgGgXgcQgWgdAAgjIg3AEQgKAAgJgHQgJgHgEgMIg5gCQgKAOgQAPQgSARgNADQgTAFgtAEQg3AEgqgBQhpijgdihIAGgDQgHgNgEgRQgFgkgBgYQAIgaAjAHQAUAFAoAMQAqANARAHQAiAPAlgGQAHgBAQgGQAOgEAJgBQAMgBAKAGQAHAEAKAKQATAXAMAQQAOATAKAXQAJARAkAKQACgMAHgIQAHgHAKABIBNARQAHgcAYgQQAZgPAcAIQB6AhBfAVQCYAiCPASQD/AgCXgZQBpgSANgeQBljQBIjkQA/jOADhcIAGACQBBClBYBqQAdCHAWCTQgqC3hMCcQhBCGiWBDQiWBCjvgBQiEABilgVg");
	this.shape.setTransform(104.6,58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,209.1,116.1), null);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiyCbQimgXiXg2Qh4gsg/gqQAmhcAjhGITCAYQAaA0AoB3QkqCSlOAAQhuAAhzgQg");
	this.shape.setTransform(67.9,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,135.9,34.3), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKMVQk6gKlkiyQBDi1Btj6QBEibAJhCQAOhmhapnIAygVQAsBQBCBHQBDBKBKAuQBpBDCdAAQCrgBBZhWQAKAXgBAOQgNBlgVA/QBDCaBNDHQCaGQAwDqQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape.setTransform(66.1,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,132.3,158), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBLQgbgLgIgjQgJgiAPgmQAIgTAMgQIBbB5QgSAWgWAJQgMAFgKAAQgKAAgKgEg");
	this.shape.setTransform(6,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,12.2,15.8), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBNQgcgLgJgjQgIghAPgnQAIgWAQgRQAoA5AzA/QgSAZgXAKQgOAGgLAAQgKAAgJgEg");
	this.shape.setTransform(6.3,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,12.6,16.3), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC88F").s().p("AizAcQArgRBbgeQBNgdAjgmQAgAQAbAKIA2ATQguAuhFAiQgwAXhTAYQg4gag5ggg");
	this.shape.setTransform(18,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,36,17.3), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC88F").s().p("AhLCKQiEhYgyhHQBlhuBvhCQApBUBUBKQBNBEBlAyQgmAchPAhQhWAlggAVQgugbg0ghg");
	this.shape.setTransform(25.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,51.6,39.6), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC88F").s().p("Ah3AIQg0g0gdg0QCFAaB2gIQA/gEBIgPQAJA8AGBSQhrAnh1AOQhBg7gfgfg");
	this.shape.setTransform(20.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,40.1,19.7), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFcB7QgHAFgMAVQgJAQgIgBQgzg2gZg+QgahAgBhPQhRA0htAUQhVAPh3gDQACgPACgGQAFgLAMgLQgQAFgoAKQgoAKgQAFIALhLQgXAggiATQggARgmADQAlhUBJg5QBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCDglCVIgGAVQgbg+AAhCg");
	this.shape.setTransform(39.3,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,78.6,50.3), null);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBHQgWgCgMgZQgMgYACghIA8gaQAvgXAPgJQAGAZgGAdQgIAngXAaQgUAYgVAAIgGgBg");
	this.shape.setTransform(6.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,12.6,14.4), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_11, null, null);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBJQgWgCgNgYQgNgXACghQAPgHArgWQAugYAQgKQAGAbgFAbQgHAogWAaQgUAZgVAAIgFAAg");
	this.shape.setTransform(6.3,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0.1,0,12.5,14.6), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#532618").s().p("AAYAKQgagYhBgNIACgHICFAiQgJAXgUAMQgBgMgOgNg");
	this.shape.setTransform(6.8,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,13.7,7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_2, null, null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_1_0, null, null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA7QgZgXgLgkQgMgsAPgfQAzAlBHA4QgCAXgKAPQgLAQgQADIgKABQgUAAgUgRg");
	this.shape.setTransform(6.5,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,13.1,15.3), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8F00").s().p("AjNCUIgEgGIgBAAIgCAGIAAADIgCACIgGAAQgQAAgKgCIgdgEIgagFQgmgJg0gVQgygWgSgHQgSgHgTgFQAVgeAjgNQAVACAxAIQA6AJAZABIA1AAIANgBIAGgKIAAgDIAAACIABAEIADACIAKgBQArgKAqgTQAhgPA8gfQAlgWA8geQA3gbAzgQIA5gQIAPgGIAMgBQAJgBASACQAxgCA4ATQAqAOAkAeQANALAJALQABAhgGAhIgHgGQgTgMgcgKQgfgKgegBQgkgBgkAJIhSAaQgvATgqAVIhhAwQg8AeguAQQhBAXg2ADg");
	this.shape.setTransform(49.7,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,99.3,30.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA3QgYgVgKgjQgMgoAOgfQA4AvA9ArQgCAVgKAOQgKAPgQADIgJACQgSAAgUgSg");
	this.shape.setTransform(6.2,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,12.6,14.5), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA5IhGgNQgDAAgEgDQAdgiA8hAQAMAMAFAVQAEAVgGAYQgDANgIAPQgEAJgJAAIgDgBg");
	this.shape.setTransform(5.4,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOA4IhAgPQAlgpAfgiIAVgWQASAcgKApQgEATgLARQgFAIgHAAIgGgBg");
	this.shape_1.setTransform(50.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,55.9,21.3), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAxQgDAAgEgEQAdghA9hAQAIAIAFAOQggAhgpAyg");
	this.shape.setTransform(5.2,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxAsQAlgqAeggIAWgWQAHANADASIgdAiIghAog");
	this.shape_1.setTransform(50.8,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,55.8,20.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgBbQgngLglgXQBziHCcgPQAmgEAcAAQAQAvgUApIgNAUQgkAyhIAXQgpAOgnAAQgcAAgcgHg");
	this.shape.setTransform(17.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,34.5,19.6), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaBRQBFipCZgPQAtgEAkAAQAPA4gYAyQgXAugyAeQgxAeg5ADIgLAAQg4AAgwgbg");
	this.shape.setTransform(15.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,31,21.6), null);


(lib.Path_97_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoyCDIgMkIIRzAHQAHA7ADBGQg6AYhTAVQghAIhqAWQiqAkjwAMQiTAIiIAAQhUAAhQgDg");
	this.shape_1.setTransform(57.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_97_1, new cjs.Rectangle(0,0,115,26.9), null);


(lib.Path_94_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlCPDQjFgTidg5QCAhcBIhxQBViGAmjKQAYiCANjlQARk4AEgnQAXjIBFiIQA+h6BjhYQAugpAggWICaBqQA9AqCCBTQBtBPAyBQQAtBIAbBhQAVBJAPBsQAfDjgCCNQgFDchKDSQg2BThHBZQgYAfgqAuQhJBHhYBAQi7AZioAAQhuAAhngLg");
	this.shape_1.setTransform(67.7,97.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_94_1, new cjs.Rectangle(0,0,135.4,194.7), null);


(lib.Path_79_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmxESQgyihBPiVQBPiWChgyIBPgYQBcgdBfAQQBcAQBMA2QA3AmAnA1QAoA3AVBBIAcBaQkAAFljBdQiEAiiNAxg");
	this.shape_1.setTransform(45.2,27.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_79_1, new cjs.Rectangle(-0.1,0,90.6,55.9), null);


(lib.Path_76_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_76_1, null, null);


(lib.Path_68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8hDIg2g/QCIBSBdCqIgrAJQg7hvhJhXg");
	this.shape_1.setTransform(11.6,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_68_1, new cjs.Rectangle(0.1,0,23.1,26.1), null);


(lib.Path_67_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Agpg9QAuA1AlA/IgbAHQgWg8gig/g");
	this.shape_1.setTransform(4.2,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_67_1, new cjs.Rectangle(0,0,8.5,12.4), null);


(lib.Path_66_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBNQAChtAbhVQALgiAagtQgDAjABA9QADB8AhCAQghAOhAAfQgFhCACg2g");
	this.shape_1.setTransform(5.1,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66_1, new cjs.Rectangle(0,0,10.2,39.5), null);


(lib.Path_65_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Agpg/QgLhXABACQAiA7AhBcQATA2ARBAIhVAcQAHhZgPh7g");
	this.shape_1.setTransform(5.4,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_65_1, new cjs.Rectangle(0.2,0.2,10.4,29.8), null);


(lib.Path_64_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/hRQA/A1AoBAQAQAaAIARIgXADQgrhXg9hMg");
	this.shape_1.setTransform(6.4,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64_1, new cjs.Rectangle(0,0,12.9,16.5), null);


(lib.Path_57_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaIwQj5ggjrgrQgjgGgXgcQgWgdAAgjIg3AEQgKAAgJgHQgJgHgEgMIg5gCQgKAOgQAPQgSARgNADQgTAFgtAEQg3AEgqgBQhpijgdihIAGgDQgHgNgEgRQgFgkgBgYQAIgaAjAHQAUAFAoAMQAqANARAHQAiAPAlgGQAHgBAQgGQAOgEAJgBQAMgBAKAGQAHAEAKAKQATAXAMAQQAOATAKAXQAJARAkAKQACgMAHgIQAHgHAKABIBNARQAHgcAYgQQAZgPAcAIQB6AhBfAVQCYAiCPASQD/AgCXgZQBpgSANgeQBljQBIjkQA/jOADhcIAGACQBBClBYBqQAdCHAWCTQgqC3hMCcQhBCGiWBDQiWBCjvgBQiEABilgVg");
	this.shape_1.setTransform(104.6,58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57_1, new cjs.Rectangle(0,0,209.1,116.1), null);


(lib.Path_48_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiyCbQimgXiXg2Qh4gsg/gqQAmhcAjhGITCAYQAaA0AoB3QkqCSlOAAQhuAAhzgQg");
	this.shape_1.setTransform(67.9,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_48_1, new cjs.Rectangle(0,0,135.9,34.3), null);


(lib.Path_37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKMVQk6gKlkiyQBDi1Btj6QBEibAJhCQAOhmhapnIAygVQAsBQBCBHQBDBKBKAuQBpBDCdAAQCrgBBZhWQAKAXgBAOQgNBlgVA/QBDCaBNDHQCaGQAwDqQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_1.setTransform(66.1,79);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37_1, new cjs.Rectangle(0,0,132.3,158), null);


(lib.Path_31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBLQgbgLgIgjQgJgiAPgmQAIgTAMgQIBbB5QgSAWgWAJQgMAFgKAAQgKAAgKgEg");
	this.shape_1.setTransform(6,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_31_1, new cjs.Rectangle(0,0,12.2,15.8), null);


(lib.Path_29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBNQgcgLgJgjQgIghAPgnQAIgWAQgRQAoA5AzA/QgSAZgXAKQgOAGgLAAQgKAAgJgEg");
	this.shape_1.setTransform(6.3,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29_1, new cjs.Rectangle(0,0,12.6,16.3), null);


(lib.Path_28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC88F").s().p("AizAcQArgRBbgeQBNgdAjgmQAgAQAbAKIA2ATQguAuhFAiQgwAXhTAYQg4gag5ggg");
	this.shape_1.setTransform(18,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0,0,36,17.3), null);


(lib.Path_27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC88F").s().p("AhLCKQiEhYgyhHQBlhuBvhCQApBUBUBKQBNBEBlAyQgmAchPAhQhWAlggAVQgugbg0ghg");
	this.shape_1.setTransform(25.8,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27_1, new cjs.Rectangle(0,0,51.6,39.6), null);


(lib.Path_26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC88F").s().p("Ah3AIQg0g0gdg0QCFAaB2gIQA/gEBIgPQAJA8AGBSQhrAnh1AOQhBg7gfgfg");
	this.shape_1.setTransform(20.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26_1, new cjs.Rectangle(0,0,40.1,19.7), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBHQgWgCgMgZQgMgYACghIA8gaQAvgXAPgJQAGAZgGAdQgIAngXAaQgUAYgVAAIgGgBg");
	this.shape.setTransform(6.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,12.6,14.4), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFcB6QgHAGgMAUQgJAQgIgBQgzg2gZg+Qgag/gBhQQhRA1htATQhVAPh3gDQACgOACgHQAFgLAMgLQgQAGgoAKQgoAJgQAGIALhMQgXAhgiATQggARgmACQAlhTBJg6QBDg1BTgSQBWgUBUAWIBJASQCVAmBPCEQBPCEglCVIgGAVQgbg+AAhDg");
	this.shape.setTransform(39.3,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,78.6,50.3), null);


(lib.Path_9_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBJQgWgCgNgYQgNgXACghQAPgHArgWQAugYAQgKQAGAbgFAbQgHAogWAaQgUAZgVAAIgFAAg");
	this.shape_1.setTransform(6.3,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9_0_1, new cjs.Rectangle(0.1,0,12.5,14.6), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_9_1, null, null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_2_1, null, null);


(lib.Path_1_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, null, null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA7QgZgXgLgkQgMgsAPgfQAzAlBHA4QgCAXgKAPQgLAQgQADIgKABQgUAAgUgRg");
	this.shape_1.setTransform(6.5,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,13.1,15.3), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8F00").s().p("AjNCUIgEgGIgBAAIgCAGIAAADIgCACIgGAAQgQAAgKgCIgdgEIgagFQgmgJg0gVQgygWgSgHQgSgHgTgFQAVgeAjgNQAVACAxAIQA6AJAZABIA1AAIANgBIAGgKIAAgDIAAACIABAEIADACIAKgBQArgKAqgTQAhgPA8gfQAlgWA8geQA3gbAzgQIA5gQIAPgGIAMgBQAJgBASACQAxgCA4ATQAqAOAkAeQANALAJALQABAhgGAhIgHgGQgTgMgcgKQgfgKgegBQgkgBgkAJIhSAaQgvATgqAVIhhAwQg8AeguAQQhBAXg2ADg");
	this.shape_1.setTransform(49.7,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,99.3,30.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWA3QgYgVgKgjQgMgoAOgfQA4AvA9ArQgCAVgKAOQgKAPgQADIgJACQgSAAgUgSg");
	this.shape_1.setTransform(6.2,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,12.6,14.5), null);


(lib.Group_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA5IhGgNQgDAAgEgDQAdgiA8hAQAMAMAFAVQAEAVgGAYQgDANgIAPQgEAJgJAAIgDgBg");
	this.shape_2.setTransform(5.4,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOA4IhAgPQAlgpAfgiIAVgWQASAcgKApQgEATgLARQgFAIgHAAIgGgBg");
	this.shape_3.setTransform(50.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(0,0,55.9,21.3), null);


(lib.Group_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsAxQgDAAgEgEQAdghA9hAQAIAIAFAOQggAhgpAyg");
	this.shape_2.setTransform(5.2,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxAsQAlgqAeggIAWgWQAHANADASIgdAiIghAog");
	this.shape_3.setTransform(50.8,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(0,0,55.8,20.5), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgBbQgngLglgXQBziHCcgPQAmgEAcAAQAQAvgUApIgNAUQgkAyhIAXQgpAOgnAAQgcAAgcgHg");
	this.shape_1.setTransform(17.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,34.5,19.6), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiaBRQBFipCZgPQAtgEAkAAQAPA4gYAyQgXAugyAeQgxAeg5ADIgLAAQg4AAgwgbg");
	this.shape_1.setTransform(15.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,31,21.6), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(-40.9,-117.3,0.561,0.561,0,0,0,49.8,15.5);
	this.instance.alpha = 0.121;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-115.8,0.561,0.561,0,0,0,0.3,0.1);
	this.instance_1.alpha = 0.121;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53,-115.8,0.561,0.561,0,0,0,0.2,0.2);
	this.instance_2.alpha = 0.121;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#472A21").s().p("AANAOQhZiLhFAAIA0gqQA9g5AshIQBxAaAREdQAJCQgOCJQgmiVhWiFg");
	this.shape.setTransform(-14.7,-97.9,0.561,0.561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#563428").s().p("AhpBZIAIgvQgMgPgCgRIAAgNQAWACANAHQAFAEADADQgQgZgBgoIADgkQAsAUAPAjQAIARgBAOQARgrA6gfQAcgPAZgIQAAAkgdAsQgWAggJAFIgwBRg");
	this.shape_1.setTransform(-55.5,-118.2,0.561,0.561);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#563428").s().p("Aj+BpQA+iWDqhRQB2gpBqgKQAAAZgQAfQgJAQgIALQiSBtiFBQQiKBTgzAAQgwAAAdhJg");
	this.shape_2.setTransform(-41.6,-120.1,0.561,0.561);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#563428").s().p("AAjgvQhLg3gwg6Qhgh1CNgTQCNgSAYEwQAMCYgQCcg");
	this.shape_3.setTransform(-13.6,-98,0.561,0.561);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#563428").s().p("AnaDHQhEjmA1hpQAnhNBnAPQA0AHArAWQBmitFNgwQCngZCTAKQAvC6hYBzQgbAkgmAZIggARQh/gOiJgHQkQgNgtAjQguAjhEDLQgiBmgZBeQgthfgihzg");
	this.shape_4.setTransform(-41.7,-104.7,0.561,0.561);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#563428").s().p("An/DzQgIiFAZhuQBOlhFzABQF6AACAFIQAoBmAKB7QAFA+gDApQgmiWhWiFQhaiLhFABQgTASgjATQhHAmhNAGQhEAFhrgfIhdgiQhJADhBCUQguBsgeCQQgHAmgTAIIgSAAQgJgsgEhCg");
	this.shape_5.setTransform(-35.8,-98.3,0.561,0.561);

	this.instance_3 = new lib.Path_9_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47.5,-74.5,0.561,0.561,0,0,0,6.3,7.4);
	this.instance_3.alpha = 0.078;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#35221A").s().p("AgPBhQgZgCgNgeQgNgeAGgoQAHgoAWgbQAXgaAYACQAZACAMAeQAOAegGAnQgIApgVAaQgVAZgVAAIgFAAg");
	this.shape_6.setTransform(-47.4,-75.8,0.561,0.561);

	this.instance_4 = new lib.Path_11_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-18.7,-76.8,0.561,0.561,0,0,0,6.4,7.4);
	this.instance_4.alpha = 0.078;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#35221A").s().p("AgSBhQgZgDgMgfQgMgeAIgnQAIgoAXgaQAXgbAYAEQAZADAMAeQAMAfgIAnQgIAngXAbQgUAXgVAAIgGAAg");
	this.shape_7.setTransform(-18.5,-78.1,0.561,0.561);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhwBHQg2gqgghIQgGgQAHgPQAIgPAQgBIFZgUQAPAAAJAOQAJAOgFAQQgaBMgzAwQg0AxhAAEIgIAAQg7AAg0gog");
	this.shape_8.setTransform(-32,-58.1,0.561,0.561);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F79178").s().p("AkoCsQiChygMiqQgjAHgjgaQgjgagQguQgOglAFgkQARAgAkAWQAjAWAjACQAUABAWgDQApDHB/BuQCHB2DNgHQDWgGBxhnQBFhABFidQgPCXhuBrQhwBtiaAJIivAKIgbABQiaAAh3hpg");
	this.shape_9.setTransform(-38.4,-58.8,0.561,0.561);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9A184").s().p("AggBrQgmgZgSgyQgSgxAOgsQANgtAlgNQAlgNAmAaQAnAaARAxQASAxgOAsQgNAtglANQgNAEgNAAQgXAAgagRg");
	this.shape_10.setTransform(-64.8,-72,0.561,0.561);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9A184").s().p("AljH9QiChzgKitIgTk6QgKizByidQB3ikCogKICtgLQCogKCICVQCECPAKCzIATE6QAKCthzCCQh0CCisAKIiuAKIgcABQibAAh4hqg");
	this.shape_11.setTransform(-35.2,-77.8,0.561,0.561);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F79178").s().p("AgMB/QgngEgYgoQgYgoAFg0QAGg0AfgjQAfgiAnAEQAnAEAYAoQAYAogGAzQgFA1gfAjQgcAfghAAIgJgBg");
	this.shape_12.setTransform(-7.3,-74.1,0.561,0.561);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF4F4B").s().p("AhWDOQg4h1gwh7Qgwh6BuhUQA3gpBAgRIDXHWIj2B+QgSghgcg7g");
	this.shape_13.setTransform(22.9,-0.7,0.561,0.561);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FD9D83").s().p("AmHDKQiUh+ikkkIBWg3IBWg4QCpEtCHBjQBsBSCEgXQCJgYEMh9ICwhUQBPgnAMgDIATCmQiDBNh9BAQj0B+ieAcQg7ALg3AAQiwgBiTh+g");
	this.shape_14.setTransform(55.4,16.4,0.561,0.561);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FD9D83").s().p("AhxB0QgWgVgcgiQgjgqgFgTQgCgHAJgEIAKgEQgEgHgCgIQgEgRAKgFQASgIAQAIIgVgZQgLgNAOgJQAMgIASAAQATABAfAVQgHgLABgMQABgJASgBQASAAAZAKQAZALA3AhQA6AiAOAHQAjAPAzgLIgXAuQhEAchHAYQhwAoggAAQgIAAgDgDg");
	this.shape_15.setTransform(89,36.7,0.561,0.561);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FD9D83").s().p("AhcBRQAlg0AlgbQBCgvgQhDQgFgYAcANQAbANAHAhQAFATgSAyQgOAkAXAGQAVAFARAHIgdArIjYAog");
	this.shape_16.setTransform(100.6,1.7,0.561,0.561);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FD9D83").s().p("AgBACQADgFAAADIgBACIgBAAIgBAAg");
	this.shape_17.setTransform(107.7,4.2,0.561,0.561);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FD9D83").s().p("AA7C8QgsgBgvgLQg1gLgkgRQgNgHgTgPQgXgRgHgKIALirQALgMAUgaQAhgnAqgcQAWgOARAFQAIADAMAIIARALQAUAJAMAEQARAFAPgBQBRgEAAAoQABAUgQAVIANAHQAQAIAHALQAZAhg7AnQAHgCAIAJQAKAKACAOQAFAlg1AUQgCABAHANQAJAQACAJQAFAhhIAAIgLAAg");
	this.shape_18.setTransform(103.6,12.4,0.561,0.561);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FD9D83").s().p("AiMCzQgcgKgcgXQgMgKgOgOQgWgTACgDIAEgEQAKgGB2gvQB3gwAZgJQAbgJAKgGQAVgKADgJQACgHgggTQgmgYgMgVQgNgWAGgeQAHgeAPAFQATAHAUAeQASAaAUACQBIAGAiAcQAZAVAFAkQALBYhpBSQhVBEhhAAQg0AAg3gTg");
	this.shape_19.setTransform(96.1,37.3,0.561,0.561);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C3B2D").s().p("AEtBqQgqhFgPhQQhaA/gwAcQhSAwhqAPQA1hNBMg6Ih1A4QhEAfgxADIARh4IhyBeQg9A0gzARIAIgbQAFgSAGgKQgfATggAKQAFgOAKgVQAVgsAeglQBeh8CQggQgPgHgLgIIgIgGQCAgPBmAMIAkAFQB1AUBTBFQgGgRACgQIATALQAVAQAFAaQgCgLAHgMQAKgTAfgRIACAZQAAAdgMAQIAPgGQATgEATAGQgEAIgIAIQgRARgYABIARAJQARAMAGAVIgdgEQAfAuANAzQAIAeACAbQAEAogDARQgEAAgGgCQgMgEgNgOQACAZgBAYQg+gtgqhFg");
	this.shape_20.setTransform(96.8,-65,0.561,0.561);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD7A0").s().p("AiSAJQgMgQgEgUIgCgQQARgOAVAEQAKADAHAFIATAbQAfAaA6AAQA5AAAcgbQAOgPADgOQASgQAZAEQANACAIAFQgDAdgWAcQgtA6hgAAQhpAAgog1g");
	this.shape_21.setTransform(91.4,-10.6,0.561,0.561);

	this.instance_5 = new lib.Group();
	this.instance_5.parent = this;
	this.instance_5.setTransform(77.6,33.1,0.561,0.561,0,0,0,15.8,11.2);
	this.instance_5.alpha = 0.09;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#613D29").s().p("AlrEHQgKg1ADhNQADheAXhPQBAjZCxgRQClgPCiAkQBSATA7AWIAHABQgrCzh7AGIlIAVIABAcQABAjgEAkQgMBxg5BIg");
	this.shape_22.setTransform(87.4,42.6,0.561,0.561);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7EBDB").s().p("AgdAyQghgRgagfQAXgWAmgQQArgTA5gGQAQAdAAAbQAAAngoAUQgQAIgSAAQgVAAgXgMg");
	this.shape_23.setTransform(62,62.8,0.561,0.561);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7EBDB").s().p("AgPAaQgqgQgPgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIASgBIANASQAQARASADQARAEATgHQAKgDAGgFIAVAUQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgZAMgZAAQgTAAgRgIg");
	this.shape_24.setTransform(71.4,61.2,0.561,0.561);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7EBDB").s().p("Ai7AUIgDgjIF9gIIgFAvg");
	this.shape_25.setTransform(65.8,69.6,0.561,0.561);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#613D29").s().p("Ai1BAQgBghAOgbQAthYCtgGQAHALAGAEQAWAVAhAAIABAAQAQAAASgKQAbAYACBDQABAigEAcIllACQgDgLAAgQg");
	this.shape_26.setTransform(65.8,64.7,0.561,0.561);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C3B8A1").s().p("Ag2g+IBngIIAFB8IhZARg");
	this.shape_27.setTransform(71.2,59.6,0.561,0.561);

	this.instance_6 = new lib.Group_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(49.7,32.5,0.561,0.561,0,0,0,17.4,10.1);
	this.instance_6.alpha = 0.078;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#523222").s().p("AmcB6QAkhpBHhWQB1iSCkgQQCagPCRAhQBJASAyAUIAPC2QhhgIiOAOQidAUhKAFQg3BCgtArQgoAmhCA0g");
	this.shape_28.setTransform(56.8,40.3,0.561,0.561);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#73312A").s().p("AgXgbIABhaIAaAQQAZAZgGAyQgFAxgQA1QgGAagHAQQgMgwAAhhg");
	this.shape_29.setTransform(117.7,-46.7,0.561,0.561);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#73312A").s().p("Ag8g6IgLhRIBAAIIAnArQApA3gBA7QgBA9gXAgIgXAVQg+higXhkg");
	this.shape_30.setTransform(113.8,-55.7,0.561,0.561);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#73312A").s().p("AlkBnQAMgiATgfQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgMADgSAAIgPgBQgeAkhDAfQiHA+i7gaIAGgLQAHgOAKgPQBnggBVg/QArggAWgaQhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQhZBMhGAlQACgKAGgRgAjNARQBMhAA6g9QhhAnglBWg");
	this.shape_31.setTransform(95,-63.6,0.561,0.561);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#73312A").s().p("AgogJQBIg0BfgPQgWAagrAgQhUA/hoAgQAigyA0gkg");
	this.shape_32.setTransform(96.8,-63.6,0.561,0.561);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#73312A").s().p("ABDg+Qg6A9hLBAQAlhWBggng");
	this.shape_33.setTransform(87.1,-66.2,0.561,0.561);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F79178").s().p("AjFCdIhJgTQg9gPg0giQA1ATA6ALQBtAUBkgaQBqgaBLhJQA9g7AohKQAaAMAWADQAeAEAbgLQAcgLASgXQAIgKAGgMQABAfgOAhQgUArgkAUQglAUgggOQgLgGgGgGQg4B3h4A6QhNAlhSAAQgtAAgugLg");
	this.shape_34.setTransform(101,-26.4,0.561,0.561);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FBA386").s().p("AguBoQgggPgJgpQgJgpAUgpQAUgrAkgUQAjgUAgAPQAgAOAJApQAJApgUApQgUArgkAUQgVAMgTAAQgOAAgNgGg");
	this.shape_35.setTransform(117.5,-34.2,0.561,0.561);

	this.instance_7 = new lib.Path_9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(90.5,-35.8,0.561,0.561,0,0,0,7,3.6);
	this.instance_7.alpha = 0.09;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgQAlQgpgKgJgbQgGgRAIgWICFAiQgSAtgtAAQgKAAgMgDg");
	this.shape_36.setTransform(90.5,-35.5,0.561,0.561);

	this.instance_8 = new lib.Path_11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(119,-48.9,0.561,0.561,0,0,0,0.3,0.2);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Group_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(92.6,-44.6,0.561,0.561,0,0,0,28.1,10.4);
	this.instance_9.alpha = 0.078;

	this.instance_10 = new lib.Group_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(92.6,-44.4,0.561,0.561,0,0,0,28.1,10.9);
	this.instance_10.alpha = 0.078;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#491B0C").s().p("AAbA/IhGgNQgGgBgEgEQgDgFAAgFQAAgLADgPQAIggAVgVQAWgVAVADQAWAEALAaQAKAagIAhQgDANgIAPQgEAIgJAAIgDAAg");
	this.shape_37.setTransform(79.9,-47.4,0.561,0.561);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#491B0C").s().p("AAVBCIhBgQQgMgDAAgMQgBgOAEgQQAIggAVgVQAVgVAWAEQAWADAKAaQALAagIAhQgEASgLASQgFAIgHAAIgGgBg");
	this.shape_38.setTransform(105.2,-42.2,0.561,0.561);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A14740").s().p("AgnA9QghgJgagYQgagYgQgjQA3gnBRAHQBFAGBMAmQgmAvgvAWQggAPgeAAQgRAAgQgEg");
	this.shape_39.setTransform(90.8,-30.4,0.561,0.561);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7EBDB").s().p("AgBA9QglgGgWgrQgPgfgDgoQAegGAmAJQArAKAuAbQgDAggPAVQgTAcgfAAIgMgBg");
	this.shape_40.setTransform(28.1,50.6,0.561,0.561);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7EBDB").s().p("AApA/QgsgIgZgnQgYglAKglQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAPAKIAAAVQADAYAMANQALAOATAEQAJADAHgBIAFAeQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAIgDACIgBAAg");
	this.shape_41.setTransform(35.6,53.9,0.561,0.561);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7EBDB").s().p("AidhdIARgfIEpDUIgeAlg");
	this.shape_42.setTransform(26.8,57.8,0.561,0.561);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#613D29").s().p("Aipg8IAMgYQARgcAagOQBSgvCIBfQAAAOACAGQAFAdAaATIAAABQAOAJASABQAIAkgjA5IglAxg");
	this.shape_43.setTransform(28.4,55.6,0.561,0.561);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C3B8A1").s().p("AhGApIA6h3IBTA0Ig/Bpg");
	this.shape_44.setTransform(36.5,52.5,0.561,0.561);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#73312A").s().p("AgkBlQgzgNghgwQgggugIhDQgBgOAJgKQAKgKAMADIERBFQANADADAOQAEANgIALQgmA3gzAaQgkATghAAQgRAAgQgFg");
	this.shape_45.setTransform(90.7,-32.7,0.561,0.561);

	this.instance_11 = new lib.Path_14();
	this.instance_11.parent = this;
	this.instance_11.setTransform(95.7,-53.1,0.561,0.561,0,0,0,39.5,25.2);
	this.instance_11.alpha = 0.09;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBA386").s().p("AhGGzIhJgSQiVgmhPiEQhPiFAliUIAiiDQAPg9Aig0QAhgyAwglQBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCEglCUIghCDQgmCViEBPQhaA2hiAAQgtAAgwgMg");
	this.shape_46.setTransform(93.9,-42,0.561,0.561);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#523222").s().p("AA0BKQlagaiOhTIBDgxIMWAAQAHAAAFAFQAEAFgBAHQgGAsgPA4QgOAygDAAQgpACguAAQhzAAiQgLg");
	this.shape_47.setTransform(84.9,29,0.561,0.561);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFC054").s().p("AgDGUQkVgGiBhNIB6l9QAkjHBdhWQAvgrAmgDIANgBQAKASAOAOQAkAkA0AGQA0AGAtgZQAogXAYgsQAuAEApAPQAzASAaAeQASAUAPAeQgDAHgTEDQgTEYgRBYIgJAVQgIAOADAHQigAQiGAAIgvgBg");
	this.shape_48.setTransform(87.4,9,0.561,0.561);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9A184").s().p("Ak5BCQAqhIA3ggQAcgQATgCIC8gJIAjAFQBkAEAPACQBNAMAjApQASATAPAdQgCADgCAQg");
	this.shape_49.setTransform(92.8,-9.9,0.561,0.561);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F79178").s().p("AgCBVQgqgDgvgPIAJhcQAAgZASgSQARgRAZAAIAOAAQAeAAAgAOQAmARAAAXIAABvQghAGgjAAIgagBg");
	this.shape_50.setTransform(91.3,-19.3,0.561,0.561);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9A184").s().p("AgTCGQgbAAgYgSQgYgTAAgYIAOiRQAAgZASgSQASgSAZAAIAOAAQAeAAAgAPQAmAQAAAXIAACSQAAAYgnAWQgjAVgbAAg");
	this.shape_51.setTransform(91.1,-16.6,0.561,0.561);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#73312A").s().p("AmmB/QABggAKgvQAUhbAshJQCOjmFNA+QEaA0AMEOQAHCIgyB9g");
	this.shape_52.setTransform(95.8,-56.8,0.561,0.561);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9A184").s().p("AhJCrQghgEgUgSQgagXgGgKQgUgcgBgoQAAgkALgrQAJgkAOgdQADgGALghQAIgcAEgDQAPgKALANQAKALAAARQAAAMgGAJIgKAOQgHAMAFAOIASgHQAVgKAOgLQAZgUA3ghQAVgMAOAPQAPAPgZAQQgWAOgeAWIgYATIAPAUIAbgSQAhgVAhgTQAfgSAQAaQAQAZgpAPQgUAHglATIghARIAUAWIAXgMQAegQAlgMQAkgLAFAZQAEAYgiAGQgPACgjAMIghAMIAPAeIAigPQAlgPAQgBQAPAAADAUQAEAUgXAHIg3APQgbAIgSAMQguAegnAOQgWAHgQAAIgKAAg");
	this.shape_53.setTransform(146.7,-34.4,0.561,0.561);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFD7A0").s().p("AgRAoIgWhJQgOgsgNgfIBBgRQAsBuAYB5QgWAGgqAOQgIgsgMgqg");
	this.shape_54.setTransform(113.1,-9.1,0.561,0.561);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFC054").s().p("AhnCQIgyj0QA1ACBJgRQAogJBIgTQAtBuAYB5QhPAagoAMQhAASg+AAIgMAAg");
	this.shape_55.setTransform(108.2,-8.1,0.561,0.561);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F9A184").s().p("Al2ELIgYi8QElAIDYifQBthRA3hbIBUgXIgfBKIBIAjQhECGh2BkQjgDAlLAAIghgBg");
	this.shape_56.setTransform(122,-18.2,0.561,0.561);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#ED8C73").s().p("AkLCzQhXgMhSgvQCJA0COgcQB8gXB0heQBrhWBJh6QAVAYAYAKQAgANAigDQAjgEAcgVQgcAxgrAWQgsAVgjgTQgHgDgFgFQhgCLiPBMQh5BAh5AAQgeAAgfgDg");
	this.shape_57.setTransform(51.9,-35.4,0.561,0.561);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F9A184").s().p("AhAB6QgkgTgGgxQgGgxAbgyQAbgyAsgXQAsgWAjATQAkATAGAxQAGAygbAxQgbAygsAXQgXAMgVAAQgTAAgQgJg");
	this.shape_58.setTransform(71.7,-47.3,0.561,0.561);

	this.instance_12 = new lib.Path_26();
	this.instance_12.parent = this;
	this.instance_12.setTransform(67.6,-68,0.561,0.561,0,0,0,20.2,10.1);
	this.instance_12.alpha = 0.121;

	this.instance_13 = new lib.Path_27();
	this.instance_13.parent = this;
	this.instance_13.setTransform(26.7,-83,0.561,0.561,0,0,0,26,19.9);
	this.instance_13.alpha = 0.121;

	this.instance_14 = new lib.Path_28();
	this.instance_14.parent = this;
	this.instance_14.setTransform(38.8,-72.9,0.561,0.561,0,0,0,18.2,8.8);
	this.instance_14.alpha = 0.121;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4F3026").s().p("ApMIuQhEhzgWiXQhFnQEukgQBuhoCXhIQBwg1BtgaQBEgQB3AuQA8AXAtAaQCpgUBiC1QB7DjgjHpQgHBfgUBOIgJhtQgIhDgSgpQgkhWhChKQgUgXhjhcQhHhDgig3QgvhNgNhlQguB9hsBBQg/AmiUArQiSAqhAApQhoBCgqCCQgzCQABCEQABCbBKB1QhYhfgohDgAhYj3QhOAhgWAMQg1AcggAjQAigZBBgYIBwgnQCCgzAQhfQgsBGiAA4g");
	this.shape_59.setTransform(40.2,-61.3,0.561,0.561);

	this.instance_15 = new lib.Path_29();
	this.instance_15.parent = this;
	this.instance_15.setTransform(54.1,-52.5,0.561,0.561,0,0,0,6.6,8.3);
	this.instance_15.alpha = 0.141;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3E1208").s().p("AgkBdQgbgLgJgjQgJgiAQgmQAPgnAegUQAdgTAbALQAcALAJAjQAJAjgPAlQgQAngeAUQgTAMgRAAQgLAAgKgEg");
	this.shape_60.setTransform(54.8,-53.3,0.561,0.561);

	this.instance_16 = new lib.Path_31();
	this.instance_16.parent = this;
	this.instance_16.setTransform(24.6,-56.3,0.561,0.561,0,0,0,6.2,8.1);
	this.instance_16.alpha = 0.141;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3E1208").s().p("AgjBcQgbgLgJgiQgJgjAPglQAPgmAegUQAdgTAbALQAcAKAIAjQAJAjgPAlQgPAmgeAUQgTAMgRAAQgKAAgKgEg");
	this.shape_61.setTransform(25.5,-57.3,0.561,0.561);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgYBrQg+gJgvgyQgtgwgShHQgDgPAJgMQALgLAPACIFSAyQAPADAGAOQAGAOgIANQgmA/g6AhQguAagwAAQgNAAgOgCg");
	this.shape_62.setTransform(38,-40.2,0.561,0.561);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DB8575").s().p("AAAAAQADgIgDAIIAAAFIAAgFg");
	this.shape_63.setTransform(66.6,-53.7,0.561,0.561);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DB8575").s().p("AoMB2QAdiYBPh2IACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB4QALB3gaBuQhhhChXhbQiLiQgeiDQgvBJhGAwQg0AlhZAkQhpAng4AYQhiAqhKAzQhKBFgWBoQggiQAciag");
	this.shape_64.setTransform(43.4,-71.1,0.561,0.561);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9A184").s().p("AhzJlQhrgOhdhBQjHiJgVkaQgJh7Afh8QAgh8BBhhIACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB5QALB2gaBuQgxDZi7CUQiiCAiuAAQgfAAgggEg");
	this.shape_65.setTransform(43.4,-59.8,0.561,0.561);

	this.instance_17 = new lib.Path_37();
	this.instance_17.parent = this;
	this.instance_17.setTransform(51.2,36.9,0.561,0.561,0,0,0,66.3,79.3);
	this.instance_17.alpha = 0.09;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF4F4B").s().p("AAKN2Qk6gKlkixQBDi2Btj5QBEicAJhCQAMhSg7mpIg8mZQAwgKAkgCIBEgEQAJAuA1AoQBEA0BqgBQBGgBAJgtQAFgcgVg+QAKgCAgACIC8DPQC9DbgHA4QgNBlgVA/ICQFgQCaGRAwDpQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_66.setTransform(51.3,31.4,0.561,0.561);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF4040").s().p("AjejeIBdAAQAXgBAbAMQAZALAQARIBVBVQAoAoCJB+QgZAIhqBFQhqBHgXAIg");
	this.shape_67.setTransform(62.6,-5.8,0.561,0.561);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F9A184").s().p("AixhaQCngIC8ALQgGAwAGBhQhpAQgxAGIh+AOIhLi4g");
	this.shape_68.setTransform(40.6,-13.1,0.561,0.561);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ED8C73").s().p("AhiB9IgFiLQgBgvAdgjQAdgiAqgCQApgBAfAhQAfAhABAvIAEBqQgbAbhMAOQghAGgYAAQgcAAgOgIg");
	this.shape_69.setTransform(39.4,-29.5,0.561,0.561);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F9A184").s().p("AhhC9IgIkIQgBgvAdgiQAdgjAqgBQApgBAfAgQAfAhABAvIAIECIjKAQg");
	this.shape_70.setTransform(39.5,-26.1,0.561,0.561);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#462B24").s().p("AkcL6QkkhrhJnHQhHm5FAklQDAivD/hMQBCgUBGAtQAiAXAWAaQA1gSBKAnQBSAtBDBhQCvEBgfHJQgeGwlACGQhlAqh1AHIhggCQghAKgzACIgbABQhYAAhQgeg");
	this.shape_71.setTransform(41.4,-55.7,0.561,0.561);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#ED8C73").s().p("ACEGOQhSgxjqloIjblfICGg5IEeDmQErD5A+BnQAkA7gOA7QgMA1guAnQgtAlg5AIQgOACgNAAQgtAAgkgWg");
	this.shape_72.setTransform(87.1,21.6,0.561,0.561);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFD7A0").s().p("AggBWQAGhYAChYIAcADIAdADQgJBMgDBjg");
	this.shape_73.setTransform(67.8,-8.2,0.561,0.561);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFC054").s().p("AiuBUQAGhYAChYIAdADQA7AIBugDQA4gCAsgDIAPAQQARAUAHAUQAWA/hYAnQg1AYheAAQg6AAhKgJg");
	this.shape_74.setTransform(75.8,-8.1,0.561,0.561);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FBA386").s().p("AhWBdQg+gIhCgOIg1gLIAAiiIDfAdQBeAMCsgSIAQAQQASAUAHAUQAXA/hYAnQg1AYheAAQg8AAhNgKg");
	this.shape_75.setTransform(70.7,-8.6,0.561,0.561);

	this.instance_18 = new lib.Path_48();
	this.instance_18.parent = this;
	this.instance_18.setTransform(50.5,79.1,0.561,0.561,0,0,0,68.2,17.2);
	this.instance_18.alpha = 0.09;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8D242E").s().p("AuDIcQAZjpA4joQBTlWCIkQITBAZIAZA4QAeBOAiBpQBpFOBXHhg");
	this.shape_76.setTransform(50.2,99.8,0.561,0.561);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C5E0DF").s().p("AhrgGQAFguAQghIAzATICOBDQgUAugYAoIiqhdg");
	this.shape_77.setTransform(-120.2,-8.6,0.561,0.561);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3EA2A2").s().p("AiECIQAojXBEhgQAhgwAZgFIBhCoQAKAbgYBRQgbBeg0BXIiqhdg");
	this.shape_78.setTransform(-118.8,-16.6,0.561,0.561);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FBA386").s().p("AAjCgQgQgfAqhDQAOgXgFgFQgGgHgqANQhNAcgtAMQhUAWABggQAAgIBYgmIBXgjQg2AMg3AEQhvAJgIgnQgDgPC2gRQhMAFgzgTQgtgRAFgTQACgIBjABQAxAAAxACQgogEgogIQhQgPABgSQABgOBPAGQBoAIAvgJQBqgSA0AiQAbARAEAUQACBMgOAhQgOAgg7AqQg7ApgLAaQgLAbgLAHQgEACgDAAQgJAAgIgNg");
	this.shape_79.setTransform(-143.6,26.3,0.561,0.561);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FBA386").s().p("AjeEWQCFhqBckaQAdhZAWhgIAQhQICZAZQgHAsgMAyQgWBoghBgQhoEuigCCg");
	this.shape_80.setTransform(-128,5.5,0.561,0.561);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDEDED").s().p("Aj3IwQj7ggjrgqQgkgHgWgdQgXgdACgkIAMjpQACghAagTQAagTAgAIQESBMDvAeQD9AhCYgbQBngSAPgdQBljQBHjkQBAjNADhdIA6AOQBZAeA4BUQA5BVgJBbQggFIh/EHQhBCFiWBCQiWBCjwAAQiCAAilgUg");
	this.shape_81.setTransform(-44.3,-1.6,0.561,0.561);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EDEDED").s().p("AhFB4QgLgOAAgUIADi9QAAgOAIgJQAIgIAKACICEAcIgTDnIhpAHIgCAAQgOAAgKgOg");
	this.shape_82.setTransform(-90.6,12.8,0.561,0.561);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FD9D83").s().p("AiXDVQhYgVAEgpQABgLAJgRQAIgNgDgCQgwgsARghQAagagEgEQg6gwAXgjQALgRAWgIQgNgfgEgeQgHg7AyAKQAVAFAoAMQApANASAIQAhAQAmgHQAHgBAPgGQAPgFAIgBQAMAAAKAGQAHAEAKALQAkAoATAoQAKAUA1ALIBTARIgZDEIiDgEQgLAPgPAOQgSARgNADQgcAHhAAEIgvABQgsAAgagGg");
	this.shape_83.setTransform(-104.5,9.9,0.561,0.561);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FBA386").s().p("AhgDAQhVgSg0g6QgsgwgsiJQgIgYAQgUQAQgTAaAAIABAAIAlgFQAegEArgBQAagBAZgIIArgPQANgEAEAaQAEAagRATQgRATgtAQQglAOAAAIQACANAjAXQARAKARAJIAkgnQAqg6AihWQALgcAmgBQAlAAgKAnQgQA+glBEIgjA3IAoguQAsg4AVgtQAbg6AjAMQAOAFAGAOQAHAOgGANQgNAgg9BSIg6BKIAwgrQA5g2Aqg3QAWgeAYAVQAYAVgXAiQgXAhg1A4IgwAyIAmgSQArgZAbglQAagiAgAKQAgAIgOAcQgTAkhOA6QhZBCg/AFQgqAEgjAAQg0AAgmgIg");
	this.shape_84.setTransform(-87.3,47.3,0.561,0.561);

	this.instance_19 = new lib.Path_57();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-56.3,11.6,0.561,0.561,0,0,0,104.8,58.3);
	this.instance_19.alpha = 0.102;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C5E0DF").s().p("AiHAhQgsgfgZgsQgBgCABgDQABgDADgBIA8gPQARgEAMAMQBDBBBHgFQAsgCAhgcQAWgSAMgXQADgGAIgBIA4AAQAFAhgSAkQgkBHhzALQgRACgQAAQhRAAg+gsg");
	this.shape_85.setTransform(-95.9,-29.8,0.561,0.561);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C5E0DF").s().p("AkcB3QgxgIgqgLIgggLIATiCIB1AVQCSAQCRgTQCSgUBoguQA0gXAXgUIA/B3QgSAYg0AdQhrA7iyAXQhUALhQAAQhZAAhUgOg");
	this.shape_86.setTransform(-90.6,-4.9,0.561,0.561);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3EA2A2").s().p("AkSIMIhdgNQlzlMgilbQgLhtAYhhIAbhLQFfAXD5gvQB8gYA1gdQFIBQDqD0QB2B6AzBpQl9GOmiBUQhjAUhcAAQgeAAgegDg");
	this.shape_87.setTransform(-71.4,23.5,0.561,0.561);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3EA2A2").s().p("AlSCQQhPm/gzivIBLgbQBcgeBYgQQAaAmAvAVQAvAVAtgHQApgFAigVQAhgVAUggIAmAEIADgCQBMAIAyAaIAdBWQAlBtAfB2QBnF5AWFEIrjBAQgdi9gnjgg");
	this.shape_88.setTransform(-91,-2.4,0.561,0.561);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F79178").s().p("AlTCQQhJm6gzivIA0gQQBBgTBHgOQDigtC8AZQALAQATAXIAeAlIAwA7IA6ETQAjCcAkBzQAPAwAoAVQAYCVAJCDIrjBAQgbi6gljeg");
	this.shape_89.setTransform(-90.8,-2.9,0.561,0.561);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#501C0E").s().p("An3CLQBmg+B9g2QGNitHOgmQgKANgXAPQgsAhg7AUQiaASjOAuQmcBbkBCNg");
	this.shape_90.setTransform(-104.5,-68.2,0.561,0.561);

	this.instance_20 = new lib.Path_64();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-79.7,-82.9,0.561,0.561,0,0,0,6.6,8.3);
	this.instance_20.alpha = 0.07;

	this.instance_21 = new lib.Path_65();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-107.7,-78.7,0.561,0.561,0,0,0,5.6,15.3);
	this.instance_21.alpha = 0.07;

	this.instance_22 = new lib.Path_66();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-123.4,-74.6,0.561,0.561,0,0,0,5.4,20.1);
	this.instance_22.alpha = 0.07;

	this.instance_23 = new lib.Path_67();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-95,-78.4,0.561,0.561,0,0,0,4.4,6.3);
	this.instance_23.alpha = 0.07;

	this.instance_24 = new lib.Path_68();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-90.3,-83.9,0.561,0.561,0,0,0,11.9,13.4);
	this.instance_24.alpha = 0.07;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#642812").s().p("AihlVIBMgOQBdgKBfAPQEsAwC0EdQidAOjMAvQjDAuiaA4QjiBSjlCEQgGp8GrhBg");
	this.shape_91.setTransform(-104.5,-77.8,0.561,0.561);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E6E2E1").s().p("AgNAvQg6gRgfg5QgBgDABgFQACgGADAAIAogOIANAZQASAbAXAJQAVALArgBQAVgBARgCIAEAiQgMAGgUACIgXABQgeAAgfgJg");
	this.shape_92.setTransform(-78.5,72.8,0.561,0.561);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C5E0DF").s().p("AjpiFQgEgDAAgFQgBgFACgEIAWgkQACgEAFgBQAFgBAEADIG0FbIggAjg");
	this.shape_93.setTransform(-76.4,84.9,0.561,0.561);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C5E0DF").s().p("AgiAlQgWgTA+g6IAjAjQgSAVgTANQgPAMgLAAQgHAAgFgEg");
	this.shape_94.setTransform(-70.8,79.6,0.561,0.561);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C5E0DF").s().p("AgaAnQgUgSAwg/IAfAjQgOAXgOAOQgMANgKAAQgFAAgEgEg");
	this.shape_95.setTransform(-68.6,81.7,0.561,0.561);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C5E0DF").s().p("AguAQQgQgQAegMQAVgIAkgFIAcAZQguAagaAAQgRAAgKgKg");
	this.shape_96.setTransform(-73.6,77.3,0.561,0.561);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C5E0DF").s().p("AgQAqQgNgHAHgfQAEgUAMgbQATAZANAUQgVAqgPAAQgDAAgDgCg");
	this.shape_97.setTransform(-66.3,83.8,0.561,0.561);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3EA2A2").s().p("AjmhyIAeguQAngvAxgEQALAZARANIABABQAHAFAJAFQAVAWAmABQAPAAASgKQDJCiAFB0QACA6gmAZg");
	this.shape_98.setTransform(-75.7,82.5,0.561,0.561);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C5E0DF").s().p("AjIBsIDIk0QADgEAFgBQAFgBAEAEIANAhQATAmAhAbQAiAbArASQAWAJAQAEQAEAEAAAFQAAAFgFAEIkyDqg");
	this.shape_99.setTransform(-72.3,66.4,0.561,0.561);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FBA386").s().p("AgHDkQhYhHAYgjQAYgigugpIgzgjIhVkCIAkgVQAtgVAvgEQCWgMBzClQBzCkhWCXQgbAvgrAoIgnAeQgwgdgrgkg");
	this.shape_100.setTransform(-67.3,48.1,0.561,0.561);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F79178").s().p("AhuBzQiCgzhJh1QgHAIgHAEQgeARgmgQQgmgQgXgpQgMgVgFgZIAJAIQAkAfAtAAQArAAAngbQA7ByBmA5QBuA/CGgRQBngMBhgxQBigvBIhMQglBHg8AyQg/A1hPAYIhPAZQg9ATg8AAQhIAAhJgdg");
	this.shape_101.setTransform(-105.5,-44,0.561,0.561);

	this.instance_25 = new lib.Path_76();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-130.8,-69.5,0.561,0.561,0,0,0,0.4,0.2);
	this.instance_25.alpha = 0.102;

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E6E2E1").s().p("AgHAqQgigKgagaQgRgQgKgVQgCgDACgDQACgDADAAIAkgIIALAXQAQAZAWAKQAVAKApgEQAUgCAPgFIADAVQgIAJgSAFQgQAFgSAAQgVAAgWgHg");
	this.shape_102.setTransform(-63.9,66.2,0.561,0.561);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C5E0DF").s().p("AjmiEQgDgDgBgEQgBgFACgEIAWgkQACgEAFgBQAEAAAEACIGwFXIggAig");
	this.shape_103.setTransform(-61.6,77.9,0.561,0.561);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C5E0DF").s().p("AgiAkQgVgSA9g5IAjAiQgpAtgWAAQgHAAgFgEg");
	this.shape_104.setTransform(-56,72.7,0.561,0.561);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C5E0DF").s().p("AgaAmQgUgSAwg9QARARAOARQgPAXgNANQgMANgKAAQgFAAgEgEg");
	this.shape_105.setTransform(-53.8,74.8,0.561,0.561);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C5E0DF").s().p("AguAQQgPgQAegMQAUgIAkgFIAbAZQgtAagaAAQgRAAgKgKg");
	this.shape_106.setTransform(-58.7,70.4,0.561,0.561);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C5E0DF").s().p("AgQApQgNgHAHgeQAEgUAMgaQAPAUAQAXQgUAqgPAAQgDAAgDgCg");
	this.shape_107.setTransform(-51.5,76.8,0.561,0.561);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3EA2A2").s().p("AjkhxIAegtQAnguAxgFQAIAYATAPIABABIAQAKIAAAAQAVAVAmABQAOAAATgKQDGCgAEBzQACA4glAag");
	this.shape_108.setTransform(-60.8,75.5,0.561,0.561);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B4CFCD").s().p("Ai3BiIC4kZQACgEAFAAQAFgBADADIALAeQASAjAfAaQAeAYAoARQAUAIAOADQAEAEAAAFQAAAFgEADIkZDVg");
	this.shape_109.setTransform(-58,60,0.561,0.561);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F79178").s().p("AgHDQQhQhBAWgfQAWgfgqgnIgvggIhNjrIAhgTQApgTArgDQCKgLBoCXQBpCWhPCJQgZArgoAkIgjAcQgsgbgnghg");
	this.shape_110.setTransform(-53.4,43.3,0.561,0.561);

	this.instance_26 = new lib.Path();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-87.5,-63.7,0.561,0.561,0,0,0,6.4,7.3);
	this.instance_26.alpha = 0.102;

	this.instance_27 = new lib.Path_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-113.9,-56.9,0.561,0.561,0,0,0,6.8,8);
	this.instance_27.alpha = 0.102;

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#491B0C").s().p("AgWBFQgYgVgLgkQgKgiAJgdQAKgcAYgGQAYgFAXAWQAYAVALAjQAKAjgKAcQgJAdgYAFIgKACQgSAAgTgSg");
	this.shape_111.setTransform(-87.4,-64.4,0.561,0.561);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#491B0C").s().p("AgXBJQgZgXgLglQgLgkAKgeQAKgeAZgFQAZgFAYAWQAZAWALAlQALAkgKAeQgKAegZAFIgKABQgTAAgUgRg");
	this.shape_112.setTransform(-113.8,-57.7,0.561,0.561);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FBA386").s().p("AgLBjQgmgQgXgpQgXgpAFgoQAEgpAfgRQAegRAlAQQAmARAXAoQAXApgFAoQgEApgfARQgPAJgSAAQgRAAgRgIg");
	this.shape_113.setTransform(-127.1,-51.8,0.561,0.561);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("Ag3BiQg1gagrg5QgJgNADgNQADgOAMgEIEMhUQAMgDALAKQAKAKAAAPQgDBIgdAyQgdA1gyAPQgTAGgTAAQgfAAgigRg");
	this.shape_114.setTransform(-98,-50.4,0.561,0.561);

	this.instance_28 = new lib.Path_79();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-103.6,-75.4,0.561,0.561,0,0,0,45.4,28.1);
	this.instance_28.alpha = 0.109;

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FBA386").s().p("AjOG7QiWhPgyihIgsiOQgyifBPiWQBPiWChgyIBPgZQBcgcBeAQQBcAPBNA2QA2AmAoA2QAoA3AUBBIAsCOQAyCghPCWQhPCWihAyIhPAYQg+AUg8AAQhgAAhbgxg");
	this.shape_115.setTransform(-102.5,-63.5,0.561,0.561);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F79178").s().p("AgxBWQgcgegFguQgGgtAUgkQAVgkAigEQAigEAcAeQAdAeAFAuQAGAtgUAkQgVAkgjAEIgIABQgcAAgagbg");
	this.shape_116.setTransform(-77.3,-67,0.561,0.561);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F79178").s().p("AhUiCIB9gLIAtEMIirAPg");
	this.shape_117.setTransform(-95.5,-35.9,0.561,0.561);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("Ag/CyQhmgQg4hiQgSgegKgjIgIgdIB3iLIAJAQQAMATAQAQQAyAyBFgFQBGgFArgyQAVgZAHgYIBjBbIgMBOQgYBYg3A2QgMAMgQgEQgQgEgFgQQgRg2gWgXQgdgegvAIQgSAJgFAhQgDAWADAzQABASgNAMQgLAKgPAAIgFAAg");
	this.shape_118.setTransform(-36.1,-29.7,0.561,0.561);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E6E6E6").s().p("AiJBuQhxhGgkiEQAMgHAigBQAMAsAEAMQAKAcASAVQAhAnAwAXQAhAQAjhFQAqhRAbgKQAZgIAlAJQAOADAyASQBNAbAUglQATgwACgsQAHgEAEABIAHAEQAPB3hABcQg+BXhgAPQgYAEgXAAQhWAAhRgzg");
	this.shape_119.setTransform(-36.8,-25.7,0.561,0.561);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#842725").s().p("Ai/DiIh4D8IkuluIDUmiICoDRIC3miIFcGQIBsj8ICjC8QANBZAPBxIAQB/IhJDOIjWjQIjGFwg");
	this.shape_120.setTransform(-28.8,25,0.561,0.561);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#842725").s().p("AoxB5QgUgDgRgXQgXggAHgyQC3AUFxghQGqgpDzhYQAOA1gHAUQgJAdg5AWQiKA0mWAxQkVAiieAAQhQAAgygJg");
	this.shape_121.setTransform(-25.1,75.6,0.561,0.561);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#842725").s().p("AkVBJQg5hCgihWIgSguQAxgKBsgRQAMAsAEALQAKAcASAWQAhAoAwAWQAuAWAzADQAzAEAwgQQA2gSApgoQAigjAgg5QAHgRAAgZIAAgrQBGgEA2ADQAJBSgQBKQgTBQguAzQg4A/hMAiQhMAihVABIgFAAQirAAh4iKg");
	this.shape_122.setTransform(-37.5,-22.8,0.561,0.561);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#772824").s().p("ApDKXQg5kbhGnVQBVhPAvhZQAwhbARh3QASiAgNhxQgPiBg1hlQAtgMBAgLIB0gTQALAsAEALQAKAcATAWQAgAoAwAXQAuAWA0ADQA0AEAwgQQA0gSApgpQAjgjAfg5QAHgRABgZIAAgrQBtgGBFAKIAAABQAYCHA3CDQA8CQBRBiQA2EAAmE5IAjD+QAYCwAJBqQAcFDhPANQjjAklIAgQlxAhi4ASIgBAAQgsAAhLl3g");
	this.shape_123.setTransform(-30.8,23.7,0.561,0.561);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E6E6E6").s().p("Ao4HwQggjUgfjlIgZi5QgjifCShHQA5gcBfgUQApgICIgWQAMAsAEALQAKAcASAWQAhAoAwAXQAuAWAyADQA0AEAwgQQA2gSApgpQAigjAgg5QAHgRAAgZIAAgrQCrgKBIAeQAkAPABARIAhBqQApCNAlCvIkYD6Qh1BqitCfg");
	this.shape_124.setTransform(-38.2,-6.7,0.561,0.561);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F79178").s().p("AhxD/QgwgvgBgzIASlMQAAgzAjglQAkglAzgBIAfAAQAzAAAlAjQAlAkAAAzIAdFkQAAAxgwAmQgtAkg1ABIgfABIgBAAQgyAAgwgvg");
	this.shape_125.setTransform(-35.3,-37.6,0.561,0.561);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C5E0DF").s().p("AgQBzQgGgWgThSQgPhCgNgnQALgRAkgEQAigDAPAOIAWBmQANA9AHAoIABAFIg+ALQgBgBgLABIgJABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_126.setTransform(-65.6,-30.4,0.561,0.561);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3EA2A2").s().p("AjShNIBlgPQCBgSCUgPIAWBmQAOA9AGAoIABAFIjwArg");
	this.shape_127.setTransform(-73.6,-29.2,0.561,0.561);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F79178").s().p("ApUhCICZgXQDGgaDbgRQDbgRDgAzQBwAZBEAdIv0C1g");
	this.shape_128.setTransform(-51.9,-29.8,0.561,0.561);

	this.instance_29 = new lib.Path_94();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-108.8,-37.3,0.561,0.561,0,0,0,67.8,97.6);
	this.instance_29.alpha = 0.18;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#642812").s().p("ApNPMQh1gghYgvIhBgoQCJiOA0k5QARhsAQizQAWj+AFgpQAmlfBhizQCEj0Ecg5IBPgNQBkgGBjAoQE9B9C7IMQDYJeh9FfQh1FGmIA7QjhAhjEAAQkFAAjUg6g");
	this.shape_129.setTransform(-108.5,-40.3,0.561,0.561);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E6E6E6").s().p("AAqDnQixgOgthxQgphnAZh+QAIgnANgmIAMgdIAgA1QAoBCAsA9QCKDCBzBMQg2ANg/AAQgXAAgYgBg");
	this.shape_130.setTransform(-95.8,45.2,0.561,0.561);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1B2728").s().p("AjUFfQAJkdgBjTQAAibgCgHIGPgrQAIBBAGCOQAIDSgDEcg");
	this.shape_131.setTransform(-44.4,110.4,0.561,0.561);

	this.instance_30 = new lib.Path_97();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-24.9,78.5,0.561,0.561,0,0,0,57.6,13.5);
	this.instance_30.alpha = 0.172;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1B2728").s().p("AjgG5QAbk+AOjzQALi2gCgGIGLiEQAFBFgDDCQgEEQgXFag");
	this.shape_132.setTransform(-5.1,105.4,0.561,0.561);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#1B2728").s().p("AgUDQQiqgCjIgKIimgKIgSmJIRyAHIALCEQAFCPgZA8QgfBJnRAAIhPAAg");
	this.shape_133.setTransform(-24.7,82.7,0.561,0.561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.instance_30},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.instance_29},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_28},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.instance_27},{t:this.instance_26},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.instance_25},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.instance_19},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.instance_18},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.instance_17},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_16},{t:this.shape_60},{t:this.instance_15},{t:this.shape_59},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_11},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_36},{t:this.instance_7},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_6},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_5},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_4},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.8,-130.1,313.7,260.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// happy
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170,151.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},7).to({scaleX:0.5,scaleY:0.5,x:80.7,y:217.1},12,cjs.Ease.get(-1)).to({_off:true},1).wait(244).to({_off:false},0).to({startPosition:0},90).to({scaleX:1,scaleY:1,x:170,y:151.7},10,cjs.Ease.get(-0.3)).to({_off:true},6).wait(10));

	// sad blink3
	this.instance_1 = new lib.Path_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.6,159.1,0.278,0.278,0,0,0,50.1,15.7);
	this.instance_1.alpha = 0.121;

	this.instance_2 = new lib.Path_1_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.6,0.6);
	this.instance_2.alpha = 0.121;

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.2,0.6);
	this.instance_3.alpha = 0.121;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#472A21").s().p("AANANQhZiLhFABQAWgOAegdQA9g4AshHQBxAZAREeQAJCPgOCKQgmiWhWiGg");
	this.shape.setTransform(73.4,168.7,0.278,0.278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#563428").s().p("AhpBaIAIgxQgMgOgCgRIAAgNQAWACANAHIAJAIQgRgZgBgpIADgkQAsAVAPAiIAHAeQARgrA6gfIA1gVQAAAigdAsQgWAhgJAGIgwBRg");
	this.shape_1.setTransform(53.3,158.6,0.278,0.278);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#563428").s().p("Aj+BpQA+iWDqhRQBKgaBSgPIBEgKQAAAZgQAfQgJAQgIALIhaBBQhrBKhSAyQiKBTgzAAQgwAAAdhJg");
	this.shape_2.setTransform(60.1,157.7,0.278,0.278);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#563428").s().p("AAjgvIgrgjQgygqgegkQhgh1CNgTQCNgSAYEwQAMCYgQCcg");
	this.shape_3.setTransform(73.9,168.6,0.278,0.278);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#563428").s().p("AnaDGQhEjmA1hoQAnhNBnAOQAgAFAjANIAcAMQBmitFNgxQBogPBzgBIBfACQAvC6hYBzQgsA5g1AVIkIgVQkQgOgtAkQguAjhEDLQgiBlgZBeQgthegih0g");
	this.shape_4.setTransform(60,165.3,0.278,0.278);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#563428").s().p("AnyFhQgJgsgEhDQgIiFAZhtQBOliFzABQF6AACAFJQAoBmAKB7QAFA9gDApQgmiWhWiFQhaiLhFABIg2AlQhHAmhNAGQhEAGhrggQg1gQgogSQhJADhBCUQguBsgeCQQgHAmgTAIQgFACgFAAQgEAAgEgBg");
	this.shape_5.setTransform(63,168.5,0.278,0.278);

	this.instance_4 = new lib.Path_9_0_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.4,180.3,0.278,0.278,0,0,0,6.9,7.5);
	this.instance_4.alpha = 0.078;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#35221A").s().p("AgPBhQgZgCgMgeQgOgeAGgoQAHgoAWgbQAWgaAZACQAYACAOAeQANAegGAnQgIApgWAaQgUAZgVAAIgFAAg");
	this.shape_6.setTransform(57.2,179.6,0.278,0.278);

	this.instance_5 = new lib.Path_11_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(71.6,179.2,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_5.alpha = 0.078;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#35221A").s().p("AgSBhQgZgDgMgfQgMgeAIgnQAIgoAXgaQAXgbAYAEQAZADAMAeQAMAfgIAnQgIAngXAbQgUAXgVAAIgGAAg");
	this.shape_7.setTransform(71.5,178.4,0.278,0.278);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjDAPQgJgCAFgDQAagKAzgHQA0gIBAgBQA/AAA4AGQA3AHAfAKQAGACgHADQgIACgQAAIlZADIgGAAQgLAAgHgCg");
	this.shape_8.setTransform(64.9,185.7,0.278,0.278);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F79178").s().p("AkoCsQiChygMiqQgjAHgjgaQgjgagQguQgOglAFgkQARAgAkAWQAjAWAjACQAUABAWgDQApDHB/BuQCHB2DNgHQDWgGBxhnQBFhABFidQgPCXhuBrQhwBtiaAJIivAKIgbABQiaAAh3hpg");
	this.shape_9.setTransform(61.7,188,0.278,0.278);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9A184").s().p("AggBrQgmgZgSgyQgSgxAOgsQANgtAlgNQAlgNAmAaQAnAaARAxQASAxgOAsQgNAtglANQgNAEgNAAQgXAAgagRg");
	this.shape_10.setTransform(48.6,181.5,0.278,0.278);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9A184").s().p("AljH9QiChzgKitIgTk6QgKizByidQB3ikCogKICtgLQCogKCICVQCECPAKCzIATE6QAKCthzCCQh0CCisAKIiuAKIgcABQibAAh4hqg");
	this.shape_11.setTransform(63.3,178.6,0.278,0.278);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F79178").s().p("AgMB/QgngEgYgoQgYgoAFg0QAGg0AfgjQAfgiAnAEQAnAEAYAoQAYAogGAzQgFA1gfAjQgcAfghAAIgJgBg");
	this.shape_12.setTransform(77.1,180.4,0.278,0.278);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF4F4B").s().p("AhWDOQg4h1gwh6Qgwh7BuhTQAigaAugTIAngOIDXHXIj2B+QgSgjgcg6g");
	this.shape_13.setTransform(92,216.7,0.278,0.278);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FD9D83").s().p("AmHDKQiUh+ikkkQBzhKA5gmQCpEtCHBlQBsBRCEgXQCJgYEMh8QD2h6AVgEIATClQgfAOjhB/Qj0B/ieAbQg7AKg3AAQiwABiTh/g");
	this.shape_14.setTransform(108.1,225.2,0.278,0.278);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FD9D83").s().p("AhxB0QgWgVgcgiQgjgqgFgTQgCgHAJgEIAKgEQgEgHgCgIQgEgRAKgFQALgFANACIAKADIgVgZQgLgNAOgJQAMgIASAAQAMABAUALIASAKQgHgLABgMQABgJASgBQASAAAZAKQAZALA3AhQA6AiAOAHQAWAJAigBIAegEIgXAuIiLA0QhwAoggAAQgIAAgDgDg");
	this.shape_15.setTransform(124.7,235.2,0.278,0.278);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FD9D83").s().p("AhcBRQAlg0AlgbQBDgvgQhDQgGgYAbANQAcANAHAhQAFATgSAyQgOAkAXAGQAVAFARAHQgJALgTAgIjZAoQAMgVASgbg");
	this.shape_16.setTransform(130.4,217.9,0.278,0.278);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FD9D83").s().p("AgBACQADgFAAADIgBACIgBAAIgBAAg");
	this.shape_17.setTransform(133.9,219.2,0.278,0.278);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FD9D83").s().p("AA7C8QgsgBgvgLQg1gLgkgRQgNgHgTgPQgXgRgHgKIALirQAHgHAJgMIAPgTQAhgnAqgcQAWgOARAFQAIADAMAIIARALQAUAJAMAEQARAFAPgBQBRgEAAAoQABAUgQAVQAYAJAMARQAZAhg7AnQAHgCAIAJQAKAKACAOQAFAlg1AUQgCABAHANQAJAQACAJQAFAhhIAAIgLAAg");
	this.shape_18.setTransform(131.9,223.2,0.278,0.278);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FD9D83").s().p("AiMCzQgcgKgcgXQgMgKgOgOQgWgTACgDIAEgEQAKgGB2gvQB3gwAZgJQAbgJAKgGQAVgKADgJQACgHgggTQgmgYgMgVQgNgWAGgeQAHgeAPAFQATAHAUAeQASAaAUACQBIAGAiAcQAZAVAFAkQALBYhpBSQhVBEhhAAQg0AAg3gTg");
	this.shape_19.setTransform(128.2,235.5,0.278,0.278);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7C3B2D").s().p("AEtBqQgqhFgPhQQgyAfhYA8QhSAwhqAPQA1hNBMg6QgoARhNAnQhEAfgxADIARh4IhyBeQg9A0gzARIAIgbQAFgSAGgKQgfATggAKQATg3Avg9QBeh8CQggQgYgMgKgJQCAgPBmAMIAkAFQB1AUBTBFQgGgRACgQQAJADAKAIQAVAQAFAaQgCgLAHgMQAKgTAfgRIACAZQAAAdgMAQQAGgDAJgDQATgEATAGIgMAQQgRARgYABQAIACAJAHQARAMAGAVIgdgEQAfAuANAzQAIAeACAbQAEAogDARIgKgCQgMgEgNgOQACAZgBAYQg+gtgqhFg");
	this.shape_20.setTransform(128.6,184.9,0.278,0.278);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD7A0").s().p("AiSAJQgTgaABgaQARgOAVAEIARAIQAEANAPAOQAfAaA6AAQA5AAAcgbIARgdQASgQAZAEIAVAHIgEASQgHAWgOARQgtA6hgAAQhpAAgog1g");
	this.shape_21.setTransform(125.9,211.9,0.278,0.278);

	this.instance_6 = new lib.Group_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(119.2,233.4,0.278,0.278,0,0,0,15.7,11.4);
	this.instance_6.alpha = 0.09;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#613D29").s().p("AlrEHQgKg1ADhNQADheAXhPQBAjZCxgRQClgPCiAkQAxALAxAQIArAOIAHABQgrCzh7AGQh1AHjTAOIABAcQABAjgEAkQgMBxg5BIg");
	this.shape_22.setTransform(123.9,238.2,0.278,0.278);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7EBDB").s().p("AgeAyQgfgRgbgfQAYgWAmgQQAqgTA5gGQAQAdAAAbQAAAngoAUQgQAIgSAAQgVAAgYgMg");
	this.shape_23.setTransform(111.3,248.1,0.278,0.278);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7EBDB").s().p("AgPAaQgqgQgPgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIASgBQAFAJAIAJQAQARASADQARAEATgHIAQgIIAVAUQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgZAMgZAAQgTAAgRgIg");
	this.shape_24.setTransform(116,247.3,0.278,0.278);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7EBDB").s().p("Ai7AUIgDgjIF9gIIgFAvg");
	this.shape_25.setTransform(113.2,251.5,0.278,0.278);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#613D29").s().p("AinAEQAthYCtgGQAHALAFAEQAWAVAhAAIABAAQARAAARgKQAbAYADBDQABAigFAcIlkACQgNgrAXgsg");
	this.shape_26.setTransform(113.2,249.1,0.278,0.278);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C3B8A1").s().p("Ag2g9IBmgJIAGB8IhZARg");
	this.shape_27.setTransform(115.9,246.5,0.278,0.278);

	this.instance_7 = new lib.Group_3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(105.4,233.1,0.278,0.278,0,0,0,17.7,10.3);
	this.instance_7.alpha = 0.078;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#523222").s().p("AmcB6QAkhpBHhWQB2iSCjgQQCagPCQAhQArALAsAPIAlAMIAPC2QhhgIiOAOIjnAZQg3BCguArQgnAmhCA0g");
	this.shape_28.setTransform(108.8,237,0.278,0.278);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#73312A").s().p("AgXgbIABhaQAOADAMANQAZAZgGAyQgFAxgQA1QgGAagHAQQgMgwAAhhg");
	this.shape_29.setTransform(138.9,194,0.278,0.278);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#73312A").s().p("Ag8g6IgLhRIBAAJQATAPAUAbQApA2gBA8QgBA9gXAgQgMAQgLAFQg+higXhkg");
	this.shape_30.setTransform(136.9,189.5,0.278,0.278);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQAwgoAwguIAmgnQhhAnglBWQhZBMhGAlQAIgqAfgyg");
	this.shape_31.setTransform(127.6,185.6,0.278,0.278);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#73312A").s().p("AgogJQBHg0BggPIhBA6QhUA/hoAgQAigyA0gkg");
	this.shape_32.setTransform(128.5,185.6,0.278,0.278);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#73312A").s().p("ABDg+IgmAnQgvAtgwApQAlhWBggng");
	this.shape_33.setTransform(123.8,184.3,0.278,0.278);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F79178").s().p("AjFCdIhJgTQg9gPg0giQA1ATA6ALQBtAUBkgaQBqgbBLhIQA9g7AohKQAaAMAWADQAeAEAbgLQAcgLASgXQAIgKAGgMQABAfgOAhQgUArgkAUQglAUgggOQgLgGgGgGQg4B3h4A6QhNAlhSAAQgtAAgugLg");
	this.shape_34.setTransform(130.6,204,0.278,0.278);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FBA386").s().p("AguBnQgggOgJgoQgJgqAUgpQAUgrAkgUQAjgUAgAOQAgAPAJAoQAJAqgUApQgUArgkAUQgVAMgTAAQgOAAgNgHg");
	this.shape_35.setTransform(138.8,200.2,0.278,0.278);

	this.instance_8 = new lib.Path_9_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(139.7,192.9,0.278,0.278,0,0,0,0.6,0.2);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Group_5_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.6);
	this.instance_9.alpha = 0.078;

	this.instance_10 = new lib.Group_6_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.8);
	this.instance_10.alpha = 0.078;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#491B0C").s().p("AAbA/IhGgNQgGgBgEgEQgDgFAAgFQAAgLADgPQAIggAVgVQAWgVAVADQAWAEALAaQAKAagIAhQgDANgIAPQgEAIgJAAIgDAAg");
	this.shape_36.setTransform(120.2,193.6,0.278,0.278);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#491B0C").s().p("AAVBCIhBgQQgMgDAAgMQgBgOAEgQQAIggAVgVQAVgVAWAEQAWADAKAaQALAagIAhQgEASgLASQgFAIgHAAIgGgBg");
	this.shape_37.setTransform(132.7,196.2,0.278,0.278);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A14740").s().p("Ah2gFIgDgEQBggTCTAsg");
	this.shape_38.setTransform(124.5,203.1,0.278,0.278);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#73312A").s().p("ACDAnIgYgCQiTgshgASIAEAEIgLgBQgMgBgEgGQgDgFAIgDQAmgVAzgJQA0gKAyAEQAyAFAiASQAhARAHAZQABAFgJAEQgIACgJAAIgFAAg");
	this.shape_39.setTransform(125,202.6,0.278,0.278);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7EBDB").s().p("AgBA9QglgGgWgrQgPgfgDgoQAegGAmAJQArAKAuAbQgDAggPAVQgTAcgfAAIgMgBg");
	this.shape_40.setTransform(94.6,242.1,0.278,0.278);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7EBDB").s().p("AApA/QgsgIgZgnQgYglAKglQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAPAKIAAAVQADAYAMANQALAOATAEIAQACIAFAeQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAIgDACIgBAAg");
	this.shape_41.setTransform(98.3,243.7,0.278,0.278);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7EBDB").s().p("AidhdIARgfIEpDUIgeAlg");
	this.shape_42.setTransform(94,245.7,0.278,0.278);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#613D29").s().p("Aipg8QAOgrApgXQBSgvCIBfQAAAOACAGQAFAdAaATIAAABQAOAJASABQAIAkgjA5QgSAcgTAVg");
	this.shape_43.setTransform(94.7,244.6,0.278,0.278);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C3B8A1").s().p("AhGApIA6h3IBTA0Ig/Bpg");
	this.shape_44.setTransform(98.7,243,0.278,0.278);

	this.instance_11 = new lib.Path_10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(128.1,190.9,0.278,0.278,0,0,0,39.5,25.4);
	this.instance_11.alpha = 0.09;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBA386").s().p("AhGGzIhJgSQiVgmhPiEQhPiFAliUIAiiDQAeh6BkhOQBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCEglCUIghCDQgmCViEBPQhaA2hiAAQgtAAgwgMg");
	this.shape_45.setTransform(127.1,196.3,0.278,0.278);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#523222").s().p("AA0BKQlagaiOhTIBDgxIMWAAQAHAAAFAFQAEAFgBAHQgGAsgPA4QgOAygDAAQgpACguAAQhzAAiQgLg");
	this.shape_46.setTransform(122.7,231.4,0.278,0.278);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFC054").s().p("AgDGUQkVgGiBhNIB6l9QAkjHBdhWQAdgbAfgMIAagHIAMgBQAKASAOAOQAkAkA0AGQA1AGAsgZQAogXAYgsQAuAEApAPQAzASAaAeQASAUAPAeQgDAHgTEDQgUEYgQBYIgJAVQgIAOADAHQigAQiGAAIgvgBg");
	this.shape_47.setTransform(123.9,221.5,0.278,0.278);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9A184").s().p("Ak5BCQAphIA4ggQARgKARgFIAOgDIC8gJIAjAFQBjAEAOACQBNAMAkApQASATAPAdQgCADgCAQg");
	this.shape_48.setTransform(126.6,212.2,0.278,0.278);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F79178").s().p("AgCBVQgqgDgvgPIAJhcQAAgZASgSQARgRAZAAIAOAAQAeAAAgAOQAmARAAAXIAABvQghAGgjAAIgagBg");
	this.shape_49.setTransform(125.8,207.6,0.278,0.278);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F9A184").s().p("AgTCGQgbAAgYgSQgYgTAAgYIAOiRQABgZARgSQASgSAZAAIAOAAQAdAAAhAPQAmAQAAAXIAACSQAAAYgnAWQgjAVgbAAg");
	this.shape_50.setTransform(125.7,208.9,0.278,0.278);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#73312A").s().p("AmmB/QAEh/BHh0QCOjmFNA+QEaA0AMEOQAHCIgyB9g");
	this.shape_51.setTransform(128.1,189,0.278,0.278);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9A184").s().p("AhJCrQghgEgUgSQgagXgGgKQgUgcgBgoQAAgkALgrQAJgkAOgdQADgGALghQAIgcAEgDQAPgKALANQAKALAAARQAAAMgGAJIgKAOQgHAMAFAOQAfgLAWgRQAZgUA3ghQAVgMAOAPQAPAPgZAQQgjAWgpAhIAPAUQApgcA0geQAfgSAQAaQAQAZgpAPQgfALg7AgIAUAWQAegUA8gUQAkgLAFAZQAEAYgiAGQgYADg7AXIAPAeQA9geAagBQAPAAADAUQAEAUgXAHIg3APQgbAIgSAMQguAegnAOQgWAHgQAAIgKAAg");
	this.shape_52.setTransform(153.2,200,0.278,0.278);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFD7A0").s().p("AgRAoIgWhJQgOgsgNgfIBBgRQAsBuAYB5QgWAGgqAOQgIgsgMgqg");
	this.shape_53.setTransform(136.6,212.6,0.278,0.278);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFC054").s().p("AhmCQIgzj0QA1ACBJgRIBwgcQAtBuAYB5QgpALhOAbQhAASg+AAIgLAAg");
	this.shape_54.setTransform(134.2,213.1,0.278,0.278);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9A184").s().p("Al2ELIgYi8QElAIDXifQBFgzA1g/QAignAJgTIBUgXIggBKIBIAjQhCCGh3BkQjgDAlLAAIghgBg");
	this.shape_55.setTransform(141,208.1,0.278,0.278);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#ED8C73").s().p("AkLCzQhXgMhSgvQCJA0COgcQB8gXB0heQBrhWBJh6QAVAYAYAKQAgANAigDQAjgEAcgVQgcAxgrAWQgsAVgjgTQgHgDgFgFQhgCLiPBMQh5BAh5AAQgfAAgegDg");
	this.shape_56.setTransform(106.3,199.5,0.278,0.278);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F9A184").s().p("AhAB6QgkgTgGgxQgGgxAbgyQAbgzAsgWQAsgWAjATQAkATAGAxQAGAxgbAyQgbAygsAXQgXAMgVAAQgTAAgQgJg");
	this.shape_57.setTransform(116.1,193.7,0.278,0.278);

	this.instance_12 = new lib.Path_26_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(114.3,183.5,0.278,0.278,0,0,0,20.7,10.1);
	this.instance_12.alpha = 0.121;

	this.instance_13 = new lib.Path_27_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(94,176.1,0.278,0.278,0,0,0,25.9,20.2);
	this.instance_13.alpha = 0.121;

	this.instance_14 = new lib.Path_28_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(100,181.1,0.278,0.278,0,0,0,18.4,9);
	this.instance_14.alpha = 0.121;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4F3026").s().p("ApMIuQhEhzgWiXQhFnQEukgQBuhoCXhIQBwg1BtgaQBEgQB3AuIBpAxQCpgUBiC1QB7DjgjHpQgHBfgUBOIgJhtQgIhDgSgpQgkhWhChKQgUgXhjhcQhHhDgig3QgvhNgNhlQguB9hsBBQg/AmiUArQiSAqhAApQhoBCgqCCQgzCQABCEQABCbBKB1QhYhfgohDgAhYj3QhNAhgXAMQg1AcggAjQAigZBBgYQBMgZAkgOQCCgzAQhfQgsBGiAA4g");
	this.shape_58.setTransform(100.6,186.8,0.278,0.278);

	this.instance_15 = new lib.Path_29_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(107.5,191.7,0.278,0.038,0,0,0,6.7,9.2);
	this.instance_15.alpha = 0.141;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3E1208").s().p("AgUA0QgPgGgFgUQgFgTAJgVQAIgWARgLQAQgLAPAHQAQAGAFATQAFAUgJAVQgIAVgRAMQgLAHgJAAQgGAAgGgDg");
	this.shape_59.setTransform(107.9,191.6,0.495,0.068);

	this.instance_16 = new lib.Path_31_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(93,190.4,0.278,0.042,15,0,0,6.5,8.2);
	this.instance_16.alpha = 0.141;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3E1208").s().p("AgjBdQgbgLgJgjQgJgjAPglQAPgmAegUQAdgUAbALQAcAMAIAiQAJAigPAmQgPAngeATQgTAMgRAAQgKAAgKgDg");
	this.shape_60.setTransform(93.2,190.4,0.278,0.042,15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AiNApQgDgBAHgEQAHgEALgDIDzhFQALgDAFAAQAGAAgGAEQg2AlhgAaQgtANgkAFQgPACgMAAQgOAAgJgDg");
	this.shape_61.setTransform(99.4,197,0.278,0.278);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DB8575").s().p("AAAAAQADgJgDAJIAAAFIAAgFg");
	this.shape_62.setTransform(113.6,190.5,0.278,0.278);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DB8575").s().p("AoMB2QAdiYBPh2IACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB4QALB3gaBuQhhhChXhbQiLiQgeiDQgvBJhGAwQg0AlhZAkIihA/QhiAqhKAzQhKBFgWBoQggiQAciag");
	this.shape_63.setTransform(102.1,181.9,0.278,0.278);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F9A184").s().p("AhzJlQhrgOhdhBQjHiJgVkaQgJh7Afh8QAgh8BBhhIACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB5QALB2gaBuQgxDZi7CUQiiCAiuAAQgfAAgggEg");
	this.shape_64.setTransform(102.1,187.5,0.278,0.278);

	this.instance_17 = new lib.Path_37_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(106.1,235.3,0.278,0.278,0,0,0,66.5,79.3);
	this.instance_17.alpha = 0.09;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF4F4B").s().p("AAKN2Qk6gKlkixQBDi2Btj5QBEicAJhCQAMhSg7mpIg8mZQAwgKAkgCIBEgEQAJAuA1AoQBEA0BqgBQBGgBAJgtQAFgcgVg+QAFgBAQAAIAVABQBeBiBeBtQC9DbgHA4QgNBlgVA/ICQFgQCaGRAwDpQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_65.setTransform(106.1,232.6,0.278,0.278);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF4040").s().p("AjejeIBdAAQAXgBAbAMQAYALARARIBVBVQAoAoCIB+QgXAIhrBFQhqBHgXAIg");
	this.shape_66.setTransform(111.6,214.2,0.278,0.278);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9A184").s().p("AixhaQCngIC8ALQgGAwAGBhQhpAQgxAGIh+AOIhLi4g");
	this.shape_67.setTransform(100.8,210.6,0.278,0.278);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#ED8C73").s().p("AhiB9IgFiLQgBgvAdgjQAdgiAqgCQApgBAfAhQAfAhABAvIAEBqQgbAbhMAOQghAGgYAAQgcAAgOgIg");
	this.shape_68.setTransform(100.2,202.5,0.278,0.278);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F9A184").s().p("AhhC9IgIkIQgBgvAdgiQAdgjAqgBQApgBAfAgQAfAhABAvIAIECIjKAQg");
	this.shape_69.setTransform(100.2,204.1,0.278,0.278);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#462B24").s().p("AkcL6QkkhrhJnHQhHm5FAklQDAivD/hMQBCgUBGAtQAVAOAUATIAPAQQA1gSBKAnQBSAtBDBhQCvEBgfHJQgeGwlACGQhlAqh1AHQg7ADglgFIhUAMIgbABQhYAAhQgeg");
	this.shape_70.setTransform(101.2,189.5,0.278,0.278);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#ED8C73").s().p("ACEGOQhSgxjqloQh2i0hlirICGg5QCJBpCVB9QErD5A+BnQAkA7gOA7QgMA1guAnQgtAlg5AIQgOACgNAAQgtAAgkgWg");
	this.shape_71.setTransform(123.7,227.7,0.278,0.278);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFD7A0").s().p("AggBWQAGhYAChYIAcADIAcADQgIBMgDBjg");
	this.shape_72.setTransform(114.2,213,0.278,0.278);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFC054").s().p("AiuBUQAGhYAChYIAdADQA7AIBugDIBkgFQAHAGAIAKQARAUAHAUQAWA/hYAnQg1AYheAAQg6AAhKgJg");
	this.shape_73.setTransform(118.1,213.1,0.278,0.278);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FBA386").s().p("AhWBdQhjgNhSgVIAAihIDgAdQA6AHBugGIBigHQAHAGAJAKQARAUAHAUQAYA/hYAnQg2AYheAAQg8AAhNgKg");
	this.shape_74.setTransform(115.6,212.8,0.278,0.278);

	this.instance_18 = new lib.Path_48_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(105.7,256.2,0.278,0.278,0,0,0,68.3,17.4);
	this.instance_18.alpha = 0.09;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8D242E").s().p("AuDIcQAajpA3joQBTlWCHkQITCAZIAYA4QAfBOAiBpQBpFOBXHhg");
	this.shape_75.setTransform(105.5,266.5,0.278,0.278);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C5E0DF").s().p("AhrgFQAFgvAQghIAzATICOBDQgUAvgYAmIiqhbg");
	this.shape_76.setTransform(21.2,212.8,0.278,0.278);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3EA2A2").s().p("AiECIQAojXBEhgQAVgfAUgOIARgIIBhCoQAKAbgYBRQgbBeg0BXIiqhdg");
	this.shape_77.setTransform(21.9,208.9,0.278,0.278);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FBA386").s().p("AAkCgQgRgfAqhDQAOgXgEgFQgGgHgqANIh6AoQhUAWAAggQAAgNCwhEIhuAQQhvAJgHgnQgEgPC3gRQhMAFgzgTQgugRAFgTQACgIBjABIBjACIhRgMQhQgPABgSQABgOBPAGQBoAIAvgJQBrgSA0AiQAQAKAJAPIAGAMIgBAqQgCAugJAVQgPAgg7AqQg7ApgKAaQgLAbgMAHQgEACgDAAQgJAAgHgNg");
	this.shape_78.setTransform(9.7,230.1,0.278,0.278);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FBA386").s().p("AjeEWQCFhqBckaQAdhZAWhgIAQhQICZAZQgHAsgMAyQgXBoggBgQhoEuihCCg");
	this.shape_79.setTransform(17.4,219.8,0.278,0.278);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EDEDED").s().p("Aj3IwQj7gfjrgsQgkgGgWgdQgXgdACglIAMjpQACggAagTQAagTAgAIQESBMDvAeQD9AhCYgaQBngTAPgcQBljRBHjkQBAjNADhcIA6AMQBZAfA4BUQA5BVgJBcQggFHh/EGQhBCGiWBDQiWBBjwABQiCAAilgVg");
	this.shape_80.setTransform(58.8,216.3,0.278,0.278);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDEDED").s().p("AhFB4QgLgOAAgUIADi9QAAgOAIgJQAIgIAKACICEAcIgTDnIhpAHIgCAAQgOAAgKgOg");
	this.shape_81.setTransform(35.9,223.4,0.278,0.278);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FD9D83").s().p("AiXDVQhYgVAEgpQABgLAJgRQAIgNgDgCQgwgsARghQAagagEgEQg6gwAXgjQAGgLAPgIIAMgGQgNgfgEgeQgHg7AyAKQAVAFAoAMQApANASAIQAhAQAmgHQAHgBAPgGQAPgFAIgBQAMAAAKAGQAHAEAKALQAkAoATAoQAKAUA1ALIBTARIgZDEIiDgEQgLAPgPAOQgSARgNADQgcAHhAAEIgvABQgsAAgagGg");
	this.shape_82.setTransform(29,222,0.278,0.278);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FBA386").s().p("AhgDAQhVgSg0g6QgsgwgsiJQgIgYAQgUQAQgTAaAAIABAAIAlgFQAegEArgBQAagBAZgIIArgPQANgEAEAaQAEAagRATQgRATgtAQQglAOAAAIQACANAjAXIAiATQAPgLAVgcQAqg6AihWQALgcAmgBQAlAAgKAnQgQA+glBEQgTAhgQAWQASgTAWgbQAsg4AVgtQAbg6AjAMQAOAFAGAOQAHAOgGANQgNAgg9BSQgeAogcAiQAUgQAcgbQA5g2Aqg3QAWgeAYAVQAYAVgXAiQgkA0hYBXQAQgFAWgNQArgZAbglQAagiAgAKQAgAIgOAcQgTAkhOA6QhZBCg/AFQgqAEgjAAQg0AAgmgIg");
	this.shape_83.setTransform(37.5,240.5,0.278,0.278);

	this.instance_19 = new lib.Path_57_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(53,222.8,0.278,0.278,0,0,0,105,58.4);
	this.instance_19.alpha = 0.102;

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C5E0DF").s().p("AiHAhQgsgfgZgsQgBgCABgDQABgDADgBIA8gPQARgEAMAMQBDBBBHgFQAsgCAhgcQAWgSAMgXQADgGAIgBIA4AAIAAAVQgCAagLAWQgkBHhzALQgRACgQAAQhQAAg/gsg");
	this.shape_84.setTransform(33.2,202.3,0.278,0.278);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C5E0DF").s().p("AkcB3QhPgMgsgSIATiCQAsAMBJAJQCTAQCQgTQCRgUBpguQAhgPAYgPIASgNIA/B3IgQAPQgVATgiATQhqA7iyAXQhUALhQAAQhZAAhUgOg");
	this.shape_85.setTransform(35.9,214.7,0.278,0.278);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3EA2A2").s().p("AkSIMQg7gEgigJQlzlMgilbQgLhtAYhhIAbhLQFfAXD5gvQBNgPA5gVIArgRQFIBQDqD0QBKBMA3BUIAoBDQl9GOmiBUQhjAUhcAAQgeAAgegDg");
	this.shape_86.setTransform(45.4,228.7,0.278,0.278);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3EA2A2").s().p("AlSCQQhPm/gziuQAdgMAugPQBcgfBYgPQAbAlAuAUQAvAWAtgGQAqgGAggVQAhgUAVggIAmACIADgBQBMAIAyAaIAdBVQAkBuAhB2QBlF5AXFFIrjBAQgdi+gnjgg");
	this.shape_87.setTransform(35.7,215.9,0.278,0.278);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F79178").s().p("AlTCQQhJm6gzivQBLgbBxgWQDigtC8AZQALAQATAXIAeAlIAwA7IA6ETQAjCcAkBzQAPAwAoAVQAYCVAJCDIrjBAQgbi6gljeg");
	this.shape_88.setTransform(35.8,215.7,0.278,0.278);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#501C0E").s().p("AkUAXQGNitHOgmIggAdQgtAgg7AVIhnAOQiBAUiBAdQmbBbkBCNQBrhPDHhXg");
	this.shape_89.setTransform(29,183.3,0.278,0.278);

	this.instance_20 = new lib.Path_64_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(41.4,176.2,0.278,0.278,0,0,0,6.5,8.7);
	this.instance_20.alpha = 0.07;

	this.instance_21 = new lib.Path_65_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(27.6,178.2,0.278,0.278,0,0,0,6,15.7);
	this.instance_21.alpha = 0.07;

	this.instance_22 = new lib.Path_66_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(19.7,180.2,0.278,0.278,0,0,0,5.2,20.4);
	this.instance_22.alpha = 0.07;

	this.instance_23 = new lib.Path_67_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(33.8,178.4,0.278,0.278,0,0,0,4.5,6.7);
	this.instance_23.alpha = 0.07;

	this.instance_24 = new lib.Path_68_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(36.2,175.6,0.278,0.278,0,0,0,12.3,13.4);
	this.instance_24.alpha = 0.07;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#642812").s().p("AihlUQByghCWAYQEsAwC0EdQidAOjMAvQjDAuiaA4QjiBSjlCEQgGp8GrhBg");
	this.shape_90.setTransform(29,178.6,0.278,0.278);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6E2E1").s().p("AgNAvQg6gRgfg5QgBgDABgFQACgGADAAIAogOQAEALAJAOQASAbAXAJQAVALArgBIAmgDIAEAiIggAIIgXABQgeAAgfgJg");
	this.shape_91.setTransform(41.9,253.1,0.278,0.278);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C5E0DF").s().p("AjpiFQgEgDAAgFQgBgFACgEIAWgkQACgEAFgBQAFgBAEADIG0FbIggAjg");
	this.shape_92.setTransform(42.9,259.1,0.278,0.278);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C5E0DF").s().p("AgiAlQgWgTA+g6IAjAjQgSAVgTANQgPAMgLAAQgHAAgFgEg");
	this.shape_93.setTransform(45.6,256.5,0.278,0.278);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C5E0DF").s().p("AgaAnQgUgSAwg/IAfAjQgOAXgOAOQgMANgKAAQgFAAgEgEg");
	this.shape_94.setTransform(46.7,257.5,0.278,0.278);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C5E0DF").s().p("AguAQQgQgQAegMQAVgIAkgFIAcAZQguAagaAAQgRAAgKgKg");
	this.shape_95.setTransform(44.3,255.3,0.278,0.278);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C5E0DF").s().p("AgQAqQgNgHAHgfQAEgUAMgbQATAZANAUQgVAqgPAAQgDAAgDgCg");
	this.shape_96.setTransform(47.9,258.5,0.278,0.278);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3EA2A2").s().p("AjmhyQAKgXAUgXQAngvAxgEQALAZARANIABABQAHAFAJAFQAVAWAmABQAPAAASgKQDJCiAFB0QACA6gmAZg");
	this.shape_97.setTransform(43.2,257.9,0.278,0.278);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C5E0DF").s().p("AjIBsIDIk0QADgEAFgBQAFgBAEAEQADANAJAUQAUAmAhAbQAiAbAsASIAlANQAEAEAAAFQAAAFgFAEIkyDqg");
	this.shape_98.setTransform(44.9,249.9,0.278,0.278);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FBA386").s().p("AgHDkQhYhHAYgjQAYgigugpQgXgVgcgOIhVkCQA0gnBMgHQCWgMBzClQBzCkhWCXQgrBLhCAqg");
	this.shape_99.setTransform(47.4,240.9,0.278,0.278);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F79178").s().p("AhuBzQiDgzhIh1QgIAIgGAEQgeARgmgQQgmgQgXgpQgMgVgFgZIAJAIQAjAfAuAAQArAAAngbQA7ByBmA5QBuA/CFgRQBogMBhgxQBhgvBJhMQglBHg8AyQg/A1hPAYIhPAZQg9ATg8AAQhIAAhJgdg");
	this.shape_100.setTransform(28.5,195.3,0.278,0.278);

	this.instance_25 = new lib.Path_76_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(16.1,182.7,0.278,0.278,0,0,0,0.4,0.6);
	this.instance_25.alpha = 0.102;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E6E2E1").s().p("AgHAqQgigKgagaQgRgQgKgVQgCgDACgDQACgDADAAIAkgIQAEAKAHANQAQAZAWAKQAVAKApgEIAjgHIADAVIgaAOQgQAFgSAAQgVAAgWgHg");
	this.shape_101.setTransform(49.1,249.8,0.278,0.278);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C5E0DF").s().p("AjmiEQgDgDgBgEQgBgFACgEIAWgkQACgEAFgBQAEAAAEACIGwFXIggAig");
	this.shape_102.setTransform(50.2,255.6,0.278,0.278);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C5E0DF").s().p("AgiAkQgWgSA+g5IAjAiQgpAtgWAAQgHAAgFgEg");
	this.shape_103.setTransform(53,253,0.278,0.278);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C5E0DF").s().p("AgaAmQgUgSAwg9QARARAOARQgPAXgNANQgMANgKAAQgFAAgEgEg");
	this.shape_104.setTransform(54.1,254.1,0.278,0.278);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C5E0DF").s().p("AguAQQgPgQAegMQAUgIAkgFIAbAZQgtAagaAAQgRAAgKgKg");
	this.shape_105.setTransform(51.7,251.9,0.278,0.278);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C5E0DF").s().p("AgQApQgNgHAHgeQAEgUAMgaQAPAUAQAXQgUAqgPAAQgDAAgDgCg");
	this.shape_106.setTransform(55.2,255.1,0.278,0.278);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3EA2A2").s().p("AjkhxQAKgWAUgXQAnguAxgEQAIAXATAOIABABIAQAKIAAABQAVAVAmABQAOAAATgJQDGCfAEByQACA5glAZg");
	this.shape_107.setTransform(50.6,254.4,0.278,0.278);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B4CFCD").s().p("Ai3BiIC4kZQACgEAFAAQAFgBADADQADANAIARQASAjAfAaQAeAYAoARIAiALQAEAEAAAFQAAAFgEADIkZDVg");
	this.shape_108.setTransform(52,246.7,0.278,0.278);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F79178").s().p("AgHDQQhQhBAWgfQAWgfgqgnQgWgTgZgNIhNjrQAwgkBFgFQCKgLBoCXQBpCWhPCJQgoBEg8Ang");
	this.shape_109.setTransform(54.3,238.5,0.278,0.278);

	this.instance_26 = new lib.Path_3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(37.5,185.6,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_26.alpha = 0.102;

	this.instance_27 = new lib.Path_1_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(24.5,189,0.278,0.278,0,0,0,6.9,8.3);
	this.instance_27.alpha = 0.102;

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#491B0C").s().p("AgWBFQgYgVgLgkQgKgiAJgdQAKgcAYgGQAYgFAXAWQAYAVALAjQAKAjgKAcQgJAdgYAFIgKACQgSAAgTgSg");
	this.shape_110.setTransform(37.5,185.2,0.278,0.278);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#491B0C").s().p("AgXBJQgZgXgLglQgLgkAKgeQAKgeAZgFQAZgFAYAWQAZAWALAlQALAkgKAeQgKAegZAFIgKABQgTAAgUgRg");
	this.shape_111.setTransform(24.4,188.5,0.278,0.278);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FBA386").s().p("AgLBjQgmgQgXgpQgXgpAFgoQAEgpAfgRQAegRAlAQQAmARAXAoQAXApgFAoQgEApgfARQgPAJgSAAQgRAAgRgIg");
	this.shape_112.setTransform(17.8,191.4,0.278,0.278);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAXAVQg/gKgygcQgFgDACgCQACgBAHABICgAYQAHABAGADQAHACgBACQgEAJgSADQgIACgKAAQgOAAgSgDg");
	this.shape_113.setTransform(31.7,192.7,0.278,0.278);

	this.instance_28 = new lib.Path_79_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(29.5,179.8,0.278,0.278,0,0,0,45.6,28.4);
	this.instance_28.alpha = 0.109;

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FBA386").s().p("AjOG7QiWhPgyihIgsiOQgyifBPiWQBPiWChgyIBPgZQBcgcBeAQQBcAPBNA2QA2AmAoA2QAoA3AUBBIAsCOQAyCghPCWQhPCWihAyIhPAYQg+AUg8AAQhgAAhbgxg");
	this.shape_114.setTransform(30,185.7,0.278,0.278);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F79178").s().p("AgxBWQgcgegGguQgFgtAUgkQAVgkAigEQAigEAcAeQAdAeAFAuQAGAtgVAkQgUAkgjAEIgIABQgcAAgagbg");
	this.shape_115.setTransform(42.5,184,0.278,0.278);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F79178").s().p("AhUiCIB9gLIAtEMIirAPg");
	this.shape_116.setTransform(33.5,199.3,0.278,0.278);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("Ag/CyQhmgQg4hiQgcgxgIgtIB3iLQALAaAaAZQAyAyBFgFQBGgFArgyQANgQAJgSIAGgPIBjBbIgMBOQgYBYg3A2QgMAMgQgEQgQgEgFgQQgRg2gWgXQgdgegvAIQgSAJgFAhQgDAWADAzQABASgNAMQgMAKgOAAIgFAAg");
	this.shape_117.setTransform(62.8,202.4,0.278,0.278);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E6E6E6").s().p("AiJBuQhxhGgkiEQAMgHAigBQAMAsAEAMQAKAcASAVQAhAnAwAXQAhAQAjhFQAqhRAbgKQAZgIAlAJQAOADAyASQBNAbAUglQATgwACgsQAHgEAEABIAHAEQAPB3hABcQg+BXhgAPQgYAEgXAAQhWAAhRgzg");
	this.shape_118.setTransform(62.5,204.3,0.278,0.278);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#842725").s().p("Ai/DiIh4D8IktluIDSmiICpDRIC3miIFcGQIBsj8ICjC8QANBZAOBxIARB/IhJDOIjWjQIjGFwg");
	this.shape_119.setTransform(66.4,229.5,0.278,0.278);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#842725").s().p("AoxB5QgUgDgRgXQgXggAHgyQC3AUFxghQGqgpDzhYQAOA1gHAUQgJAdg5AWQiKA0mWAxQkVAiieAAQhQAAgygJg");
	this.shape_120.setTransform(68.2,254.5,0.278,0.278);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#842725").s().p("AkVBJQg5hCgihWIgSguQAxgKBsgRQAMAsAEALQAKAcASAWQAhAoAwAWQAuAWAzADQAzAEAwgQQA2gSApgoQAigjAgg5QAHgRAAgZIAAgrQBGgEA2ADQAJBSgQBKQgTBQguAzQg4A/hMAiQhMAihVABIgFAAQirAAh4iKg");
	this.shape_121.setTransform(62.2,205.8,0.278,0.278);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#772824").s().p("ApDKXQg5kbhGnVQBVhPAvhZQAwhbARh3QASiAgNhxQgPiBg1hlQAtgMBAgLIB0gTQALAsAEALQAKAcATAWQAgAoAwAXQAuAWA0ADQA0AEAwgQQA0gSApgpQAjgjAfg5QAHgRABgZIAAgrQBtgGBFAKIAAABQAYCHA3CDQA8CQBRBiQA2EAAmE5IAjD+QAYCwAJBqQAcFDhPANQjjAklIAgQi4ASlxAhIgBAAQgsAAhLl3g");
	this.shape_122.setTransform(65.4,228.8,0.278,0.278);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E6E6E6").s().p("Ao4HwQggjUgfjlIgZi5QgjifCShHQA5gcBfgUQApgICIgWQAMAsAEALQAKAcASAWQAhAoAwAXQAuAWAyADQA0AEAwgQQA2gSApgpQAigjAgg5QAHgRAAgZIAAgrQCrgKBIAeQAWAKAKAMIAFAKIAhBqQApCNAlCvIkYD6Qh1BqitCfg");
	this.shape_123.setTransform(61.8,213.7,0.278,0.278);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F79178").s().p("AhxD/QgwgvgBgzIASlMQAAgzAjglQAkglAzgBIAfAAQAzAAAlAjQAlAkAAAzIAcFkQABAxgwAmQgsAkg2ABIgeABIgCAAQgyAAgwgvg");
	this.shape_124.setTransform(63.2,198.5,0.278,0.278);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C5E0DF").s().p("AgQBzQgGgWgThSQgPhCgNgnQALgRAkgEQAigDAPAOIAWBmQAOA9AFAoIABAFIg9ALQAAgBgMABIgJABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_125.setTransform(48.2,202.1,0.278,0.278);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3EA2A2").s().p("AjShNQCOgYDsgYIAWBmQAOA9AGAoIABAFIjwArg");
	this.shape_126.setTransform(44.3,202.7,0.278,0.278);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F79178").s().p("ApUhCQA3gKBigNQDGgaDbgRQDbgRDgAzQBGAQA+AUIAwASIv0C1g");
	this.shape_127.setTransform(55,202.4,0.278,0.278);

	this.instance_29 = new lib.Path_94_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(27,198.7,0.278,0.278,0,0,0,67.9,97.8);
	this.instance_29.alpha = 0.18;

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#642812").s().p("ApNPMQi7g0hThDQCJiOA0k5QARhsAQizQAWj+AFgpQAmlfBhizQCEj0Ecg5QAegLAxgCQBkgGBjAoQE9B9C7IMQDYJeh9FfQh1FGmIA7QjhAhjEAAQkFAAjUg6g");
	this.shape_128.setTransform(27,197.1,0.278,0.278);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E6E6E6").s().p("AAqDnQiwgOguhxQgphnAZh+QAIgnANgmIAMgdQAuBSBGBiQCKDCBzBMQAFADg0AGQgkAEgkAAQgWAAgXgBg");
	this.shape_129.setTransform(33.3,239.4,0.278,0.278);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1B2728").s().p("AjUFfQAJkdgBjTQAAibgCgHIGPgrQAIBBAGCOQAIDSgDEcg");
	this.shape_130.setTransform(58.7,271.7,0.278,0.278);

	this.instance_30 = new lib.Path_97_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(68.5,256,0.278,0.278,0,0,0,57.8,13.9);
	this.instance_30.alpha = 0.172;

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1B2728").s().p("AjgG5QAbk+AOjzQALi2gCgGIGLiEQAFBFgDDCQgEEQgXFag");
	this.shape_131.setTransform(78.2,269.2,0.278,0.278);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1B2728").s().p("AgUDQQkPgDkJgTIgSmJIRyAHIALCEQAFCPgZA8QgfBJnRAAIhPAAg");
	this.shape_132.setTransform(68.4,258,0.278,0.278);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQhZBMhGAlQAIgqAfgygAjNARQAwgoAwguIAmgnQhhAnglBWg");
	this.shape_133.setTransform(127.6,185.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.instance_30},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_29},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.instance_28},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_27},{t:this.instance_26},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_25},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.instance_19},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_18},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_17},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_16},{t:this.shape_59},{t:this.instance_15},{t:this.shape_58},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_11},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_7},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_5},{t:this.shape_6},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},49).to({state:[]},5).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.instance_30},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_29},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.instance_28},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_27},{t:this.instance_26},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_25},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.instance_19},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_18},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_17},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_16},{t:this.shape_59},{t:this.instance_15},{t:this.shape_58},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_11},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_133},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_7},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_5},{t:this.shape_6},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},40).to({state:[]},5).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.instance_30},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_29},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.instance_28},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_27},{t:this.instance_26},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_25},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.instance_19},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_18},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_17},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_16},{t:this.shape_59},{t:this.instance_15},{t:this.shape_58},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_11},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_7},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_5},{t:this.shape_6},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},65).to({state:[]},5).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.instance_30},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_29},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.instance_28},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_27},{t:this.instance_26},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_25},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.instance_19},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_18},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_17},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_16},{t:this.shape_59},{t:this.instance_15},{t:this.shape_58},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_11},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_133},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_7},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_5},{t:this.shape_6},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},89).to({state:[]},6).wait(116));

	// sad blink4
	this.instance_31 = new lib.Path_0_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(60.6,159.1,0.278,0.278,0,0,0,50.1,15.7);
	this.instance_31.alpha = 0.121;

	this.instance_32 = new lib.Path_1_0_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.6,0.6);
	this.instance_32.alpha = 0.121;

	this.instance_33 = new lib.Path_2_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.2,0.6);
	this.instance_33.alpha = 0.121;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#472A21").s().p("AANANQhZiLhFABQAWgOAegdQA9g4AshHQBxAZAREeQAJCPgOCKQgmiWhWiGg");
	this.shape_134.setTransform(73.4,168.7,0.278,0.278);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#563428").s().p("AhpBaIAIgxQgMgOgCgRIAAgNQAWACANAHIAJAIQgRgZgBgpIADgkQAsAVAPAiIAHAeQARgrA6gfIA1gVQAAAigdAsQgWAhgJAGIgwBRg");
	this.shape_135.setTransform(53.3,158.6,0.278,0.278);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#563428").s().p("Aj+BpQA+iWDqhRQBKgaBSgPIBEgKQAAAZgQAfQgJAQgIALIhaBBQhrBKhSAyQiKBTgzAAQgwAAAdhJg");
	this.shape_136.setTransform(60.1,157.7,0.278,0.278);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#563428").s().p("AAjgvIgrgjQgygqgegkQhgh1CNgTQCNgSAYEwQAMCYgQCcg");
	this.shape_137.setTransform(73.9,168.6,0.278,0.278);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#563428").s().p("AnaDGQhEjmA1hoQAnhNBnAOQAgAFAjANIAcAMQBmitFNgxQBogPBzgBIBfACQAvC6hYBzQgsA5g1AVIkIgVQkQgOgtAkQguAjhEDLQgiBlgZBeQgthegih0g");
	this.shape_138.setTransform(60,165.3,0.278,0.278);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#563428").s().p("AnyFhQgJgsgEhDQgIiFAZhtQBOliFzABQF6AACAFJQAoBmAKB7QAFA9gDApQgmiWhWiFQhaiLhFABIg2AlQhHAmhNAGQhEAGhrggQg1gQgogSQhJADhBCUQguBsgeCQQgHAmgTAIQgFACgFAAQgEAAgEgBg");
	this.shape_139.setTransform(63,168.5,0.278,0.278);

	this.instance_34 = new lib.Path_9_0_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(57.4,180.3,0.278,0.278,0,0,0,6.9,7.5);
	this.instance_34.alpha = 0.078;

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#35221A").s().p("AgPBhQgZgCgMgeQgOgeAGgoQAHgoAWgbQAWgaAZACQAYACAOAeQANAegGAnQgIApgWAaQgUAZgVAAIgFAAg");
	this.shape_140.setTransform(57.2,179.6,0.278,0.278);

	this.instance_35 = new lib.Path_11_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(71.6,179.2,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_35.alpha = 0.078;

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#35221A").s().p("AgSBhQgZgDgMgfQgMgeAIgnQAIgoAXgaQAXgbAYAEQAZADAMAeQAMAfgIAnQgIAngXAbQgUAXgVAAIgGAAg");
	this.shape_141.setTransform(71.5,178.4,0.278,0.278);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AjDAPQgJgCAFgDQAagKAzgHQA0gIBAgBQA/AAA4AGQA3AHAfAKQAGACgHADQgIACgQAAIlZADIgGAAQgLAAgHgCg");
	this.shape_142.setTransform(64.9,185.7,0.278,0.278);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F79178").s().p("AkoCsQiChygMiqQgjAHgjgaQgjgagQguQgOglAFgkQARAgAkAWQAjAWAjACQAUABAWgDQApDHB/BuQCHB2DNgHQDWgGBxhnQBFhABFidQgPCXhuBrQhwBtiaAJIivAKIgbABQiaAAh3hpg");
	this.shape_143.setTransform(61.7,188,0.278,0.278);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F9A184").s().p("AggBrQgmgZgSgyQgSgxAOgsQANgtAlgNQAlgNAmAaQAnAaARAxQASAxgOAsQgNAtglANQgNAEgNAAQgXAAgagRg");
	this.shape_144.setTransform(48.6,181.5,0.278,0.278);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F9A184").s().p("AljH9QiChzgKitIgTk6QgKizByidQB3ikCogKICtgLQCogKCICVQCECPAKCzIATE6QAKCthzCCQh0CCisAKIiuAKIgcABQibAAh4hqg");
	this.shape_145.setTransform(63.3,178.6,0.278,0.278);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F79178").s().p("AgMB/QgngEgYgoQgYgoAFg0QAGg0AfgjQAfgiAnAEQAnAEAYAoQAYAogGAzQgFA1gfAjQgcAfghAAIgJgBg");
	this.shape_146.setTransform(77.1,180.4,0.278,0.278);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF4F4B").s().p("AhWDOQg4h1gwh6Qgwh7BuhTQAigaAugTIAngOIDXHXIj2B+QgSgjgcg6g");
	this.shape_147.setTransform(92,216.7,0.278,0.278);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FD9D83").s().p("AmHDKQiUh+ikkkQBzhKA5gmQCpEtCHBlQBsBRCEgXQCJgYEMh8QD2h6AVgEIATClQgfAOjhB/Qj0B/ieAbQg7AKg3AAQiwABiTh/g");
	this.shape_148.setTransform(108.1,225.2,0.278,0.278);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FD9D83").s().p("AhxB0QgWgVgcgiQgjgqgFgTQgCgHAJgEIAKgEQgEgHgCgIQgEgRAKgFQALgFANACIAKADIgVgZQgLgNAOgJQAMgIASAAQAMABAUALIASAKQgHgLABgMQABgJASgBQASAAAZAKQAZALA3AhQA6AiAOAHQAWAJAigBIAegEIgXAuIiLA0QhwAoggAAQgIAAgDgDg");
	this.shape_149.setTransform(124.7,235.2,0.278,0.278);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FD9D83").s().p("AhcBRQAlg0AlgbQBDgvgQhDQgGgYAbANQAcANAHAhQAFATgSAyQgOAkAXAGQAVAFARAHQgJALgTAgIjZAoQAMgVASgbg");
	this.shape_150.setTransform(130.4,217.9,0.278,0.278);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FD9D83").s().p("AgBACQADgFAAADIgBACIgBAAIgBAAg");
	this.shape_151.setTransform(133.9,219.2,0.278,0.278);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FD9D83").s().p("AA7C8QgsgBgvgLQg1gLgkgRQgNgHgTgPQgXgRgHgKIALirQAHgHAJgMIAPgTQAhgnAqgcQAWgOARAFQAIADAMAIIARALQAUAJAMAEQARAFAPgBQBRgEAAAoQABAUgQAVQAYAJAMARQAZAhg7AnQAHgCAIAJQAKAKACAOQAFAlg1AUQgCABAHANQAJAQACAJQAFAhhIAAIgLAAg");
	this.shape_152.setTransform(131.9,223.2,0.278,0.278);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FD9D83").s().p("AiMCzQgcgKgcgXQgMgKgOgOQgWgTACgDIAEgEQAKgGB2gvQB3gwAZgJQAbgJAKgGQAVgKADgJQACgHgggTQgmgYgMgVQgNgWAGgeQAHgeAPAFQATAHAUAeQASAaAUACQBIAGAiAcQAZAVAFAkQALBYhpBSQhVBEhhAAQg0AAg3gTg");
	this.shape_153.setTransform(128.2,235.5,0.278,0.278);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#7C3B2D").s().p("AEtBqQgqhFgPhQQgyAfhYA8QhSAwhqAPQA1hNBMg6QgoARhNAnQhEAfgxADIARh4IhyBeQg9A0gzARIAIgbQAFgSAGgKQgfATggAKQATg3Avg9QBeh8CQggQgYgMgKgJQCAgPBmAMIAkAFQB1AUBTBFQgGgRACgQQAJADAKAIQAVAQAFAaQgCgLAHgMQAKgTAfgRIACAZQAAAdgMAQQAGgDAJgDQATgEATAGIgMAQQgRARgYABQAIACAJAHQARAMAGAVIgdgEQAfAuANAzQAIAeACAbQAEAogDARIgKgCQgMgEgNgOQACAZgBAYQg+gtgqhFg");
	this.shape_154.setTransform(128.6,184.9,0.278,0.278);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFD7A0").s().p("AiSAJQgTgaABgaQARgOAVAEIARAIQAEANAPAOQAfAaA6AAQA5AAAcgbIARgdQASgQAZAEIAVAHIgEASQgHAWgOARQgtA6hgAAQhpAAgog1g");
	this.shape_155.setTransform(125.9,211.9,0.278,0.278);

	this.instance_36 = new lib.Group_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(119.2,233.4,0.278,0.278,0,0,0,15.7,11.4);
	this.instance_36.alpha = 0.09;

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#613D29").s().p("AlrEHQgKg1ADhNQADheAXhPQBAjZCxgRQClgPCiAkQAxALAxAQIArAOIAHABQgrCzh7AGQh1AHjTAOIABAcQABAjgEAkQgMBxg5BIg");
	this.shape_156.setTransform(123.9,238.2,0.278,0.278);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F7EBDB").s().p("AgeAyQgfgRgbgfQAYgWAmgQQAqgTA5gGQAQAdAAAbQAAAngoAUQgQAIgSAAQgVAAgYgMg");
	this.shape_157.setTransform(111.3,248.1,0.278,0.278);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F7EBDB").s().p("AgPAaQgqgQgPgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIASgBQAFAJAIAJQAQARASADQARAEATgHIAQgIIAVAUQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgZAMgZAAQgTAAgRgIg");
	this.shape_158.setTransform(116,247.3,0.278,0.278);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F7EBDB").s().p("Ai7AUIgDgjIF9gIIgFAvg");
	this.shape_159.setTransform(113.2,251.5,0.278,0.278);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#613D29").s().p("AinAEQAthYCtgGQAHALAFAEQAWAVAhAAIABAAQARAAARgKQAbAYADBDQABAigFAcIlkACQgNgrAXgsg");
	this.shape_160.setTransform(113.2,249.1,0.278,0.278);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C3B8A1").s().p("Ag2g9IBmgJIAGB8IhZARg");
	this.shape_161.setTransform(115.9,246.5,0.278,0.278);

	this.instance_37 = new lib.Group_3_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(105.4,233.1,0.278,0.278,0,0,0,17.7,10.3);
	this.instance_37.alpha = 0.078;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#523222").s().p("AmcB6QAkhpBHhWQB2iSCjgQQCagPCQAhQArALAsAPIAlAMIAPC2QhhgIiOAOIjnAZQg3BCguArQgnAmhCA0g");
	this.shape_162.setTransform(108.8,237,0.278,0.278);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#73312A").s().p("AgXgbIABhaQAOADAMANQAZAZgGAyQgFAxgQA1QgGAagHAQQgMgwAAhhg");
	this.shape_163.setTransform(138.9,194,0.278,0.278);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#73312A").s().p("Ag8g6IgLhRIBAAJQATAPAUAbQApA2gBA8QgBA9gXAgQgMAQgLAFQg+higXhkg");
	this.shape_164.setTransform(136.9,189.5,0.278,0.278);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQhZBMhGAlQAIgqAfgygAjNARQAwgoAwguIAmgnQhhAnglBWg");
	this.shape_165.setTransform(127.6,185.6,0.278,0.278);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#73312A").s().p("AgogJQBHg0BggPIhBA6QhUA/hoAgQAigyA0gkg");
	this.shape_166.setTransform(128.5,185.6,0.278,0.278);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#73312A").s().p("ABDg+IgmAnQgvAtgwApQAlhWBggng");
	this.shape_167.setTransform(123.8,184.3,0.278,0.278);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F79178").s().p("AjFCdIhJgTQg9gPg0giQA1ATA6ALQBtAUBkgaQBqgbBLhIQA9g7AohKQAaAMAWADQAeAEAbgLQAcgLASgXQAIgKAGgMQABAfgOAhQgUArgkAUQglAUgggOQgLgGgGgGQg4B3h4A6QhNAlhSAAQgtAAgugLg");
	this.shape_168.setTransform(130.6,204,0.278,0.278);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FBA386").s().p("AguBnQgggOgJgoQgJgqAUgpQAUgrAkgUQAjgUAgAOQAgAPAJAoQAJAqgUApQgUArgkAUQgVAMgTAAQgOAAgNgHg");
	this.shape_169.setTransform(138.8,200.2,0.278,0.278);

	this.instance_38 = new lib.Path_9_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(139.7,192.9,0.278,0.278,0,0,0,0.6,0.2);
	this.instance_38.alpha = 0.102;

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#491B0C").s().p("AAbA/IhGgNQgGgBgEgEQgDgFAAgFQAAgLADgPQAIggAVgVQAWgVAVADQAWAEALAaQAKAagIAhQgDANgIAPQgEAIgJAAIgDAAg");
	this.shape_170.setTransform(120.5,195.1,0.278,0.037,15);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#491B0C").s().p("AAVBCIhBgQQgMgDAAgMQgBgOAEgQQAIggAVgVQAVgVAWAEQAWADAKAaQALAagIAhQgEASgLASQgFAIgHAAIgGgBg");
	this.shape_171.setTransform(132.6,197.1,0.278,0.037);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A14740").s().p("Ah2gFIgDgEQBggTCTAsg");
	this.shape_172.setTransform(124.5,203.1,0.278,0.278);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#73312A").s().p("ACDAnIgYgCQiTgshgASIAEAEIgLgBQgMgBgEgGQgDgFAIgDQAmgVAzgJQA0gKAyAEQAyAFAiASQAhARAHAZQABAFgJAEQgIACgJAAIgFAAg");
	this.shape_173.setTransform(125,202.6,0.278,0.278);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F7EBDB").s().p("AgBA9QglgGgWgrQgPgfgDgoQAegGAmAJQArAKAuAbQgDAggPAVQgTAcgfAAIgMgBg");
	this.shape_174.setTransform(94.6,242.1,0.278,0.278);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F7EBDB").s().p("AApA/QgsgIgZgnQgYglAKglQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAPAKIAAAVQADAYAMANQALAOATAEIAQACIAFAeQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAIgDACIgBAAg");
	this.shape_175.setTransform(98.3,243.7,0.278,0.278);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F7EBDB").s().p("AidhdIARgfIEpDUIgeAlg");
	this.shape_176.setTransform(94,245.7,0.278,0.278);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#613D29").s().p("Aipg8QAOgrApgXQBSgvCIBfQAAAOACAGQAFAdAaATIAAABQAOAJASABQAIAkgjA5QgSAcgTAVg");
	this.shape_177.setTransform(94.7,244.6,0.278,0.278);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C3B8A1").s().p("AhGApIA6h3IBTA0Ig/Bpg");
	this.shape_178.setTransform(98.7,243,0.278,0.278);

	this.instance_39 = new lib.Path_10();
	this.instance_39.parent = this;
	this.instance_39.setTransform(128.1,190.9,0.278,0.278,0,0,0,39.5,25.4);
	this.instance_39.alpha = 0.09;

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FBA386").s().p("AhGGzIhJgSQiVgmhPiEQhPiFAliUIAiiDQAeh6BkhOQBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCEglCUIghCDQgmCViEBPQhaA2hiAAQgtAAgwgMg");
	this.shape_179.setTransform(127.1,196.3,0.278,0.278);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#523222").s().p("AA0BKQlagaiOhTIBDgxIMWAAQAHAAAFAFQAEAFgBAHQgGAsgPA4QgOAygDAAQgpACguAAQhzAAiQgLg");
	this.shape_180.setTransform(122.7,231.4,0.278,0.278);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFC054").s().p("AgDGUQkVgGiBhNIB6l9QAkjHBdhWQAdgbAfgMIAagHIAMgBQAKASAOAOQAkAkA0AGQA1AGAsgZQAogXAYgsQAuAEApAPQAzASAaAeQASAUAPAeQgDAHgTEDQgUEYgQBYIgJAVQgIAOADAHQigAQiGAAIgvgBg");
	this.shape_181.setTransform(123.9,221.5,0.278,0.278);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F9A184").s().p("Ak5BCQAphIA4ggQARgKARgFIAOgDIC8gJIAjAFQBjAEAOACQBNAMAkApQASATAPAdQgCADgCAQg");
	this.shape_182.setTransform(126.6,212.2,0.278,0.278);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F79178").s().p("AgCBVQgqgDgvgPIAJhcQAAgZASgSQARgRAZAAIAOAAQAeAAAgAOQAmARAAAXIAABvQghAGgjAAIgagBg");
	this.shape_183.setTransform(125.8,207.6,0.278,0.278);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F9A184").s().p("AgTCGQgbAAgYgSQgYgTAAgYIAOiRQABgZARgSQASgSAZAAIAOAAQAdAAAhAPQAmAQAAAXIAACSQAAAYgnAWQgjAVgbAAg");
	this.shape_184.setTransform(125.7,208.9,0.278,0.278);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#73312A").s().p("AmmB/QAEh/BHh0QCOjmFNA+QEaA0AMEOQAHCIgyB9g");
	this.shape_185.setTransform(128.1,189,0.278,0.278);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F9A184").s().p("AhJCrQghgEgUgSQgagXgGgKQgUgcgBgoQAAgkALgrQAJgkAOgdQADgGALghQAIgcAEgDQAPgKALANQAKALAAARQAAAMgGAJIgKAOQgHAMAFAOQAfgLAWgRQAZgUA3ghQAVgMAOAPQAPAPgZAQQgjAWgpAhIAPAUQApgcA0geQAfgSAQAaQAQAZgpAPQgfALg7AgIAUAWQAegUA8gUQAkgLAFAZQAEAYgiAGQgYADg7AXIAPAeQA9geAagBQAPAAADAUQAEAUgXAHIg3APQgbAIgSAMQguAegnAOQgWAHgQAAIgKAAg");
	this.shape_186.setTransform(153.2,200,0.278,0.278);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFD7A0").s().p("AgRAoIgWhJQgOgsgNgfIBBgRQAsBuAYB5QgWAGgqAOQgIgsgMgqg");
	this.shape_187.setTransform(136.6,212.6,0.278,0.278);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFC054").s().p("AhmCQIgzj0QA1ACBJgRIBwgcQAtBuAYB5QgpALhOAbQhAASg+AAIgLAAg");
	this.shape_188.setTransform(134.2,213.1,0.278,0.278);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F9A184").s().p("Al2ELIgYi8QElAIDXifQBFgzA1g/QAignAJgTIBUgXIggBKIBIAjQhCCGh3BkQjgDAlLAAIghgBg");
	this.shape_189.setTransform(141,208.1,0.278,0.278);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ED8C73").s().p("AkLCzQhXgMhSgvQCJA0COgcQB8gXB0heQBrhWBJh6QAVAYAYAKQAgANAigDQAjgEAcgVQgcAxgrAWQgsAVgjgTQgHgDgFgFQhgCLiPBMQh5BAh5AAQgfAAgegDg");
	this.shape_190.setTransform(106.3,199.5,0.278,0.278);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F9A184").s().p("AhAB6QgkgTgGgxQgGgxAbgyQAbgzAsgWQAsgWAjATQAkATAGAxQAGAxgbAyQgbAygsAXQgXAMgVAAQgTAAgQgJg");
	this.shape_191.setTransform(116.1,193.7,0.278,0.278);

	this.instance_40 = new lib.Path_26_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(114.3,183.5,0.278,0.278,0,0,0,20.7,10.1);
	this.instance_40.alpha = 0.121;

	this.instance_41 = new lib.Path_27_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(94,176.1,0.278,0.278,0,0,0,25.9,20.2);
	this.instance_41.alpha = 0.121;

	this.instance_42 = new lib.Path_28_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(100,181.1,0.278,0.278,0,0,0,18.4,9);
	this.instance_42.alpha = 0.121;

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#4F3026").s().p("ApMIuQhEhzgWiXQhFnQEukgQBuhoCXhIQBwg1BtgaQBEgQB3AuIBpAxQCpgUBiC1QB7DjgjHpQgHBfgUBOIgJhtQgIhDgSgpQgkhWhChKQgUgXhjhcQhHhDgig3QgvhNgNhlQguB9hsBBQg/AmiUArQiSAqhAApQhoBCgqCCQgzCQABCEQABCbBKB1QhYhfgohDgAhYj3QhNAhgXAMQg1AcggAjQAigZBBgYQBMgZAkgOQCCgzAQhfQgsBGiAA4g");
	this.shape_192.setTransform(100.6,186.8,0.278,0.278);

	this.instance_43 = new lib.Path_29_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(107.5,191.2,0.278,0.278,0,0,0,6.7,8.7);
	this.instance_43.alpha = 0.141;

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#3E1208").s().p("AgkBdQgbgLgJgjQgIgiAPgmQAPgnAegUQAdgTAbALQAcALAJAjQAIAjgOAlQgQAngeAUQgTAMgRAAQgLAAgKgEg");
	this.shape_193.setTransform(107.8,190.7,0.278,0.278);

	this.instance_44 = new lib.Path_31_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(93,189.3,0.278,0.278,0,0,0,6.5,8.4);
	this.instance_44.alpha = 0.141;

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#3E1208").s().p("AgjBdQgbgLgJgjQgJgjAPglQAPgmAegUQAdgUAbALQAcAMAIAiQAJAigPAmQgPAngeATQgTAMgRAAQgKAAgKgDg");
	this.shape_194.setTransform(93.3,188.8,0.278,0.278);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AiNApQgDgBAHgEQAHgEALgDIDzhFQALgDAFAAQAGAAgGAEQg2AlhgAaQgtANgkAFQgPACgMAAQgOAAgJgDg");
	this.shape_195.setTransform(99.4,197,0.278,0.278);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#DB8575").s().p("AAAAAQADgJgDAJIAAAFIAAgFg");
	this.shape_196.setTransform(113.6,190.5,0.278,0.278);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#DB8575").s().p("AoMB2QAdiYBPh2IACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB4QALB3gaBuQhhhChXhbQiLiQgeiDQgvBJhGAwQg0AlhZAkIihA/QhiAqhKAzQhKBFgWBoQggiQAciag");
	this.shape_197.setTransform(102.1,181.9,0.278,0.278);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F9A184").s().p("AhzJlQhrgOhdhBQjHiJgVkaQgJh7Afh8QAgh8BBhhIACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB5QALB2gaBuQgxDZi7CUQiiCAiuAAQgfAAgggEg");
	this.shape_198.setTransform(102.1,187.5,0.278,0.278);

	this.instance_45 = new lib.Path_37_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(106.1,235.3,0.278,0.278,0,0,0,66.5,79.3);
	this.instance_45.alpha = 0.09;

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF4F4B").s().p("AAKN2Qk6gKlkixQBDi2Btj5QBEicAJhCQAMhSg7mpIg8mZQAwgKAkgCIBEgEQAJAuA1AoQBEA0BqgBQBGgBAJgtQAFgcgVg+QAFgBAQAAIAVABQBeBiBeBtQC9DbgHA4QgNBlgVA/ICQFgQCaGRAwDpQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_199.setTransform(106.1,232.6,0.278,0.278);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF4040").s().p("AjejeIBdAAQAXgBAbAMQAYALARARIBVBVQAoAoCIB+QgXAIhrBFQhqBHgXAIg");
	this.shape_200.setTransform(111.6,214.2,0.278,0.278);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F9A184").s().p("AixhaQCngIC8ALQgGAwAGBhQhpAQgxAGIh+AOIhLi4g");
	this.shape_201.setTransform(100.8,210.6,0.278,0.278);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#ED8C73").s().p("AhiB9IgFiLQgBgvAdgjQAdgiAqgCQApgBAfAhQAfAhABAvIAEBqQgbAbhMAOQghAGgYAAQgcAAgOgIg");
	this.shape_202.setTransform(100.2,202.5,0.278,0.278);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F9A184").s().p("AhhC9IgIkIQgBgvAdgiQAdgjAqgBQApgBAfAgQAfAhABAvIAIECIjKAQg");
	this.shape_203.setTransform(100.2,204.1,0.278,0.278);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#462B24").s().p("AkcL6QkkhrhJnHQhHm5FAklQDAivD/hMQBCgUBGAtQAVAOAUATIAPAQQA1gSBKAnQBSAtBDBhQCvEBgfHJQgeGwlACGQhlAqh1AHQg7ADglgFIhUAMIgbABQhYAAhQgeg");
	this.shape_204.setTransform(101.2,189.5,0.278,0.278);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ED8C73").s().p("ACEGOQhSgxjqloQh2i0hlirICGg5QCJBpCVB9QErD5A+BnQAkA7gOA7QgMA1guAnQgtAlg5AIQgOACgNAAQgtAAgkgWg");
	this.shape_205.setTransform(123.7,227.7,0.278,0.278);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFD7A0").s().p("AggBWQAGhYAChYIAcADIAcADQgIBMgDBjg");
	this.shape_206.setTransform(114.2,213,0.278,0.278);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFC054").s().p("AiuBUQAGhYAChYIAdADQA7AIBugDIBkgFQAHAGAIAKQARAUAHAUQAWA/hYAnQg1AYheAAQg6AAhKgJg");
	this.shape_207.setTransform(118.1,213.1,0.278,0.278);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FBA386").s().p("AhWBdQhjgNhSgVIAAihIDgAdQA6AHBugGIBigHQAHAGAJAKQARAUAHAUQAYA/hYAnQg2AYheAAQg8AAhNgKg");
	this.shape_208.setTransform(115.6,212.8,0.278,0.278);

	this.instance_46 = new lib.Path_48_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(105.7,256.2,0.278,0.278,0,0,0,68.3,17.4);
	this.instance_46.alpha = 0.09;

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#8D242E").s().p("AuDIcQAajpA3joQBTlWCHkQITCAZIAYA4QAfBOAiBpQBpFOBXHhg");
	this.shape_209.setTransform(105.5,266.5,0.278,0.278);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C5E0DF").s().p("AhrgFQAFgvAQghIAzATICOBDQgUAvgYAmIiqhbg");
	this.shape_210.setTransform(21.2,212.8,0.278,0.278);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#3EA2A2").s().p("AiECIQAojXBEhgQAVgfAUgOIARgIIBhCoQAKAbgYBRQgbBeg0BXIiqhdg");
	this.shape_211.setTransform(21.9,208.9,0.278,0.278);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FBA386").s().p("AAkCgQgRgfAqhDQAOgXgEgFQgGgHgqANIh6AoQhUAWAAggQAAgNCwhEIhuAQQhvAJgHgnQgEgPC3gRQhMAFgzgTQgugRAFgTQACgIBjABIBjACIhRgMQhQgPABgSQABgOBPAGQBoAIAvgJQBrgSA0AiQAQAKAJAPIAGAMIgBAqQgCAugJAVQgPAgg7AqQg7ApgKAaQgLAbgMAHQgEACgDAAQgJAAgHgNg");
	this.shape_212.setTransform(9.7,230.1,0.278,0.278);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FBA386").s().p("AjeEWQCFhqBckaQAdhZAWhgIAQhQICZAZQgHAsgMAyQgXBoggBgQhoEuihCCg");
	this.shape_213.setTransform(17.4,219.8,0.278,0.278);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EDEDED").s().p("Aj3IwQj7gfjrgsQgkgGgWgdQgXgdACglIAMjpQACggAagTQAagTAgAIQESBMDvAeQD9AhCYgaQBngTAPgcQBljRBHjkQBAjNADhcIA6AMQBZAfA4BUQA5BVgJBcQggFHh/EGQhBCGiWBDQiWBBjwABQiCAAilgVg");
	this.shape_214.setTransform(58.8,216.3,0.278,0.278);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EDEDED").s().p("AhFB4QgLgOAAgUIADi9QAAgOAIgJQAIgIAKACICEAcIgTDnIhpAHIgCAAQgOAAgKgOg");
	this.shape_215.setTransform(35.9,223.4,0.278,0.278);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FD9D83").s().p("AiXDVQhYgVAEgpQABgLAJgRQAIgNgDgCQgwgsARghQAagagEgEQg6gwAXgjQAGgLAPgIIAMgGQgNgfgEgeQgHg7AyAKQAVAFAoAMQApANASAIQAhAQAmgHQAHgBAPgGQAPgFAIgBQAMAAAKAGQAHAEAKALQAkAoATAoQAKAUA1ALIBTARIgZDEIiDgEQgLAPgPAOQgSARgNADQgcAHhAAEIgvABQgsAAgagGg");
	this.shape_216.setTransform(29,222,0.278,0.278);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FBA386").s().p("AhgDAQhVgSg0g6QgsgwgsiJQgIgYAQgUQAQgTAaAAIABAAIAlgFQAegEArgBQAagBAZgIIArgPQANgEAEAaQAEAagRATQgRATgtAQQglAOAAAIQACANAjAXIAiATQAPgLAVgcQAqg6AihWQALgcAmgBQAlAAgKAnQgQA+glBEQgTAhgQAWQASgTAWgbQAsg4AVgtQAbg6AjAMQAOAFAGAOQAHAOgGANQgNAgg9BSQgeAogcAiQAUgQAcgbQA5g2Aqg3QAWgeAYAVQAYAVgXAiQgkA0hYBXQAQgFAWgNQArgZAbglQAagiAgAKQAgAIgOAcQgTAkhOA6QhZBCg/AFQgqAEgjAAQg0AAgmgIg");
	this.shape_217.setTransform(37.5,240.5,0.278,0.278);

	this.instance_47 = new lib.Path_57_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(53,222.8,0.278,0.278,0,0,0,105,58.4);
	this.instance_47.alpha = 0.102;

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#C5E0DF").s().p("AiHAhQgsgfgZgsQgBgCABgDQABgDADgBIA8gPQARgEAMAMQBDBBBHgFQAsgCAhgcQAWgSAMgXQADgGAIgBIA4AAIAAAVQgCAagLAWQgkBHhzALQgRACgQAAQhQAAg/gsg");
	this.shape_218.setTransform(33.2,202.3,0.278,0.278);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C5E0DF").s().p("AkcB3QhPgMgsgSIATiCQAsAMBJAJQCTAQCQgTQCRgUBpguQAhgPAYgPIASgNIA/B3IgQAPQgVATgiATQhqA7iyAXQhUALhQAAQhZAAhUgOg");
	this.shape_219.setTransform(35.9,214.7,0.278,0.278);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#3EA2A2").s().p("AkSIMQg7gEgigJQlzlMgilbQgLhtAYhhIAbhLQFfAXD5gvQBNgPA5gVIArgRQFIBQDqD0QBKBMA3BUIAoBDQl9GOmiBUQhjAUhcAAQgeAAgegDg");
	this.shape_220.setTransform(45.4,228.7,0.278,0.278);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#3EA2A2").s().p("AlSCQQhPm/gziuQAdgMAugPQBcgfBYgPQAbAlAuAUQAvAWAtgGQAqgGAggVQAhgUAVggIAmACIADgBQBMAIAyAaIAdBVQAkBuAhB2QBlF5AXFFIrjBAQgdi+gnjgg");
	this.shape_221.setTransform(35.7,215.9,0.278,0.278);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F79178").s().p("AlTCQQhJm6gzivQBLgbBxgWQDigtC8AZQALAQATAXIAeAlIAwA7IA6ETQAjCcAkBzQAPAwAoAVQAYCVAJCDIrjBAQgbi6gljeg");
	this.shape_222.setTransform(35.8,215.7,0.278,0.278);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#501C0E").s().p("AkUAXQGNitHOgmIggAdQgtAgg7AVIhnAOQiBAUiBAdQmbBbkBCNQBrhPDHhXg");
	this.shape_223.setTransform(29,183.3,0.278,0.278);

	this.instance_48 = new lib.Path_64_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(41.4,176.2,0.278,0.278,0,0,0,6.5,8.7);
	this.instance_48.alpha = 0.07;

	this.instance_49 = new lib.Path_65_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(27.6,178.2,0.278,0.278,0,0,0,6,15.7);
	this.instance_49.alpha = 0.07;

	this.instance_50 = new lib.Path_66_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(19.7,180.2,0.278,0.278,0,0,0,5.2,20.4);
	this.instance_50.alpha = 0.07;

	this.instance_51 = new lib.Path_67_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(33.8,178.4,0.278,0.278,0,0,0,4.5,6.7);
	this.instance_51.alpha = 0.07;

	this.instance_52 = new lib.Path_68_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(36.2,175.6,0.278,0.278,0,0,0,12.3,13.4);
	this.instance_52.alpha = 0.07;

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#642812").s().p("AihlUQByghCWAYQEsAwC0EdQidAOjMAvQjDAuiaA4QjiBSjlCEQgGp8GrhBg");
	this.shape_224.setTransform(29,178.6,0.278,0.278);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E6E2E1").s().p("AgNAvQg6gRgfg5QgBgDABgFQACgGADAAIAogOQAEALAJAOQASAbAXAJQAVALArgBIAmgDIAEAiIggAIIgXABQgeAAgfgJg");
	this.shape_225.setTransform(41.9,253.1,0.278,0.278);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C5E0DF").s().p("AjpiFQgEgDAAgFQgBgFACgEIAWgkQACgEAFgBQAFgBAEADIG0FbIggAjg");
	this.shape_226.setTransform(42.9,259.1,0.278,0.278);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C5E0DF").s().p("AgiAlQgWgTA+g6IAjAjQgSAVgTANQgPAMgLAAQgHAAgFgEg");
	this.shape_227.setTransform(45.6,256.5,0.278,0.278);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C5E0DF").s().p("AgaAnQgUgSAwg/IAfAjQgOAXgOAOQgMANgKAAQgFAAgEgEg");
	this.shape_228.setTransform(46.7,257.5,0.278,0.278);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C5E0DF").s().p("AguAQQgQgQAegMQAVgIAkgFIAcAZQguAagaAAQgRAAgKgKg");
	this.shape_229.setTransform(44.3,255.3,0.278,0.278);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C5E0DF").s().p("AgQAqQgNgHAHgfQAEgUAMgbQATAZANAUQgVAqgPAAQgDAAgDgCg");
	this.shape_230.setTransform(47.9,258.5,0.278,0.278);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#3EA2A2").s().p("AjmhyQAKgXAUgXQAngvAxgEQALAZARANIABABQAHAFAJAFQAVAWAmABQAPAAASgKQDJCiAFB0QACA6gmAZg");
	this.shape_231.setTransform(43.2,257.9,0.278,0.278);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#C5E0DF").s().p("AjIBsIDIk0QADgEAFgBQAFgBAEAEQADANAJAUQAUAmAhAbQAiAbAsASIAlANQAEAEAAAFQAAAFgFAEIkyDqg");
	this.shape_232.setTransform(44.9,249.9,0.278,0.278);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FBA386").s().p("AgHDkQhYhHAYgjQAYgigugpQgXgVgcgOIhVkCQA0gnBMgHQCWgMBzClQBzCkhWCXQgrBLhCAqg");
	this.shape_233.setTransform(47.4,240.9,0.278,0.278);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F79178").s().p("AhuBzQiDgzhIh1QgIAIgGAEQgeARgmgQQgmgQgXgpQgMgVgFgZIAJAIQAjAfAuAAQArAAAngbQA7ByBmA5QBuA/CFgRQBogMBhgxQBhgvBJhMQglBHg8AyQg/A1hPAYIhPAZQg9ATg8AAQhIAAhJgdg");
	this.shape_234.setTransform(28.5,195.3,0.278,0.278);

	this.instance_53 = new lib.Path_76_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(16.1,182.7,0.278,0.278,0,0,0,0.4,0.6);
	this.instance_53.alpha = 0.102;

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E6E2E1").s().p("AgHAqQgigKgagaQgRgQgKgVQgCgDACgDQACgDADAAIAkgIQAEAKAHANQAQAZAWAKQAVAKApgEIAjgHIADAVIgaAOQgQAFgSAAQgVAAgWgHg");
	this.shape_235.setTransform(49.1,249.8,0.278,0.278);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C5E0DF").s().p("AjmiEQgDgDgBgEQgBgFACgEIAWgkQACgEAFgBQAEAAAEACIGwFXIggAig");
	this.shape_236.setTransform(50.2,255.6,0.278,0.278);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C5E0DF").s().p("AgiAkQgWgSA+g5IAjAiQgpAtgWAAQgHAAgFgEg");
	this.shape_237.setTransform(53,253,0.278,0.278);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C5E0DF").s().p("AgaAmQgUgSAwg9QARARAOARQgPAXgNANQgMANgKAAQgFAAgEgEg");
	this.shape_238.setTransform(54.1,254.1,0.278,0.278);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C5E0DF").s().p("AguAQQgPgQAegMQAUgIAkgFIAbAZQgtAagaAAQgRAAgKgKg");
	this.shape_239.setTransform(51.7,251.9,0.278,0.278);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C5E0DF").s().p("AgQApQgNgHAHgeQAEgUAMgaQAPAUAQAXQgUAqgPAAQgDAAgDgCg");
	this.shape_240.setTransform(55.2,255.1,0.278,0.278);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#3EA2A2").s().p("AjkhxQAKgWAUgXQAnguAxgEQAIAXATAOIABABIAQAKIAAABQAVAVAmABQAOAAATgJQDGCfAEByQACA5glAZg");
	this.shape_241.setTransform(50.6,254.4,0.278,0.278);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B4CFCD").s().p("Ai3BiIC4kZQACgEAFAAQAFgBADADQADANAIARQASAjAfAaQAeAYAoARIAiALQAEAEAAAFQAAAFgEADIkZDVg");
	this.shape_242.setTransform(52,246.7,0.278,0.278);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F79178").s().p("AgHDQQhQhBAWgfQAWgfgqgnQgWgTgZgNIhNjrQAwgkBFgFQCKgLBoCXQBpCWhPCJQgoBEg8Ang");
	this.shape_243.setTransform(54.3,238.5,0.278,0.278);

	this.instance_54 = new lib.Path_3();
	this.instance_54.parent = this;
	this.instance_54.setTransform(37.5,185.6,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_54.alpha = 0.102;

	this.instance_55 = new lib.Path_1_1();
	this.instance_55.parent = this;
	this.instance_55.setTransform(24.5,189,0.278,0.278,0,0,0,6.9,8.3);
	this.instance_55.alpha = 0.102;

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#491B0C").s().p("AgWBFQgYgVgLgkQgKgiAJgdQAKgcAYgGQAYgFAXAWQAYAVALAjQAKAjgKAcQgJAdgYAFIgKACQgSAAgTgSg");
	this.shape_244.setTransform(37.5,185.2,0.278,0.278);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#491B0C").s().p("AgXBJQgZgXgLglQgLgkAKgeQAKgeAZgFQAZgFAYAWQAZAWALAlQALAkgKAeQgKAegZAFIgKABQgTAAgUgRg");
	this.shape_245.setTransform(24.4,188.5,0.278,0.278);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FBA386").s().p("AgLBjQgmgQgXgpQgXgpAFgoQAEgpAfgRQAegRAlAQQAmARAXAoQAXApgFAoQgEApgfARQgPAJgSAAQgRAAgRgIg");
	this.shape_246.setTransform(17.8,191.4,0.278,0.278);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AAXAVQg/gKgygcQgFgDACgCQACgBAHABICgAYQAHABAGADQAHACgBACQgEAJgSADQgIACgKAAQgOAAgSgDg");
	this.shape_247.setTransform(31.7,192.7,0.278,0.278);

	this.instance_56 = new lib.Path_79_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(29.5,179.8,0.278,0.278,0,0,0,45.6,28.4);
	this.instance_56.alpha = 0.109;

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FBA386").s().p("AjOG7QiWhPgyihIgsiOQgyifBPiWQBPiWChgyIBPgZQBcgcBeAQQBcAPBNA2QA2AmAoA2QAoA3AUBBIAsCOQAyCghPCWQhPCWihAyIhPAYQg+AUg8AAQhgAAhbgxg");
	this.shape_248.setTransform(30,185.7,0.278,0.278);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F79178").s().p("AgxBWQgcgegGguQgFgtAUgkQAVgkAigEQAigEAcAeQAdAeAFAuQAGAtgVAkQgUAkgjAEIgIABQgcAAgagbg");
	this.shape_249.setTransform(42.5,184,0.278,0.278);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F79178").s().p("AhUiCIB9gLIAtEMIirAPg");
	this.shape_250.setTransform(33.5,199.3,0.278,0.278);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("Ag/CyQhmgQg4hiQgcgxgIgtIB3iLQALAaAaAZQAyAyBFgFQBGgFArgyQANgQAJgSIAGgPIBjBbIgMBOQgYBYg3A2QgMAMgQgEQgQgEgFgQQgRg2gWgXQgdgegvAIQgSAJgFAhQgDAWADAzQABASgNAMQgMAKgOAAIgFAAg");
	this.shape_251.setTransform(62.8,202.4,0.278,0.278);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E6E6E6").s().p("AiJBuQhxhGgkiEQAMgHAigBQAMAsAEAMQAKAcASAVQAhAnAwAXQAhAQAjhFQAqhRAbgKQAZgIAlAJQAOADAyASQBNAbAUglQATgwACgsQAHgEAEABIAHAEQAPB3hABcQg+BXhgAPQgYAEgXAAQhWAAhRgzg");
	this.shape_252.setTransform(62.5,204.3,0.278,0.278);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#842725").s().p("Ai/DiIh4D8IktluIDSmiICpDRIC3miIFcGQIBsj8ICjC8QANBZAOBxIARB/IhJDOIjWjQIjGFwg");
	this.shape_253.setTransform(66.4,229.5,0.278,0.278);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#842725").s().p("AoxB5QgUgDgRgXQgXggAHgyQC3AUFxghQGqgpDzhYQAOA1gHAUQgJAdg5AWQiKA0mWAxQkVAiieAAQhQAAgygJg");
	this.shape_254.setTransform(68.2,254.5,0.278,0.278);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#842725").s().p("AkVBJQg5hCgihWIgSguQAxgKBsgRQAMAsAEALQAKAcASAWQAhAoAwAWQAuAWAzADQAzAEAwgQQA2gSApgoQAigjAgg5QAHgRAAgZIAAgrQBGgEA2ADQAJBSgQBKQgTBQguAzQg4A/hMAiQhMAihVABIgFAAQirAAh4iKg");
	this.shape_255.setTransform(62.2,205.8,0.278,0.278);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#772824").s().p("ApDKXQg5kbhGnVQBVhPAvhZQAwhbARh3QASiAgNhxQgPiBg1hlQAtgMBAgLIB0gTQALAsAEALQAKAcATAWQAgAoAwAXQAuAWA0ADQA0AEAwgQQA0gSApgpQAjgjAfg5QAHgRABgZIAAgrQBtgGBFAKIAAABQAYCHA3CDQA8CQBRBiQA2EAAmE5IAjD+QAYCwAJBqQAcFDhPANQjjAklIAgQi4ASlxAhIgBAAQgsAAhLl3g");
	this.shape_256.setTransform(65.4,228.8,0.278,0.278);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E6E6E6").s().p("Ao4HwQggjUgfjlIgZi5QgjifCShHQA5gcBfgUQApgICIgWQAMAsAEALQAKAcASAWQAhAoAwAXQAuAWAyADQA0AEAwgQQA2gSApgpQAigjAgg5QAHgRAAgZIAAgrQCrgKBIAeQAWAKAKAMIAFAKIAhBqQApCNAlCvIkYD6Qh1BqitCfg");
	this.shape_257.setTransform(61.8,213.7,0.278,0.278);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F79178").s().p("AhxD/QgwgvgBgzIASlMQAAgzAjglQAkglAzgBIAfAAQAzAAAlAjQAlAkAAAzIAcFkQABAxgwAmQgsAkg2ABIgeABIgCAAQgyAAgwgvg");
	this.shape_258.setTransform(63.2,198.5,0.278,0.278);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C5E0DF").s().p("AgQBzQgGgWgThSQgPhCgNgnQALgRAkgEQAigDAPAOIAWBmQAOA9AFAoIABAFIg9ALQAAgBgMABIgJABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_259.setTransform(48.2,202.1,0.278,0.278);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#3EA2A2").s().p("AjShNQCOgYDsgYIAWBmQAOA9AGAoIABAFIjwArg");
	this.shape_260.setTransform(44.3,202.7,0.278,0.278);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F79178").s().p("ApUhCQA3gKBigNQDGgaDbgRQDbgRDgAzQBGAQA+AUIAwASIv0C1g");
	this.shape_261.setTransform(55,202.4,0.278,0.278);

	this.instance_57 = new lib.Path_94_1();
	this.instance_57.parent = this;
	this.instance_57.setTransform(27,198.7,0.278,0.278,0,0,0,67.9,97.8);
	this.instance_57.alpha = 0.18;

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#642812").s().p("ApNPMQi7g0hThDQCJiOA0k5QARhsAQizQAWj+AFgpQAmlfBhizQCEj0Ecg5QAegLAxgCQBkgGBjAoQE9B9C7IMQDYJeh9FfQh1FGmIA7QjhAhjEAAQkFAAjUg6g");
	this.shape_262.setTransform(27,197.1,0.278,0.278);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E6E6E6").s().p("AAqDnQiwgOguhxQgphnAZh+QAIgnANgmIAMgdQAuBSBGBiQCKDCBzBMQAFADg0AGQgkAEgkAAQgWAAgXgBg");
	this.shape_263.setTransform(33.3,239.4,0.278,0.278);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#1B2728").s().p("AjUFfQAJkdgBjTQAAibgCgHIGPgrQAIBBAGCOQAIDSgDEcg");
	this.shape_264.setTransform(58.7,271.7,0.278,0.278);

	this.instance_58 = new lib.Path_97_1();
	this.instance_58.parent = this;
	this.instance_58.setTransform(68.5,256,0.278,0.278,0,0,0,57.8,13.9);
	this.instance_58.alpha = 0.172;

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#1B2728").s().p("AjgG5QAbk+AOjzQALi2gCgGIGLiEQAFBFgDDCQgEEQgXFag");
	this.shape_265.setTransform(78.2,269.2,0.278,0.278);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#1B2728").s().p("AgUDQQkPgDkJgTIgSmJIRyAHIALCEQAFCPgZA8QgfBJnRAAIhPAAg");
	this.shape_266.setTransform(68.4,258,0.278,0.278);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQAwgoAwguIAmgnQhhAnglBWQhZBMhGAlQAIgqAfgyg");
	this.shape_267.setTransform(127.6,185.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.instance_58},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.instance_57},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.instance_56},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.instance_55},{t:this.instance_54},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_53},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.instance_47},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.instance_46},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.instance_45},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.instance_44},{t:this.shape_193},{t:this.instance_43},{t:this.shape_192},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.instance_39},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.instance_38},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_37},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.instance_36},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.instance_35},{t:this.shape_140},{t:this.instance_34},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]},89).to({state:[]},5).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.instance_58},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.instance_57},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.instance_56},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.instance_55},{t:this.instance_54},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_53},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.instance_47},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.instance_46},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.instance_45},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.instance_44},{t:this.shape_193},{t:this.instance_43},{t:this.shape_192},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.instance_39},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.instance_38},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_267},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_37},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.instance_36},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.instance_35},{t:this.shape_140},{t:this.instance_34},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]},75).to({state:[]},5).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.instance_58},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.instance_57},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.instance_56},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.instance_55},{t:this.instance_54},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_53},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.instance_47},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.instance_46},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.instance_45},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.instance_44},{t:this.shape_193},{t:this.instance_43},{t:this.shape_192},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.instance_39},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.instance_38},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_37},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.instance_36},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.instance_35},{t:this.shape_140},{t:this.instance_34},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]},30).to({state:[]},5).wait(171));

	// sad blink2
	this.instance_59 = new lib.Path_0_1();
	this.instance_59.parent = this;
	this.instance_59.setTransform(60.6,159.1,0.278,0.278,0,0,0,50.1,15.7);
	this.instance_59.alpha = 0.121;

	this.instance_60 = new lib.Path_1_0_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.6,0.6);
	this.instance_60.alpha = 0.121;

	this.instance_61 = new lib.Path_2_1();
	this.instance_61.parent = this;
	this.instance_61.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.2,0.6);
	this.instance_61.alpha = 0.121;

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#472A21").s().p("AANANQhZiLhFABQAWgOAegdQA9g4AshHQBxAZAREeQAJCPgOCKQgmiWhWiGg");
	this.shape_268.setTransform(73.4,168.7,0.278,0.278);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#563428").s().p("AhpBaIAIgxQgMgOgCgRIAAgNQAWACANAHIAJAIQgRgZgBgpIADgkQAsAVAPAiIAHAeQARgrA6gfIA1gVQAAAigdAsQgWAhgJAGIgwBRg");
	this.shape_269.setTransform(53.3,158.6,0.278,0.278);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#563428").s().p("Aj+BpQA+iWDqhRQBKgaBSgPIBEgKQAAAZgQAfQgJAQgIALIhaBBQhrBKhSAyQiKBTgzAAQgwAAAdhJg");
	this.shape_270.setTransform(60.1,157.7,0.278,0.278);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#563428").s().p("AAjgvIgrgjQgygqgegkQhgh1CNgTQCNgSAYEwQAMCYgQCcg");
	this.shape_271.setTransform(73.9,168.6,0.278,0.278);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#563428").s().p("AnaDGQhEjmA1hoQAnhNBnAOQAgAFAjANIAcAMQBmitFNgxQBogPBzgBIBfACQAvC6hYBzQgsA5g1AVIkIgVQkQgOgtAkQguAjhEDLQgiBlgZBeQgthegih0g");
	this.shape_272.setTransform(60,165.3,0.278,0.278);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#563428").s().p("AnyFhQgJgsgEhDQgIiFAZhtQBOliFzABQF6AACAFJQAoBmAKB7QAFA9gDApQgmiWhWiFQhaiLhFABIg2AlQhHAmhNAGQhEAGhrggQg1gQgogSQhJADhBCUQguBsgeCQQgHAmgTAIQgFACgFAAQgEAAgEgBg");
	this.shape_273.setTransform(63,168.5,0.278,0.278);

	this.instance_62 = new lib.Path_9_0_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(57.4,179.8,0.278,0.048,0,0,0,6.9,9.3);
	this.instance_62.alpha = 0.078;

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#35221A").s().p("AgPBhQgZgCgMgeQgOgeAGgoQAHgoAWgbQAWgaAZACQAYACAOAeQANAegGAnQgIApgWAaQgUAZgVAAIgFAAg");
	this.shape_274.setTransform(57.2,179.6,0.278,0.048);

	this.instance_63 = new lib.Path_11_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(71.6,179.5,0.278,0.038,0,0,0,6.5,10.4);
	this.instance_63.alpha = 0.078;

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#35221A").s().p("AgSBhQgZgDgMgfQgMgeAIgnQAIgoAXgaQAXgbAYAEQAZADAMAeQAMAfgIAnQgIAngXAbQgUAXgVAAIgGAAg");
	this.shape_275.setTransform(71.5,179.2,0.278,0.038);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AjDAPQgJgCAFgDQAagKAzgHQA0gIBAgBQA/AAA4AGQA3AHAfAKQAGACgHADQgIACgQAAIlZADIgGAAQgLAAgHgCg");
	this.shape_276.setTransform(64.9,185.7,0.278,0.278);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F79178").s().p("AkoCsQiChygMiqQgjAHgjgaQgjgagQguQgOglAFgkQARAgAkAWQAjAWAjACQAUABAWgDQApDHB/BuQCHB2DNgHQDWgGBxhnQBFhABFidQgPCXhuBrQhwBtiaAJIivAKIgbABQiaAAh3hpg");
	this.shape_277.setTransform(61.7,188,0.278,0.278);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F9A184").s().p("AggBrQgmgZgSgyQgSgxAOgsQANgtAlgNQAlgNAmAaQAnAaARAxQASAxgOAsQgNAtglANQgNAEgNAAQgXAAgagRg");
	this.shape_278.setTransform(48.6,181.5,0.278,0.278);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F9A184").s().p("AljH9QiChzgKitIgTk6QgKizByidQB3ikCogKICtgLQCogKCICVQCECPAKCzIATE6QAKCthzCCQh0CCisAKIiuAKIgcABQibAAh4hqg");
	this.shape_279.setTransform(63.3,178.6,0.278,0.278);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F79178").s().p("AgMB/QgngEgYgoQgYgoAFg0QAGg0AfgjQAfgiAnAEQAnAEAYAoQAYAogGAzQgFA1gfAjQgcAfghAAIgJgBg");
	this.shape_280.setTransform(77.1,180.4,0.278,0.278);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF4F4B").s().p("AhWDOQg4h1gwh6Qgwh7BuhTQAigaAugTIAngOIDXHXIj2B+QgSgjgcg6g");
	this.shape_281.setTransform(92,216.7,0.278,0.278);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FD9D83").s().p("AmHDKQiUh+ikkkQBzhKA5gmQCpEtCHBlQBsBRCEgXQCJgYEMh8QD2h6AVgEIATClQgfAOjhB/Qj0B/ieAbQg7AKg3AAQiwABiTh/g");
	this.shape_282.setTransform(108.1,225.2,0.278,0.278);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FD9D83").s().p("AhxB0QgWgVgcgiQgjgqgFgTQgCgHAJgEIAKgEQgEgHgCgIQgEgRAKgFQALgFANACIAKADIgVgZQgLgNAOgJQAMgIASAAQAMABAUALIASAKQgHgLABgMQABgJASgBQASAAAZAKQAZALA3AhQA6AiAOAHQAWAJAigBIAegEIgXAuIiLA0QhwAoggAAQgIAAgDgDg");
	this.shape_283.setTransform(124.7,235.2,0.278,0.278);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FD9D83").s().p("AhcBRQAlg0AlgbQBDgvgQhDQgGgYAbANQAcANAHAhQAFATgSAyQgOAkAXAGQAVAFARAHQgJALgTAgIjZAoQAMgVASgbg");
	this.shape_284.setTransform(130.4,217.9,0.278,0.278);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FD9D83").s().p("AgBACQADgFAAADIgBACIgBAAIgBAAg");
	this.shape_285.setTransform(133.9,219.2,0.278,0.278);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FD9D83").s().p("AA7C8QgsgBgvgLQg1gLgkgRQgNgHgTgPQgXgRgHgKIALirQAHgHAJgMIAPgTQAhgnAqgcQAWgOARAFQAIADAMAIIARALQAUAJAMAEQARAFAPgBQBRgEAAAoQABAUgQAVQAYAJAMARQAZAhg7AnQAHgCAIAJQAKAKACAOQAFAlg1AUQgCABAHANQAJAQACAJQAFAhhIAAIgLAAg");
	this.shape_286.setTransform(131.9,223.2,0.278,0.278);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FD9D83").s().p("AiMCzQgcgKgcgXQgMgKgOgOQgWgTACgDIAEgEQAKgGB2gvQB3gwAZgJQAbgJAKgGQAVgKADgJQACgHgggTQgmgYgMgVQgNgWAGgeQAHgeAPAFQATAHAUAeQASAaAUACQBIAGAiAcQAZAVAFAkQALBYhpBSQhVBEhhAAQg0AAg3gTg");
	this.shape_287.setTransform(128.2,235.5,0.278,0.278);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#7C3B2D").s().p("AEtBqQgqhFgPhQQgyAfhYA8QhSAwhqAPQA1hNBMg6QgoARhNAnQhEAfgxADIARh4IhyBeQg9A0gzARIAIgbQAFgSAGgKQgfATggAKQATg3Avg9QBeh8CQggQgYgMgKgJQCAgPBmAMIAkAFQB1AUBTBFQgGgRACgQQAJADAKAIQAVAQAFAaQgCgLAHgMQAKgTAfgRIACAZQAAAdgMAQQAGgDAJgDQATgEATAGIgMAQQgRARgYABQAIACAJAHQARAMAGAVIgdgEQAfAuANAzQAIAeACAbQAEAogDARIgKgCQgMgEgNgOQACAZgBAYQg+gtgqhFg");
	this.shape_288.setTransform(128.6,184.9,0.278,0.278);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFD7A0").s().p("AiSAJQgTgaABgaQARgOAVAEIARAIQAEANAPAOQAfAaA6AAQA5AAAcgbIARgdQASgQAZAEIAVAHIgEASQgHAWgOARQgtA6hgAAQhpAAgog1g");
	this.shape_289.setTransform(125.9,211.9,0.278,0.278);

	this.instance_64 = new lib.Group_1();
	this.instance_64.parent = this;
	this.instance_64.setTransform(119.2,233.4,0.278,0.278,0,0,0,15.7,11.4);
	this.instance_64.alpha = 0.09;

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#613D29").s().p("AlrEHQgKg1ADhNQADheAXhPQBAjZCxgRQClgPCiAkQAxALAxAQIArAOIAHABQgrCzh7AGQh1AHjTAOIABAcQABAjgEAkQgMBxg5BIg");
	this.shape_290.setTransform(123.9,238.2,0.278,0.278);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F7EBDB").s().p("AgeAyQgfgRgbgfQAYgWAmgQQAqgTA5gGQAQAdAAAbQAAAngoAUQgQAIgSAAQgVAAgYgMg");
	this.shape_291.setTransform(111.3,248.1,0.278,0.278);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#F7EBDB").s().p("AgPAaQgqgQgPgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIASgBQAFAJAIAJQAQARASADQARAEATgHIAQgIIAVAUQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgZAMgZAAQgTAAgRgIg");
	this.shape_292.setTransform(116,247.3,0.278,0.278);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F7EBDB").s().p("Ai7AUIgDgjIF9gIIgFAvg");
	this.shape_293.setTransform(113.2,251.5,0.278,0.278);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#613D29").s().p("AinAEQAthYCtgGQAHALAFAEQAWAVAhAAIABAAQARAAARgKQAbAYADBDQABAigFAcIlkACQgNgrAXgsg");
	this.shape_294.setTransform(113.2,249.1,0.278,0.278);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#C3B8A1").s().p("Ag2g9IBmgJIAGB8IhZARg");
	this.shape_295.setTransform(115.9,246.5,0.278,0.278);

	this.instance_65 = new lib.Group_3_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(105.4,233.1,0.278,0.278,0,0,0,17.7,10.3);
	this.instance_65.alpha = 0.078;

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#523222").s().p("AmcB6QAkhpBHhWQB2iSCjgQQCagPCQAhQArALAsAPIAlAMIAPC2QhhgIiOAOIjnAZQg3BCguArQgnAmhCA0g");
	this.shape_296.setTransform(108.8,237,0.278,0.278);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#73312A").s().p("AgXgbIABhaQAOADAMANQAZAZgGAyQgFAxgQA1QgGAagHAQQgMgwAAhhg");
	this.shape_297.setTransform(138.9,194,0.278,0.278);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#73312A").s().p("Ag8g6IgLhRIBAAJQATAPAUAbQApA2gBA8QgBA9gXAgQgMAQgLAFQg+higXhkg");
	this.shape_298.setTransform(136.9,189.5,0.278,0.278);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQAwgoAwguIAmgnQhhAnglBWQhZBMhGAlQAIgqAfgyg");
	this.shape_299.setTransform(127.6,185.6,0.278,0.278);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#73312A").s().p("AgogJQBHg0BggPIhBA6QhUA/hoAgQAigyA0gkg");
	this.shape_300.setTransform(128.5,185.6,0.278,0.278);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#73312A").s().p("ABDg+IgmAnQgvAtgwApQAlhWBggng");
	this.shape_301.setTransform(123.8,184.3,0.278,0.278);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#F79178").s().p("AjFCdIhJgTQg9gPg0giQA1ATA6ALQBtAUBkgaQBqgbBLhIQA9g7AohKQAaAMAWADQAeAEAbgLQAcgLASgXQAIgKAGgMQABAfgOAhQgUArgkAUQglAUgggOQgLgGgGgGQg4B3h4A6QhNAlhSAAQgtAAgugLg");
	this.shape_302.setTransform(130.6,204,0.278,0.278);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FBA386").s().p("AguBnQgggOgJgoQgJgqAUgpQAUgrAkgUQAjgUAgAOQAgAPAJAoQAJAqgUApQgUArgkAUQgVAMgTAAQgOAAgNgHg");
	this.shape_303.setTransform(138.8,200.2,0.278,0.278);

	this.instance_66 = new lib.Path_9_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(139.7,192.9,0.278,0.278,0,0,0,0.6,0.2);
	this.instance_66.alpha = 0.102;

	this.instance_67 = new lib.Group_5_1();
	this.instance_67.parent = this;
	this.instance_67.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.6);
	this.instance_67.alpha = 0.078;

	this.instance_68 = new lib.Group_6_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.8);
	this.instance_68.alpha = 0.078;

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#491B0C").s().p("AAbA/IhGgNQgGgBgEgEQgDgFAAgFQAAgLADgPQAIggAVgVQAWgVAVADQAWAEALAaQAKAagIAhQgDANgIAPQgEAIgJAAIgDAAg");
	this.shape_304.setTransform(120.2,193.6,0.278,0.278);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#491B0C").s().p("AAVBCIhBgQQgMgDAAgMQgBgOAEgQQAIggAVgVQAVgVAWAEQAWADAKAaQALAagIAhQgEASgLASQgFAIgHAAIgGgBg");
	this.shape_305.setTransform(132.7,196.2,0.278,0.278);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#A14740").s().p("Ah2gFIgDgEQBggTCTAsg");
	this.shape_306.setTransform(124.5,203.1,0.278,0.278);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#73312A").s().p("ACDAnIgYgCQiTgshgASIAEAEIgLgBQgMgBgEgGQgDgFAIgDQAmgVAzgJQA0gKAyAEQAyAFAiASQAhARAHAZQABAFgJAEQgIACgJAAIgFAAg");
	this.shape_307.setTransform(125,202.6,0.278,0.278);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#F7EBDB").s().p("AgBA9QglgGgWgrQgPgfgDgoQAegGAmAJQArAKAuAbQgDAggPAVQgTAcgfAAIgMgBg");
	this.shape_308.setTransform(94.6,242.1,0.278,0.278);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#F7EBDB").s().p("AApA/QgsgIgZgnQgYglAKglQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAPAKIAAAVQADAYAMANQALAOATAEIAQACIAFAeQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAIgDACIgBAAg");
	this.shape_309.setTransform(98.3,243.7,0.278,0.278);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F7EBDB").s().p("AidhdIARgfIEpDUIgeAlg");
	this.shape_310.setTransform(94,245.7,0.278,0.278);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#613D29").s().p("Aipg8QAOgrApgXQBSgvCIBfQAAAOACAGQAFAdAaATIAAABQAOAJASABQAIAkgjA5QgSAcgTAVg");
	this.shape_311.setTransform(94.7,244.6,0.278,0.278);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#C3B8A1").s().p("AhGApIA6h3IBTA0Ig/Bpg");
	this.shape_312.setTransform(98.7,243,0.278,0.278);

	this.instance_69 = new lib.Path_10();
	this.instance_69.parent = this;
	this.instance_69.setTransform(128.1,190.9,0.278,0.278,0,0,0,39.5,25.4);
	this.instance_69.alpha = 0.09;

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FBA386").s().p("AhGGzIhJgSQiVgmhPiEQhPiFAliUIAiiDQAeh6BkhOQBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCEglCUIghCDQgmCViEBPQhaA2hiAAQgtAAgwgMg");
	this.shape_313.setTransform(127.1,196.3,0.278,0.278);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#523222").s().p("AA0BKQlagaiOhTIBDgxIMWAAQAHAAAFAFQAEAFgBAHQgGAsgPA4QgOAygDAAQgpACguAAQhzAAiQgLg");
	this.shape_314.setTransform(122.7,231.4,0.278,0.278);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFC054").s().p("AgDGUQkVgGiBhNIB6l9QAkjHBdhWQAdgbAfgMIAagHIAMgBQAKASAOAOQAkAkA0AGQA1AGAsgZQAogXAYgsQAuAEApAPQAzASAaAeQASAUAPAeQgDAHgTEDQgUEYgQBYIgJAVQgIAOADAHQigAQiGAAIgvgBg");
	this.shape_315.setTransform(123.9,221.5,0.278,0.278);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F9A184").s().p("Ak5BCQAphIA4ggQARgKARgFIAOgDIC8gJIAjAFQBjAEAOACQBNAMAkApQASATAPAdQgCADgCAQg");
	this.shape_316.setTransform(126.6,212.2,0.278,0.278);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#F79178").s().p("AgCBVQgqgDgvgPIAJhcQAAgZASgSQARgRAZAAIAOAAQAeAAAgAOQAmARAAAXIAABvQghAGgjAAIgagBg");
	this.shape_317.setTransform(125.8,207.6,0.278,0.278);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#F9A184").s().p("AgTCGQgbAAgYgSQgYgTAAgYIAOiRQABgZARgSQASgSAZAAIAOAAQAdAAAhAPQAmAQAAAXIAACSQAAAYgnAWQgjAVgbAAg");
	this.shape_318.setTransform(125.7,208.9,0.278,0.278);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#73312A").s().p("AmmB/QAEh/BHh0QCOjmFNA+QEaA0AMEOQAHCIgyB9g");
	this.shape_319.setTransform(128.1,189,0.278,0.278);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#F9A184").s().p("AhJCrQghgEgUgSQgagXgGgKQgUgcgBgoQAAgkALgrQAJgkAOgdQADgGALghQAIgcAEgDQAPgKALANQAKALAAARQAAAMgGAJIgKAOQgHAMAFAOQAfgLAWgRQAZgUA3ghQAVgMAOAPQAPAPgZAQQgjAWgpAhIAPAUQApgcA0geQAfgSAQAaQAQAZgpAPQgfALg7AgIAUAWQAegUA8gUQAkgLAFAZQAEAYgiAGQgYADg7AXIAPAeQA9geAagBQAPAAADAUQAEAUgXAHIg3APQgbAIgSAMQguAegnAOQgWAHgQAAIgKAAg");
	this.shape_320.setTransform(153.2,200,0.278,0.278);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFD7A0").s().p("AgRAoIgWhJQgOgsgNgfIBBgRQAsBuAYB5QgWAGgqAOQgIgsgMgqg");
	this.shape_321.setTransform(136.6,212.6,0.278,0.278);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFC054").s().p("AhmCQIgzj0QA1ACBJgRIBwgcQAtBuAYB5QgpALhOAbQhAASg+AAIgLAAg");
	this.shape_322.setTransform(134.2,213.1,0.278,0.278);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#F9A184").s().p("Al2ELIgYi8QElAIDXifQBFgzA1g/QAignAJgTIBUgXIggBKIBIAjQhCCGh3BkQjgDAlLAAIghgBg");
	this.shape_323.setTransform(141,208.1,0.278,0.278);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#ED8C73").s().p("AkLCzQhXgMhSgvQCJA0COgcQB8gXB0heQBrhWBJh6QAVAYAYAKQAgANAigDQAjgEAcgVQgcAxgrAWQgsAVgjgTQgHgDgFgFQhgCLiPBMQh5BAh5AAQgfAAgegDg");
	this.shape_324.setTransform(106.3,199.5,0.278,0.278);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#F9A184").s().p("AhAB6QgkgTgGgxQgGgxAbgyQAbgzAsgWQAsgWAjATQAkATAGAxQAGAxgbAyQgbAygsAXQgXAMgVAAQgTAAgQgJg");
	this.shape_325.setTransform(116.1,193.7,0.278,0.278);

	this.instance_70 = new lib.Path_26_1();
	this.instance_70.parent = this;
	this.instance_70.setTransform(114.3,183.5,0.278,0.278,0,0,0,20.7,10.1);
	this.instance_70.alpha = 0.121;

	this.instance_71 = new lib.Path_27_1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(94,176.1,0.278,0.278,0,0,0,25.9,20.2);
	this.instance_71.alpha = 0.121;

	this.instance_72 = new lib.Path_28_1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(100,181.1,0.278,0.278,0,0,0,18.4,9);
	this.instance_72.alpha = 0.121;

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#4F3026").s().p("ApMIuQhEhzgWiXQhFnQEukgQBuhoCXhIQBwg1BtgaQBEgQB3AuIBpAxQCpgUBiC1QB7DjgjHpQgHBfgUBOIgJhtQgIhDgSgpQgkhWhChKQgUgXhjhcQhHhDgig3QgvhNgNhlQguB9hsBBQg/AmiUArQiSAqhAApQhoBCgqCCQgzCQABCEQABCbBKB1QhYhfgohDgAhYj3QhNAhgXAMQg1AcggAjQAigZBBgYQBMgZAkgOQCCgzAQhfQgsBGiAA4g");
	this.shape_326.setTransform(100.6,186.8,0.278,0.278);

	this.instance_73 = new lib.Path_29_1();
	this.instance_73.parent = this;
	this.instance_73.setTransform(107.5,191.2,0.278,0.278,0,0,0,6.7,8.7);
	this.instance_73.alpha = 0.141;

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#3E1208").s().p("AgkBdQgbgLgJgjQgIgiAPgmQAPgnAegUQAdgTAbALQAcALAJAjQAIAjgOAlQgQAngeAUQgTAMgRAAQgLAAgKgEg");
	this.shape_327.setTransform(107.8,190.7,0.278,0.278);

	this.instance_74 = new lib.Path_31_1();
	this.instance_74.parent = this;
	this.instance_74.setTransform(93,189.3,0.278,0.278,0,0,0,6.5,8.4);
	this.instance_74.alpha = 0.141;

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#3E1208").s().p("AgjBdQgbgLgJgjQgJgjAPglQAPgmAegUQAdgUAbALQAcAMAIAiQAJAigPAmQgPAngeATQgTAMgRAAQgKAAgKgDg");
	this.shape_328.setTransform(93.3,188.8,0.278,0.278);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AiNApQgDgBAHgEQAHgEALgDIDzhFQALgDAFAAQAGAAgGAEQg2AlhgAaQgtANgkAFQgPACgMAAQgOAAgJgDg");
	this.shape_329.setTransform(99.4,197,0.278,0.278);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#DB8575").s().p("AAAAAQADgJgDAJIAAAFIAAgFg");
	this.shape_330.setTransform(113.6,190.5,0.278,0.278);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#DB8575").s().p("AoMB2QAdiYBPh2IACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB4QALB3gaBuQhhhChXhbQiLiQgeiDQgvBJhGAwQg0AlhZAkIihA/QhiAqhKAzQhKBFgWBoQggiQAciag");
	this.shape_331.setTransform(102.1,181.9,0.278,0.278);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#F9A184").s().p("AhzJlQhrgOhdhBQjHiJgVkaQgJh7Afh8QAgh8BBhhIACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB5QALB2gaBuQgxDZi7CUQiiCAiuAAQgfAAgggEg");
	this.shape_332.setTransform(102.1,187.5,0.278,0.278);

	this.instance_75 = new lib.Path_37_1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(106.1,235.3,0.278,0.278,0,0,0,66.5,79.3);
	this.instance_75.alpha = 0.09;

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF4F4B").s().p("AAKN2Qk6gKlkixQBDi2Btj5QBEicAJhCQAMhSg7mpIg8mZQAwgKAkgCIBEgEQAJAuA1AoQBEA0BqgBQBGgBAJgtQAFgcgVg+QAFgBAQAAIAVABQBeBiBeBtQC9DbgHA4QgNBlgVA/ICQFgQCaGRAwDpQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_333.setTransform(106.1,232.6,0.278,0.278);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF4040").s().p("AjejeIBdAAQAXgBAbAMQAYALARARIBVBVQAoAoCIB+QgXAIhrBFQhqBHgXAIg");
	this.shape_334.setTransform(111.6,214.2,0.278,0.278);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F9A184").s().p("AixhaQCngIC8ALQgGAwAGBhQhpAQgxAGIh+AOIhLi4g");
	this.shape_335.setTransform(100.8,210.6,0.278,0.278);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#ED8C73").s().p("AhiB9IgFiLQgBgvAdgjQAdgiAqgCQApgBAfAhQAfAhABAvIAEBqQgbAbhMAOQghAGgYAAQgcAAgOgIg");
	this.shape_336.setTransform(100.2,202.5,0.278,0.278);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#F9A184").s().p("AhhC9IgIkIQgBgvAdgiQAdgjAqgBQApgBAfAgQAfAhABAvIAIECIjKAQg");
	this.shape_337.setTransform(100.2,204.1,0.278,0.278);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#462B24").s().p("AkcL6QkkhrhJnHQhHm5FAklQDAivD/hMQBCgUBGAtQAVAOAUATIAPAQQA1gSBKAnQBSAtBDBhQCvEBgfHJQgeGwlACGQhlAqh1AHQg7ADglgFIhUAMIgbABQhYAAhQgeg");
	this.shape_338.setTransform(101.2,189.5,0.278,0.278);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#ED8C73").s().p("ACEGOQhSgxjqloQh2i0hlirICGg5QCJBpCVB9QErD5A+BnQAkA7gOA7QgMA1guAnQgtAlg5AIQgOACgNAAQgtAAgkgWg");
	this.shape_339.setTransform(123.7,227.7,0.278,0.278);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFD7A0").s().p("AggBWQAGhYAChYIAcADIAcADQgIBMgDBjg");
	this.shape_340.setTransform(114.2,213,0.278,0.278);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFC054").s().p("AiuBUQAGhYAChYIAdADQA7AIBugDIBkgFQAHAGAIAKQARAUAHAUQAWA/hYAnQg1AYheAAQg6AAhKgJg");
	this.shape_341.setTransform(118.1,213.1,0.278,0.278);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FBA386").s().p("AhWBdQhjgNhSgVIAAihIDgAdQA6AHBugGIBigHQAHAGAJAKQARAUAHAUQAYA/hYAnQg2AYheAAQg8AAhNgKg");
	this.shape_342.setTransform(115.6,212.8,0.278,0.278);

	this.instance_76 = new lib.Path_48_1();
	this.instance_76.parent = this;
	this.instance_76.setTransform(105.7,256.2,0.278,0.278,0,0,0,68.3,17.4);
	this.instance_76.alpha = 0.09;

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#8D242E").s().p("AuDIcQAajpA3joQBTlWCHkQITCAZIAYA4QAfBOAiBpQBpFOBXHhg");
	this.shape_343.setTransform(105.5,266.5,0.278,0.278);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C5E0DF").s().p("AhrgFQAFgvAQghIAzATICOBDQgUAvgYAmIiqhbg");
	this.shape_344.setTransform(21.2,212.8,0.278,0.278);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#3EA2A2").s().p("AiECIQAojXBEhgQAVgfAUgOIARgIIBhCoQAKAbgYBRQgbBeg0BXIiqhdg");
	this.shape_345.setTransform(21.9,208.9,0.278,0.278);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FBA386").s().p("AAkCgQgRgfAqhDQAOgXgEgFQgGgHgqANIh6AoQhUAWAAggQAAgNCwhEIhuAQQhvAJgHgnQgEgPC3gRQhMAFgzgTQgugRAFgTQACgIBjABIBjACIhRgMQhQgPABgSQABgOBPAGQBoAIAvgJQBrgSA0AiQAQAKAJAPIAGAMIgBAqQgCAugJAVQgPAgg7AqQg7ApgKAaQgLAbgMAHQgEACgDAAQgJAAgHgNg");
	this.shape_346.setTransform(9.7,230.1,0.278,0.278);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FBA386").s().p("AjeEWQCFhqBckaQAdhZAWhgIAQhQICZAZQgHAsgMAyQgXBoggBgQhoEuihCCg");
	this.shape_347.setTransform(17.4,219.8,0.278,0.278);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#EDEDED").s().p("Aj3IwQj7gfjrgsQgkgGgWgdQgXgdACglIAMjpQACggAagTQAagTAgAIQESBMDvAeQD9AhCYgaQBngTAPgcQBljRBHjkQBAjNADhcIA6AMQBZAfA4BUQA5BVgJBcQggFHh/EGQhBCGiWBDQiWBBjwABQiCAAilgVg");
	this.shape_348.setTransform(58.8,216.3,0.278,0.278);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#EDEDED").s().p("AhFB4QgLgOAAgUIADi9QAAgOAIgJQAIgIAKACICEAcIgTDnIhpAHIgCAAQgOAAgKgOg");
	this.shape_349.setTransform(35.9,223.4,0.278,0.278);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FD9D83").s().p("AiXDVQhYgVAEgpQABgLAJgRQAIgNgDgCQgwgsARghQAagagEgEQg6gwAXgjQAGgLAPgIIAMgGQgNgfgEgeQgHg7AyAKQAVAFAoAMQApANASAIQAhAQAmgHQAHgBAPgGQAPgFAIgBQAMAAAKAGQAHAEAKALQAkAoATAoQAKAUA1ALIBTARIgZDEIiDgEQgLAPgPAOQgSARgNADQgcAHhAAEIgvABQgsAAgagGg");
	this.shape_350.setTransform(29,222,0.278,0.278);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FBA386").s().p("AhgDAQhVgSg0g6QgsgwgsiJQgIgYAQgUQAQgTAaAAIABAAIAlgFQAegEArgBQAagBAZgIIArgPQANgEAEAaQAEAagRATQgRATgtAQQglAOAAAIQACANAjAXIAiATQAPgLAVgcQAqg6AihWQALgcAmgBQAlAAgKAnQgQA+glBEQgTAhgQAWQASgTAWgbQAsg4AVgtQAbg6AjAMQAOAFAGAOQAHAOgGANQgNAgg9BSQgeAogcAiQAUgQAcgbQA5g2Aqg3QAWgeAYAVQAYAVgXAiQgkA0hYBXQAQgFAWgNQArgZAbglQAagiAgAKQAgAIgOAcQgTAkhOA6QhZBCg/AFQgqAEgjAAQg0AAgmgIg");
	this.shape_351.setTransform(37.5,240.5,0.278,0.278);

	this.instance_77 = new lib.Path_57_1();
	this.instance_77.parent = this;
	this.instance_77.setTransform(53,222.8,0.278,0.278,0,0,0,105,58.4);
	this.instance_77.alpha = 0.102;

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#C5E0DF").s().p("AiHAhQgsgfgZgsQgBgCABgDQABgDADgBIA8gPQARgEAMAMQBDBBBHgFQAsgCAhgcQAWgSAMgXQADgGAIgBIA4AAIAAAVQgCAagLAWQgkBHhzALQgRACgQAAQhQAAg/gsg");
	this.shape_352.setTransform(33.2,202.3,0.278,0.278);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#C5E0DF").s().p("AkcB3QhPgMgsgSIATiCQAsAMBJAJQCTAQCQgTQCRgUBpguQAhgPAYgPIASgNIA/B3IgQAPQgVATgiATQhqA7iyAXQhUALhQAAQhZAAhUgOg");
	this.shape_353.setTransform(35.9,214.7,0.278,0.278);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#3EA2A2").s().p("AkSIMQg7gEgigJQlzlMgilbQgLhtAYhhIAbhLQFfAXD5gvQBNgPA5gVIArgRQFIBQDqD0QBKBMA3BUIAoBDQl9GOmiBUQhjAUhcAAQgeAAgegDg");
	this.shape_354.setTransform(45.4,228.7,0.278,0.278);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#3EA2A2").s().p("AlSCQQhPm/gziuQAdgMAugPQBcgfBYgPQAbAlAuAUQAvAWAtgGQAqgGAggVQAhgUAVggIAmACIADgBQBMAIAyAaIAdBVQAkBuAhB2QBlF5AXFFIrjBAQgdi+gnjgg");
	this.shape_355.setTransform(35.7,215.9,0.278,0.278);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#F79178").s().p("AlTCQQhJm6gzivQBLgbBxgWQDigtC8AZQALAQATAXIAeAlIAwA7IA6ETQAjCcAkBzQAPAwAoAVQAYCVAJCDIrjBAQgbi6gljeg");
	this.shape_356.setTransform(35.8,215.7,0.278,0.278);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#501C0E").s().p("AkUAXQGNitHOgmIggAdQgtAgg7AVIhnAOQiBAUiBAdQmbBbkBCNQBrhPDHhXg");
	this.shape_357.setTransform(29,183.3,0.278,0.278);

	this.instance_78 = new lib.Path_64_1();
	this.instance_78.parent = this;
	this.instance_78.setTransform(41.4,176.2,0.278,0.278,0,0,0,6.5,8.7);
	this.instance_78.alpha = 0.07;

	this.instance_79 = new lib.Path_65_1();
	this.instance_79.parent = this;
	this.instance_79.setTransform(27.6,178.2,0.278,0.278,0,0,0,6,15.7);
	this.instance_79.alpha = 0.07;

	this.instance_80 = new lib.Path_66_1();
	this.instance_80.parent = this;
	this.instance_80.setTransform(19.7,180.2,0.278,0.278,0,0,0,5.2,20.4);
	this.instance_80.alpha = 0.07;

	this.instance_81 = new lib.Path_67_1();
	this.instance_81.parent = this;
	this.instance_81.setTransform(33.8,178.4,0.278,0.278,0,0,0,4.5,6.7);
	this.instance_81.alpha = 0.07;

	this.instance_82 = new lib.Path_68_1();
	this.instance_82.parent = this;
	this.instance_82.setTransform(36.2,175.6,0.278,0.278,0,0,0,12.3,13.4);
	this.instance_82.alpha = 0.07;

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#642812").s().p("AihlUQByghCWAYQEsAwC0EdQidAOjMAvQjDAuiaA4QjiBSjlCEQgGp8GrhBg");
	this.shape_358.setTransform(29,178.6,0.278,0.278);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E6E2E1").s().p("AgNAvQg6gRgfg5QgBgDABgFQACgGADAAIAogOQAEALAJAOQASAbAXAJQAVALArgBIAmgDIAEAiIggAIIgXABQgeAAgfgJg");
	this.shape_359.setTransform(41.9,253.1,0.278,0.278);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#C5E0DF").s().p("AjpiFQgEgDAAgFQgBgFACgEIAWgkQACgEAFgBQAFgBAEADIG0FbIggAjg");
	this.shape_360.setTransform(42.9,259.1,0.278,0.278);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#C5E0DF").s().p("AgiAlQgWgTA+g6IAjAjQgSAVgTANQgPAMgLAAQgHAAgFgEg");
	this.shape_361.setTransform(45.6,256.5,0.278,0.278);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C5E0DF").s().p("AgaAnQgUgSAwg/IAfAjQgOAXgOAOQgMANgKAAQgFAAgEgEg");
	this.shape_362.setTransform(46.7,257.5,0.278,0.278);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#C5E0DF").s().p("AguAQQgQgQAegMQAVgIAkgFIAcAZQguAagaAAQgRAAgKgKg");
	this.shape_363.setTransform(44.3,255.3,0.278,0.278);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#C5E0DF").s().p("AgQAqQgNgHAHgfQAEgUAMgbQATAZANAUQgVAqgPAAQgDAAgDgCg");
	this.shape_364.setTransform(47.9,258.5,0.278,0.278);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#3EA2A2").s().p("AjmhyQAKgXAUgXQAngvAxgEQALAZARANIABABQAHAFAJAFQAVAWAmABQAPAAASgKQDJCiAFB0QACA6gmAZg");
	this.shape_365.setTransform(43.2,257.9,0.278,0.278);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#C5E0DF").s().p("AjIBsIDIk0QADgEAFgBQAFgBAEAEQADANAJAUQAUAmAhAbQAiAbAsASIAlANQAEAEAAAFQAAAFgFAEIkyDqg");
	this.shape_366.setTransform(44.9,249.9,0.278,0.278);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FBA386").s().p("AgHDkQhYhHAYgjQAYgigugpQgXgVgcgOIhVkCQA0gnBMgHQCWgMBzClQBzCkhWCXQgrBLhCAqg");
	this.shape_367.setTransform(47.4,240.9,0.278,0.278);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#F79178").s().p("AhuBzQiDgzhIh1QgIAIgGAEQgeARgmgQQgmgQgXgpQgMgVgFgZIAJAIQAjAfAuAAQArAAAngbQA7ByBmA5QBuA/CFgRQBogMBhgxQBhgvBJhMQglBHg8AyQg/A1hPAYIhPAZQg9ATg8AAQhIAAhJgdg");
	this.shape_368.setTransform(28.5,195.3,0.278,0.278);

	this.instance_83 = new lib.Path_76_1();
	this.instance_83.parent = this;
	this.instance_83.setTransform(16.1,182.7,0.278,0.278,0,0,0,0.4,0.6);
	this.instance_83.alpha = 0.102;

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E6E2E1").s().p("AgHAqQgigKgagaQgRgQgKgVQgCgDACgDQACgDADAAIAkgIQAEAKAHANQAQAZAWAKQAVAKApgEIAjgHIADAVIgaAOQgQAFgSAAQgVAAgWgHg");
	this.shape_369.setTransform(49.1,249.8,0.278,0.278);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#C5E0DF").s().p("AjmiEQgDgDgBgEQgBgFACgEIAWgkQACgEAFgBQAEAAAEACIGwFXIggAig");
	this.shape_370.setTransform(50.2,255.6,0.278,0.278);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#C5E0DF").s().p("AgiAkQgWgSA+g5IAjAiQgpAtgWAAQgHAAgFgEg");
	this.shape_371.setTransform(53,253,0.278,0.278);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#C5E0DF").s().p("AgaAmQgUgSAwg9QARARAOARQgPAXgNANQgMANgKAAQgFAAgEgEg");
	this.shape_372.setTransform(54.1,254.1,0.278,0.278);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#C5E0DF").s().p("AguAQQgPgQAegMQAUgIAkgFIAbAZQgtAagaAAQgRAAgKgKg");
	this.shape_373.setTransform(51.7,251.9,0.278,0.278);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#C5E0DF").s().p("AgQApQgNgHAHgeQAEgUAMgaQAPAUAQAXQgUAqgPAAQgDAAgDgCg");
	this.shape_374.setTransform(55.2,255.1,0.278,0.278);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#3EA2A2").s().p("AjkhxQAKgWAUgXQAnguAxgEQAIAXATAOIABABIAQAKIAAABQAVAVAmABQAOAAATgJQDGCfAEByQACA5glAZg");
	this.shape_375.setTransform(50.6,254.4,0.278,0.278);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#B4CFCD").s().p("Ai3BiIC4kZQACgEAFAAQAFgBADADQADANAIARQASAjAfAaQAeAYAoARIAiALQAEAEAAAFQAAAFgEADIkZDVg");
	this.shape_376.setTransform(52,246.7,0.278,0.278);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#F79178").s().p("AgHDQQhQhBAWgfQAWgfgqgnQgWgTgZgNIhNjrQAwgkBFgFQCKgLBoCXQBpCWhPCJQgoBEg8Ang");
	this.shape_377.setTransform(54.3,238.5,0.278,0.278);

	this.instance_84 = new lib.Path_3();
	this.instance_84.parent = this;
	this.instance_84.setTransform(37.5,185.6,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_84.alpha = 0.102;

	this.instance_85 = new lib.Path_1_1();
	this.instance_85.parent = this;
	this.instance_85.setTransform(24.5,189,0.278,0.278,0,0,0,6.9,8.3);
	this.instance_85.alpha = 0.102;

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#491B0C").s().p("AgWBFQgYgVgLgkQgKgiAJgdQAKgcAYgGQAYgFAXAWQAYAVALAjQAKAjgKAcQgJAdgYAFIgKACQgSAAgTgSg");
	this.shape_378.setTransform(37.5,185.2,0.278,0.278);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#491B0C").s().p("AgXBJQgZgXgLglQgLgkAKgeQAKgeAZgFQAZgFAYAWQAZAWALAlQALAkgKAeQgKAegZAFIgKABQgTAAgUgRg");
	this.shape_379.setTransform(24.4,188.5,0.278,0.278);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FBA386").s().p("AgLBjQgmgQgXgpQgXgpAFgoQAEgpAfgRQAegRAlAQQAmARAXAoQAXApgFAoQgEApgfARQgPAJgSAAQgRAAgRgIg");
	this.shape_380.setTransform(17.8,191.4,0.278,0.278);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AAXAVQg/gKgygcQgFgDACgCQACgBAHABICgAYQAHABAGADQAHACgBACQgEAJgSADQgIACgKAAQgOAAgSgDg");
	this.shape_381.setTransform(31.7,192.7,0.278,0.278);

	this.instance_86 = new lib.Path_79_1();
	this.instance_86.parent = this;
	this.instance_86.setTransform(29.5,179.8,0.278,0.278,0,0,0,45.6,28.4);
	this.instance_86.alpha = 0.109;

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FBA386").s().p("AjOG7QiWhPgyihIgsiOQgyifBPiWQBPiWChgyIBPgZQBcgcBeAQQBcAPBNA2QA2AmAoA2QAoA3AUBBIAsCOQAyCghPCWQhPCWihAyIhPAYQg+AUg8AAQhgAAhbgxg");
	this.shape_382.setTransform(30,185.7,0.278,0.278);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#F79178").s().p("AgxBWQgcgegGguQgFgtAUgkQAVgkAigEQAigEAcAeQAdAeAFAuQAGAtgVAkQgUAkgjAEIgIABQgcAAgagbg");
	this.shape_383.setTransform(42.5,184,0.278,0.278);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#F79178").s().p("AhUiCIB9gLIAtEMIirAPg");
	this.shape_384.setTransform(33.5,199.3,0.278,0.278);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("Ag/CyQhmgQg4hiQgcgxgIgtIB3iLQALAaAaAZQAyAyBFgFQBGgFArgyQANgQAJgSIAGgPIBjBbIgMBOQgYBYg3A2QgMAMgQgEQgQgEgFgQQgRg2gWgXQgdgegvAIQgSAJgFAhQgDAWADAzQABASgNAMQgMAKgOAAIgFAAg");
	this.shape_385.setTransform(62.8,202.4,0.278,0.278);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#E6E6E6").s().p("AiJBuQhxhGgkiEQAMgHAigBQAMAsAEAMQAKAcASAVQAhAnAwAXQAhAQAjhFQAqhRAbgKQAZgIAlAJQAOADAyASQBNAbAUglQATgwACgsQAHgEAEABIAHAEQAPB3hABcQg+BXhgAPQgYAEgXAAQhWAAhRgzg");
	this.shape_386.setTransform(62.5,204.3,0.278,0.278);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#842725").s().p("Ai/DiIh4D8IktluIDSmiICpDRIC3miIFcGQIBsj8ICjC8QANBZAOBxIARB/IhJDOIjWjQIjGFwg");
	this.shape_387.setTransform(66.4,229.5,0.278,0.278);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#842725").s().p("AoxB5QgUgDgRgXQgXggAHgyQC3AUFxghQGqgpDzhYQAOA1gHAUQgJAdg5AWQiKA0mWAxQkVAiieAAQhQAAgygJg");
	this.shape_388.setTransform(68.2,254.5,0.278,0.278);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#842725").s().p("AkVBJQg5hCgihWIgSguQAxgKBsgRQAMAsAEALQAKAcASAWQAhAoAwAWQAuAWAzADQAzAEAwgQQA2gSApgoQAigjAgg5QAHgRAAgZIAAgrQBGgEA2ADQAJBSgQBKQgTBQguAzQg4A/hMAiQhMAihVABIgFAAQirAAh4iKg");
	this.shape_389.setTransform(62.2,205.8,0.278,0.278);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#772824").s().p("ApDKXQg5kbhGnVQBVhPAvhZQAwhbARh3QASiAgNhxQgPiBg1hlQAtgMBAgLIB0gTQALAsAEALQAKAcATAWQAgAoAwAXQAuAWA0ADQA0AEAwgQQA0gSApgpQAjgjAfg5QAHgRABgZIAAgrQBtgGBFAKIAAABQAYCHA3CDQA8CQBRBiQA2EAAmE5IAjD+QAYCwAJBqQAcFDhPANQjjAklIAgQi4ASlxAhIgBAAQgsAAhLl3g");
	this.shape_390.setTransform(65.4,228.8,0.278,0.278);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E6E6E6").s().p("Ao4HwQggjUgfjlIgZi5QgjifCShHQA5gcBfgUQApgICIgWQAMAsAEALQAKAcASAWQAhAoAwAXQAuAWAyADQA0AEAwgQQA2gSApgpQAigjAgg5QAHgRAAgZIAAgrQCrgKBIAeQAWAKAKAMIAFAKIAhBqQApCNAlCvIkYD6Qh1BqitCfg");
	this.shape_391.setTransform(61.8,213.7,0.278,0.278);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#F79178").s().p("AhxD/QgwgvgBgzIASlMQAAgzAjglQAkglAzgBIAfAAQAzAAAlAjQAlAkAAAzIAcFkQABAxgwAmQgsAkg2ABIgeABIgCAAQgyAAgwgvg");
	this.shape_392.setTransform(63.2,198.5,0.278,0.278);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#C5E0DF").s().p("AgQBzQgGgWgThSQgPhCgNgnQALgRAkgEQAigDAPAOIAWBmQAOA9AFAoIABAFIg9ALQAAgBgMABIgJABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_393.setTransform(48.2,202.1,0.278,0.278);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#3EA2A2").s().p("AjShNQCOgYDsgYIAWBmQAOA9AGAoIABAFIjwArg");
	this.shape_394.setTransform(44.3,202.7,0.278,0.278);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#F79178").s().p("ApUhCQA3gKBigNQDGgaDbgRQDbgRDgAzQBGAQA+AUIAwASIv0C1g");
	this.shape_395.setTransform(55,202.4,0.278,0.278);

	this.instance_87 = new lib.Path_94_1();
	this.instance_87.parent = this;
	this.instance_87.setTransform(27,198.7,0.278,0.278,0,0,0,67.9,97.8);
	this.instance_87.alpha = 0.18;

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#642812").s().p("ApNPMQi7g0hThDQCJiOA0k5QARhsAQizQAWj+AFgpQAmlfBhizQCEj0Ecg5QAegLAxgCQBkgGBjAoQE9B9C7IMQDYJeh9FfQh1FGmIA7QjhAhjEAAQkFAAjUg6g");
	this.shape_396.setTransform(27,197.1,0.278,0.278);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E6E6E6").s().p("AAqDnQiwgOguhxQgphnAZh+QAIgnANgmIAMgdQAuBSBGBiQCKDCBzBMQAFADg0AGQgkAEgkAAQgWAAgXgBg");
	this.shape_397.setTransform(33.3,239.4,0.278,0.278);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#1B2728").s().p("AjUFfQAJkdgBjTQAAibgCgHIGPgrQAIBBAGCOQAIDSgDEcg");
	this.shape_398.setTransform(58.7,271.7,0.278,0.278);

	this.instance_88 = new lib.Path_97_1();
	this.instance_88.parent = this;
	this.instance_88.setTransform(68.5,256,0.278,0.278,0,0,0,57.8,13.9);
	this.instance_88.alpha = 0.172;

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#1B2728").s().p("AjgG5QAbk+AOjzQALi2gCgGIGLiEQAFBFgDDCQgEEQgXFag");
	this.shape_399.setTransform(78.2,269.2,0.278,0.278);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#1B2728").s().p("AgUDQQkPgDkJgTIgSmJIRyAHIALCEQAFCPgZA8QgfBJnRAAIhPAAg");
	this.shape_400.setTransform(68.4,258,0.278,0.278);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQhZBMhGAlQAIgqAfgygAjNARQAwgoAwguIAmgnQhhAnglBWg");
	this.shape_401.setTransform(127.6,185.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_400},{t:this.shape_399},{t:this.instance_88},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.instance_87},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.instance_86},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.instance_85},{t:this.instance_84},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.instance_83},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_77},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.instance_76},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.instance_75},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.instance_74},{t:this.shape_327},{t:this.instance_73},{t:this.shape_326},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.instance_69},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.instance_65},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.instance_64},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.instance_63},{t:this.shape_274},{t:this.instance_62},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59}]},30).to({state:[]},4).to({state:[{t:this.shape_400},{t:this.shape_399},{t:this.instance_88},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.instance_87},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.instance_86},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.instance_85},{t:this.instance_84},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.instance_83},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_77},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.instance_76},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.instance_75},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.instance_74},{t:this.shape_327},{t:this.instance_73},{t:this.shape_326},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.instance_69},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_401},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.instance_65},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.instance_64},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.instance_63},{t:this.shape_274},{t:this.instance_62},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59}]},115).to({state:[]},5).to({state:[{t:this.shape_400},{t:this.shape_399},{t:this.instance_88},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.instance_87},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.instance_86},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.instance_85},{t:this.instance_84},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.instance_83},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_77},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.instance_76},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.instance_75},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.instance_74},{t:this.shape_327},{t:this.instance_73},{t:this.shape_326},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.instance_69},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.instance_65},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.instance_64},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.instance_63},{t:this.shape_274},{t:this.instance_62},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59}]},84).to({state:[]},5).wait(137));

	// sad blink1
	this.instance_89 = new lib.Path_0_1();
	this.instance_89.parent = this;
	this.instance_89.setTransform(60.6,159.1,0.278,0.278,0,0,0,50.1,15.7);
	this.instance_89.alpha = 0.121;

	this.instance_90 = new lib.Path_1_0_1();
	this.instance_90.parent = this;
	this.instance_90.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.6,0.6);
	this.instance_90.alpha = 0.121;

	this.instance_91 = new lib.Path_2_1();
	this.instance_91.parent = this;
	this.instance_91.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.2,0.6);
	this.instance_91.alpha = 0.121;

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#472A21").s().p("AANANQhZiLhFABQAWgOAegdQA9g4AshHQBxAZAREeQAJCPgOCKQgmiWhWiGg");
	this.shape_402.setTransform(73.4,168.7,0.278,0.278);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#563428").s().p("AhpBaIAIgxQgMgOgCgRIAAgNQAWACANAHIAJAIQgRgZgBgpIADgkQAsAVAPAiIAHAeQARgrA6gfIA1gVQAAAigdAsQgWAhgJAGIgwBRg");
	this.shape_403.setTransform(53.3,158.6,0.278,0.278);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#563428").s().p("Aj+BpQA+iWDqhRQBKgaBSgPIBEgKQAAAZgQAfQgJAQgIALIhaBBQhrBKhSAyQiKBTgzAAQgwAAAdhJg");
	this.shape_404.setTransform(60.1,157.7,0.278,0.278);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#563428").s().p("AAjgvIgrgjQgygqgegkQhgh1CNgTQCNgSAYEwQAMCYgQCcg");
	this.shape_405.setTransform(73.9,168.6,0.278,0.278);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#563428").s().p("AnaDGQhEjmA1hoQAnhNBnAOQAgAFAjANIAcAMQBmitFNgxQBogPBzgBIBfACQAvC6hYBzQgsA5g1AVIkIgVQkQgOgtAkQguAjhEDLQgiBlgZBeQgthegih0g");
	this.shape_406.setTransform(60,165.3,0.278,0.278);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#563428").s().p("AnyFhQgJgsgEhDQgIiFAZhtQBOliFzABQF6AACAFJQAoBmAKB7QAFA9gDApQgmiWhWiFQhaiLhFABIg2AlQhHAmhNAGQhEAGhrggQg1gQgogSQhJADhBCUQguBsgeCQQgHAmgTAIQgFACgFAAQgEAAgEgBg");
	this.shape_407.setTransform(63,168.5,0.278,0.278);

	this.instance_92 = new lib.Path_9_0_1();
	this.instance_92.parent = this;
	this.instance_92.setTransform(57.4,180.3,0.278,0.278,0,0,0,6.9,7.5);
	this.instance_92.alpha = 0.078;

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#35221A").s().p("AgPBhQgZgCgMgeQgOgeAGgoQAHgoAWgbQAWgaAZACQAYACAOAeQANAegGAnQgIApgWAaQgUAZgVAAIgFAAg");
	this.shape_408.setTransform(57.2,179.6,0.278,0.278);

	this.instance_93 = new lib.Path_11_1();
	this.instance_93.parent = this;
	this.instance_93.setTransform(71.6,179.2,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_93.alpha = 0.078;

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#35221A").s().p("AgSBhQgZgDgMgfQgMgeAIgnQAIgoAXgaQAXgbAYAEQAZADAMAeQAMAfgIAnQgIAngXAbQgUAXgVAAIgGAAg");
	this.shape_409.setTransform(71.5,178.4,0.278,0.278);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AjDAPQgJgCAFgDQAagKAzgHQA0gIBAgBQA/AAA4AGQA3AHAfAKQAGACgHADQgIACgQAAIlZADIgGAAQgLAAgHgCg");
	this.shape_410.setTransform(64.9,185.7,0.278,0.278);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#F79178").s().p("AkoCsQiChygMiqQgjAHgjgaQgjgagQguQgOglAFgkQARAgAkAWQAjAWAjACQAUABAWgDQApDHB/BuQCHB2DNgHQDWgGBxhnQBFhABFidQgPCXhuBrQhwBtiaAJIivAKIgbABQiaAAh3hpg");
	this.shape_411.setTransform(61.7,188,0.278,0.278);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#F9A184").s().p("AggBrQgmgZgSgyQgSgxAOgsQANgtAlgNQAlgNAmAaQAnAaARAxQASAxgOAsQgNAtglANQgNAEgNAAQgXAAgagRg");
	this.shape_412.setTransform(48.6,181.5,0.278,0.278);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#F9A184").s().p("AljH9QiChzgKitIgTk6QgKizByidQB3ikCogKICtgLQCogKCICVQCECPAKCzIATE6QAKCthzCCQh0CCisAKIiuAKIgcABQibAAh4hqg");
	this.shape_413.setTransform(63.3,178.6,0.278,0.278);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#F79178").s().p("AgMB/QgngEgYgoQgYgoAFg0QAGg0AfgjQAfgiAnAEQAnAEAYAoQAYAogGAzQgFA1gfAjQgcAfghAAIgJgBg");
	this.shape_414.setTransform(77.1,180.4,0.278,0.278);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FF4F4B").s().p("AhWDOQg4h1gwh6Qgwh7BuhTQAigaAugTIAngOIDXHXIj2B+QgSgjgcg6g");
	this.shape_415.setTransform(92,216.7,0.278,0.278);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FD9D83").s().p("AmHDKQiUh+ikkkQBzhKA5gmQCpEtCHBlQBsBRCEgXQCJgYEMh8QD2h6AVgEIATClQgfAOjhB/Qj0B/ieAbQg7AKg3AAQiwABiTh/g");
	this.shape_416.setTransform(108.1,225.2,0.278,0.278);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FD9D83").s().p("AhxB0QgWgVgcgiQgjgqgFgTQgCgHAJgEIAKgEQgEgHgCgIQgEgRAKgFQALgFANACIAKADIgVgZQgLgNAOgJQAMgIASAAQAMABAUALIASAKQgHgLABgMQABgJASgBQASAAAZAKQAZALA3AhQA6AiAOAHQAWAJAigBIAegEIgXAuIiLA0QhwAoggAAQgIAAgDgDg");
	this.shape_417.setTransform(124.7,235.2,0.278,0.278);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FD9D83").s().p("AhcBRQAlg0AlgbQBDgvgQhDQgGgYAbANQAcANAHAhQAFATgSAyQgOAkAXAGQAVAFARAHQgJALgTAgIjZAoQAMgVASgbg");
	this.shape_418.setTransform(130.4,217.9,0.278,0.278);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FD9D83").s().p("AgBACQADgFAAADIgBACIgBAAIgBAAg");
	this.shape_419.setTransform(133.9,219.2,0.278,0.278);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FD9D83").s().p("AA7C8QgsgBgvgLQg1gLgkgRQgNgHgTgPQgXgRgHgKIALirQAHgHAJgMIAPgTQAhgnAqgcQAWgOARAFQAIADAMAIIARALQAUAJAMAEQARAFAPgBQBRgEAAAoQABAUgQAVQAYAJAMARQAZAhg7AnQAHgCAIAJQAKAKACAOQAFAlg1AUQgCABAHANQAJAQACAJQAFAhhIAAIgLAAg");
	this.shape_420.setTransform(131.9,223.2,0.278,0.278);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FD9D83").s().p("AiMCzQgcgKgcgXQgMgKgOgOQgWgTACgDIAEgEQAKgGB2gvQB3gwAZgJQAbgJAKgGQAVgKADgJQACgHgggTQgmgYgMgVQgNgWAGgeQAHgeAPAFQATAHAUAeQASAaAUACQBIAGAiAcQAZAVAFAkQALBYhpBSQhVBEhhAAQg0AAg3gTg");
	this.shape_421.setTransform(128.2,235.5,0.278,0.278);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#7C3B2D").s().p("AEtBqQgqhFgPhQQgyAfhYA8QhSAwhqAPQA1hNBMg6QgoARhNAnQhEAfgxADIARh4IhyBeQg9A0gzARIAIgbQAFgSAGgKQgfATggAKQATg3Avg9QBeh8CQggQgYgMgKgJQCAgPBmAMIAkAFQB1AUBTBFQgGgRACgQQAJADAKAIQAVAQAFAaQgCgLAHgMQAKgTAfgRIACAZQAAAdgMAQQAGgDAJgDQATgEATAGIgMAQQgRARgYABQAIACAJAHQARAMAGAVIgdgEQAfAuANAzQAIAeACAbQAEAogDARIgKgCQgMgEgNgOQACAZgBAYQg+gtgqhFg");
	this.shape_422.setTransform(128.6,184.9,0.278,0.278);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFD7A0").s().p("AiSAJQgTgaABgaQARgOAVAEIARAIQAEANAPAOQAfAaA6AAQA5AAAcgbIARgdQASgQAZAEIAVAHIgEASQgHAWgOARQgtA6hgAAQhpAAgog1g");
	this.shape_423.setTransform(125.9,211.9,0.278,0.278);

	this.instance_94 = new lib.Group_1();
	this.instance_94.parent = this;
	this.instance_94.setTransform(119.2,233.4,0.278,0.278,0,0,0,15.7,11.4);
	this.instance_94.alpha = 0.09;

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#613D29").s().p("AlrEHQgKg1ADhNQADheAXhPQBAjZCxgRQClgPCiAkQAxALAxAQIArAOIAHABQgrCzh7AGQh1AHjTAOIABAcQABAjgEAkQgMBxg5BIg");
	this.shape_424.setTransform(123.9,238.2,0.278,0.278);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#F7EBDB").s().p("AgeAyQgfgRgbgfQAYgWAmgQQAqgTA5gGQAQAdAAAbQAAAngoAUQgQAIgSAAQgVAAgYgMg");
	this.shape_425.setTransform(111.3,248.1,0.278,0.278);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#F7EBDB").s().p("AgPAaQgqgQgPgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIASgBQAFAJAIAJQAQARASADQARAEATgHIAQgIIAVAUQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgZAMgZAAQgTAAgRgIg");
	this.shape_426.setTransform(116,247.3,0.278,0.278);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#F7EBDB").s().p("Ai7AUIgDgjIF9gIIgFAvg");
	this.shape_427.setTransform(113.2,251.5,0.278,0.278);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#613D29").s().p("AinAEQAthYCtgGQAHALAFAEQAWAVAhAAIABAAQARAAARgKQAbAYADBDQABAigFAcIlkACQgNgrAXgsg");
	this.shape_428.setTransform(113.2,249.1,0.278,0.278);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#C3B8A1").s().p("Ag2g9IBmgJIAGB8IhZARg");
	this.shape_429.setTransform(115.9,246.5,0.278,0.278);

	this.instance_95 = new lib.Group_3_1();
	this.instance_95.parent = this;
	this.instance_95.setTransform(105.4,233.1,0.278,0.278,0,0,0,17.7,10.3);
	this.instance_95.alpha = 0.078;

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#523222").s().p("AmcB6QAkhpBHhWQB2iSCjgQQCagPCQAhQArALAsAPIAlAMIAPC2QhhgIiOAOIjnAZQg3BCguArQgnAmhCA0g");
	this.shape_430.setTransform(108.8,237,0.278,0.278);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#73312A").s().p("AgXgbIABhaQAOADAMANQAZAZgGAyQgFAxgQA1QgGAagHAQQgMgwAAhhg");
	this.shape_431.setTransform(138.9,194,0.278,0.278);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#73312A").s().p("Ag8g6IgLhRIBAAJQATAPAUAbQApA2gBA8QgBA9gXAgQgMAQgLAFQg+higXhkg");
	this.shape_432.setTransform(136.9,189.5,0.278,0.278);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQhZBMhGAlQAIgqAfgygAjNARQAwgoAwguIAmgnQhhAnglBWg");
	this.shape_433.setTransform(127.6,185.6,0.278,0.278);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#73312A").s().p("AgogJQBHg0BggPIhBA6QhUA/hoAgQAigyA0gkg");
	this.shape_434.setTransform(128.5,185.6,0.278,0.278);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#73312A").s().p("ABDg+IgmAnQgvAtgwApQAlhWBggng");
	this.shape_435.setTransform(123.8,184.3,0.278,0.278);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#F79178").s().p("AjFCdIhJgTQg9gPg0giQA1ATA6ALQBtAUBkgaQBqgbBLhIQA9g7AohKQAaAMAWADQAeAEAbgLQAcgLASgXQAIgKAGgMQABAfgOAhQgUArgkAUQglAUgggOQgLgGgGgGQg4B3h4A6QhNAlhSAAQgtAAgugLg");
	this.shape_436.setTransform(130.6,204,0.278,0.278);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FBA386").s().p("AguBnQgggOgJgoQgJgqAUgpQAUgrAkgUQAjgUAgAOQAgAPAJAoQAJAqgUApQgUArgkAUQgVAMgTAAQgOAAgNgHg");
	this.shape_437.setTransform(138.8,200.2,0.278,0.278);

	this.instance_96 = new lib.Path_9_1();
	this.instance_96.parent = this;
	this.instance_96.setTransform(139.7,192.9,0.278,0.278,0,0,0,0.6,0.2);
	this.instance_96.alpha = 0.102;

	this.instance_97 = new lib.Group_5_1();
	this.instance_97.parent = this;
	this.instance_97.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.6);
	this.instance_97.alpha = 0.078;

	this.instance_98 = new lib.Group_6_1();
	this.instance_98.parent = this;
	this.instance_98.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.8);
	this.instance_98.alpha = 0.078;

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#491B0C").s().p("AAbA/IhGgNQgGgBgEgEQgDgFAAgFQAAgLADgPQAIggAVgVQAWgVAVADQAWAEALAaQAKAagIAhQgDANgIAPQgEAIgJAAIgDAAg");
	this.shape_438.setTransform(120.2,193.6,0.278,0.278);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#491B0C").s().p("AAVBCIhBgQQgMgDAAgMQgBgOAEgQQAIggAVgVQAVgVAWAEQAWADAKAaQALAagIAhQgEASgLASQgFAIgHAAIgGgBg");
	this.shape_439.setTransform(132.7,196.2,0.278,0.278);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#A14740").s().p("Ah2gFIgDgEQBggTCTAsg");
	this.shape_440.setTransform(124.5,203.1,0.278,0.278);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#73312A").s().p("ACDAnIgYgCQiTgshgASIAEAEIgLgBQgMgBgEgGQgDgFAIgDQAmgVAzgJQA0gKAyAEQAyAFAiASQAhARAHAZQABAFgJAEQgIACgJAAIgFAAg");
	this.shape_441.setTransform(125,202.6,0.278,0.278);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#F7EBDB").s().p("AgBA9QglgGgWgrQgPgfgDgoQAegGAmAJQArAKAuAbQgDAggPAVQgTAcgfAAIgMgBg");
	this.shape_442.setTransform(94.6,242.1,0.278,0.278);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F7EBDB").s().p("AApA/QgsgIgZgnQgYglAKglQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAPAKIAAAVQADAYAMANQALAOATAEIAQACIAFAeQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAIgDACIgBAAg");
	this.shape_443.setTransform(98.3,243.7,0.278,0.278);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#F7EBDB").s().p("AidhdIARgfIEpDUIgeAlg");
	this.shape_444.setTransform(94,245.7,0.278,0.278);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#613D29").s().p("Aipg8QAOgrApgXQBSgvCIBfQAAAOACAGQAFAdAaATIAAABQAOAJASABQAIAkgjA5QgSAcgTAVg");
	this.shape_445.setTransform(94.7,244.6,0.278,0.278);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#C3B8A1").s().p("AhGApIA6h3IBTA0Ig/Bpg");
	this.shape_446.setTransform(98.7,243,0.278,0.278);

	this.instance_99 = new lib.Path_10();
	this.instance_99.parent = this;
	this.instance_99.setTransform(128.1,190.9,0.278,0.278,0,0,0,39.5,25.4);
	this.instance_99.alpha = 0.09;

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FBA386").s().p("AhGGzIhJgSQiVgmhPiEQhPiFAliUIAiiDQAeh6BkhOQBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCEglCUIghCDQgmCViEBPQhaA2hiAAQgtAAgwgMg");
	this.shape_447.setTransform(127.1,196.3,0.278,0.278);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#523222").s().p("AA0BKQlagaiOhTIBDgxIMWAAQAHAAAFAFQAEAFgBAHQgGAsgPA4QgOAygDAAQgpACguAAQhzAAiQgLg");
	this.shape_448.setTransform(122.7,231.4,0.278,0.278);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFC054").s().p("AgDGUQkVgGiBhNIB6l9QAkjHBdhWQAdgbAfgMIAagHIAMgBQAKASAOAOQAkAkA0AGQA1AGAsgZQAogXAYgsQAuAEApAPQAzASAaAeQASAUAPAeQgDAHgTEDQgUEYgQBYIgJAVQgIAOADAHQigAQiGAAIgvgBg");
	this.shape_449.setTransform(123.9,221.5,0.278,0.278);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#F9A184").s().p("Ak5BCQAphIA4ggQARgKARgFIAOgDIC8gJIAjAFQBjAEAOACQBNAMAkApQASATAPAdQgCADgCAQg");
	this.shape_450.setTransform(126.6,212.2,0.278,0.278);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#F79178").s().p("AgCBVQgqgDgvgPIAJhcQAAgZASgSQARgRAZAAIAOAAQAeAAAgAOQAmARAAAXIAABvQghAGgjAAIgagBg");
	this.shape_451.setTransform(125.8,207.6,0.278,0.278);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#F9A184").s().p("AgTCGQgbAAgYgSQgYgTAAgYIAOiRQABgZARgSQASgSAZAAIAOAAQAdAAAhAPQAmAQAAAXIAACSQAAAYgnAWQgjAVgbAAg");
	this.shape_452.setTransform(125.7,208.9,0.278,0.278);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#73312A").s().p("AmmB/QAEh/BHh0QCOjmFNA+QEaA0AMEOQAHCIgyB9g");
	this.shape_453.setTransform(128.1,189,0.278,0.278);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#F9A184").s().p("AhJCrQghgEgUgSQgagXgGgKQgUgcgBgoQAAgkALgrQAJgkAOgdQADgGALghQAIgcAEgDQAPgKALANQAKALAAARQAAAMgGAJIgKAOQgHAMAFAOQAfgLAWgRQAZgUA3ghQAVgMAOAPQAPAPgZAQQgjAWgpAhIAPAUQApgcA0geQAfgSAQAaQAQAZgpAPQgfALg7AgIAUAWQAegUA8gUQAkgLAFAZQAEAYgiAGQgYADg7AXIAPAeQA9geAagBQAPAAADAUQAEAUgXAHIg3APQgbAIgSAMQguAegnAOQgWAHgQAAIgKAAg");
	this.shape_454.setTransform(153.2,200,0.278,0.278);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFD7A0").s().p("AgRAoIgWhJQgOgsgNgfIBBgRQAsBuAYB5QgWAGgqAOQgIgsgMgqg");
	this.shape_455.setTransform(136.6,212.6,0.278,0.278);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFC054").s().p("AhmCQIgzj0QA1ACBJgRIBwgcQAtBuAYB5QgpALhOAbQhAASg+AAIgLAAg");
	this.shape_456.setTransform(134.2,213.1,0.278,0.278);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#F9A184").s().p("Al2ELIgYi8QElAIDXifQBFgzA1g/QAignAJgTIBUgXIggBKIBIAjQhCCGh3BkQjgDAlLAAIghgBg");
	this.shape_457.setTransform(141,208.1,0.278,0.278);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#ED8C73").s().p("AkLCzQhXgMhSgvQCJA0COgcQB8gXB0heQBrhWBJh6QAVAYAYAKQAgANAigDQAjgEAcgVQgcAxgrAWQgsAVgjgTQgHgDgFgFQhgCLiPBMQh5BAh5AAQgfAAgegDg");
	this.shape_458.setTransform(106.3,199.5,0.278,0.278);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#F9A184").s().p("AhAB6QgkgTgGgxQgGgxAbgyQAbgzAsgWQAsgWAjATQAkATAGAxQAGAxgbAyQgbAygsAXQgXAMgVAAQgTAAgQgJg");
	this.shape_459.setTransform(116.1,193.7,0.278,0.278);

	this.instance_100 = new lib.Path_26_1();
	this.instance_100.parent = this;
	this.instance_100.setTransform(114.3,183.5,0.278,0.278,0,0,0,20.7,10.1);
	this.instance_100.alpha = 0.121;

	this.instance_101 = new lib.Path_27_1();
	this.instance_101.parent = this;
	this.instance_101.setTransform(94,176.1,0.278,0.278,0,0,0,25.9,20.2);
	this.instance_101.alpha = 0.121;

	this.instance_102 = new lib.Path_28_1();
	this.instance_102.parent = this;
	this.instance_102.setTransform(100,181.1,0.278,0.278,0,0,0,18.4,9);
	this.instance_102.alpha = 0.121;

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#4F3026").s().p("ApMIuQhEhzgWiXQhFnQEukgQBuhoCXhIQBwg1BtgaQBEgQB3AuIBpAxQCpgUBiC1QB7DjgjHpQgHBfgUBOIgJhtQgIhDgSgpQgkhWhChKQgUgXhjhcQhHhDgig3QgvhNgNhlQguB9hsBBQg/AmiUArQiSAqhAApQhoBCgqCCQgzCQABCEQABCbBKB1QhYhfgohDgAhYj3QhNAhgXAMQg1AcggAjQAigZBBgYQBMgZAkgOQCCgzAQhfQgsBGiAA4g");
	this.shape_460.setTransform(100.6,186.8,0.278,0.278);

	this.instance_103 = new lib.Path_29_1();
	this.instance_103.parent = this;
	this.instance_103.setTransform(107.5,191.2,0.278,0.278,0,0,0,6.7,8.7);
	this.instance_103.alpha = 0.141;

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#3E1208").s().p("AgkBdQgbgLgJgjQgIgiAPgmQAPgnAegUQAdgTAbALQAcALAJAjQAIAjgOAlQgQAngeAUQgTAMgRAAQgLAAgKgEg");
	this.shape_461.setTransform(107.8,190.7,0.278,0.278);

	this.instance_104 = new lib.Path_31_1();
	this.instance_104.parent = this;
	this.instance_104.setTransform(93,189.3,0.278,0.278,0,0,0,6.5,8.4);
	this.instance_104.alpha = 0.141;

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#3E1208").s().p("AgjBdQgbgLgJgjQgJgjAPglQAPgmAegUQAdgUAbALQAcAMAIAiQAJAigPAmQgPAngeATQgTAMgRAAQgKAAgKgDg");
	this.shape_462.setTransform(93.3,188.8,0.278,0.278);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AiNApQgDgBAHgEQAHgEALgDIDzhFQALgDAFAAQAGAAgGAEQg2AlhgAaQgtANgkAFQgPACgMAAQgOAAgJgDg");
	this.shape_463.setTransform(99.4,197,0.278,0.278);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#DB8575").s().p("AAAAAQADgJgDAJIAAAFIAAgFg");
	this.shape_464.setTransform(113.6,190.5,0.278,0.278);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#DB8575").s().p("AoMB2QAdiYBPh2IACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB4QALB3gaBuQhhhChXhbQiLiQgeiDQgvBJhGAwQg0AlhZAkIihA/QhiAqhKAzQhKBFgWBoQggiQAciag");
	this.shape_465.setTransform(102.1,181.9,0.278,0.278);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F9A184").s().p("AhzJlQhrgOhdhBQjHiJgVkaQgJh7Afh8QAgh8BBhhIACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB5QALB2gaBuQgxDZi7CUQiiCAiuAAQgfAAgggEg");
	this.shape_466.setTransform(102.1,187.5,0.278,0.278);

	this.instance_105 = new lib.Path_37_1();
	this.instance_105.parent = this;
	this.instance_105.setTransform(106.1,235.3,0.278,0.278,0,0,0,66.5,79.3);
	this.instance_105.alpha = 0.09;

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FF4F4B").s().p("AAKN2Qk6gKlkixQBDi2Btj5QBEicAJhCQAMhSg7mpIg8mZQAwgKAkgCIBEgEQAJAuA1AoQBEA0BqgBQBGgBAJgtQAFgcgVg+QAFgBAQAAIAVABQBeBiBeBtQC9DbgHA4QgNBlgVA/ICQFgQCaGRAwDpQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_467.setTransform(106.1,232.6,0.278,0.278);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF4040").s().p("AjejeIBdAAQAXgBAbAMQAYALARARIBVBVQAoAoCIB+QgXAIhrBFQhqBHgXAIg");
	this.shape_468.setTransform(111.6,214.2,0.278,0.278);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#F9A184").s().p("AixhaQCngIC8ALQgGAwAGBhQhpAQgxAGIh+AOIhLi4g");
	this.shape_469.setTransform(100.8,210.6,0.278,0.278);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#ED8C73").s().p("AhiB9IgFiLQgBgvAdgjQAdgiAqgCQApgBAfAhQAfAhABAvIAEBqQgbAbhMAOQghAGgYAAQgcAAgOgIg");
	this.shape_470.setTransform(100.2,202.5,0.278,0.278);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#F9A184").s().p("AhhC9IgIkIQgBgvAdgiQAdgjAqgBQApgBAfAgQAfAhABAvIAIECIjKAQg");
	this.shape_471.setTransform(100.2,204.1,0.278,0.278);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#462B24").s().p("AkcL6QkkhrhJnHQhHm5FAklQDAivD/hMQBCgUBGAtQAVAOAUATIAPAQQA1gSBKAnQBSAtBDBhQCvEBgfHJQgeGwlACGQhlAqh1AHQg7ADglgFIhUAMIgbABQhYAAhQgeg");
	this.shape_472.setTransform(101.2,189.5,0.278,0.278);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#ED8C73").s().p("ACEGOQhSgxjqloQh2i0hlirICGg5QCJBpCVB9QErD5A+BnQAkA7gOA7QgMA1guAnQgtAlg5AIQgOACgNAAQgtAAgkgWg");
	this.shape_473.setTransform(123.7,227.7,0.278,0.278);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFD7A0").s().p("AggBWQAGhYAChYIAcADIAcADQgIBMgDBjg");
	this.shape_474.setTransform(114.2,213,0.278,0.278);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFC054").s().p("AiuBUQAGhYAChYIAdADQA7AIBugDIBkgFQAHAGAIAKQARAUAHAUQAWA/hYAnQg1AYheAAQg6AAhKgJg");
	this.shape_475.setTransform(118.1,213.1,0.278,0.278);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FBA386").s().p("AhWBdQhjgNhSgVIAAihIDgAdQA6AHBugGIBigHQAHAGAJAKQARAUAHAUQAYA/hYAnQg2AYheAAQg8AAhNgKg");
	this.shape_476.setTransform(115.6,212.8,0.278,0.278);

	this.instance_106 = new lib.Path_48_1();
	this.instance_106.parent = this;
	this.instance_106.setTransform(105.7,256.2,0.278,0.278,0,0,0,68.3,17.4);
	this.instance_106.alpha = 0.09;

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#8D242E").s().p("AuDIcQAajpA3joQBTlWCHkQITCAZIAYA4QAfBOAiBpQBpFOBXHhg");
	this.shape_477.setTransform(105.5,266.5,0.278,0.278);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#C5E0DF").s().p("AhrgFQAFgvAQghIAzATICOBDQgUAvgYAmIiqhbg");
	this.shape_478.setTransform(21.2,212.8,0.278,0.278);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#3EA2A2").s().p("AiECIQAojXBEhgQAVgfAUgOIARgIIBhCoQAKAbgYBRQgbBeg0BXIiqhdg");
	this.shape_479.setTransform(21.9,208.9,0.278,0.278);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FBA386").s().p("AAkCgQgRgfAqhDQAOgXgEgFQgGgHgqANIh6AoQhUAWAAggQAAgNCwhEIhuAQQhvAJgHgnQgEgPC3gRQhMAFgzgTQgugRAFgTQACgIBjABIBjACIhRgMQhQgPABgSQABgOBPAGQBoAIAvgJQBrgSA0AiQAQAKAJAPIAGAMIgBAqQgCAugJAVQgPAgg7AqQg7ApgKAaQgLAbgMAHQgEACgDAAQgJAAgHgNg");
	this.shape_480.setTransform(9.7,230.1,0.278,0.278);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FBA386").s().p("AjeEWQCFhqBckaQAdhZAWhgIAQhQICZAZQgHAsgMAyQgXBoggBgQhoEuihCCg");
	this.shape_481.setTransform(17.4,219.8,0.278,0.278);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#EDEDED").s().p("Aj3IwQj7gfjrgsQgkgGgWgdQgXgdACglIAMjpQACggAagTQAagTAgAIQESBMDvAeQD9AhCYgaQBngTAPgcQBljRBHjkQBAjNADhcIA6AMQBZAfA4BUQA5BVgJBcQggFHh/EGQhBCGiWBDQiWBBjwABQiCAAilgVg");
	this.shape_482.setTransform(58.8,216.3,0.278,0.278);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#EDEDED").s().p("AhFB4QgLgOAAgUIADi9QAAgOAIgJQAIgIAKACICEAcIgTDnIhpAHIgCAAQgOAAgKgOg");
	this.shape_483.setTransform(35.9,223.4,0.278,0.278);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FD9D83").s().p("AiXDVQhYgVAEgpQABgLAJgRQAIgNgDgCQgwgsARghQAagagEgEQg6gwAXgjQAGgLAPgIIAMgGQgNgfgEgeQgHg7AyAKQAVAFAoAMQApANASAIQAhAQAmgHQAHgBAPgGQAPgFAIgBQAMAAAKAGQAHAEAKALQAkAoATAoQAKAUA1ALIBTARIgZDEIiDgEQgLAPgPAOQgSARgNADQgcAHhAAEIgvABQgsAAgagGg");
	this.shape_484.setTransform(29,222,0.278,0.278);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FBA386").s().p("AhgDAQhVgSg0g6QgsgwgsiJQgIgYAQgUQAQgTAaAAIABAAIAlgFQAegEArgBQAagBAZgIIArgPQANgEAEAaQAEAagRATQgRATgtAQQglAOAAAIQACANAjAXIAiATQAPgLAVgcQAqg6AihWQALgcAmgBQAlAAgKAnQgQA+glBEQgTAhgQAWQASgTAWgbQAsg4AVgtQAbg6AjAMQAOAFAGAOQAHAOgGANQgNAgg9BSQgeAogcAiQAUgQAcgbQA5g2Aqg3QAWgeAYAVQAYAVgXAiQgkA0hYBXQAQgFAWgNQArgZAbglQAagiAgAKQAgAIgOAcQgTAkhOA6QhZBCg/AFQgqAEgjAAQg0AAgmgIg");
	this.shape_485.setTransform(37.5,240.5,0.278,0.278);

	this.instance_107 = new lib.Path_57_1();
	this.instance_107.parent = this;
	this.instance_107.setTransform(53,222.8,0.278,0.278,0,0,0,105,58.4);
	this.instance_107.alpha = 0.102;

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#C5E0DF").s().p("AiHAhQgsgfgZgsQgBgCABgDQABgDADgBIA8gPQARgEAMAMQBDBBBHgFQAsgCAhgcQAWgSAMgXQADgGAIgBIA4AAIAAAVQgCAagLAWQgkBHhzALQgRACgQAAQhQAAg/gsg");
	this.shape_486.setTransform(33.2,202.3,0.278,0.278);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#C5E0DF").s().p("AkcB3QhPgMgsgSIATiCQAsAMBJAJQCTAQCQgTQCRgUBpguQAhgPAYgPIASgNIA/B3IgQAPQgVATgiATQhqA7iyAXQhUALhQAAQhZAAhUgOg");
	this.shape_487.setTransform(35.9,214.7,0.278,0.278);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#3EA2A2").s().p("AkSIMQg7gEgigJQlzlMgilbQgLhtAYhhIAbhLQFfAXD5gvQBNgPA5gVIArgRQFIBQDqD0QBKBMA3BUIAoBDQl9GOmiBUQhjAUhcAAQgeAAgegDg");
	this.shape_488.setTransform(45.4,228.7,0.278,0.278);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#3EA2A2").s().p("AlSCQQhPm/gziuQAdgMAugPQBcgfBYgPQAbAlAuAUQAvAWAtgGQAqgGAggVQAhgUAVggIAmACIADgBQBMAIAyAaIAdBVQAkBuAhB2QBlF5AXFFIrjBAQgdi+gnjgg");
	this.shape_489.setTransform(35.7,215.9,0.278,0.278);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#F79178").s().p("AlTCQQhJm6gzivQBLgbBxgWQDigtC8AZQALAQATAXIAeAlIAwA7IA6ETQAjCcAkBzQAPAwAoAVQAYCVAJCDIrjBAQgbi6gljeg");
	this.shape_490.setTransform(35.8,215.7,0.278,0.278);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#501C0E").s().p("AkUAXQGNitHOgmIggAdQgtAgg7AVIhnAOQiBAUiBAdQmbBbkBCNQBrhPDHhXg");
	this.shape_491.setTransform(29,183.3,0.278,0.278);

	this.instance_108 = new lib.Path_64_1();
	this.instance_108.parent = this;
	this.instance_108.setTransform(41.4,176.2,0.278,0.278,0,0,0,6.5,8.7);
	this.instance_108.alpha = 0.07;

	this.instance_109 = new lib.Path_65_1();
	this.instance_109.parent = this;
	this.instance_109.setTransform(27.6,178.2,0.278,0.278,0,0,0,6,15.7);
	this.instance_109.alpha = 0.07;

	this.instance_110 = new lib.Path_66_1();
	this.instance_110.parent = this;
	this.instance_110.setTransform(19.7,180.2,0.278,0.278,0,0,0,5.2,20.4);
	this.instance_110.alpha = 0.07;

	this.instance_111 = new lib.Path_67_1();
	this.instance_111.parent = this;
	this.instance_111.setTransform(33.8,178.4,0.278,0.278,0,0,0,4.5,6.7);
	this.instance_111.alpha = 0.07;

	this.instance_112 = new lib.Path_68_1();
	this.instance_112.parent = this;
	this.instance_112.setTransform(36.2,175.6,0.278,0.278,0,0,0,12.3,13.4);
	this.instance_112.alpha = 0.07;

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#642812").s().p("Ahai/QBAgSBUANQCpAcBlCfQhZAIhyAaQhuAahWAgQh/AtiABLQgDllDvglg");
	this.shape_492.setTransform(29,178.6,0.495,0.495);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#E6E2E1").s().p("AgNAvQg6gRgfg5QgBgDABgFQACgGADAAIAogOQAEALAJAOQASAbAXAJQAVALArgBIAmgDIAEAiIggAIIgXABQgeAAgfgJg");
	this.shape_493.setTransform(41.9,253.1,0.278,0.278);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#C5E0DF").s().p("AjpiFQgEgDAAgFQgBgFACgEIAWgkQACgEAFgBQAFgBAEADIG0FbIggAjg");
	this.shape_494.setTransform(42.9,259.1,0.278,0.278);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#C5E0DF").s().p("AgiAlQgWgTA+g6IAjAjQgSAVgTANQgPAMgLAAQgHAAgFgEg");
	this.shape_495.setTransform(45.6,256.5,0.278,0.278);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#C5E0DF").s().p("AgaAnQgUgSAwg/IAfAjQgOAXgOAOQgMANgKAAQgFAAgEgEg");
	this.shape_496.setTransform(46.7,257.5,0.278,0.278);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#C5E0DF").s().p("AguAQQgQgQAegMQAVgIAkgFIAcAZQguAagaAAQgRAAgKgKg");
	this.shape_497.setTransform(44.3,255.3,0.278,0.278);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#C5E0DF").s().p("AgQAqQgNgHAHgfQAEgUAMgbQATAZANAUQgVAqgPAAQgDAAgDgCg");
	this.shape_498.setTransform(47.9,258.5,0.278,0.278);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#3EA2A2").s().p("AjmhyQAKgXAUgXQAngvAxgEQALAZARANIABABQAHAFAJAFQAVAWAmABQAPAAASgKQDJCiAFB0QACA6gmAZg");
	this.shape_499.setTransform(43.2,257.9,0.278,0.278);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#C5E0DF").s().p("AjIBsIDIk0QADgEAFgBQAFgBAEAEQADANAJAUQAUAmAhAbQAiAbAsASIAlANQAEAEAAAFQAAAFgFAEIkyDqg");
	this.shape_500.setTransform(44.9,249.9,0.278,0.278);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FBA386").s().p("AgHDkQhYhHAYgjQAYgigugpQgXgVgcgOIhVkCQA0gnBMgHQCWgMBzClQBzCkhWCXQgrBLhCAqg");
	this.shape_501.setTransform(47.4,240.9,0.278,0.278);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#F79178").s().p("AhuBzQiDgzhIh1QgIAIgGAEQgeARgmgQQgmgQgXgpQgMgVgFgZIAJAIQAjAfAuAAQArAAAngbQA7ByBmA5QBuA/CFgRQBogMBhgxQBhgvBJhMQglBHg8AyQg/A1hPAYIhPAZQg9ATg8AAQhIAAhJgdg");
	this.shape_502.setTransform(28.5,195.3,0.278,0.278);

	this.instance_113 = new lib.Path_76_1();
	this.instance_113.parent = this;
	this.instance_113.setTransform(16.1,182.7,0.278,0.278,0,0,0,0.4,0.6);
	this.instance_113.alpha = 0.102;

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#E6E2E1").s().p("AgHAqQgigKgagaQgRgQgKgVQgCgDACgDQACgDADAAIAkgIQAEAKAHANQAQAZAWAKQAVAKApgEIAjgHIADAVIgaAOQgQAFgSAAQgVAAgWgHg");
	this.shape_503.setTransform(49.1,249.8,0.278,0.278);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#C5E0DF").s().p("AjmiEQgDgDgBgEQgBgFACgEIAWgkQACgEAFgBQAEAAAEACIGwFXIggAig");
	this.shape_504.setTransform(50.2,255.6,0.278,0.278);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#C5E0DF").s().p("AgiAkQgWgSA+g5IAjAiQgpAtgWAAQgHAAgFgEg");
	this.shape_505.setTransform(53,253,0.278,0.278);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#C5E0DF").s().p("AgaAmQgUgSAwg9QARARAOARQgPAXgNANQgMANgKAAQgFAAgEgEg");
	this.shape_506.setTransform(54.1,254.1,0.278,0.278);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#C5E0DF").s().p("AguAQQgPgQAegMQAUgIAkgFIAbAZQgtAagaAAQgRAAgKgKg");
	this.shape_507.setTransform(51.7,251.9,0.278,0.278);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#C5E0DF").s().p("AgQApQgNgHAHgeQAEgUAMgaQAPAUAQAXQgUAqgPAAQgDAAgDgCg");
	this.shape_508.setTransform(55.2,255.1,0.278,0.278);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#3EA2A2").s().p("AjkhxQAKgWAUgXQAnguAxgEQAIAXATAOIABABIAQAKIAAABQAVAVAmABQAOAAATgJQDGCfAEByQACA5glAZg");
	this.shape_509.setTransform(50.6,254.4,0.278,0.278);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#B4CFCD").s().p("Ai3BiIC4kZQACgEAFAAQAFgBADADQADANAIARQASAjAfAaQAeAYAoARIAiALQAEAEAAAFQAAAFgEADIkZDVg");
	this.shape_510.setTransform(52,246.7,0.278,0.278);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#F79178").s().p("AgHDQQhQhBAWgfQAWgfgqgnQgWgTgZgNIhNjrQAwgkBFgFQCKgLBoCXQBpCWhPCJQgoBEg8Ang");
	this.shape_511.setTransform(54.3,238.5,0.278,0.278);

	this.instance_114 = new lib.Path_3();
	this.instance_114.parent = this;
	this.instance_114.setTransform(37.5,185.6,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_114.alpha = 0.102;

	this.instance_115 = new lib.Path_1_1();
	this.instance_115.parent = this;
	this.instance_115.setTransform(24.5,189,0.278,0.278,0,0,0,6.9,8.3);
	this.instance_115.alpha = 0.102;

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#491B0C").s().p("AgWBFQgYgVgLgkQgKgiAJgdQAKgcAYgGQAYgFAXAWQAYAVALAjQAKAjgKAcQgJAdgYAFIgKACQgSAAgTgSg");
	this.shape_512.setTransform(36.7,186.2,0.278,0.051,-30);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#491B0C").s().p("AgXBJQgZgXgLglQgLgkAKgeQAKgeAZgFQAZgFAYAWQAZAWALAlQALAkgKAeQgKAegZAFIgKABQgTAAgUgRg");
	this.shape_513.setTransform(25.9,188.6,0.278,0.037);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FBA386").s().p("AgLBjQgmgQgXgpQgXgpAFgoQAEgpAfgRQAegRAlAQQAmARAXAoQAXApgFAoQgEApgfARQgPAJgSAAQgRAAgRgIg");
	this.shape_514.setTransform(17.8,191.4,0.278,0.278);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("AAXAVQg/gKgygcQgFgDACgCQACgBAHABICgAYQAHABAGADQAHACgBACQgEAJgSADQgIACgKAAQgOAAgSgDg");
	this.shape_515.setTransform(31.7,192.7,0.278,0.278);

	this.instance_116 = new lib.Path_79_1();
	this.instance_116.parent = this;
	this.instance_116.setTransform(29.5,179.8,0.278,0.278,0,0,0,45.6,28.4);
	this.instance_116.alpha = 0.109;

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FBA386").s().p("AjOG7QiWhPgyihIgsiOQgyifBPiWQBPiWChgyIBPgZQBcgcBeAQQBcAPBNA2QA2AmAoA2QAoA3AUBBIAsCOQAyCghPCWQhPCWihAyIhPAYQg+AUg8AAQhgAAhbgxg");
	this.shape_516.setTransform(30,185.7,0.278,0.278);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F79178").s().p("AgxBWQgcgegGguQgFgtAUgkQAVgkAigEQAigEAcAeQAdAeAFAuQAGAtgVAkQgUAkgjAEIgIABQgcAAgagbg");
	this.shape_517.setTransform(42.5,184,0.278,0.278);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#F79178").s().p("AhUiCIB9gLIAtEMIirAPg");
	this.shape_518.setTransform(33.5,199.3,0.278,0.278);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("Ag/CyQhmgQg4hiQgcgxgIgtIB3iLQALAaAaAZQAyAyBFgFQBGgFArgyQANgQAJgSIAGgPIBjBbIgMBOQgYBYg3A2QgMAMgQgEQgQgEgFgQQgRg2gWgXQgdgegvAIQgSAJgFAhQgDAWADAzQABASgNAMQgMAKgOAAIgFAAg");
	this.shape_519.setTransform(62.8,202.4,0.278,0.278);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#E6E6E6").s().p("AiJBuQhxhGgkiEQAMgHAigBQAMAsAEAMQAKAcASAVQAhAnAwAXQAhAQAjhFQAqhRAbgKQAZgIAlAJQAOADAyASQBNAbAUglQATgwACgsQAHgEAEABIAHAEQAPB3hABcQg+BXhgAPQgYAEgXAAQhWAAhRgzg");
	this.shape_520.setTransform(62.5,204.3,0.278,0.278);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#842725").s().p("Ai/DiIh4D8IktluIDSmiICpDRIC3miIFcGQIBsj8ICjC8QANBZAOBxIARB/IhJDOIjWjQIjGFwg");
	this.shape_521.setTransform(66.4,229.5,0.278,0.278);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#842725").s().p("AoxB5QgUgDgRgXQgXggAHgyQC3AUFxghQGqgpDzhYQAOA1gHAUQgJAdg5AWQiKA0mWAxQkVAiieAAQhQAAgygJg");
	this.shape_522.setTransform(68.2,254.5,0.278,0.278);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#842725").s().p("AkVBJQg5hCgihWIgSguQAxgKBsgRQAMAsAEALQAKAcASAWQAhAoAwAWQAuAWAzADQAzAEAwgQQA2gSApgoQAigjAgg5QAHgRAAgZIAAgrQBGgEA2ADQAJBSgQBKQgTBQguAzQg4A/hMAiQhMAihVABIgFAAQirAAh4iKg");
	this.shape_523.setTransform(62.2,205.8,0.278,0.278);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#772824").s().p("ApDKXQg5kbhGnVQBVhPAvhZQAwhbARh3QASiAgNhxQgPiBg1hlQAtgMBAgLIB0gTQALAsAEALQAKAcATAWQAgAoAwAXQAuAWA0ADQA0AEAwgQQA0gSApgpQAjgjAfg5QAHgRABgZIAAgrQBtgGBFAKIAAABQAYCHA3CDQA8CQBRBiQA2EAAmE5IAjD+QAYCwAJBqQAcFDhPANQjjAklIAgQi4ASlxAhIgBAAQgsAAhLl3g");
	this.shape_524.setTransform(65.4,228.8,0.278,0.278);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#E6E6E6").s().p("Ao4HwQggjUgfjlIgZi5QgjifCShHQA5gcBfgUQApgICIgWQAMAsAEALQAKAcASAWQAhAoAwAXQAuAWAyADQA0AEAwgQQA2gSApgpQAigjAgg5QAHgRAAgZIAAgrQCrgKBIAeQAWAKAKAMIAFAKIAhBqQApCNAlCvIkYD6Qh1BqitCfg");
	this.shape_525.setTransform(61.8,213.7,0.278,0.278);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#F79178").s().p("AhxD/QgwgvgBgzIASlMQAAgzAjglQAkglAzgBIAfAAQAzAAAlAjQAlAkAAAzIAcFkQABAxgwAmQgsAkg2ABIgeABIgCAAQgyAAgwgvg");
	this.shape_526.setTransform(63.2,198.5,0.278,0.278);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#C5E0DF").s().p("AgQBzQgGgWgThSQgPhCgNgnQALgRAkgEQAigDAPAOIAWBmQAOA9AFAoIABAFIg9ALQAAgBgMABIgJABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_527.setTransform(48.2,202.1,0.278,0.278);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#3EA2A2").s().p("AjShNQCOgYDsgYIAWBmQAOA9AGAoIABAFIjwArg");
	this.shape_528.setTransform(44.3,202.7,0.278,0.278);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#F79178").s().p("ApUhCQA3gKBigNQDGgaDbgRQDbgRDgAzQBGAQA+AUIAwASIv0C1g");
	this.shape_529.setTransform(55,202.4,0.278,0.278);

	this.instance_117 = new lib.Path_94_1();
	this.instance_117.parent = this;
	this.instance_117.setTransform(27,198.7,0.278,0.278,0,0,0,67.9,97.8);
	this.instance_117.alpha = 0.18;

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#642812").s().p("ApNPMQi7g0hThDQCJiOA0k5QARhsAQizQAWj+AFgpQAmlfBhizQCEj0Ecg5QAegLAxgCQBkgGBjAoQE9B9C7IMQDYJeh9FfQh1FGmIA7QjhAhjEAAQkFAAjUg6g");
	this.shape_530.setTransform(27,197.1,0.278,0.278);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#E6E6E6").s().p("AAqDnQiwgOguhxQgphnAZh+QAIgnANgmIAMgdQAuBSBGBiQCKDCBzBMQAFADg0AGQgkAEgkAAQgWAAgXgBg");
	this.shape_531.setTransform(33.3,239.4,0.278,0.278);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#1B2728").s().p("AjUFfQAJkdgBjTQAAibgCgHIGPgrQAIBBAGCOQAIDSgDEcg");
	this.shape_532.setTransform(58.7,271.7,0.278,0.278);

	this.instance_118 = new lib.Path_97_1();
	this.instance_118.parent = this;
	this.instance_118.setTransform(68.5,256,0.278,0.278,0,0,0,57.8,13.9);
	this.instance_118.alpha = 0.172;

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#1B2728").s().p("AjgG5QAbk+AOjzQALi2gCgGIGLiEQAFBFgDDCQgEEQgXFag");
	this.shape_533.setTransform(78.2,269.2,0.278,0.278);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#1B2728").s().p("AgUDQQkPgDkJgTIgSmJIRyAHIALCEQAFCPgZA8QgfBJnRAAIhPAAg");
	this.shape_534.setTransform(68.4,258,0.278,0.278);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQAwgoAwguIAmgnQhhAnglBWQhZBMhGAlQAIgqAfgyg");
	this.shape_535.setTransform(127.6,185.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.instance_118},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.instance_117},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.instance_116},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.instance_115},{t:this.instance_114},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.instance_113},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.instance_107},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.instance_106},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.instance_105},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.instance_104},{t:this.shape_461},{t:this.instance_103},{t:this.shape_460},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.instance_99},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.instance_95},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.instance_94},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.instance_93},{t:this.shape_408},{t:this.instance_92},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89}]},20).to({state:[]},4).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.instance_118},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.instance_117},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.instance_116},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.instance_115},{t:this.instance_114},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.instance_113},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.instance_107},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.instance_106},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.instance_105},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.instance_104},{t:this.shape_461},{t:this.instance_103},{t:this.shape_460},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.instance_99},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_535},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.instance_95},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.instance_94},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.instance_93},{t:this.shape_408},{t:this.instance_92},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89}]},10).to({state:[]},5).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.instance_118},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.instance_117},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.instance_116},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.instance_115},{t:this.instance_114},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.instance_113},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.instance_107},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.instance_106},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.instance_105},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.instance_104},{t:this.shape_461},{t:this.instance_103},{t:this.shape_460},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.instance_99},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.instance_95},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.instance_94},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.instance_93},{t:this.shape_408},{t:this.instance_92},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89}]},45).to({state:[]},5).wait(291));

	// sad
	this.instance_119 = new lib.Path_0_1();
	this.instance_119.parent = this;
	this.instance_119.setTransform(60.6,159.1,0.278,0.278,0,0,0,50.1,15.7);
	this.instance_119.alpha = 0.121;

	this.instance_120 = new lib.Path_1_0_1();
	this.instance_120.parent = this;
	this.instance_120.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.6,0.6);
	this.instance_120.alpha = 0.121;

	this.instance_121 = new lib.Path_2_1();
	this.instance_121.parent = this;
	this.instance_121.setTransform(54.6,159.9,0.278,0.278,0,0,0,0.2,0.6);
	this.instance_121.alpha = 0.121;

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#472A21").s().p("AANANQhZiLhFABQAWgOAegdQA9g4AshHQBxAZAREeQAJCPgOCKQgmiWhWiGg");
	this.shape_536.setTransform(73.4,168.7,0.278,0.278);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#563428").s().p("AhpBaIAIgxQgMgOgCgRIAAgNQAWACANAHIAJAIQgRgZgBgpIADgkQAsAVAPAiIAHAeQARgrA6gfIA1gVQAAAigdAsQgWAhgJAGIgwBRg");
	this.shape_537.setTransform(53.3,158.6,0.278,0.278);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#563428").s().p("Aj+BpQA+iWDqhRQBKgaBSgPIBEgKQAAAZgQAfQgJAQgIALIhaBBQhrBKhSAyQiKBTgzAAQgwAAAdhJg");
	this.shape_538.setTransform(60.1,157.7,0.278,0.278);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#563428").s().p("AAjgvIgrgjQgygqgegkQhgh1CNgTQCNgSAYEwQAMCYgQCcg");
	this.shape_539.setTransform(73.9,168.6,0.278,0.278);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#563428").s().p("AnaDGQhEjmA1hoQAnhNBnAOQAgAFAjANIAcAMQBmitFNgxQBogPBzgBIBfACQAvC6hYBzQgsA5g1AVIkIgVQkQgOgtAkQguAjhEDLQgiBlgZBeQgthegih0g");
	this.shape_540.setTransform(60,165.3,0.278,0.278);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#563428").s().p("AnyFhQgJgsgEhDQgIiFAZhtQBOliFzABQF6AACAFJQAoBmAKB7QAFA9gDApQgmiWhWiFQhaiLhFABIg2AlQhHAmhNAGQhEAGhrggQg1gQgogSQhJADhBCUQguBsgeCQQgHAmgTAIQgFACgFAAQgEAAgEgBg");
	this.shape_541.setTransform(63,168.5,0.278,0.278);

	this.instance_122 = new lib.Path_9_0_1();
	this.instance_122.parent = this;
	this.instance_122.setTransform(57.4,180.3,0.278,0.278,0,0,0,6.9,7.5);
	this.instance_122.alpha = 0.078;

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#35221A").s().p("AgPBhQgZgCgMgeQgOgeAGgoQAHgoAWgbQAWgaAZACQAYACAOAeQANAegGAnQgIApgWAaQgUAZgVAAIgFAAg");
	this.shape_542.setTransform(57.2,179.6,0.278,0.278);

	this.instance_123 = new lib.Path_11_1();
	this.instance_123.parent = this;
	this.instance_123.setTransform(71.6,179.2,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_123.alpha = 0.078;

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#35221A").s().p("AgSBhQgZgDgMgfQgMgeAIgnQAIgoAXgaQAXgbAYAEQAZADAMAeQAMAfgIAnQgIAngXAbQgUAXgVAAIgGAAg");
	this.shape_543.setTransform(71.5,178.4,0.278,0.278);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AjDAPQgJgCAFgDQAagKAzgHQA0gIBAgBQA/AAA4AGQA3AHAfAKQAGACgHADQgIACgQAAIlZADIgGAAQgLAAgHgCg");
	this.shape_544.setTransform(64.9,185.7,0.278,0.278);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#F79178").s().p("AkoCsQiChygMiqQgjAHgjgaQgjgagQguQgOglAFgkQARAgAkAWQAjAWAjACQAUABAWgDQApDHB/BuQCHB2DNgHQDWgGBxhnQBFhABFidQgPCXhuBrQhwBtiaAJIivAKIgbABQiaAAh3hpg");
	this.shape_545.setTransform(61.7,188,0.278,0.278);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#F9A184").s().p("AggBrQgmgZgSgyQgSgxAOgsQANgtAlgNQAlgNAmAaQAnAaARAxQASAxgOAsQgNAtglANQgNAEgNAAQgXAAgagRg");
	this.shape_546.setTransform(48.6,181.5,0.278,0.278);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#F9A184").s().p("AljH9QiChzgKitIgTk6QgKizByidQB3ikCogKICtgLQCogKCICVQCECPAKCzIATE6QAKCthzCCQh0CCisAKIiuAKIgcABQibAAh4hqg");
	this.shape_547.setTransform(63.3,178.6,0.278,0.278);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#F79178").s().p("AgMB/QgngEgYgoQgYgoAFg0QAGg0AfgjQAfgiAnAEQAnAEAYAoQAYAogGAzQgFA1gfAjQgcAfghAAIgJgBg");
	this.shape_548.setTransform(77.1,180.4,0.278,0.278);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FF4F4B").s().p("AhWDOQg4h1gwh6Qgwh7BuhTQAigaAugTIAngOIDXHXIj2B+QgSgjgcg6g");
	this.shape_549.setTransform(92,216.7,0.278,0.278);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FD9D83").s().p("AmHDKQiUh+ikkkQBzhKA5gmQCpEtCHBlQBsBRCEgXQCJgYEMh8QD2h6AVgEIATClQgfAOjhB/Qj0B/ieAbQg7AKg3AAQiwABiTh/g");
	this.shape_550.setTransform(108.1,225.2,0.278,0.278);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FD9D83").s().p("AhxB0QgWgVgcgiQgjgqgFgTQgCgHAJgEIAKgEQgEgHgCgIQgEgRAKgFQALgFANACIAKADIgVgZQgLgNAOgJQAMgIASAAQAMABAUALIASAKQgHgLABgMQABgJASgBQASAAAZAKQAZALA3AhQA6AiAOAHQAWAJAigBIAegEIgXAuIiLA0QhwAoggAAQgIAAgDgDg");
	this.shape_551.setTransform(124.7,235.2,0.278,0.278);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FD9D83").s().p("AhcBRQAlg0AlgbQBDgvgQhDQgGgYAbANQAcANAHAhQAFATgSAyQgOAkAXAGQAVAFARAHQgJALgTAgIjZAoQAMgVASgbg");
	this.shape_552.setTransform(130.4,217.9,0.278,0.278);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FD9D83").s().p("AgBACQADgFAAADIgBACIgBAAIgBAAg");
	this.shape_553.setTransform(133.9,219.2,0.278,0.278);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FD9D83").s().p("AA7C8QgsgBgvgLQg1gLgkgRQgNgHgTgPQgXgRgHgKIALirQAHgHAJgMIAPgTQAhgnAqgcQAWgOARAFQAIADAMAIIARALQAUAJAMAEQARAFAPgBQBRgEAAAoQABAUgQAVQAYAJAMARQAZAhg7AnQAHgCAIAJQAKAKACAOQAFAlg1AUQgCABAHANQAJAQACAJQAFAhhIAAIgLAAg");
	this.shape_554.setTransform(131.9,223.2,0.278,0.278);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FD9D83").s().p("AiMCzQgcgKgcgXQgMgKgOgOQgWgTACgDIAEgEQAKgGB2gvQB3gwAZgJQAbgJAKgGQAVgKADgJQACgHgggTQgmgYgMgVQgNgWAGgeQAHgeAPAFQATAHAUAeQASAaAUACQBIAGAiAcQAZAVAFAkQALBYhpBSQhVBEhhAAQg0AAg3gTg");
	this.shape_555.setTransform(128.2,235.5,0.278,0.278);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#7C3B2D").s().p("AEtBqQgqhFgPhQQgyAfhYA8QhSAwhqAPQA1hNBMg6QgoARhNAnQhEAfgxADIARh4IhyBeQg9A0gzARIAIgbQAFgSAGgKQgfATggAKQATg3Avg9QBeh8CQggQgYgMgKgJQCAgPBmAMIAkAFQB1AUBTBFQgGgRACgQQAJADAKAIQAVAQAFAaQgCgLAHgMQAKgTAfgRIACAZQAAAdgMAQQAGgDAJgDQATgEATAGIgMAQQgRARgYABQAIACAJAHQARAMAGAVIgdgEQAfAuANAzQAIAeACAbQAEAogDARIgKgCQgMgEgNgOQACAZgBAYQg+gtgqhFg");
	this.shape_556.setTransform(128.6,184.9,0.278,0.278);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFD7A0").s().p("AiSAJQgTgaABgaQARgOAVAEIARAIQAEANAPAOQAfAaA6AAQA5AAAcgbIARgdQASgQAZAEIAVAHIgEASQgHAWgOARQgtA6hgAAQhpAAgog1g");
	this.shape_557.setTransform(125.9,211.9,0.278,0.278);

	this.instance_124 = new lib.Group_1();
	this.instance_124.parent = this;
	this.instance_124.setTransform(119.2,233.4,0.278,0.278,0,0,0,15.7,11.4);
	this.instance_124.alpha = 0.09;

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#613D29").s().p("AlrEHQgKg1ADhNQADheAXhPQBAjZCxgRQClgPCiAkQAxALAxAQIArAOIAHABQgrCzh7AGQh1AHjTAOIABAcQABAjgEAkQgMBxg5BIg");
	this.shape_558.setTransform(123.9,238.2,0.278,0.278);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#F7EBDB").s().p("AgeAyQgfgRgbgfQAYgWAmgQQAqgTA5gGQAQAdAAAbQAAAngoAUQgQAIgSAAQgVAAgYgMg");
	this.shape_559.setTransform(111.3,248.1,0.278,0.278);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#F7EBDB").s().p("AgPAaQgqgQgPgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIASgBQAFAJAIAJQAQARASADQARAEATgHIAQgIIAVAUQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgZAMgZAAQgTAAgRgIg");
	this.shape_560.setTransform(116,247.3,0.278,0.278);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#F7EBDB").s().p("Ai7AUIgDgjIF9gIIgFAvg");
	this.shape_561.setTransform(113.2,251.5,0.278,0.278);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#613D29").s().p("AinAEQAthYCtgGQAHALAFAEQAWAVAhAAIABAAQARAAARgKQAbAYADBDQABAigFAcIlkACQgNgrAXgsg");
	this.shape_562.setTransform(113.2,249.1,0.278,0.278);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#C3B8A1").s().p("Ag2g9IBmgJIAGB8IhZARg");
	this.shape_563.setTransform(115.9,246.5,0.278,0.278);

	this.instance_125 = new lib.Group_3_1();
	this.instance_125.parent = this;
	this.instance_125.setTransform(105.4,233.1,0.278,0.278,0,0,0,17.7,10.3);
	this.instance_125.alpha = 0.078;

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#523222").s().p("AmcB6QAkhpBHhWQB2iSCjgQQCagPCQAhQArALAsAPIAlAMIAPC2QhhgIiOAOIjnAZQg3BCguArQgnAmhCA0g");
	this.shape_564.setTransform(108.8,237,0.278,0.278);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#73312A").s().p("AgXgbIABhaQAOADAMANQAZAZgGAyQgFAxgQA1QgGAagHAQQgMgwAAhhg");
	this.shape_565.setTransform(138.9,194,0.278,0.278);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#73312A").s().p("Ag8g6IgLhRIBAAJQATAPAUAbQApA2gBA8QgBA9gXAgQgMAQgLAFQg+higXhkg");
	this.shape_566.setTransform(136.9,189.5,0.278,0.278);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQAwgoAwguIAmgnQhhAnglBWQhZBMhGAlQAIgqAfgyg");
	this.shape_567.setTransform(127.6,185.6,0.278,0.278);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#73312A").s().p("AgogJQBHg0BggPIhBA6QhUA/hoAgQAigyA0gkg");
	this.shape_568.setTransform(128.5,185.6,0.278,0.278);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#73312A").s().p("ABDg+IgmAnQgvAtgwApQAlhWBggng");
	this.shape_569.setTransform(123.8,184.3,0.278,0.278);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#F79178").s().p("AjFCdIhJgTQg9gPg0giQA1ATA6ALQBtAUBkgaQBqgbBLhIQA9g7AohKQAaAMAWADQAeAEAbgLQAcgLASgXQAIgKAGgMQABAfgOAhQgUArgkAUQglAUgggOQgLgGgGgGQg4B3h4A6QhNAlhSAAQgtAAgugLg");
	this.shape_570.setTransform(130.6,204,0.278,0.278);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FBA386").s().p("AguBnQgggOgJgoQgJgqAUgpQAUgrAkgUQAjgUAgAOQAgAPAJAoQAJAqgUApQgUArgkAUQgVAMgTAAQgOAAgNgHg");
	this.shape_571.setTransform(138.8,200.2,0.278,0.278);

	this.instance_126 = new lib.Path_9_1();
	this.instance_126.parent = this;
	this.instance_126.setTransform(139.7,192.9,0.278,0.278,0,0,0,0.6,0.2);
	this.instance_126.alpha = 0.102;

	this.instance_127 = new lib.Group_5_1();
	this.instance_127.parent = this;
	this.instance_127.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.6);
	this.instance_127.alpha = 0.078;

	this.instance_128 = new lib.Group_6_1();
	this.instance_128.parent = this;
	this.instance_128.setTransform(126.6,195.1,0.278,0.278,0,0,0,28.4,10.8);
	this.instance_128.alpha = 0.078;

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#491B0C").s().p("AAbA/IhGgNQgGgBgEgEQgDgFAAgFQAAgLADgPQAIggAVgVQAWgVAVADQAWAEALAaQAKAagIAhQgDANgIAPQgEAIgJAAIgDAAg");
	this.shape_572.setTransform(120.2,193.6,0.278,0.278);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#491B0C").s().p("AAVBCIhBgQQgMgDAAgMQgBgOAEgQQAIggAVgVQAVgVAWAEQAWADAKAaQALAagIAhQgEASgLASQgFAIgHAAIgGgBg");
	this.shape_573.setTransform(132.7,196.2,0.278,0.278);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#A14740").s().p("Ah2gFIgDgEQBggTCTAsg");
	this.shape_574.setTransform(124.5,203.1,0.278,0.278);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#73312A").s().p("ACDAnIgYgCQiTgshgASIAEAEIgLgBQgMgBgEgGQgDgFAIgDQAmgVAzgJQA0gKAyAEQAyAFAiASQAhARAHAZQABAFgJAEQgIACgJAAIgFAAg");
	this.shape_575.setTransform(125,202.6,0.278,0.278);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#F7EBDB").s().p("AgBA9QglgGgWgrQgPgfgDgoQAegGAmAJQArAKAuAbQgDAggPAVQgTAcgfAAIgMgBg");
	this.shape_576.setTransform(94.6,242.1,0.278,0.278);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#F7EBDB").s().p("AApA/QgsgIgZgnQgYglAKglQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAIAPAKIAAAVQADAYAMANQALAOATAEIAQACIAFAeQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAIgDACIgBAAg");
	this.shape_577.setTransform(98.3,243.7,0.278,0.278);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#F7EBDB").s().p("AidhdIARgfIEpDUIgeAlg");
	this.shape_578.setTransform(94,245.7,0.278,0.278);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#613D29").s().p("Aipg8QAOgrApgXQBSgvCIBfQAAAOACAGQAFAdAaATIAAABQAOAJASABQAIAkgjA5QgSAcgTAVg");
	this.shape_579.setTransform(94.7,244.6,0.278,0.278);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#C3B8A1").s().p("AhGApIA6h3IBTA0Ig/Bpg");
	this.shape_580.setTransform(98.7,243,0.278,0.278);

	this.instance_129 = new lib.Path_10();
	this.instance_129.parent = this;
	this.instance_129.setTransform(128.1,190.9,0.278,0.278,0,0,0,39.5,25.4);
	this.instance_129.alpha = 0.09;

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FBA386").s().p("AhGGzIhJgSQiVgmhPiEQhPiFAliUIAiiDQAeh6BkhOQBDg1BTgTQBWgTBUAVIBJATQCVAlBPCFQBPCEglCUIghCDQgmCViEBPQhaA2hiAAQgtAAgwgMg");
	this.shape_581.setTransform(127.1,196.3,0.278,0.278);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#523222").s().p("AA0BKQlagaiOhTIBDgxIMWAAQAHAAAFAFQAEAFgBAHQgGAsgPA4QgOAygDAAQgpACguAAQhzAAiQgLg");
	this.shape_582.setTransform(122.7,231.4,0.278,0.278);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFC054").s().p("AgDGUQkVgGiBhNIB6l9QAkjHBdhWQAdgbAfgMIAagHIAMgBQAKASAOAOQAkAkA0AGQA1AGAsgZQAogXAYgsQAuAEApAPQAzASAaAeQASAUAPAeQgDAHgTEDQgUEYgQBYIgJAVQgIAOADAHQigAQiGAAIgvgBg");
	this.shape_583.setTransform(123.9,221.5,0.278,0.278);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#F9A184").s().p("Ak5BCQAphIA4ggQARgKARgFIAOgDIC8gJIAjAFQBjAEAOACQBNAMAkApQASATAPAdQgCADgCAQg");
	this.shape_584.setTransform(126.6,212.2,0.278,0.278);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#F79178").s().p("AgCBVQgqgDgvgPIAJhcQAAgZASgSQARgRAZAAIAOAAQAeAAAgAOQAmARAAAXIAABvQghAGgjAAIgagBg");
	this.shape_585.setTransform(125.8,207.6,0.278,0.278);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F9A184").s().p("AgTCGQgbAAgYgSQgYgTAAgYIAOiRQABgZARgSQASgSAZAAIAOAAQAdAAAhAPQAmAQAAAXIAACSQAAAYgnAWQgjAVgbAAg");
	this.shape_586.setTransform(125.7,208.9,0.278,0.278);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#73312A").s().p("AmmB/QAEh/BHh0QCOjmFNA+QEaA0AMEOQAHCIgyB9g");
	this.shape_587.setTransform(128.1,189,0.278,0.278);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#F9A184").s().p("AhJCrQghgEgUgSQgagXgGgKQgUgcgBgoQAAgkALgrQAJgkAOgdQADgGALghQAIgcAEgDQAPgKALANQAKALAAARQAAAMgGAJIgKAOQgHAMAFAOQAfgLAWgRQAZgUA3ghQAVgMAOAPQAPAPgZAQQgjAWgpAhIAPAUQApgcA0geQAfgSAQAaQAQAZgpAPQgfALg7AgIAUAWQAegUA8gUQAkgLAFAZQAEAYgiAGQgYADg7AXIAPAeQA9geAagBQAPAAADAUQAEAUgXAHIg3APQgbAIgSAMQguAegnAOQgWAHgQAAIgKAAg");
	this.shape_588.setTransform(153.2,200,0.278,0.278);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFD7A0").s().p("AgRAoIgWhJQgOgsgNgfIBBgRQAsBuAYB5QgWAGgqAOQgIgsgMgqg");
	this.shape_589.setTransform(136.6,212.6,0.278,0.278);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFC054").s().p("AhmCQIgzj0QA1ACBJgRIBwgcQAtBuAYB5QgpALhOAbQhAASg+AAIgLAAg");
	this.shape_590.setTransform(134.2,213.1,0.278,0.278);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#F9A184").s().p("Al2ELIgYi8QElAIDXifQBFgzA1g/QAignAJgTIBUgXIggBKIBIAjQhCCGh3BkQjgDAlLAAIghgBg");
	this.shape_591.setTransform(141,208.1,0.278,0.278);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#ED8C73").s().p("AkLCzQhXgMhSgvQCJA0COgcQB8gXB0heQBrhWBJh6QAVAYAYAKQAgANAigDQAjgEAcgVQgcAxgrAWQgsAVgjgTQgHgDgFgFQhgCLiPBMQh5BAh5AAQgfAAgegDg");
	this.shape_592.setTransform(106.3,199.5,0.278,0.278);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#F9A184").s().p("AhAB6QgkgTgGgxQgGgxAbgyQAbgzAsgWQAsgWAjATQAkATAGAxQAGAxgbAyQgbAygsAXQgXAMgVAAQgTAAgQgJg");
	this.shape_593.setTransform(116.1,193.7,0.278,0.278);

	this.instance_130 = new lib.Path_26_1();
	this.instance_130.parent = this;
	this.instance_130.setTransform(114.3,183.5,0.278,0.278,0,0,0,20.7,10.1);
	this.instance_130.alpha = 0.121;

	this.instance_131 = new lib.Path_27_1();
	this.instance_131.parent = this;
	this.instance_131.setTransform(94,176.1,0.278,0.278,0,0,0,25.9,20.2);
	this.instance_131.alpha = 0.121;

	this.instance_132 = new lib.Path_28_1();
	this.instance_132.parent = this;
	this.instance_132.setTransform(100,181.1,0.278,0.278,0,0,0,18.4,9);
	this.instance_132.alpha = 0.121;

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#4F3026").s().p("ApMIuQhEhzgWiXQhFnQEukgQBuhoCXhIQBwg1BtgaQBEgQB3AuIBpAxQCpgUBiC1QB7DjgjHpQgHBfgUBOIgJhtQgIhDgSgpQgkhWhChKQgUgXhjhcQhHhDgig3QgvhNgNhlQguB9hsBBQg/AmiUArQiSAqhAApQhoBCgqCCQgzCQABCEQABCbBKB1QhYhfgohDgAhYj3QhNAhgXAMQg1AcggAjQAigZBBgYQBMgZAkgOQCCgzAQhfQgsBGiAA4g");
	this.shape_594.setTransform(100.6,186.8,0.278,0.278);

	this.instance_133 = new lib.Path_29_1();
	this.instance_133.parent = this;
	this.instance_133.setTransform(107.5,191.2,0.278,0.278,0,0,0,6.7,8.7);
	this.instance_133.alpha = 0.141;

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#3E1208").s().p("AgkBdQgbgLgJgjQgIgiAPgmQAPgnAegUQAdgTAbALQAcALAJAjQAIAjgOAlQgQAngeAUQgTAMgRAAQgLAAgKgEg");
	this.shape_595.setTransform(107.8,190.7,0.278,0.278);

	this.instance_134 = new lib.Path_31_1();
	this.instance_134.parent = this;
	this.instance_134.setTransform(93,189.3,0.278,0.278,0,0,0,6.5,8.4);
	this.instance_134.alpha = 0.141;

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#3E1208").s().p("AgjBdQgbgLgJgjQgJgjAPglQAPgmAegUQAdgUAbALQAcAMAIAiQAJAigPAmQgPAngeATQgTAMgRAAQgKAAgKgDg");
	this.shape_596.setTransform(93.3,188.8,0.278,0.278);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AiNApQgDgBAHgEQAHgEALgDIDzhFQALgDAFAAQAGAAgGAEQg2AlhgAaQgtANgkAFQgPACgMAAQgOAAgJgDg");
	this.shape_597.setTransform(99.4,197,0.278,0.278);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#DB8575").s().p("AAAAAQADgJgDAJIAAAFIAAgFg");
	this.shape_598.setTransform(113.6,190.5,0.278,0.278);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#DB8575").s().p("AoMB2QAdiYBPh2IACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB4QALB3gaBuQhhhChXhbQiLiQgeiDQgvBJhGAwQg0AlhZAkIihA/QhiAqhKAzQhKBFgWBoQggiQAciag");
	this.shape_599.setTransform(102.1,181.9,0.278,0.278);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#F9A184").s().p("AhzJlQhrgOhdhBQjHiJgVkaQgJh7Afh8QAgh8BBhhIACgEQAigwAhgiQCNiQCwgbQBPgNBXAPQDpApBsDuQAvBoALB5QALB2gaBuQgxDZi7CUQiiCAiuAAQgfAAgggEg");
	this.shape_600.setTransform(102.1,187.5,0.278,0.278);

	this.instance_135 = new lib.Path_37_1();
	this.instance_135.parent = this;
	this.instance_135.setTransform(106.1,235.3,0.278,0.278,0,0,0,66.5,79.3);
	this.instance_135.alpha = 0.09;

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FF4F4B").s().p("AAKN2Qk6gKlkixQBDi2Btj5QBEicAJhCQAMhSg7mpIg8mZQAwgKAkgCIBEgEQAJAuA1AoQBEA0BqgBQBGgBAJgtQAFgcgVg+QAFgBAQAAIAVABQBeBiBeBtQC9DbgHA4QgNBlgVA/ICQFgQCaGRAwDpQiKBOizAjQiIAbiSAAIg0gBg");
	this.shape_601.setTransform(106.1,232.6,0.278,0.278);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FF4040").s().p("AjejeIBdAAQAXgBAbAMQAYALARARIBVBVQAoAoCIB+QgXAIhrBFQhqBHgXAIg");
	this.shape_602.setTransform(111.6,214.2,0.278,0.278);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#F9A184").s().p("AixhaQCngIC8ALQgGAwAGBhQhpAQgxAGIh+AOIhLi4g");
	this.shape_603.setTransform(100.8,210.6,0.278,0.278);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#ED8C73").s().p("AhiB9IgFiLQgBgvAdgjQAdgiAqgCQApgBAfAhQAfAhABAvIAEBqQgbAbhMAOQghAGgYAAQgcAAgOgIg");
	this.shape_604.setTransform(100.2,202.5,0.278,0.278);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#F9A184").s().p("AhhC9IgIkIQgBgvAdgiQAdgjAqgBQApgBAfAgQAfAhABAvIAIECIjKAQg");
	this.shape_605.setTransform(100.2,204.1,0.278,0.278);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#462B24").s().p("AkcL6QkkhrhJnHQhHm5FAklQDAivD/hMQBCgUBGAtQAVAOAUATIAPAQQA1gSBKAnQBSAtBDBhQCvEBgfHJQgeGwlACGQhlAqh1AHQg7ADglgFIhUAMIgbABQhYAAhQgeg");
	this.shape_606.setTransform(101.2,189.5,0.278,0.278);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#ED8C73").s().p("ACEGOQhSgxjqloQh2i0hlirICGg5QCJBpCVB9QErD5A+BnQAkA7gOA7QgMA1guAnQgtAlg5AIQgOACgNAAQgtAAgkgWg");
	this.shape_607.setTransform(123.7,227.7,0.278,0.278);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFD7A0").s().p("AggBWQAGhYAChYIAcADIAcADQgIBMgDBjg");
	this.shape_608.setTransform(114.2,213,0.278,0.278);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFC054").s().p("AiuBUQAGhYAChYIAdADQA7AIBugDIBkgFQAHAGAIAKQARAUAHAUQAWA/hYAnQg1AYheAAQg6AAhKgJg");
	this.shape_609.setTransform(118.1,213.1,0.278,0.278);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FBA386").s().p("AhWBdQhjgNhSgVIAAihIDgAdQA6AHBugGIBigHQAHAGAJAKQARAUAHAUQAYA/hYAnQg2AYheAAQg8AAhNgKg");
	this.shape_610.setTransform(115.6,212.8,0.278,0.278);

	this.instance_136 = new lib.Path_48_1();
	this.instance_136.parent = this;
	this.instance_136.setTransform(105.7,256.2,0.278,0.278,0,0,0,68.3,17.4);
	this.instance_136.alpha = 0.09;

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#8D242E").s().p("AuDIcQAajpA3joQBTlWCHkQITCAZIAYA4QAfBOAiBpQBpFOBXHhg");
	this.shape_611.setTransform(105.5,266.5,0.278,0.278);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#C5E0DF").s().p("AhrgFQAFgvAQghIAzATICOBDQgUAvgYAmIiqhbg");
	this.shape_612.setTransform(21.2,212.8,0.278,0.278);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#3EA2A2").s().p("AiECIQAojXBEhgQAVgfAUgOIARgIIBhCoQAKAbgYBRQgbBeg0BXIiqhdg");
	this.shape_613.setTransform(21.9,208.9,0.278,0.278);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FBA386").s().p("AAkCgQgRgfAqhDQAOgXgEgFQgGgHgqANIh6AoQhUAWAAggQAAgNCwhEIhuAQQhvAJgHgnQgEgPC3gRQhMAFgzgTQgugRAFgTQACgIBjABIBjACIhRgMQhQgPABgSQABgOBPAGQBoAIAvgJQBrgSA0AiQAQAKAJAPIAGAMIgBAqQgCAugJAVQgPAgg7AqQg7ApgKAaQgLAbgMAHQgEACgDAAQgJAAgHgNg");
	this.shape_614.setTransform(9.7,230.1,0.278,0.278);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FBA386").s().p("AjeEWQCFhqBckaQAdhZAWhgIAQhQICZAZQgHAsgMAyQgXBoggBgQhoEuihCCg");
	this.shape_615.setTransform(17.4,219.8,0.278,0.278);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#EDEDED").s().p("Aj3IwQj7gfjrgsQgkgGgWgdQgXgdACglIAMjpQACggAagTQAagTAgAIQESBMDvAeQD9AhCYgaQBngTAPgcQBljRBHjkQBAjNADhcIA6AMQBZAfA4BUQA5BVgJBcQggFHh/EGQhBCGiWBDQiWBBjwABQiCAAilgVg");
	this.shape_616.setTransform(58.8,216.3,0.278,0.278);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#EDEDED").s().p("AhFB4QgLgOAAgUIADi9QAAgOAIgJQAIgIAKACICEAcIgTDnIhpAHIgCAAQgOAAgKgOg");
	this.shape_617.setTransform(35.9,223.4,0.278,0.278);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FD9D83").s().p("AiXDVQhYgVAEgpQABgLAJgRQAIgNgDgCQgwgsARghQAagagEgEQg6gwAXgjQAGgLAPgIIAMgGQgNgfgEgeQgHg7AyAKQAVAFAoAMQApANASAIQAhAQAmgHQAHgBAPgGQAPgFAIgBQAMAAAKAGQAHAEAKALQAkAoATAoQAKAUA1ALIBTARIgZDEIiDgEQgLAPgPAOQgSARgNADQgcAHhAAEIgvABQgsAAgagGg");
	this.shape_618.setTransform(29,222,0.278,0.278);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FBA386").s().p("AhgDAQhVgSg0g6QgsgwgsiJQgIgYAQgUQAQgTAaAAIABAAIAlgFQAegEArgBQAagBAZgIIArgPQANgEAEAaQAEAagRATQgRATgtAQQglAOAAAIQACANAjAXIAiATQAPgLAVgcQAqg6AihWQALgcAmgBQAlAAgKAnQgQA+glBEQgTAhgQAWQASgTAWgbQAsg4AVgtQAbg6AjAMQAOAFAGAOQAHAOgGANQgNAgg9BSQgeAogcAiQAUgQAcgbQA5g2Aqg3QAWgeAYAVQAYAVgXAiQgkA0hYBXQAQgFAWgNQArgZAbglQAagiAgAKQAgAIgOAcQgTAkhOA6QhZBCg/AFQgqAEgjAAQg0AAgmgIg");
	this.shape_619.setTransform(37.5,240.5,0.278,0.278);

	this.instance_137 = new lib.Path_57_1();
	this.instance_137.parent = this;
	this.instance_137.setTransform(53,222.8,0.278,0.278,0,0,0,105,58.4);
	this.instance_137.alpha = 0.102;

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#C5E0DF").s().p("AiHAhQgsgfgZgsQgBgCABgDQABgDADgBIA8gPQARgEAMAMQBDBBBHgFQAsgCAhgcQAWgSAMgXQADgGAIgBIA4AAIAAAVQgCAagLAWQgkBHhzALQgRACgQAAQhQAAg/gsg");
	this.shape_620.setTransform(33.2,202.3,0.278,0.278);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#C5E0DF").s().p("AkcB3QhPgMgsgSIATiCQAsAMBJAJQCTAQCQgTQCRgUBpguQAhgPAYgPIASgNIA/B3IgQAPQgVATgiATQhqA7iyAXQhUALhQAAQhZAAhUgOg");
	this.shape_621.setTransform(35.9,214.7,0.278,0.278);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#3EA2A2").s().p("AkSIMQg7gEgigJQlzlMgilbQgLhtAYhhIAbhLQFfAXD5gvQBNgPA5gVIArgRQFIBQDqD0QBKBMA3BUIAoBDQl9GOmiBUQhjAUhcAAQgeAAgegDg");
	this.shape_622.setTransform(45.4,228.7,0.278,0.278);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#3EA2A2").s().p("AlSCQQhPm/gziuQAdgMAugPQBcgfBYgPQAbAlAuAUQAvAWAtgGQAqgGAggVQAhgUAVggIAmACIADgBQBMAIAyAaIAdBVQAkBuAhB2QBlF5AXFFIrjBAQgdi+gnjgg");
	this.shape_623.setTransform(35.7,215.9,0.278,0.278);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#F79178").s().p("AlTCQQhJm6gzivQBLgbBxgWQDigtC8AZQALAQATAXIAeAlIAwA7IA6ETQAjCcAkBzQAPAwAoAVQAYCVAJCDIrjBAQgbi6gljeg");
	this.shape_624.setTransform(35.8,215.7,0.278,0.278);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#501C0E").s().p("AkUAXQGNitHOgmIggAdQgtAgg7AVIhnAOQiBAUiBAdQmbBbkBCNQBrhPDHhXg");
	this.shape_625.setTransform(29,183.3,0.278,0.278);

	this.instance_138 = new lib.Path_64_1();
	this.instance_138.parent = this;
	this.instance_138.setTransform(41.4,176.2,0.278,0.278,0,0,0,6.5,8.7);
	this.instance_138.alpha = 0.07;

	this.instance_139 = new lib.Path_65_1();
	this.instance_139.parent = this;
	this.instance_139.setTransform(27.6,178.2,0.278,0.278,0,0,0,6,15.7);
	this.instance_139.alpha = 0.07;

	this.instance_140 = new lib.Path_66_1();
	this.instance_140.parent = this;
	this.instance_140.setTransform(19.7,180.2,0.278,0.278,0,0,0,5.2,20.4);
	this.instance_140.alpha = 0.07;

	this.instance_141 = new lib.Path_67_1();
	this.instance_141.parent = this;
	this.instance_141.setTransform(33.8,178.4,0.278,0.278,0,0,0,4.5,6.7);
	this.instance_141.alpha = 0.07;

	this.instance_142 = new lib.Path_68_1();
	this.instance_142.parent = this;
	this.instance_142.setTransform(36.2,175.6,0.278,0.278,0,0,0,12.3,13.4);
	this.instance_142.alpha = 0.07;

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#642812").s().p("AihlUQByghCWAYQEsAwC0EdQidAOjMAvQjDAuiaA4QjiBSjlCEQgGp8GrhBg");
	this.shape_626.setTransform(29,178.6,0.278,0.278);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#E6E2E1").s().p("AgNAvQg6gRgfg5QgBgDABgFQACgGADAAIAogOQAEALAJAOQASAbAXAJQAVALArgBIAmgDIAEAiIggAIIgXABQgeAAgfgJg");
	this.shape_627.setTransform(41.9,253.1,0.278,0.278);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#C5E0DF").s().p("AjpiFQgEgDAAgFQgBgFACgEIAWgkQACgEAFgBQAFgBAEADIG0FbIggAjg");
	this.shape_628.setTransform(42.9,259.1,0.278,0.278);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#C5E0DF").s().p("AgiAlQgWgTA+g6IAjAjQgSAVgTANQgPAMgLAAQgHAAgFgEg");
	this.shape_629.setTransform(45.6,256.5,0.278,0.278);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#C5E0DF").s().p("AgaAnQgUgSAwg/IAfAjQgOAXgOAOQgMANgKAAQgFAAgEgEg");
	this.shape_630.setTransform(46.7,257.5,0.278,0.278);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#C5E0DF").s().p("AguAQQgQgQAegMQAVgIAkgFIAcAZQguAagaAAQgRAAgKgKg");
	this.shape_631.setTransform(44.3,255.3,0.278,0.278);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#C5E0DF").s().p("AgQAqQgNgHAHgfQAEgUAMgbQATAZANAUQgVAqgPAAQgDAAgDgCg");
	this.shape_632.setTransform(47.9,258.5,0.278,0.278);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#3EA2A2").s().p("AjmhyQAKgXAUgXQAngvAxgEQALAZARANIABABQAHAFAJAFQAVAWAmABQAPAAASgKQDJCiAFB0QACA6gmAZg");
	this.shape_633.setTransform(43.2,257.9,0.278,0.278);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#C5E0DF").s().p("AjIBsIDIk0QADgEAFgBQAFgBAEAEQADANAJAUQAUAmAhAbQAiAbAsASIAlANQAEAEAAAFQAAAFgFAEIkyDqg");
	this.shape_634.setTransform(44.9,249.9,0.278,0.278);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FBA386").s().p("AgHDkQhYhHAYgjQAYgigugpQgXgVgcgOIhVkCQA0gnBMgHQCWgMBzClQBzCkhWCXQgrBLhCAqg");
	this.shape_635.setTransform(47.4,240.9,0.278,0.278);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#F79178").s().p("AhuBzQiDgzhIh1QgIAIgGAEQgeARgmgQQgmgQgXgpQgMgVgFgZIAJAIQAjAfAuAAQArAAAngbQA7ByBmA5QBuA/CFgRQBogMBhgxQBhgvBJhMQglBHg8AyQg/A1hPAYIhPAZQg9ATg8AAQhIAAhJgdg");
	this.shape_636.setTransform(28.5,195.3,0.278,0.278);

	this.instance_143 = new lib.Path_76_1();
	this.instance_143.parent = this;
	this.instance_143.setTransform(16.1,182.7,0.278,0.278,0,0,0,0.4,0.6);
	this.instance_143.alpha = 0.102;

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#E6E2E1").s().p("AgHAqQgigKgagaQgRgQgKgVQgCgDACgDQACgDADAAIAkgIQAEAKAHANQAQAZAWAKQAVAKApgEIAjgHIADAVIgaAOQgQAFgSAAQgVAAgWgHg");
	this.shape_637.setTransform(49.1,249.8,0.278,0.278);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#C5E0DF").s().p("AjmiEQgDgDgBgEQgBgFACgEIAWgkQACgEAFgBQAEAAAEACIGwFXIggAig");
	this.shape_638.setTransform(50.2,255.6,0.278,0.278);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#C5E0DF").s().p("AgiAkQgWgSA+g5IAjAiQgpAtgWAAQgHAAgFgEg");
	this.shape_639.setTransform(53,253,0.278,0.278);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#C5E0DF").s().p("AgaAmQgUgSAwg9QARARAOARQgPAXgNANQgMANgKAAQgFAAgEgEg");
	this.shape_640.setTransform(54.1,254.1,0.278,0.278);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#C5E0DF").s().p("AguAQQgPgQAegMQAUgIAkgFIAbAZQgtAagaAAQgRAAgKgKg");
	this.shape_641.setTransform(51.7,251.9,0.278,0.278);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#C5E0DF").s().p("AgQApQgNgHAHgeQAEgUAMgaQAPAUAQAXQgUAqgPAAQgDAAgDgCg");
	this.shape_642.setTransform(55.2,255.1,0.278,0.278);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#3EA2A2").s().p("AjkhxQAKgWAUgXQAnguAxgEQAIAXATAOIABABIAQAKIAAABQAVAVAmABQAOAAATgJQDGCfAEByQACA5glAZg");
	this.shape_643.setTransform(50.6,254.4,0.278,0.278);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#B4CFCD").s().p("Ai3BiIC4kZQACgEAFAAQAFgBADADQADANAIARQASAjAfAaQAeAYAoARIAiALQAEAEAAAFQAAAFgEADIkZDVg");
	this.shape_644.setTransform(52,246.7,0.278,0.278);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#F79178").s().p("AgHDQQhQhBAWgfQAWgfgqgnQgWgTgZgNIhNjrQAwgkBFgFQCKgLBoCXQBpCWhPCJQgoBEg8Ang");
	this.shape_645.setTransform(54.3,238.5,0.278,0.278);

	this.instance_144 = new lib.Path_3();
	this.instance_144.parent = this;
	this.instance_144.setTransform(37.5,185.6,0.278,0.278,0,0,0,6.5,7.5);
	this.instance_144.alpha = 0.102;

	this.instance_145 = new lib.Path_1_1();
	this.instance_145.parent = this;
	this.instance_145.setTransform(24.5,189,0.278,0.278,0,0,0,6.9,8.3);
	this.instance_145.alpha = 0.102;

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#491B0C").s().p("AgWBFQgYgVgLgkQgKgiAJgdQAKgcAYgGQAYgFAXAWQAYAVALAjQAKAjgKAcQgJAdgYAFIgKACQgSAAgTgSg");
	this.shape_646.setTransform(37.5,185.2,0.278,0.278);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#491B0C").s().p("AgXBJQgZgXgLglQgLgkAKgeQAKgeAZgFQAZgFAYAWQAZAWALAlQALAkgKAeQgKAegZAFIgKABQgTAAgUgRg");
	this.shape_647.setTransform(24.4,188.5,0.278,0.278);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FBA386").s().p("AgLBjQgmgQgXgpQgXgpAFgoQAEgpAfgRQAegRAlAQQAmARAXAoQAXApgFAoQgEApgfARQgPAJgSAAQgRAAgRgIg");
	this.shape_648.setTransform(17.8,191.4,0.278,0.278);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AAXAVQg/gKgygcQgFgDACgCQACgBAHABICgAYQAHABAGADQAHACgBACQgEAJgSADQgIACgKAAQgOAAgSgDg");
	this.shape_649.setTransform(31.7,192.7,0.278,0.278);

	this.instance_146 = new lib.Path_79_1();
	this.instance_146.parent = this;
	this.instance_146.setTransform(29.5,179.8,0.278,0.278,0,0,0,45.6,28.4);
	this.instance_146.alpha = 0.109;

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FBA386").s().p("AjOG7QiWhPgyihIgsiOQgyifBPiWQBPiWChgyIBPgZQBcgcBeAQQBcAPBNA2QA2AmAoA2QAoA3AUBBIAsCOQAyCghPCWQhPCWihAyIhPAYQg+AUg8AAQhgAAhbgxg");
	this.shape_650.setTransform(30,185.7,0.278,0.278);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#F79178").s().p("AgxBWQgcgegGguQgFgtAUgkQAVgkAigEQAigEAcAeQAdAeAFAuQAGAtgVAkQgUAkgjAEIgIABQgcAAgagbg");
	this.shape_651.setTransform(42.5,184,0.278,0.278);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#F79178").s().p("AhUiCIB9gLIAtEMIirAPg");
	this.shape_652.setTransform(33.5,199.3,0.278,0.278);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("Ag/CyQhmgQg4hiQgcgxgIgtIB3iLQALAaAaAZQAyAyBFgFQBGgFArgyQANgQAJgSIAGgPIBjBbIgMBOQgYBYg3A2QgMAMgQgEQgQgEgFgQQgRg2gWgXQgdgegvAIQgSAJgFAhQgDAWADAzQABASgNAMQgMAKgOAAIgFAAg");
	this.shape_653.setTransform(62.8,202.4,0.278,0.278);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#E6E6E6").s().p("AiJBuQhxhGgkiEQAMgHAigBQAMAsAEAMQAKAcASAVQAhAnAwAXQAhAQAjhFQAqhRAbgKQAZgIAlAJQAOADAyASQBNAbAUglQATgwACgsQAHgEAEABIAHAEQAPB3hABcQg+BXhgAPQgYAEgXAAQhWAAhRgzg");
	this.shape_654.setTransform(62.5,204.3,0.278,0.278);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#842725").s().p("Ai/DiIh4D8IktluIDSmiICpDRIC3miIFcGQIBsj8ICjC8QANBZAOBxIARB/IhJDOIjWjQIjGFwg");
	this.shape_655.setTransform(66.4,229.5,0.278,0.278);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#842725").s().p("AoxB5QgUgDgRgXQgXggAHgyQC3AUFxghQGqgpDzhYQAOA1gHAUQgJAdg5AWQiKA0mWAxQkVAiieAAQhQAAgygJg");
	this.shape_656.setTransform(68.2,254.5,0.278,0.278);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#842725").s().p("AkVBJQg5hCgihWIgSguQAxgKBsgRQAMAsAEALQAKAcASAWQAhAoAwAWQAuAWAzADQAzAEAwgQQA2gSApgoQAigjAgg5QAHgRAAgZIAAgrQBGgEA2ADQAJBSgQBKQgTBQguAzQg4A/hMAiQhMAihVABIgFAAQirAAh4iKg");
	this.shape_657.setTransform(62.2,205.8,0.278,0.278);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#772824").s().p("ApDKXQg5kbhGnVQBVhPAvhZQAwhbARh3QASiAgNhxQgPiBg1hlQAtgMBAgLIB0gTQALAsAEALQAKAcATAWQAgAoAwAXQAuAWA0ADQA0AEAwgQQA0gSApgpQAjgjAfg5QAHgRABgZIAAgrQBtgGBFAKIAAABQAYCHA3CDQA8CQBRBiQA2EAAmE5IAjD+QAYCwAJBqQAcFDhPANQjjAklIAgQi4ASlxAhIgBAAQgsAAhLl3g");
	this.shape_658.setTransform(65.4,228.8,0.278,0.278);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#E6E6E6").s().p("Ao4HwQggjUgfjlIgZi5QgjifCShHQA5gcBfgUQApgICIgWQAMAsAEALQAKAcASAWQAhAoAwAXQAuAWAyADQA0AEAwgQQA2gSApgpQAigjAgg5QAHgRAAgZIAAgrQCrgKBIAeQAWAKAKAMIAFAKIAhBqQApCNAlCvIkYD6Qh1BqitCfg");
	this.shape_659.setTransform(61.8,213.7,0.278,0.278);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#F79178").s().p("AhxD/QgwgvgBgzIASlMQAAgzAjglQAkglAzgBIAfAAQAzAAAlAjQAlAkAAAzIAcFkQABAxgwAmQgsAkg2ABIgeABIgCAAQgyAAgwgvg");
	this.shape_660.setTransform(63.2,198.5,0.278,0.278);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#C5E0DF").s().p("AgQBzQgGgWgThSQgPhCgNgnQALgRAkgEQAigDAPAOIAWBmQAOA9AFAoIABAFIg9ALQAAgBgMABIgJABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBg");
	this.shape_661.setTransform(48.2,202.1,0.278,0.278);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#3EA2A2").s().p("AjShNQCOgYDsgYIAWBmQAOA9AGAoIABAFIjwArg");
	this.shape_662.setTransform(44.3,202.7,0.278,0.278);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#F79178").s().p("ApUhCQA3gKBigNQDGgaDbgRQDbgRDgAzQBGAQA+AUIAwASIv0C1g");
	this.shape_663.setTransform(55,202.4,0.278,0.278);

	this.instance_147 = new lib.Path_94_1();
	this.instance_147.parent = this;
	this.instance_147.setTransform(27,198.7,0.278,0.278,0,0,0,67.9,97.8);
	this.instance_147.alpha = 0.18;

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#642812").s().p("ApNPMQi7g0hThDQCJiOA0k5QARhsAQizQAWj+AFgpQAmlfBhizQCEj0Ecg5QAegLAxgCQBkgGBjAoQE9B9C7IMQDYJeh9FfQh1FGmIA7QjhAhjEAAQkFAAjUg6g");
	this.shape_664.setTransform(27,197.1,0.278,0.278);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#E6E6E6").s().p("AAqDnQiwgOguhxQgphnAZh+QAIgnANgmIAMgdQAuBSBGBiQCKDCBzBMQAFADg0AGQgkAEgkAAQgWAAgXgBg");
	this.shape_665.setTransform(33.3,239.4,0.278,0.278);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#1B2728").s().p("AjUFfQAJkdgBjTQAAibgCgHIGPgrQAIBBAGCOQAIDSgDEcg");
	this.shape_666.setTransform(58.7,271.7,0.278,0.278);

	this.instance_148 = new lib.Path_97_1();
	this.instance_148.parent = this;
	this.instance_148.setTransform(68.5,256,0.278,0.278,0,0,0,57.8,13.9);
	this.instance_148.alpha = 0.172;

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#1B2728").s().p("AjgG5QAbk+AOjzQALi2gCgGIGLiEQAFBFgDDCQgEEQgXFag");
	this.shape_667.setTransform(78.2,269.2,0.278,0.278);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#1B2728").s().p("AgUDQQkPgDkJgTIgSmJIRyAHIALCEQAFCPgZA8QgfBJnRAAIhPAAg");
	this.shape_668.setTransform(68.4,258,0.278,0.278);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#73312A").s().p("AlFAmQA8hjBugnQB8gtClAZQCbAXA2A4QAqAqglALQgSAFgbgDIgYAWQgfAZgqAUQiHA+i7gaQAHgQAQgYQBnggBVg/IBBg6QhgAPhHA0Qg0AkgiAyQg+AThCAHQgBgKACgQQADgfAMgdQhZBMhGAlQAIgqAfgygAjNARQAwgoAwguIAmgnQhhAnglBWg");
	this.shape_669.setTransform(127.6,185.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},24).to({state:[]},6).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_669},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},9).to({state:[]},10).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_669},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},5).to({state:[]},30).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_669},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},15).to({state:[]},50).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_669},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},5).to({state:[]},10).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},10).to({state:[]},30).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_669},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},5).to({state:[]},29).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.instance_148},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.instance_147},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.instance_146},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.instance_145},{t:this.instance_144},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.instance_143},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.instance_137},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.instance_136},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.instance_135},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.instance_134},{t:this.shape_595},{t:this.instance_133},{t:this.shape_594},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.instance_129},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.instance_125},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.instance_124},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.instance_123},{t:this.shape_542},{t:this.instance_122},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119}]},5).to({state:[]},15).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.2,21.6,313.7,260.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ! 3
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(90.3,129.9,0.493,0.493);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(218).to({_off:false},0).to({scaleX:1,scaleY:1,x:101.3,y:106.6,alpha:1},4).to({scaleX:1.24,scaleY:1.24,x:102.3,y:104.6,alpha:0},30).wait(128));

	// ! 2
	this.instance_1 = new lib.Tween21("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,125.8,0.685,0.685);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220).to({_off:false},0).to({scaleX:1,scaleY:1,x:60.1,y:97.2,alpha:1},3).to({scaleX:1.34,scaleY:1.34,y:94.2,alpha:0},31).wait(126));

	// ! 1
	this.instance_2 = new lib.Tween20("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.9,123.6,0.571,0.571,0,0,0,0.1,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(216).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:27.3,y:113.5,alpha:1},3).to({scaleX:1.45,scaleY:1.45,x:24.8,y:109.3,alpha:0},31).wait(130));

	// # 3
	this.instance_3 = new lib.Tween18("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.4,161.7,0.545,0.545);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140).to({_off:false},0).to({scaleX:1,scaleY:1,x:99.9,y:130,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.59,scaleY:1.59,x:101.9,y:128,alpha:0},26).to({_off:true},1).wait(43).to({_off:false,regX:0,regY:0,scaleX:0.55,scaleY:0.55,x:88.4,y:161.7},0).to({scaleX:1,scaleY:1,x:99.9,y:130,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.59,scaleY:1.59,x:101.9,y:128,alpha:0},26).wait(136));

	// # 2
	this.instance_4 = new lib.Tween17("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(58.1,142.6,0.677,0.677);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(142).to({_off:false},0).to({scaleX:1,scaleY:1,x:50.3,y:110.5,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.98,scaleY:1.98,x:48.1,y:107.5,alpha:0},26).to({_off:true},1).wait(43).to({_off:false,regX:0,regY:0,scaleX:0.68,scaleY:0.68,x:58.1,y:142.6},0).to({scaleX:1,scaleY:1,x:50.3,y:110.5,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.98,scaleY:1.98,x:48.1,y:107.5,alpha:0},26).wait(134));

	// # 1
	this.instance_5 = new lib.Tween16("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(31.2,161,0.567,0.567);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).to({scaleX:1,scaleY:1,x:22.5,y:147.9,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.31,scaleY:1.31,x:16.6,y:141.6,alpha:0},27).to({_off:true},1).wait(42).to({_off:false,regX:0,regY:0,scaleX:0.57,scaleY:0.57,x:31.2,y:161},0).to({scaleX:1,scaleY:1,x:22.5,y:147.9,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.31,scaleY:1.31,x:16.6,y:141.6,alpha:0},27).wait(137));

	// ? 3
	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(110,168.8,0.631,0.631);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,x:112.5,y:145,alpha:1},4).to({scaleX:1.25,scaleY:1.25,x:119.1,y:137.5,alpha:0},29).to({_off:true},1).wait(47).to({_off:false,scaleX:0.63,scaleY:0.63,x:110,y:168.8},0).to({scaleX:1,scaleY:1,x:112.5,y:145,alpha:1},4).to({scaleX:1.25,scaleY:1.25,x:119.1,y:137.5,alpha:0},29).to({_off:true},1).wait(40).to({_off:false,scaleX:0.63,scaleY:0.63,x:110,y:168.8},0).to({scaleX:1,scaleY:1,x:112.5,y:145,alpha:1},4).to({scaleX:1.04,scaleY:1.04,x:113.6,y:143.7,alpha:0.828},5).to({scaleX:1.25,scaleY:1.25,x:119.1,y:137.5,alpha:0},24).wait(136));

	// ? 2
	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(47.9,156.9,0.612,0.612);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({scaleX:1,scaleY:1,x:40.7,y:138.8,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.52,scaleY:1.52,x:37.8,y:129,alpha:0},29).to({_off:true},1).wait(47).to({_off:false,regX:0,regY:0,scaleX:0.61,scaleY:0.61,x:47.9,y:156.9},0).to({scaleX:1,scaleY:1,x:40.7,y:138.8,alpha:1},4).to({regX:0.1,regY:0.1,scaleX:1.52,scaleY:1.52,x:37.8,y:129,alpha:0},29).to({_off:true},1).wait(40).to({_off:false,regX:0,regY:0,scaleX:0.61,scaleY:0.61,x:47.9,y:156.9},0).to({scaleX:1,scaleY:1,x:40.7,y:138.8,alpha:1},4).to({scaleX:1.05,scaleY:1.05,x:40.4,y:137.8,alpha:0.898},3).to({regX:0.1,regY:0.1,scaleX:1.52,scaleY:1.52,x:37.8,y:129,alpha:0},26).wait(134));

	// ? 1
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(79.5,158.9,0.58,0.58);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({scaleX:1,scaleY:1,x:78.5,y:128.1,alpha:1},4).to({scaleX:1.25,scaleY:1.25,x:80.6,y:119.6,alpha:0},29).to({_off:true},1).wait(47).to({_off:false,scaleX:0.58,scaleY:0.58,x:79.5,y:158.9},0).to({scaleX:1,scaleY:1,x:78.5,y:128.1,alpha:1},4).to({scaleX:1.25,scaleY:1.25,x:80.6,y:119.6,alpha:0},29).to({_off:true},1).wait(40).to({_off:false,scaleX:0.58,scaleY:0.58,x:79.5,y:158.9},0).to({scaleX:1,scaleY:1,x:78.5,y:128.1,alpha:1},4).to({scaleX:1.06,scaleY:1.06,x:79,y:126,alpha:0.758},7).to({scaleX:1.25,scaleY:1.25,x:80.6,y:119.6,alpha:0},22).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(192.8,137.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:187.8},9,cjs.Ease.get(-1)).to({x:192.8},5).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADIBWIAAh0QAAgRgFgQIANAAIACAFQABACACAJQABAIAAAJIAAB0gAlhAtIACgNQAEACAHgBQAGAAAHgEQAIgHADgKQACgGAAgGIAAgjQAAgKgEgEQgEgFgJAAIgKACIAAgLQAGgCAJAAQAaAAAAAdIAABQIgMAAIgBgTIgBAAIgCAEIgDAFIgDAEIgFAEIgHADIgHAAIgMAAgAFTAsIgohAIgFADQgIAHAAAOIAAAoIgNAAIAAgjQAAgRAFgJQACgDAEgEIAKgGIgVghIAQAAIAmA/QAFgCACgDQACgCABgFQACgEAAgHIAAgoIANAAIAAAjIAAANQAAADgDAHQgDAKgMAFIAUAigABmAsIAXhgIg5AAIAAghIAOAAIAAAWIA5AAIAAALIgXBggAhFAsIAAgLIAXAAIAAg+QAAgYgXAAQgEAAgEACIgGADQgGADgCAFIgBABIgIBTIgOAAIAIhSIAAgCIgBgIIgDgKIgCgFIAOAAQACADACAJIAAAAQAFgGAGgDIAIgEIALgBQAQAAAIAKQAIAJAAARIAABJgAiWAsIAAhrIAOAAIAABrgAkOAsIgJhrIAPAAIAFA8IAKgDQANgFACgTIAEghIAOAAIgDAcIgCALIgCAJIgFAJIgIAGIgMAEIgLADIADAaIAZAAQARABALgMQALgOADgXIAEgwIAOAAIgEAwIgDASQgDAIgDAFIgHALIgLAIQgGAFgIACQgIACgKAAgADvAHIAAhGIAOAAIAAA6IgLAMgAAkAHIAAhGIAPAAIAAA6IgMAMg");
	this.shape.setTransform(255,138.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8246").s().p("ArtC+QgeAAAAgeIAAk/QAAgeAeAAIXbAAQAeAAAAAeIAAE/QAAAegeAAg");
	this.shape_1.setTransform(236.2,137.1,0.898,0.788);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.2,122.1,140,30);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmVKeIAAm+IfVAAIAAG+g");
	mask.setTransform(160,67);

	// שח
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(271.2,75.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).to({scaleY:0.8,y:114.7},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:112.5},3).to({startPosition:0},55).to({y:148.5},5).wait(186));

	// ששת
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.3,78.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({scaleY:0.89,y:113.3},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:112.1},3).to({startPosition:0},45).to({y:148.1},5).wait(276));

	// mask2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AsiHSIAAlqMAllAAAIAAFqg");
	mask_1.setTransform(160.3,46.6);

	// על
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(197.8,39.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).to({scaleY:0.83,y:77.8},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:75.7},3).to({startPosition:0},135).to({alpha:0},10).wait(21));

	// תיבות
	this.instance_3 = new lib.Tween7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(234.8,43);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({scaleY:0.86,y:76.7},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:75},3).to({startPosition:0},60).to({y:107},5).wait(191));

	// נמשכה
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(207.7,43.3);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({scaleY:0.9,y:76.5},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:75.3},3).to({startPosition:0},50).to({y:105.3},5).wait(281));

	// mask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AwCEdIAAk9MAo5AAAIAAE9g");
	mask_2.setTransform(159.1,28.5);

	// האם
	this.instance_5 = new lib.Tween9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(185.6,10.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(194).to({_off:false},0).to({scaleY:0.88,y:40.2},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:38.8},3).to({startPosition:0},145).to({alpha:0},10).wait(21));

	// מה
	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(249.8,15.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({_off:false},0).to({scaleY:0.77,y:42.1},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:39.8},3).to({startPosition:0},65).to({y:71.8},5).wait(196));

	// כמה
	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.4,11.8);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({scaleY:0.88,y:41.1},7,cjs.Ease.get(-0.7)).to({scaleY:1,y:39.8},3).to({startPosition:0},55).to({y:69.8},5).wait(286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Symbol2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-687.5,-338.1,3.653,3.653,0,0,0,2,3.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1.9,regY:3.2,scaleX:4.3,scaleY:4.3,x:-844.6,y:-435.2,startPosition:9},250).to({regY:3.3,scaleX:1.1,scaleY:1.1,x:-27.5,y:-8.2,alpha:1,startPosition:4},14,cjs.Ease.get(-1)).to({regY:3.1,scaleX:1.25,scaleY:1.25,x:-69.6,y:-29.1},4,cjs.Ease.get(1)).to({regY:3.3,scaleX:1.1,scaleY:1.1,x:-27.5,y:-8.2},3).to({startPosition:14},78).to({alpha:0,startPosition:9},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.6,95.9,511.5,109.6);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(268.3,231.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},9).to({alpha:1},15).to({startPosition:0},330).to({alpha:0},10).wait(6));

	// btn
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8,16.1,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(370));

	// text
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,16.1,1.076,1.076,0,0,0,12.7,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(370));

	// family
	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(8.2,6.9,1,1,0,0,0,6.3,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(370));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,0,3).p("A5bvKMAy3AAAIAAeVMgy3AAAg");
	this.shape.setTransform(168,140,0.983,1.349);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(370));

	// sign
	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.5,8.1,1,1,0,0,0,16,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(370));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#BBFFF7","#A4F4EA"],[0,1],-128.9,111.5,128.8,-111.5).s().p("A6OV4MAAAgrvMA0dAAAMAAAArvg");
	this.shape_1.setTransform(168,140,1.001,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(370));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,0,511.5,282.4);


// stage content:
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_654 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(654).call(this.frame_654).wait(85));

	// mai
	this.instance = new lib.Symbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.7,3.6,1,1,0,0,0,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(739));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.4,140,511.5,282.4);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;