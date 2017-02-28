import createjs from './createjs-2015.11.26.min';

var cjs = createjs;

var lib = {};
var images = {}
// createjs,
var ss = {};
var AdobeAn = {}

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Cat_atlas_", frames: [[420,289,293,230],[285,399,75,61],[420,0,352,287],[0,0,418,397],[453,521,109,135],[715,446,204,156],[170,399,113,304],[774,242,192,202],[564,521,147,96],[285,521,166,173],[0,399,168,213],[774,0,211,240],[713,604,144,34]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._01 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._02 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._03 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._04 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._05 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._06 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._07 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._08 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._09 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.spriteSheet = ss["Cat_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
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


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,34);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnbHcQjFjFAAkXQAAkWDFjFQDFjFEWAAQEXAADFDFQDFDFAAEWQAAEXjFDFQjFDFkXAAQkWAAjFjFg");
	this.shape.setTransform(67.3,67.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],5), null, new cjs.Matrix2D(1,0,0,1,-102,-78)).s().p("Av7MMIAAgKQP7AFP8AAIAAAFgAkfIYIgFgEQgCgCgFAAQgKgfgfgGQgJgDgIgEQgCgBAAgFQhxgbhpgmIgFgCQgCgDgFAAQACgbgKgPIgEgGQgDgCgFAAQAEghgMgTQgCgDAAgFIAAgKQAQgnAVghIAFgEQAIgEAKAAQAPgVAJgcIAEgDQACgDAAgFQAjgKAkgIQAJgCAIgEQACgBAAgFQDugvD6gmIACgBQATgEAUAAQAYgWAigLQACgBAAgFIAAgKQAFgFAGgBIAmgJQABAAAAgFQBcg/Akh1QACgFADgCQACgDAFAAQAMhEAIhIQAAgFgCgDQgDgCgFAAQAUgPASgSIAEgEQADgDAFAAQAJi+BhhpQAEgFAIgEQACgBAAgFQAUAAATgEIADgCQAIgEAKAAQAKgFAHgHIAGgGQACgCAFAAQALATAUAJIAHAEQACADAAAFQBgAPBoAAIACABQAIAEAKAAQA4AnApA1IAGAFQACADAFAAIAAAUIAAAKIAAAKQASASAKAXIAEAGQADADAFAAIAACCQAAgFgCgDQgDgCgFAAIAAAUQADEvhbDPQgCAEAAAFIAAAKQgFAFgDAGQgCAEgCABQgIAEgKAAIAAAUIAAAKIAAAKQgcAIgGAfIgDADQgDADAAAFIgegJQgFgBgDACQgCADAAAFQgxA9g/AuIgFAGQgDACAAAFQgZAAgYAFQgBAAAAAFQgQgBABAVIgCACQgDADAAAFQgUAFgNANIgEAEQgDADAAAFQgigEgNAQIgGAFQgCADgFAAQAAAFgBAAQgdAFgeAAQgKAKgLAIIgGAEQgDADAAAFQgeAAgdAFIgDADQgDACgFAAQAAAFgCABIgQAIQgCABAAAFQgUAAgTAFIgCAAQgYAFgZAAQAAAFgCABIgQAIQgCABAAAFQhWAIhPAAQjFAAibg0gAv7sBQB/AACAACQiAACh/ABgAv7sGIAAgFIf3AAIAAAFQv8gFv7AFg");
	this.shape.setTransform(102,78);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,204,156), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],10), null, new cjs.Matrix2D(1,0,0,1,-84,-106.5)).s().p("AtHQpIAAgKQNHAFNIgFIAAAKgAoHPjQgKACgogCQgNgXglADIgFgFQABAQgQgBIAAAFQgagigsgVQgFAAgBACQgOAYgKgaQgPgKgJgOQgYgmgggcIgFAAQAGgTATgLIgFAAQAdgwgOgMQAKgFAEgIQALgXAPgOQAxgGAfgYQBkgPAAgZQA0gjAcAFQAAgFACgEQAIgQAUgFQAFgFACgGQADgJAAgKIAUgKQAigPgOgPQADgRAMgKIBLg/QgGgVAMgGQAOgIAKgPQAAgPADgOQAHgaAKgZQgFgFABgDQAKgsgaACQAFgKgDgFQgQgagQgdQAMgbgDgHQgPgjgYgVQAAgZgJgVQgNgaACgvQgagEgDgjQgEgrgHgwQAKg8AHg9QASikAjiRIA8hQQBVh3BfhvIAoAAQAAgFACgDQAIgHAKgFQA0gCAlgSQAAgFACgBQArgOAZgeQDMAGCSBAQAFAKAHAIQAZAZAhARQAFAKAGAJQAZAeAiAVQAAAPAFAMQAMAZAXASQAAAKAFAGQAKAOAFAUQAAAFgCABQgVAMgHAWQAFAUAIAOQARAeAeAQIAAAFQgpgLgJAGQAAAPAHALIAXAiIgLAJIgTALQgKAKAKAMQASAVACAlIAFAAQgOAWgLggQgTAKAOAXQAqBDgbAAQgFAFAAAFQAAAUAPAKQAAAPAGAMQAGAQgCAbQgIAWgFAcQgOBIAbAcQAHAlgIARQgTAogKAtQAAAKAEAIQAFANABATQg+ABACAnQgFAFgBAFQgDASgVAWQAdAfg6AJQAsgGgZAaQgTAkgzAEQAAAFADADQASAUgzACQAAAPgHALQgIAOgFAUQgdAVgVgfQgJARgLAMQgYAbgaAYQgFAFgFAAQgKAAgKgFQAAAKgDAJQgMAagZAPQgFgFgGAAQgQgCAHAbQghgVgIAcQgOAwgZgFQgFAFgGADQgQAKAHAgIgLAJIgdAVQgFgWgMASQgLAUgMgaQABAuglAPQgxASgYAzIgKABQgXAFADAiQgFAAgEABQgLAEgKAFQAAAKgEACQgMAHAGAVQgFgFgCgGQgIgWgFAXQAAAKgEAHQgnA4gbghQgQgBgFASQgJAjgUggQgTAug9AEIAAgPQgVAIgJgNQgFgXgIAWQgMAkgPgjQgKgFgBACQgTAbgKgOQgKgFgCABQgPAVgNAAQgLAAgJgRgAtHwoIaPAAIAAAFQqDAAqCAEIDsADIp2AIg");
	this.shape.setTransform(84,106.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,168,213), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,113,304), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],7), null, new cjs.Matrix2D(1,0,0,1,-96,-101)).s().p("Au/PyIAAgKQO/AFPAgFIAAAKgAlRPPIgDAAQgdgFgeAAQgKgKgMgGIgQgIQgCgBAAgFQg3gPgvgWIgQgHQgCgBAAgFQgogFgngJIgDgDQgDgDgFAAQgQgngrgQIgDgBQgIgEgKAAQgfgTgWgdIgEgEQgDgDAAgFQgkgIgWgYIgFgFQgCgDgFAAIAAg8QAAgFgDgDQgCgCgFAAQgMgXgbgLQgBgBAAgFIAAgKQAjhGAAhkIgCgDQgDgCAAgFQANhIAQhEIABgKIAAgKQBTjYB4i1IAFgEQACgDAAgFQAPALgSAaIgFAGQgCACAAAFQAkgKAMgfQACgEAAgFIAAgKQATgBAJgLIAEgFQADgDAFAAQgBgTgEgLIADgDQACgCAAgFQBCgYAShLIAEgDQACgDAAgFQBXhEA8heIAFgEQAIgEAKAAQAAgUAIgLQACgEAAgFIAAgKQAUgFAOgHQAQgIATgEQABgBAAgFQAJgfAogEIAEgDQACgCAFAAQAPgUARgRIAGgGQACgCAAgFIAwgOQACgBAAgFIAAgKQAUAAATgFQABAAAAgFQAWgIALgUQAAgBAAAAQABAAAAAAQABAAAAABQABAAABABQACACAAAFQAqgSAggbQAGgFAIgEQACgBAAgFQAKAAAIgEIAEgCQANgEAPAAQAAgKAEgIIAEgFQACgCAAgFQAtgLAcgbIAFgEQACgDAAgFQAggCgYAUIgGAEQgCADAAAFQBpAABdg2IAEgCQAIgEAKAAQATgLAPgOQAGgFAIgEQACgBAAgFIAoAAQAKgKAMgGIAQgIQACgBAAgFIAKAAQsGgFsRAAIAAgPId/AAIAAAFQkwAAkwADQDbADDbAAIiqAEIAAAFQgKAFgIAHIgEAEQgIAEgKAAQgRAXggAMIgDABQgIAEgKAAQAAAFgCABIgQAIQgCABAAAFQgNAMgbADIgCADQgDACgFAAQAUAFAUAAIADgDQACgCAFAAQAGAeAqgOIAEgCQAIgEAKAAQAZgPAUgUQAFgFAIAEQACABAAAFQgFAJgJATIgEAEQgCADAAAFQAgAWBYgCQAFAAADADQACACAAAFQA3gMA4AKQAJACAIAEQACABAAAFQgzAdAKApIABAKIAAAKQgJAaAOAgIACAEQADADAAAFQAVgIAIgWQABgFADgDQACgCAFAAQgCAmgPAYQgDADAAAFIAAAKQAeAPAZAUQAFAFAIAEQACABAAAFQgVAYAVALIAAgFIAAgKQANAmgWA1QgBAEADACQACADAFAAQgGAegQASIgGAEQgCADAAAFQAPAVgFAnIAAAKIAAAKQgFAFgDAGIgEAGQgDADgFAAQAAAKAEAIIAEAFQACACAAAFQghA9gjA8QgCAEgCABQgIAEgKAAQgKAUgJAVQgBAEgCACQgDADgFAAIAAAeIAAAKIAAAKQgZAZghASIgEAEQgDACgFAAQgFAFgDAGQgCAEAAAFIAAAKQgKAAgIAEIgFAEQgCACgFAAQgKAZgJAaQgBAEgCADQgDACgFAAQgfAYgwALIgDACQgDADgFAAQgZAUgbASIgFAEQgDADAAAFQgRADACAbIgCADQgDACAAAFQgNALgaAEIgDABQgIAEgKAAQgKAKgMAIIgFAEQgDADAAAFQgCAMgUAQIgGAFQgCACAAAFQgKAZgRARQgDADAAAFIAAAKQgrAHgLApIgEAFQgCACAAAFQghAWgjAWIgEAEQgDACgFAAQgDBPgtBSIgFAHQgCACgFAAQATAGgEAXIgCAEQgDACAAAFQg2AkgeA+IgDAFQgDACAAAFQgiAKgSAcIgFAFQgCACAAAFQiDAchgBCQgDABAAAFIAAAKQgMAGgQAAQgWAAgcgLg");
	this.shape.setTransform(96,101);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,192,202), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,109,135), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._09();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,147,96), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],9), null, new cjs.Matrix2D(1,0,0,1,-83,-86.5)).s().p("AH5NgIAcAAIEpgEIAAAFgAs9NhIAAn/QAEAbAGAYQAAgZAGgYQALgsADg5IAAgKIAAgKQARABAHgNQC8k7EwjQQAOgJAKgPQAKAAAIgEIAEgCQAIgEAKAAQAAgFADgDQARgXAcgNIAEgEQADgCAFAAQAHghALgWQBJiQBWh7QACgDAAgFIAAgKQAPAAANgEIAFgEQACgCAFAAQAAgFACgBQAcgOASgWQACgDgCgCQgDgDgFAAQAUgFASgJIAFgEQACgCAFAAQAMgXAmgCIAAgFIAAgKIAAgFQoCAAoDAFIAAgUIZ7AAIAAAFInvAAIg+AAQiMABiKACQCIACCJAAIgIAKIAyAAQAKAKAMAGQAIAEAIgEQACgBAAgFQAAgFgDgDIgIgMIBVAAQgWABgVAEQgBAAAAAFQAZAAAYgFQABAAAAgFIDSABIi+AEIADACQACADAFAAQgJArA5gbIAFgEQACgCAFAAQAAAFACABIAQAIQACABAAAFIAoAAQAAAKAEAIIAEAFQACACAAAFQAwAVAiAlIAGAEQACADAAAFQgTAjAmAJQABABAAAFIAAAKQAbABANgGIAAAFIAAAKQAnBbAoCMQABAEAAAFIAAAKQgNAWgOAUQgBABAAAAQgBABAAAAQAAABAAAAQAAABABAAQAIAEAKAAQgSCYgfCLQgBAEgCACQgDADgFAAQgPAFgMAIIgGAFQgCACgFAAQgFAKgIAIIgEAEQgDACAAAFIAAAeIAAAKIAAAKQgYAVgKAlIgEAFQgCACAAAFQgPAPgMARIgGAGQgCACgFAAQgMAhgXAWQgFAFgIAEQgCABAAAFQgsgLgdAxIgFAEQgCADAAAFQgKAAgIAEIgEACQgIAEgKAAQgcBDhGAcIgFACQgCADgFAAQhBBVhEBSIgFAGQgCACAAAFQgYgPAWgSQACgCAAgFIAAgKQgXgHADBDIAAAKIAAAKQhNBYhPBXQgEAFgIAEQgCABAAAFQgXAHgSAJIgQAIQgCABAAAFQhvAJhkAPQgsAGgsAFIgBAFg");
	this.shape.setTransform(83,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,166,173), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],11), null, new cjs.Matrix2D(1,0,0,1,-105.5,-120)).s().p("AweSwIAAgKQQeAFQfAAIAAAFgABhSEIgEgDQgDgDgFAAQgiAehTgsIgEgDQgDgDgFAAIgJgoQgBgFgDgDQgCgCgFAAQADAwgQgQQAAAAgBAAQAAgBgBAAQgBAAAAABQgBAAAAAAQgDADAAAFQgJALgYgdIgFgEQgCgDAAgFQgPAcgjgNIAAAFIAAAKQgOgtgrAcIgFADQgIAEgKAAQgLAFgTAEQgFABgDgCQgCgDAAgFQgugTgggiIgEgEQgDgDgFAAQgBBEgbgxIgFgGQgCgDgFAAQgUAUgXgbIgFgGQgCgCAAgFIgyAAQAHgbgPgHIgFgEQgCgCgFAAQgXADgZgtIgFgFQgCgDgFAAQgDAOgZgSIgEgDQgDgDgFAAQg6hNgyhVQgCgDAAgFIAAgKQgngLgKgnQgBgFgDgCQgCgDgFAAQgEhCgiglQgCgCAAgFIAAgKQgkAAgYg3IAAAFIAAAKQghgggVguIgDgEQgDgDAAgFQAAgZgFgYQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAABQgDACAAAFQhViRAjkSIAAgKIAAgKIAUiCQAAgFgCgDQgDgCgFAAQAFgUAHgTQCOl5EYjvQAGgFAIgEQACgBAAgFQAdgBAQgOQAFgFAIgEQACgBAAgFQA4gOAmgfQAGgFAIgEQACgBAAgFQAUgFASgJIAEgCQAIgEAKAAQAXgbAugIIACgBQATgEAUAAQBsg0CCghIACgBQATgEAUAAQAAgFACgBIAQgIQACgBAAgFQCfhXDAAkQAJABAIAEQACABAAAFQBmAWBsASQAFAAACADQADACAAAFQAfAnAqAaIAPAJQACABAAAFQAPAAAOgFIADgBQAIgEAKAAQAWAcASAbIAAgFIAAgKQAPAUANAWIAEAFQADADAFAAQgUgwAfAQIAHAEQACADAAAFQgCAcAGARQABAFANAEQACABAAAFQgBA4AnASQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAAAQgIAEgKAAQAUAkAXgiQABAAAAAAQABgBAAAAQABAAAAABQABAAABAAQACADAAAFQAXAMACAcIgCADQgDACAAAFQAPAYAXATQACACAAAFIAAAKQgSAcAFAFIAGAEQACADAFAAQAHhZADhlIgBMwIAAgaQgFkLgIkIQgEAUgHAUIgCADQgDADAAAFQAGApgFAdIgBAKIAAAKQgTAfAHAUQACAEAAAFIAAAKQgfAPAcAlQADADAAAFIAAAKQgQASgEAWIAAAKIAAAKQABBhgxBeQgCAEAAAFIAAAKQgCAbAKANQACAEAAAFIAAAKQgBAdgTAGIgDgCQgCgDgFAAQAVBAgVAzIgDgCQgCgDgFAAQgHBXAQA/IABAKIAAAKQgRBXgaAfIgFAEQgCADAAAFQAKAkgSAtQgCAEgCADQgDACgFAAQgDARgOgTIgFgEQgIgEgKAAQgVAeAQAeIgDADQgCACAAAFQgQgBgIAMQgGAJgTAEQgBABAAAFQAKAKAAAUQAAAFgCABQgIAEgKAAQgOgtgGAjIAAAKIAAAKQgegIgeAXIgDgCQgCgDgFAAQgCApgPAMIgFADQgIAEgKAAQgdABgpAiIAAgFIAAgKQglAcgeAjQgDACAAAFIAAAKQgOARgOgcIgEgGQgDgDgFAAQAAAzgSAMQgCACAAAFIAAAKQgjgFgFgeIAAAFIAAAKQgDAvgdAUIgGAGQgCACAAAFQgPAAgNgFIgFgCQgCgDgFAAQAHAggOALIgGAFQgCACgFAAQg4Ahg+BPQgCADAAAFIAAAKQgMAGgMAAQgQAAgSgKgAQIpfIAGAGIADABIgBgdIgCgCQgDgDAAgFQgTAKAQAWgAtWKAQAFAAAAACQARAogBAAQgBAAgUgqgAtqJiQAFAAAAACQAJAYgBAAQgBAAgMgagAweylQCEAACEACQiEACiEABgAweyqIAAgFMAg9AAAIAAAFQwfgFweAFg");
	this.shape.setTransform(105.5,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,211,240), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-209,-198.5)).s().p("EggpAfBIAAgKUAgpAAFAgqAAAIAAAFgAKfeUIgDABQgNAEgPAAQgJgKgGgTQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABgBAAQgCADAAAFQgDARgOgTIgEgDQgTgFgUAAQAAgFgCgBIgQgIQgCgBAAgFQgiAEgNgQIgGgFQgCgDgFAAQgJgHgogIIgEgCQgCgDgFAAQgcgugygcIgEgCQgIgEgKAAQAGgVgPgDIgDgCQgIgEgKAAQgFgUgPgFIgCADQgDACgFAAQgbgeAMgeIgCgCQgDgDAAgFQgMgXgPgTQgDgDAAgFIAAgKQgYAPAWASQACACAAAFIAAAKQgNAIgZgeQgCgDAAgFIAAgKIgoAAQAAgFgCgBIgQgIQgCgBAAgFQgpAGgQgSIgGgGQgCgCgFAAQAAgFgBAAQgdgFgdAAQAAgFgCgBIgQgIQgCgBAAgFIhQgcQgFgCgCgDQgDgCAAgFQgUAFgUAAIgCgBQgIgEgKAAQgJAXgBghQAAgFgDgDQgCgCgFAAQgCAagvgLIgDgBQgIgEgKAAQgKgPgUAAIAAAFIAAAKQgKAEgTgpQgBgDgIAEQgCABAAAFQgHAGgXgVIAAAFIAAAKQgegohFgFIgEgCQgCgDgFAAQgPgjgFgtIAAgKIAAgKQgQACgEgVQAAgBgIAEQgCABAAAFQgBAQATAtQACAEAAAFIAAAKQghgbgYgjQgDgDAAgFIAAgKQgggDgMgZQAAAAgBgBQAAAAAAAAQgBAAAAABQgBAAgBAAQgCADAAAFQgIgQgUgJQgCAAAAgFIAAgKQgKgbgFAbIACADQADACAAAFQgfAGgbgvQgCgEAAgFIAAgKQglgIgRgeIgEgFQgCgCAAgFQgUgFgSgJIgEgCQgIgEgKAAQgMgbgQgZIgEgFQgDgDgFAAQgUgKgVgHIgRgHQgCgBAAgFQgnACghgUIgFgEQgDgDAAgFQgkAYgJg1IgDgEQgCgCAAgFQgPAOgPgJIAAAFIAAAKQhHgDgugeIgGgFQgCgCgFAAQgKAFgKAAIgCgBQgIgEgKAAQAHgvglgCQgKgBgIgEQgCgBAAgFQgjAAgjgFIAAgFQgXgRgZgQQgCgCAAgFIAAgKQgLgJgRgGIgFgCQgCgDgFAAQgZgiAEgRQABgEgCgDQgDgCgFAAQgMghgVgYQAAgBgBAAQgBgBAAAAQgBAAAAABQgBAAAAABQgDACAAAFQgggCg6gXIgDADQgCACgFAAQgXgigjAuIgEAFQgDADgFAAQgFAUgMANIgFADQgIAEgKAAIAAgyIAAgKIAAgKQikm5iQnLQgCgEgCgDQgDgCgFAAIAAhtQAAAEACADQADACAFAAQALj1ASjrIABgKIAAgKQF3pxJrl6QALgHANgEQACgBAAgFQAKAAAIAEIAEAEQADACAFAAQB6ggDjAvIADACQADADAFAAQAKgPASgJIAEgCQAIgEAKAAQCSA2DfAfIABAFIAAAKQgKAVCWgLQAFAAADACQACADAAAFQgNAYBmgDQAegBAdAFQABAAAAAFQAKAKAMAGIAQAIQACABAAAFQCIgKBHA1IAGAEIADACQhHgJiHgFIACABQAIAEAKAAQB7AlCTASIADADQACACAFAAQgZAaAtgBIACABQAIAEAKAAQAIAVAUAMQACACAAAFIAAAKQAUAAATAEIACACQATAEAUAAQARAWAhADIACgCQADgDAFAAIBBBBQAFAFAIAEQACABAAAFQAUAAATAFIADABQAIAEAKAAQAyB9CAAyIAFACQACADAFAAQATALAOAQIAFAGQACACAAAFQAjAAAjAFIAAAFQAdAMgwADIgEADQgCACgFAAQAyAyBEAiIAEACQAIAEAKAAIA+BEIAGAEQACADAAAFQAPAZAiAKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQgNAEgPAAQAyA3A1A0IAEAGQADACAAAFQAKAFALADQAJACAIAEQACABAAAFQANAMAaADIAEADQACACAFAAQESEZDMFeQACAEAAAFIAAAKQATABAJALQACADgCACQgDADgFAAQApAQgTAjQgCAEACACQADADAFAAQAPgGAFAkIgIAEQgCABAAAFIgJAnIgBAKIAAAKQAJAaALAOIgIAEQgCABAAAFQAgAQgTARQgDACAAAFIAAAKQgsALApAgQABABAAAAQABABAAAAQAAABgBAAQAAABgBABQgCACgFAAQgRgPAPAkIAFAGQACADAFAAIgJAyQgBAFgDADQgCACgFAAQAEAugEAiIAAAKIAAAKQgUAfAJAUQABAEAAAFIAAAKQgfAQAdAkQACADAAAFIAAAKQgQASgEAWIAAAKIAAAKQARA4gsAlQgBAAAAABQgBABAAAAQAAABABAAQAAABABAAQACADAFAAQgJBVgnA4IgEAHQgDACgFAAIAAAyIAAAKIAAAKQgRADgCARQgBAFgCADQgDACgFAAQgDBIgGBEQgBAFgDADQgCACgFAAQgTAfgpAEIgCgCQgDgDgFAAQACAcgJAOIgGAGQgCACgFAAIgpASQgEACgDACQgCADAAAFQgYAPAYAKIAAgFIAAgKQApAbhHAIIgDgCQgCgDgFAAQgWAmgcAWIAIAEQACABAAAFQhLBkhhBNIgGAGQgCACAAAFQgKAAgIAEIgEACQgIAEgKAAQh0Boh/BbIgPAJQgCABAAAFIgxAPIgDABQgIAEgKAAQgTALgQAOQgFAFgIAEQgCABAAAFQgyAPgxATIgDACQgIAEgKAAQgNAWgkADIgDABQgIAEgKAAQgKAPgNAKQgHAFgIAEQgCABAAAFQgiAAgQAXQgFAHgOAFQgBAAAAAFQgTgBgLgEIAAAFIAAAKQgLgJgSAEgAfkAZQAFAAAAABQAJAhgBAAQgBAAgMgigEggpge7IAAgFMBBTAAAIAAAFUggqgAFggpAAFg");
	this.shape.setTransform(215.5,205);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-209,-198.5)).s().p("EggpAfBIAAgKIBBAAIAAAKgEggpge7IAAgFMBBTAAAIAAAFUggqgAFggpAAFg");
	this.shape_1.setTransform(209,198.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,424.5,403.5), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],2), null, new cjs.Matrix2D(1,0,0,1,-176,-143.5)).s().p("A7fWbIAAgKQbfAFbgAAIAAAFgAgHVyQgCgEAAgFIAAgKQhAgBgugTIgVgUQgdgdgUAJQgRgDgBgaQgCgYAAAhQgPAUgUgeIgthGQAAgPgHgKQgMgQgLgTQgRADAQAUQAIAKgHAbQgpAKAAgoQgBghgIglQgFgFgDgGQgCgEgCgBQgIgEgKAAQgDgggTgRQgggbgkgYQACAcAKAVQAOAZgGAuQgigagJg1QgOhUgrg5QgPgFgGAFQgOAMgFgWQgRgNgBglQAAgqgWAMQgHAbAMAJQAaATgfAPQgbgIAGgqQALhGgegeQAAAKACAKQAKAvgqgHIAAg8QABgqgLgcQgUgFgOgLQgNgMAHggQAAgKgEgBQgQgJgeAAIAAgoIAAgUQgQABgFgMIgTABQAAgUgIgFQgZgNADggQgLgJgPgJQgEgCAAgKQgGgVAEgGQAYgpgqAIQgBgUgEgMQgFgNAAgPQgRgDgKgKQgQgRAXgKQgKgKgLgIQgQgKAHggQgVgTgKgfQgPgwgOg0QgKgFgLgDQgEgCgDgDQgCgCAAgFQAAgPADgOQAJgvgqAHQgBgTgEgNQgFgNAAgPQgbgbgEg1QgGhOghg0QAAgjADgjQAFgsgIgkQgRADgBARQgCAogeAKQABgTADgNQAGgSAAgUQAPgKAIgSQAOgjgbgHQABgqgIgdQgQgugRgrQADgRAEgJQAHgPAQABIgUgUQgTgUATgKQATgPAKghQAKghABgxQAKgKAHgLQAcgsAUgvQAohiBLg8QA0gIAwgMQAFgeAQgXQAYglAjgeQBYgYA0AsIBQAUQATALAPAPQAbAcAdAaQBYADA0ghQBVgYBBAiQAAAFACABIAQAIQACABAAAFIBQAAQAKgFAGgIQAPgQATgLQBjANA8gDQAKgFAGgIQAPgQATgLQCZgqBrA+QBggOBogGQAAgFACgBIAQgIQACgBAAgFQBGAAA8AKQAAgFACgBIAQgIQACgBAAgFQAUAAATgFQABAAAAgFQBNAJBJgnIAAgKQAAgFACgBQAIgEAKAAIAAAFQAkgIAigRQAKAAAJADQAfAMAeAPQAFAWAOgIQASgMADgWQATABAGgCQAYgLALAgQAUAAAOAJQABABgFAKQAUAAATgEQAGgBAFgFQABAhAMgBQA/gHgGAtQATgBAKgKQAQgQAPAbIAFgFQASARAbAIQAKAFAKAAQAKAAAKgFQAPAFANAIQAMAIAAATQA8gRAoAvQAAAFgBABQg6AOAJAKQANAbAQAVQAfArAeAnQAAAUAFASQAFARAKAPQgBATACADQAGAHgHAVQgRADgGAXQgPA3ASAJQAFAFgBABQgKASgYAGQAAAUgFAMQgFANAAAPQgkABAZAMQAGACAFAFQAHAWgFAGQgQAbgkAFQAKAZggAiQgmAogVA9QgnBwgeBOQgFAKgIAEQgbALgUAPIAAAUIAAAKIAAAKQgpAYgZAqQgmBBgkBFQgDAWgXAIQgXAJATAKQgKAPgNALQgpAigaAAQACAbgEAPQgIAcAAAeQgUAFgEARQgGAXAAAZQgFAKgHAIQgJALgTABQgEApgaATQgpAignAkQgUAjgaAdQg6BDgwBLQg/BjhBBfQgRgQAFAMQAJAVgRADQgFAKgEAAQgOgDgRgRQAIAqgSASIg8A8QAAAUgIAQQgHAOgFAUQgRgQgKAIQgQANAXAFQggAhggAhQg2A9hIArQAAAKgEAIIgEAEQgCADAAAFQgUAFgLANQgYAbgjAPQAAAKgEAIIgEAEQgCADAAAFQgLAJgOAJIhBAqQgFAAgEACQgeATgpAJQgEgFgDgGgA7LsaQAKAAACAEQAPAZgCAAQgCAAgXgdgA7f2QQDcAADcACQjcACjcABgA7f2VIAAgFMA2/AAAIAAAFQ7ggF7fAFg");
	this.shape.setTransform(176,143.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,352,287), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-37.5,-30.5)).s().p("Al2ExIAAgKQF2AFF3gFIAAAKgAg8EHQgJgIgNgFQgCAAAAgFQgFgFgDgGQgCgEAAgFIAAgKQgZgFgNgRIgEgEQgIgEgKAAQAAgUgIgMIgDgDQgOgFgPAAQgKgKgEgTIgDgDQgDgDAAgFQgLgJgSgGIgDgDQgDgCgFAAIgrhEIgEgEQgDgDAAgFQgLgIgSgGQgBAAAAgFIAAgKQgMgbgNhIIgCgEQgDgCAAgFQAPgPAFgZQAAgFACgDQADgCAFAAQAygPAzgLIAmgIQABgBAAgFQAWgJALgTIAFgEQACgDAAgFQANgLAagEIAEgDQACgCAFAAQiHgFiHAAIAAgPILtAAIAAAFQkkAAkkAEIClABQAKAFAHAHIAFAEQAIAEAKAAQAqAqAvgHIADACQACADAFAAQAPAZAsgKIADAAQANgFAPAAQAWATAdAGIAmAJQABABAAAFQBAApAZBPQABAFAAAFIAAAKQgNANgjgRIgEgDQgDgDgFAAQACAggfADIgDABQgIAEgKAAQgKAOgNAKQgHAFgIgEQgCgBAAgFQgKAPgIAQQgCAEgCABQgIAEgKAAQgLAigVAYQgDACgDgCQgCgDAAgFQgzBjhMBJIgGAGQgCACgEAAQgIgogHAyIgCACQgDADAAAFQgRgSgTgOg");
	this.shape.setTransform(37.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,75,61), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Cat_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-146.5,-115)).s().p("A24R+IAAgKQW4AFW5AAIAAAFgAw6RoQgCgDAAgFQAIg+hEAbIAAgFIAAgKQAMgNgCgbIAAgKIAAgKQgbgXgUgdIgGgFQgCgDgFAAQgUgKgSgNQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgBAAAAQAIgEAKAAQgSggAPgUQADgDAAgFIAAgKQgOgeAcglIADgGQADgCAAgFQgtgFgsgKIgEgDQgCgCgFAAQAygUAzgSQAEgCACgDQADgCAAgFQgFgFgDgGQgCgEgBAAQgdgFgeAAQgKAKgHAMIgFAEQgIAEgKAAQgUAUgSggQgCgDAAgFIAAgKQAKgFAIgHQAAgBABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgYgFgZAAQgVgTgegIIgRgHQgCgBAAgFQCKAQC1gLIADgBQANgEAPAAQgGgVAPgEQABAAAAgFIAAgKQgsgahLALIgDABQgIAEgKAAQgKgLgEgRIgEgFQgCgCAAgFQA6gfBRgOIAEgDQACgCAFAAQgQhAAGgkIAAgKIAAgKQgggEAUglQACgEAAgFIAAgKQAQABgBgVIACgCQADgDAAgFQACgbgOgKIgFgGQgDgCAAgFQAZhQAYhRQABgEAAgFIAAgKQgKgUgJgUQgBgEAAgFIAAgKQAmgdgag0QgCgEAAgFIAAgKIAJgoQABgFgCgDQgDgCgFAAQgCgbAKgPQACgDAAgFIAAgKQgYiSgGikIAAgKIAAgKQgkgTgJgyIgDgEQgCgCAAgFQARgNgGglIgBgKIAAgKQAQABgBgVIACgDQADgCAAgFQgKgZgJgZQgBgFAAgFIAAgKQgHgbAQACIABAFIAAAKQATgngRgzQgCgFADgCQACgDAFAAQAIgHALAmQABAEACADQADACAFAAQAEg2AEgIQACgDAAgFIAAgKQAWAIAHAWIABAKIAAAKQAUASANgPIAEgGQADgCAAgFQAJgFAdAbIAEAGQADACAFAAQAPg4ANAlQACAEgDACQgCADgFAAQAYAhAlgVQAEgCACACQADADAAAFQAPAPAMAQIAFAFQANAEAPAAQgCAbAUAHIAEACQAIAEAKAAQAQgsAJA1QAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQADgDAAgFQAhgPAUAKIAPAJQACABAAAFQA1AOASgMQAEgCACACQADADAAAFQARAIgCAgIACgDQADgCAAgFQAWgNAcASIACgBQAIgEAKAAQAUAVAUAAQAFgBADADQACACAAAFQAPARANgcQACgEACgBQAIgEAKAAQANAeAvgPIAAAFIAAAKQAUgFAOgKQAGgFAIgEQACgBAAgFQAwAOAqgJIACACQADADAFAAQAMgeAmAPIADgCQACgDAFAAQAAAFACAAQANAFAPAAQAFgFADgGIAEgGQADgDAFAAQAKgTARAVQADADAAAFIAAAKQAmAEAVAFQAFABADADQACACAAAFQAcgWAYATIAGAFQACADAAAFQAdgBAQgOQAFgFAIAEQACABAAAFQAXAaAZgTQACgCAAgFIAAgKQAWgSAXAXQAFAFAIAEQACABAAAFQAKgFAIgIIADgDQAOgEAPAAQAUAXAegCQAKgBAIgEQACgBAAgFQASgMAKgTQACgEAAgFIAAgKQAKgFALgEQAEgBACgCQADgDAAgFQgCgbAVgIQABAAAAgFIAAgKQAFAAADgDIAEgDQAIgEAKAAQAAgKAEgIIADgEQADgDAAgFQAdgBAOgRIAFgFQACgCAAgFQAUAAATgFQABAAAAgFQAKgKAHgMIAGgGQACgCAFAAQAAgFABAAQATgFAUAAQAAgFACgBIAQgIQACgBAAgFQAUAAATgFQABAAAAgFQAFgFAGgDIAHgFQACgCAAgFQAdgPAJAQIAFAGQACADAFAAQAWgYAkg5IAFgGQACgDAFAAQgOAfgKAlIgEAFQgCACAAAFQAlgSAfgZIAEgDQAIgEAKAAQADggAZgMIAFgDQACgDAFAAQgCAqgaAVQgCACAAAFIAAAKQADARAQgCIAEgCQACgDAFAAQAdgfATgoIAEgGQADgDAFAAQAKgFAKAAIgDACQgCADgFAAQgOAfAaARQADACACgCQADgDAAgFQASAjgzA/IgFAEQgCADAAAFQADARAPgTIAEgEQAIgEAKAAQgYAugYAtIgEAHQgDACgFAAIAAAeQAAAFACAAQANAFAPAAQghAvADBTQAAAFACADQADACAFAAQgJAKADATIAEAEQACACAAAFQgFAFgDAGIgEAHQgDACgFAAIAABuIAAAKIAAAKQgpArALAqIACgBQAIgEAKAAQgPAegNAfQgCAEAAAFIAAAKQgCAfAggQIAAAFIAAAKQgaARALAhIgCACQgDADAAAFQgKAiAeABIAAAFIAAAKQgcAkAmAJIACgBQAIgEAKAAQgMAhgNAbIACACQADADAAAFQAbAMAdglQAEgFAIAEQACABAAAFQgjAegOAzQgBAEAAAFIAAAJQAIAJAggNIAAAEIAAAKQgdAtAeANQAEACACgDQADgCAAgFQAiALgkAbIgFAEQgDADAAAFQAYApA4AHQAPACANAEQACABAAAFQgPAFgMAIQgDACAAAFIAAAKQAtAahLgLIgCADQgDACgFAAQAdAaAyAJIAEACQACADAFAAQgBAlgZgTQgJgIgOgFQgBAAAAgFQgPAFgKAFIADACQACADAAAFQAUgCAYASIAOAIQACABAAAFQgUAFgSAJQgCABAAAFIAAAKQAeAOAWAYIAGAEQACADAAAFQgnAKAwAPIADACQADADAFAAQgtAMA5AXIAaAJQACABAAAFQgZAFgYAKQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAABQADACAFAAQAaAYAgATQACACAAAFIAAAKQBFgUAWAhQAEAHAOAFQABAAAAAFQAGAVgPAEIgDACQgDADgFAAQAUAeAyAFIAAAFIAAAKQAXBrAHB7QAAAFACACQADADAFAAIAAAoQgZgFgqAdIgFACQgIAEgKAAQhrA1ijgIIgCgDQgDgCgFAAQkMAAkkAPIgDgDQgCgCgFAAQgFAKgIADQgRAHgTAFQgBAAAAAFQgaACgOgHIgCABQgIAEgKAAQgBgUgGgLIgFgFQgIgEgKAAQgSAjgggeIgDADQgCACgFAAQgLgTgUgIIgRgHQgCgBAAgFQgogKgggQIgQgIQgCgBAAgFQivAAhmhKIgDgBQgOgFgPAAQgFAKgIAHIgFAGQgCACAAAFQgUAFgSAJIgEACQgIAEgKAAQg5A6hwAHIgEACQgCADgFAAQgeAUgZAZQgFAFgIAEQgCABAAAFQgPAAgNgEQgCgBAAgFQgKAFgLADQgEACgDADQgCACAAAFQhrANheAWIgmAJQgBABAAAFQgPAAgOgFIgDgDQgDgCgFAAQAAAFgCABIgQAIQgCABAAAFQgfgQhOAVIgDABQgNAEgPAAQgKgFgIgHIgEgGQgDgCgFAAQgPAFgPAAIAAgFIAAgKQgagCgOAHIgCgDQgDgCgFAAQACAbgOALIgDABIgDgBgA2kOiIABgKQADguAugEQAbgIAAAcQAAAqgRASQAAAFgBAAQgLACgJAAQgfAAgIgbgA24x4IAAgFMAtxAAAIAAAFQ25gF24AFg");
	this.shape.setTransform(11.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-135,-176,293,230), null);


(lib.Cat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button_cat.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(151);
		}
	}
	this.frame_150 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150).call(this.frame_150).wait(58));

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(295.6,334.9,1,0.759,0,0,0,72,16.6);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({regY:17,scaleY:0.86,y:336.2},0).wait(1).to({scaleY:0.96,y:337.3},0).wait(1).to({scaleY:1.06,y:338.4},0).wait(5).to({scaleY:0.96,y:337.3},0).wait(1).to({scaleY:0.86,y:336.2},0).wait(1).to({scaleY:0.76,y:335.2},0).to({_off:true},1).wait(184));

	// Слой 1
	this.ButtonCat = new lib.Символ1();
	this.ButtonCat.parent = this;
	this.ButtonCat.setTransform(292.4,411.8,1,1,0,0,0,-0.1,30.2);

	this.timeline.addTween(cjs.Tween.get(this.ButtonCat).wait(1).to({regX:11.5,regY:-61,x:304,y:320.4},0).wait(1).to({rotation:0.1,y:320.3},0).wait(1).to({x:304.1,y:320.1},0).wait(1).to({y:319.9},0).wait(1).to({x:304.2,y:319.8},0).wait(1).to({rotation:0.2,y:319.7},0).wait(1).to({x:304.3,y:319.5},0).wait(1).to({y:319.3},0).wait(1).to({rotation:0.3,x:304.4,y:319.2},0).wait(1).to({y:319},0).wait(1).to({x:304.5,y:318.8},0).wait(1).to({rotation:0.4,y:318.7},0).wait(1).to({x:304.6,y:318.5},0).wait(1).to({y:318.4},0).wait(1).to({y:318.2},0).wait(1).to({rotation:0.5,x:304.7,y:318},0).wait(1).to({x:304.8,y:317.9},0).wait(1).to({y:317.7},0).wait(1).to({rotation:0.6,y:317.5},0).wait(1).to({x:304.9,y:317.4},0).wait(1).to({y:317.2},0).wait(1).to({x:305,y:317.1},0).wait(1).to({rotation:0.7,y:316.9},0).wait(1).to({x:305.1,y:316.8},0).wait(1).to({x:305,y:316.9},0).wait(1).to({rotation:0.6,y:317.1},0).wait(1).to({x:304.9,y:317.2},0).wait(1).to({y:317.3},0).wait(1).to({x:304.8,y:317.5},0).wait(1).to({rotation:0.5,y:317.7},0).wait(1).to({y:317.8},0).wait(1).to({x:304.7,y:318},0).wait(1).to({y:318.1},0).wait(1).to({rotation:0.4,x:304.6,y:318.3},0).wait(1).to({y:318.5},0).wait(1).to({x:304.5,y:318.6},0).wait(1).to({rotation:0.3,y:318.7},0).wait(1).to({y:318.9},0).wait(1).to({x:304.4,y:319.1},0).wait(1).to({x:304.3,y:319.2},0).wait(1).to({rotation:0.2,y:319.4},0).wait(1).to({y:319.5},0).wait(1).to({x:304.2,y:319.7},0).wait(1).to({rotation:0.1,y:319.9},0).wait(1).to({x:304.1,y:320},0).wait(1).to({y:320.1},0).wait(1).to({x:304,y:320.3},0).wait(1).to({rotation:0,y:320.4},0).wait(1).to({y:320.6},0).wait(1).to({y:320.4},0).wait(1).to({rotation:0.1,y:320.3},0).wait(1).to({x:304.1,y:320.1},0).wait(1).to({y:320},0).wait(1).to({x:304.2,y:319.9},0).wait(1).to({rotation:0.2,y:319.7},0).wait(1).to({x:304.3,y:319.5},0).wait(1).to({y:319.4},0).wait(1).to({rotation:0.3,y:319.2},0).wait(1).to({x:304.4,y:319.1},0).wait(1).to({x:304.5,y:318.9},0).wait(1).to({y:318.7},0).wait(1).to({rotation:0.4,y:318.6},0).wait(1).to({x:304.6,y:318.5},0).wait(1).to({y:318.3},0).wait(1).to({rotation:0.5,x:304.7,y:318.1},0).wait(1).to({y:318},0).wait(1).to({x:304.8,y:317.8},0).wait(1).to({y:317.7},0).wait(1).to({rotation:0.6,y:317.5},0).wait(1).to({x:304.9,y:317.3},0).wait(1).to({y:317.2},0).wait(1).to({x:305,y:317.1},0).wait(1).to({rotation:0.7,y:316.9},0).wait(1).to({x:305.1,y:316.8},0).wait(1).to({x:305,y:316.9},0).wait(1).to({rotation:0.6,y:317.1},0).wait(1).to({x:304.9,y:317.2},0).wait(1).to({y:317.3},0).wait(1).to({x:304.8,y:317.5},0).wait(1).to({rotation:0.5,y:317.6},0).wait(1).to({y:317.8},0).wait(1).to({x:304.7,y:317.9},0).wait(1).to({y:318.1},0).wait(1).to({rotation:0.4,x:304.6,y:318.2},0).wait(1).to({y:318.4},0).wait(1).to({x:304.5,y:318.5},0).wait(1).to({y:318.7},0).wait(1).to({rotation:0.3,y:318.8},0).wait(1).to({x:304.4,y:319},0).wait(1).to({y:319.1},0).wait(1).to({rotation:0.2,x:304.3,y:319.3},0).wait(1).to({y:319.4},0).wait(1).to({x:304.2,y:319.6},0).wait(1).to({y:319.7},0).wait(1).to({rotation:0.1,y:319.9},0).wait(1).to({x:304.1,y:320},0).wait(1).to({y:320.1},0).wait(1).to({x:304,y:320.3},0).wait(1).to({rotation:0,y:320.4},0).wait(1).to({y:320.6},0).wait(1).to({y:320.4},0).wait(1).to({rotation:0.1,y:320.3},0).wait(1).to({x:304.1,y:320.1},0).wait(1).to({y:320},0).wait(1).to({x:304.2,y:319.9},0).wait(1).to({rotation:0.2,y:319.7},0).wait(1).to({x:304.3,y:319.5},0).wait(1).to({y:319.4},0).wait(1).to({rotation:0.3,y:319.2},0).wait(1).to({x:304.4,y:319.1},0).wait(1).to({x:304.5,y:318.9},0).wait(1).to({y:318.7},0).wait(1).to({rotation:0.4,y:318.6},0).wait(1).to({x:304.6,y:318.5},0).wait(1).to({y:318.3},0).wait(1).to({rotation:0.5,x:304.7,y:318.1},0).wait(1).to({y:318},0).wait(1).to({x:304.8,y:317.8},0).wait(1).to({y:317.7},0).wait(1).to({rotation:0.6,y:317.5},0).wait(1).to({x:304.9,y:317.3},0).wait(1).to({y:317.2},0).wait(1).to({x:305,y:317.1},0).wait(1).to({rotation:0.7,y:316.9},0).wait(1).to({x:305.1,y:316.8},0).wait(1).to({x:305,y:316.9},0).wait(1).to({rotation:0.6,y:317.1},0).wait(1).to({x:304.9,y:317.2},0).wait(1).to({y:317.3},0).wait(1).to({x:304.8,y:317.5},0).wait(1).to({rotation:0.5,y:317.7},0).wait(1).to({y:317.8},0).wait(1).to({x:304.7,y:318},0).wait(1).to({y:318.1},0).wait(1).to({rotation:0.4,x:304.6,y:318.3},0).wait(1).to({y:318.5},0).wait(1).to({x:304.5,y:318.6},0).wait(1).to({rotation:0.3,y:318.7},0).wait(1).to({y:318.9},0).wait(1).to({x:304.4,y:319.1},0).wait(1).to({x:304.3,y:319.2},0).wait(1).to({rotation:0.2,y:319.4},0).wait(1).to({y:319.5},0).wait(1).to({x:304.2,y:319.7},0).wait(1).to({rotation:0.1,y:319.9},0).wait(1).to({x:304.1,y:320},0).wait(1).to({y:320.1},0).wait(1).to({x:304,y:320.3},0).wait(1).to({rotation:0,y:320.4},0).wait(1).to({y:320.6},0).wait(1).to({rotation:-0.1,x:309.3,y:328.3},0).wait(1).to({rotation:-0.2,x:314.7,y:335.9},0).wait(1).to({x:320,y:343.6},0).wait(1).to({rotation:-0.3,x:325.3,y:351.3},0).wait(1).to({x:324.7,y:350.1},0).wait(1).to({x:324.1,y:348.8},0).wait(11).to({y:350.3},0).wait(1).to({rotation:-0.2,x:324.2,y:351.7},0).wait(1).to({y:353.1},0).wait(1).to({rotation:-0.1,x:324.3,y:354.5},0).wait(1).to({y:355.9},0).wait(1).to({rotation:0,x:324.4,y:357.4},0).wait(1).to({rotation:0.5,x:325.1,y:356.4},0).wait(1).to({rotation:1,x:325.9,y:355.4},0).wait(1).to({rotation:1.4,x:326.7,y:354.5},0).wait(1).to({rotation:1.9,x:327.5,y:353.6},0).wait(1).to({rotation:1.5,x:326.8,y:352.6},0).wait(1).to({rotation:1,x:326.2,y:351.6},0).wait(1).to({rotation:0.6,x:325.5,y:350.7},0).wait(1).to({rotation:0.1,x:324.8,y:349.8},0).wait(1).to({rotation:-0.3,x:324.1,y:348.8},0).wait(1).to({y:348.5},0).wait(1).to({y:348.2},0).wait(1).to({y:347.9},0).wait(1).to({y:347.6},0).wait(1).to({y:347.3},0).wait(1).to({y:347},0).wait(1).to({y:346.7},0).wait(1).to({y:346.4},0).wait(1).to({y:346.1},0).wait(1).to({y:345.7},0).wait(1).to({y:345.4},0).wait(1).to({y:345.1},0).wait(1).to({y:344.8},0).wait(1).to({y:344.5},0).wait(1).to({x:321.2,y:341.1},0).wait(1).to({rotation:-0.2,x:318.3,y:337.7},0).wait(1).to({x:315.5,y:334.2},0).wait(1).to({rotation:-0.1,x:312.6,y:330.8},0).wait(1).to({x:309.7,y:327.4},0).wait(1).to({rotation:0,x:306.8,y:324},0).wait(1).to({x:304,y:320.6},0).wait(6));

	// 12.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(627.6,561,1,1,0,0,0,175.1,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:105.5,regY:120,x:557.9,y:640.7},0).wait(1).to({x:557.8,y:640.6},0).wait(1).to({x:557.7,y:640.5},0).wait(1).to({x:557.5,y:640.3},0).wait(1).to({x:557.4,y:640.2},0).wait(1).to({x:557.3,y:640.1},0).wait(1).to({x:557.2,y:640},0).wait(1).to({x:557.1,y:639.9},0).wait(1).to({x:557,y:639.8},0).wait(1).to({x:556.9,y:639.7},0).wait(1).to({x:556.7,y:639.5},0).wait(1).to({x:556.6,y:639.4},0).wait(1).to({x:556.5,y:639.3},0).wait(1).to({x:556.4,y:639.2},0).wait(1).to({x:556.3,y:639.1},0).wait(1).to({x:556.2,y:639},0).wait(1).to({x:556.1,y:638.9},0).wait(1).to({x:555.9,y:638.7},0).wait(1).to({x:555.8,y:638.6},0).wait(1).to({x:555.7,y:638.5},0).wait(1).to({x:555.6,y:638.4},0).wait(1).to({x:555.5,y:638.3},0).wait(1).to({x:555.4,y:638.2},0).wait(1).to({x:555.3,y:638.1},0).wait(1).to({x:555.4,y:638.2},0).wait(1).to({x:555.5,y:638.3},0).wait(1).to({x:555.6,y:638.4},0).wait(1).to({x:555.7,y:638.5},0).wait(1).to({x:555.8,y:638.6},0).wait(1).to({x:555.9,y:638.7},0).wait(1).to({x:556,y:638.8},0).wait(1).to({x:556.1,y:638.9},0).wait(1).to({x:556.2,y:639},0).wait(1).to({x:556.4,y:639.2},0).wait(1).to({x:556.5,y:639.3},0).wait(1).to({x:556.6,y:639.4},0).wait(1).to({x:556.7,y:639.5},0).wait(1).to({x:556.8,y:639.6},0).wait(1).to({x:556.9,y:639.7},0).wait(1).to({x:557,y:639.8},0).wait(1).to({x:557.1,y:639.9},0).wait(1).to({x:557.2,y:640},0).wait(1).to({x:557.3,y:640.1},0).wait(1).to({x:557.5,y:640.3},0).wait(1).to({x:557.6,y:640.4},0).wait(1).to({x:557.7,y:640.5},0).wait(1).to({x:557.8,y:640.6},0).wait(1).to({x:557.9,y:640.7},0).wait(1).to({x:558,y:640.8},0).wait(1).to({x:557.9,y:640.7},0).wait(1).to({x:557.8,y:640.6},0).wait(1).to({x:557.7,y:640.5},0).wait(1).to({x:557.6,y:640.4},0).wait(1).to({x:557.5,y:640.3},0).wait(1).to({x:557.3,y:640.1},0).wait(1).to({x:557.2,y:640},0).wait(1).to({x:557.1,y:639.9},0).wait(1).to({x:557,y:639.8},0).wait(1).to({x:556.9,y:639.7},0).wait(1).to({x:556.8,y:639.6},0).wait(1).to({x:556.7,y:639.5},0).wait(1).to({x:556.6,y:639.4},0).wait(1).to({x:556.5,y:639.3},0).wait(1).to({x:556.4,y:639.2},0).wait(1).to({x:556.2,y:639},0).wait(1).to({x:556.1,y:638.9},0).wait(1).to({x:556,y:638.8},0).wait(1).to({x:555.9,y:638.7},0).wait(1).to({x:555.8,y:638.6},0).wait(1).to({x:555.7,y:638.5},0).wait(1).to({x:555.6,y:638.4},0).wait(1).to({x:555.5,y:638.3},0).wait(1).to({x:555.4,y:638.2},0).wait(1).to({x:555.3,y:638.1},0).wait(1).to({x:555.4,y:638.2},0).wait(1).to({x:555.5,y:638.3},0).wait(1).to({x:555.6,y:638.4},0).wait(1).to({x:555.7,y:638.5},0).wait(1).to({x:555.8,y:638.6},0).wait(1).to({x:555.9,y:638.7},0).wait(1).to({x:556,y:638.8},0).wait(1).to({x:556.1,y:638.9},0).wait(1).to({x:556.2,y:639},0).wait(1).to({x:556.3,y:639.1},0).wait(1).to({x:556.4,y:639.2},0).wait(1).to({x:556.5,y:639.3},0).wait(1).to({x:556.6,y:639.4},0).wait(1).to({x:556.7,y:639.5},0).wait(1).to({x:556.8,y:639.6},0).wait(1).to({x:556.9,y:639.7},0).wait(1).to({x:557,y:639.8},0).wait(1).to({x:557.2,y:640},0).wait(1).to({x:557.3,y:640.1},0).wait(1).to({x:557.4,y:640.2},0).wait(1).to({x:557.5,y:640.3},0).wait(1).to({x:557.6,y:640.4},0).wait(1).to({x:557.7,y:640.5},0).wait(1).to({x:557.8,y:640.6},0).wait(1).to({x:557.9,y:640.7},0).wait(1).to({x:558,y:640.8},0).wait(1).to({x:557.9,y:640.7},0).wait(1).to({x:557.8,y:640.6},0).wait(1).to({x:557.7,y:640.5},0).wait(1).to({x:557.6,y:640.4},0).wait(1).to({x:557.5,y:640.3},0).wait(1).to({x:557.3,y:640.1},0).wait(1).to({x:557.2,y:640},0).wait(1).to({x:557.1,y:639.9},0).wait(1).to({x:557,y:639.8},0).wait(1).to({x:556.9,y:639.7},0).wait(1).to({x:556.8,y:639.6},0).wait(1).to({x:556.7,y:639.5},0).wait(1).to({x:556.6,y:639.4},0).wait(1).to({x:556.5,y:639.3},0).wait(1).to({x:556.4,y:639.2},0).wait(1).to({x:556.2,y:639},0).wait(1).to({x:556.1,y:638.9},0).wait(1).to({x:556,y:638.8},0).wait(1).to({x:555.9,y:638.7},0).wait(1).to({x:555.8,y:638.6},0).wait(1).to({x:555.7,y:638.5},0).wait(1).to({x:555.6,y:638.4},0).wait(1).to({x:555.5,y:638.3},0).wait(1).to({x:555.4,y:638.2},0).wait(1).to({x:555.3,y:638.1},0).wait(1).to({x:555.4,y:638.2},0).wait(1).to({x:555.5,y:638.3},0).wait(1).to({x:555.6,y:638.4},0).wait(1).to({x:555.7,y:638.5},0).wait(1).to({x:555.8,y:638.6},0).wait(1).to({x:555.9,y:638.7},0).wait(1).to({x:556,y:638.8},0).wait(1).to({x:556.1,y:638.9},0).wait(1).to({x:556.2,y:639},0).wait(1).to({x:556.4,y:639.2},0).wait(1).to({x:556.5,y:639.3},0).wait(1).to({x:556.6,y:639.4},0).wait(1).to({x:556.7,y:639.5},0).wait(1).to({x:556.8,y:639.6},0).wait(1).to({x:556.9,y:639.7},0).wait(1).to({x:557,y:639.8},0).wait(1).to({x:557.1,y:639.9},0).wait(1).to({x:557.2,y:640},0).wait(1).to({x:557.3,y:640.1},0).wait(1).to({x:557.5,y:640.3},0).wait(1).to({x:557.6,y:640.4},0).wait(1).to({x:557.7,y:640.5},0).wait(1).to({x:557.8,y:640.6},0).wait(1).to({x:557.9,y:640.7},0).wait(1).to({x:558,y:640.8},0).wait(1).to({rotation:6.8,x:551.6,y:658.4},0).wait(1).to({rotation:13.7,x:546.3,y:674.9},0).wait(1).to({rotation:20.5,x:542.3,y:690.5},0).wait(1).to({rotation:27.3,x:539.6,y:705.5},0).wait(1).to({x:538.9,y:702.9},0).wait(1).to({x:538.3,y:700.4},0).wait(26).to({y:700.1},0).wait(1).to({y:699.7},0).wait(1).to({y:699.4},0).wait(1).to({y:699.1},0).wait(1).to({y:698.8},0).wait(1).to({y:698.5},0).wait(1).to({y:698.2},0).wait(1).to({y:697.9},0).wait(1).to({y:697.6},0).wait(1).to({y:697.3},0).wait(1).to({y:697},0).wait(1).to({y:696.6},0).wait(1).to({y:696.3},0).wait(1).to({y:696},0).wait(1).to({rotation:23.4,x:539.9,y:688.9},0).wait(1).to({rotation:19.5,x:541.9,y:681.6},0).wait(1).to({rotation:15.6,x:544.3,y:674.1},0).wait(1).to({rotation:11.7,x:547.2,y:666.2},0).wait(1).to({rotation:7.8,x:550.4,y:658.1},0).wait(1).to({rotation:3.9,x:554,y:649.6},0).wait(1).to({rotation:0,x:558,y:640.8},0).wait(6));

	// 11.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(578.9,753.5,1,1,0,0,0,84,106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-0.1,x:578.8,y:753.3},0).wait(1).to({x:578.6,y:753.2},0).wait(1).to({rotation:-0.2,x:578.5,y:753.1},0).wait(1).to({rotation:-0.3,x:578.4,y:753},0).wait(1).to({rotation:-0.4,x:578.3,y:752.9},0).wait(1).to({x:578.2,y:752.7},0).wait(1).to({rotation:-0.5,x:578.1,y:752.6},0).wait(1).to({rotation:-0.6,x:578,y:752.5},0).wait(1).to({rotation:-0.7,x:577.9,y:752.4},0).wait(1).to({x:577.7,y:752.3},0).wait(1).to({rotation:-0.8,x:577.6,y:752.2},0).wait(1).to({rotation:-0.9,x:577.5,y:752.1},0).wait(1).to({rotation:-1,x:577.4,y:751.9},0).wait(1).to({x:577.3,y:751.8},0).wait(1).to({rotation:-1.1,x:577.2,y:751.7},0).wait(1).to({rotation:-1.2,x:577.1,y:751.6},0).wait(1).to({x:576.9,y:751.4},0).wait(1).to({rotation:-1.3,x:576.8,y:751.3},0).wait(1).to({rotation:-1.4,x:576.7,y:751.2},0).wait(1).to({rotation:-1.5,x:576.6,y:751.1},0).wait(1).to({x:576.4,y:751},0).wait(1).to({rotation:-1.6,x:576.3,y:750.9},0).wait(1).to({rotation:-1.7,x:576.2,y:750.7},0).wait(1).to({rotation:-1.8,x:576.1,y:750.6},0).wait(1).to({rotation:-1.7,x:576.2,y:750.7},0).wait(1).to({rotation:-1.6,x:576.3,y:750.8},0).wait(1).to({x:576.4,y:751},0).wait(1).to({rotation:-1.5,x:576.5,y:751.1},0).wait(1).to({rotation:-1.4,x:576.6,y:751.2},0).wait(1).to({rotation:-1.3,x:576.8,y:751.3},0).wait(1).to({x:576.9,y:751.4},0).wait(1).to({rotation:-1.2,x:577,y:751.6},0).wait(1).to({rotation:-1.1,x:577.1,y:751.7},0).wait(1).to({x:577.2,y:751.8},0).wait(1).to({rotation:-1,x:577.4,y:751.9},0).wait(1).to({rotation:-0.9,x:577.5,y:752},0).wait(1).to({rotation:-0.8,y:752.1},0).wait(1).to({x:577.7,y:752.2},0).wait(1).to({rotation:-0.7,x:577.8,y:752.3},0).wait(1).to({rotation:-0.6,x:577.9,y:752.4},0).wait(1).to({x:578,y:752.5},0).wait(1).to({rotation:-0.5,x:578.1,y:752.7},0).wait(1).to({rotation:-0.4,x:578.2,y:752.8},0).wait(1).to({x:578.3,y:752.9},0).wait(1).to({rotation:-0.3,x:578.4,y:753},0).wait(1).to({rotation:-0.2,x:578.6,y:753.1},0).wait(1).to({rotation:-0.1,x:578.7,y:753.2},0).wait(1).to({x:578.8,y:753.3},0).wait(1).to({rotation:0,x:578.9,y:753.5},0).wait(1).to({rotation:-0.1,x:578.8,y:753.3},0).wait(1).to({x:578.7,y:753.2},0).wait(1).to({rotation:-0.2,x:578.6,y:753.1},0).wait(1).to({rotation:-0.3,x:578.4,y:753},0).wait(1).to({rotation:-0.4,x:578.3,y:752.9},0).wait(1).to({x:578.2,y:752.8},0).wait(1).to({rotation:-0.5,x:578.1,y:752.7},0).wait(1).to({rotation:-0.6,x:578,y:752.5},0).wait(1).to({x:577.9,y:752.4},0).wait(1).to({rotation:-0.7,x:577.8,y:752.3},0).wait(1).to({rotation:-0.8,x:577.7,y:752.2},0).wait(1).to({x:577.5,y:752.1},0).wait(1).to({rotation:-0.9,y:752},0).wait(1).to({rotation:-1,x:577.4,y:751.9},0).wait(1).to({rotation:-1.1,x:577.2,y:751.8},0).wait(1).to({x:577.1,y:751.7},0).wait(1).to({rotation:-1.2,x:577,y:751.6},0).wait(1).to({rotation:-1.3,x:576.9,y:751.4},0).wait(1).to({x:576.8,y:751.3},0).wait(1).to({rotation:-1.4,x:576.6,y:751.2},0).wait(1).to({rotation:-1.5,x:576.5,y:751.1},0).wait(1).to({rotation:-1.6,x:576.4,y:751},0).wait(1).to({x:576.3,y:750.8},0).wait(1).to({rotation:-1.7,x:576.2,y:750.7},0).wait(1).to({rotation:-1.8,x:576.1,y:750.6},0).wait(1).to({rotation:-1.7,x:576.2,y:750.7},0).wait(1).to({rotation:-1.6,x:576.3,y:750.8},0).wait(1).to({x:576.4,y:750.9},0).wait(1).to({rotation:-1.5,x:576.5,y:751.1},0).wait(1).to({rotation:-1.4,x:576.6,y:751.2},0).wait(1).to({x:576.7,y:751.3},0).wait(1).to({rotation:-1.3,x:576.9,y:751.4},0).wait(1).to({rotation:-1.2,x:577,y:751.5},0).wait(1).to({x:577.1,y:751.6},0).wait(1).to({rotation:-1.1,x:577.2,y:751.7},0).wait(1).to({rotation:-1,x:577.3,y:751.8},0).wait(1).to({rotation:-0.9,x:577.4,y:751.9},0).wait(1).to({x:577.5,y:752.1},0).wait(1).to({rotation:-0.8,x:577.6,y:752.2},0).wait(1).to({rotation:-0.7,x:577.7,y:752.3},0).wait(1).to({x:577.8,y:752.4},0).wait(1).to({rotation:-0.6,x:578,y:752.5},0).wait(1).to({rotation:-0.5,y:752.6},0).wait(1).to({x:578.2,y:752.7},0).wait(1).to({rotation:-0.4,y:752.8},0).wait(1).to({rotation:-0.3,x:578.4,y:752.9},0).wait(1).to({x:578.5,y:753},0).wait(1).to({rotation:-0.2,x:578.6,y:753.1},0).wait(1).to({rotation:-0.1,x:578.7,y:753.2},0).wait(1).to({x:578.8,y:753.3},0).wait(1).to({rotation:0,x:578.9,y:753.5},0).wait(1).to({rotation:-0.1,x:578.8,y:753.3},0).wait(1).to({x:578.7,y:753.2},0).wait(1).to({rotation:-0.2,x:578.6,y:753.1},0).wait(1).to({rotation:-0.3,x:578.4,y:753},0).wait(1).to({rotation:-0.4,x:578.3,y:752.9},0).wait(1).to({x:578.2,y:752.8},0).wait(1).to({rotation:-0.5,x:578.1,y:752.7},0).wait(1).to({rotation:-0.6,x:578,y:752.5},0).wait(1).to({x:577.9,y:752.4},0).wait(1).to({rotation:-0.7,x:577.8,y:752.3},0).wait(1).to({rotation:-0.8,x:577.7,y:752.2},0).wait(1).to({x:577.5,y:752.1},0).wait(1).to({rotation:-0.9,y:752},0).wait(1).to({rotation:-1,x:577.4,y:751.9},0).wait(1).to({rotation:-1.1,x:577.2,y:751.8},0).wait(1).to({x:577.1,y:751.7},0).wait(1).to({rotation:-1.2,x:577,y:751.6},0).wait(1).to({rotation:-1.3,x:576.9,y:751.4},0).wait(1).to({x:576.8,y:751.3},0).wait(1).to({rotation:-1.4,x:576.6,y:751.2},0).wait(1).to({rotation:-1.5,x:576.5,y:751.1},0).wait(1).to({rotation:-1.6,x:576.4,y:751},0).wait(1).to({x:576.3,y:750.8},0).wait(1).to({rotation:-1.7,x:576.2,y:750.7},0).wait(1).to({rotation:-1.8,x:576.1,y:750.6},0).wait(1).to({rotation:-1.7,x:576.2,y:750.7},0).wait(1).to({rotation:-1.6,x:576.3,y:750.8},0).wait(1).to({x:576.4,y:751},0).wait(1).to({rotation:-1.5,x:576.5,y:751.1},0).wait(1).to({rotation:-1.4,x:576.6,y:751.2},0).wait(1).to({rotation:-1.3,x:576.8,y:751.3},0).wait(1).to({x:576.9,y:751.4},0).wait(1).to({rotation:-1.2,x:577,y:751.6},0).wait(1).to({rotation:-1.1,x:577.1,y:751.7},0).wait(1).to({x:577.2,y:751.8},0).wait(1).to({rotation:-1,x:577.4,y:751.9},0).wait(1).to({rotation:-0.9,x:577.5,y:752},0).wait(1).to({rotation:-0.8,y:752.1},0).wait(1).to({x:577.7,y:752.2},0).wait(1).to({rotation:-0.7,x:577.8,y:752.3},0).wait(1).to({rotation:-0.6,x:577.9,y:752.4},0).wait(1).to({x:578,y:752.5},0).wait(1).to({rotation:-0.5,x:578.1,y:752.7},0).wait(1).to({rotation:-0.4,x:578.2,y:752.8},0).wait(1).to({x:578.3,y:752.9},0).wait(1).to({rotation:-0.3,x:578.4,y:753},0).wait(1).to({rotation:-0.2,x:578.6,y:753.1},0).wait(1).to({rotation:-0.1,x:578.7,y:753.2},0).wait(1).to({x:578.8,y:753.3},0).wait(1).to({rotation:0,x:578.9,y:753.5},0).wait(1).to({rotation:9.9,x:562.4,y:764.1},0).wait(1).to({rotation:19.8,x:545.9,y:774.7},0).wait(1).to({rotation:29.6,x:529.4,y:785.4},0).wait(1).to({rotation:39.5,x:512.9,y:796},0).wait(1).to({x:512.2,y:794.7},0).wait(1).to({x:511.6,y:793.4},0).wait(26).to({rotation:39.4,y:793.1},0).wait(1).to({rotation:39.2,y:792.8},0).wait(1).to({rotation:39.1,y:792.5},0).wait(1).to({rotation:38.9,y:792.2},0).wait(1).to({rotation:38.8,y:791.9},0).wait(1).to({rotation:38.6,y:791.6},0).wait(1).to({rotation:38.4,y:791.3},0).wait(1).to({rotation:38.3,y:791},0).wait(1).to({rotation:38.1,y:790.7},0).wait(1).to({rotation:38,y:790.4},0).wait(1).to({rotation:37.8,y:790},0).wait(1).to({rotation:37.7,y:789.7},0).wait(1).to({rotation:37.5,y:789.4},0).wait(1).to({rotation:37.4,y:789.1},0).wait(1).to({rotation:32,x:521.2,y:784},0).wait(1).to({rotation:26.7,x:530.8,y:778.9},0).wait(1).to({rotation:21.4,x:540.5,y:773.8},0).wait(1).to({rotation:16,x:550.1,y:768.7},0).wait(1).to({rotation:10.7,x:559.7,y:763.6},0).wait(1).to({rotation:5.3,x:569.3,y:758.5},0).wait(1).to({rotation:0,x:578.9,y:753.5},0).wait(6));

	// 10.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(455.3,510.7,1,1,-1.5,0,0,126,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:83,regY:86.5,rotation:-1.7,x:414.1,y:583.3},0).wait(1).to({rotation:-1.8,x:414},0).wait(1).to({rotation:-1.9,x:413.9},0).wait(1).to({rotation:-2,x:413.8,y:583.2},0).wait(1).to({x:413.7},0).wait(1).to({rotation:-2.1,x:413.5,y:583.1},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2.3,x:413.4,y:583},0).wait(1).to({rotation:-2.4,x:413.3,y:582.9},0).wait(1).to({rotation:-2.5,x:413.1},0).wait(1).to({rotation:-2.6,x:413,y:582.8},0).wait(1).to({rotation:-2.7,x:412.9},0).wait(1).to({rotation:-2.8,x:412.7,y:582.7},0).wait(1).to({x:412.6},0).wait(1).to({rotation:-2.9,y:582.6},0).wait(1).to({rotation:-3,x:412.4},0).wait(1).to({rotation:-3.1,x:412.3,y:582.5},0).wait(1).to({rotation:-3.2,x:412.2,y:582.4},0).wait(1).to({rotation:-3.3,x:412},0).wait(1).to({rotation:-3.4,x:411.9},0).wait(1).to({rotation:-3.5,y:582.3},0).wait(1).to({rotation:-3.6,x:411.7},0).wait(1).to({rotation:-3.7,x:411.6,y:582.2},0).wait(1).to({x:411.5,y:582.1},0).wait(1).to({x:411.6,y:582.2},0).wait(1).to({rotation:-3.6,x:411.7,y:582.3},0).wait(1).to({rotation:-3.5,x:411.8},0).wait(1).to({rotation:-3.4,x:412,y:582.4},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.2,x:412.1,y:582.5},0).wait(1).to({rotation:-3.1,x:412.3},0).wait(1).to({x:412.4,y:582.6},0).wait(1).to({rotation:-3,x:412.5},0).wait(1).to({rotation:-2.9,x:412.6,y:582.7},0).wait(1).to({rotation:-2.8,x:412.7},0).wait(1).to({rotation:-2.7,x:412.8},0).wait(1).to({rotation:-2.6,x:412.9,y:582.8},0).wait(1).to({rotation:-2.5,x:413},0).wait(1).to({x:413.1,y:582.9},0).wait(1).to({rotation:-2.4,x:413.3},0).wait(1).to({rotation:-2.3,x:413.4,y:583},0).wait(1).to({rotation:-2.2,x:413.5,y:583.1},0).wait(1).to({rotation:-2.1,x:413.6},0).wait(1).to({rotation:-2,x:413.7,y:583.2},0).wait(1).to({rotation:-1.9,x:413.8},0).wait(1).to({x:413.9,y:583.3},0).wait(1).to({rotation:-1.8,x:414},0).wait(1).to({rotation:-1.7,x:414.1},0).wait(1).to({rotation:-1.6,x:414.2,y:583.4},0).wait(1).to({rotation:-1.7,x:414.1,y:583.3},0).wait(1).to({rotation:-1.8,x:414},0).wait(1).to({rotation:-1.9,x:413.9},0).wait(1).to({x:413.8,y:583.2},0).wait(1).to({rotation:-2,x:413.7},0).wait(1).to({rotation:-2.1,x:413.6,y:583.1},0).wait(1).to({rotation:-2.2,x:413.5},0).wait(1).to({rotation:-2.3,x:413.4,y:583},0).wait(1).to({rotation:-2.4,x:413.3,y:582.9},0).wait(1).to({rotation:-2.5,x:413.1},0).wait(1).to({x:413,y:582.8},0).wait(1).to({rotation:-2.6,x:412.9},0).wait(1).to({rotation:-2.7,x:412.8,y:582.7},0).wait(1).to({rotation:-2.8,x:412.7},0).wait(1).to({rotation:-2.9,x:412.6},0).wait(1).to({rotation:-3,x:412.5,y:582.6},0).wait(1).to({rotation:-3.1,x:412.4},0).wait(1).to({x:412.3,y:582.5},0).wait(1).to({rotation:-3.2,x:412.1},0).wait(1).to({rotation:-3.3,x:412,y:582.4},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-3.5,x:411.8,y:582.3},0).wait(1).to({rotation:-3.6,x:411.7},0).wait(1).to({rotation:-3.7,x:411.6,y:582.2},0).wait(1).to({x:411.5,y:582.1},0).wait(1).to({x:411.6,y:582.2},0).wait(1).to({rotation:-3.6,x:411.7,y:582.3},0).wait(1).to({rotation:-3.5,x:411.8},0).wait(1).to({rotation:-3.4,x:411.9},0).wait(1).to({rotation:-3.3,x:412,y:582.4},0).wait(1).to({rotation:-3.2,x:412.1},0).wait(1).to({x:412.2,y:582.5},0).wait(1).to({rotation:-3.1,x:412.4},0).wait(1).to({rotation:-3,y:582.6},0).wait(1).to({rotation:-2.9,x:412.6,y:582.7},0).wait(1).to({rotation:-2.8,x:412.7},0).wait(1).to({x:412.8},0).wait(1).to({rotation:-2.7,x:412.9,y:582.8},0).wait(1).to({rotation:-2.6,x:413},0).wait(1).to({rotation:-2.5,x:413.1},0).wait(1).to({rotation:-2.4,x:413.2,y:582.9},0).wait(1).to({rotation:-2.3,x:413.3,y:583},0).wait(1).to({x:413.4,y:583.1},0).wait(1).to({rotation:-2.2,x:413.5},0).wait(1).to({rotation:-2.1,x:413.6},0).wait(1).to({rotation:-2,x:413.7,y:583.2},0).wait(1).to({rotation:-1.9,x:413.8},0).wait(1).to({rotation:-1.8,x:413.9,y:583.3},0).wait(1).to({x:414},0).wait(1).to({rotation:-1.7,x:414.1},0).wait(1).to({rotation:-1.6,x:414.2,y:583.4},0).wait(1).to({rotation:-1.7,x:414.1,y:583.3},0).wait(1).to({rotation:-1.8,x:414},0).wait(1).to({rotation:-1.9,x:413.9},0).wait(1).to({x:413.8,y:583.2},0).wait(1).to({rotation:-2,x:413.7},0).wait(1).to({rotation:-2.1,x:413.6,y:583.1},0).wait(1).to({rotation:-2.2,x:413.5},0).wait(1).to({rotation:-2.3,x:413.4,y:583},0).wait(1).to({rotation:-2.4,x:413.3,y:582.9},0).wait(1).to({rotation:-2.5,x:413.1},0).wait(1).to({x:413,y:582.8},0).wait(1).to({rotation:-2.6,x:412.9},0).wait(1).to({rotation:-2.7,x:412.8,y:582.7},0).wait(1).to({rotation:-2.8,x:412.7},0).wait(1).to({rotation:-2.9,x:412.6},0).wait(1).to({rotation:-3,x:412.5,y:582.6},0).wait(1).to({rotation:-3.1,x:412.4},0).wait(1).to({x:412.3,y:582.5},0).wait(1).to({rotation:-3.2,x:412.1},0).wait(1).to({rotation:-3.3,x:412,y:582.4},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-3.5,x:411.8,y:582.3},0).wait(1).to({rotation:-3.6,x:411.7},0).wait(1).to({rotation:-3.7,x:411.6,y:582.2},0).wait(1).to({x:411.5,y:582.1},0).wait(1).to({x:411.6,y:582.2},0).wait(1).to({rotation:-3.6,x:411.7,y:582.3},0).wait(1).to({rotation:-3.5,x:411.8},0).wait(1).to({rotation:-3.4,x:412,y:582.4},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.2,x:412.1,y:582.5},0).wait(1).to({rotation:-3.1,x:412.3},0).wait(1).to({x:412.4,y:582.6},0).wait(1).to({rotation:-3,x:412.5},0).wait(1).to({rotation:-2.9,x:412.6,y:582.7},0).wait(1).to({rotation:-2.8,x:412.7},0).wait(1).to({rotation:-2.7,x:412.8},0).wait(1).to({rotation:-2.6,x:412.9,y:582.8},0).wait(1).to({rotation:-2.5,x:413},0).wait(1).to({x:413.1,y:582.9},0).wait(1).to({rotation:-2.4,x:413.3},0).wait(1).to({rotation:-2.3,x:413.4,y:583},0).wait(1).to({rotation:-2.2,x:413.5,y:583.1},0).wait(1).to({rotation:-2.1,x:413.6},0).wait(1).to({rotation:-2,x:413.7,y:583.2},0).wait(1).to({rotation:-1.9,x:413.8},0).wait(1).to({x:413.9,y:583.3},0).wait(1).to({rotation:-1.8,x:414},0).wait(1).to({rotation:-1.7,x:414.1},0).wait(1).to({rotation:-1.6,x:414.2,y:583.4},0).wait(1).to({rotation:1.7,x:417.2,y:594.6},0).wait(1).to({rotation:5,x:420.4,y:605.5},0).wait(1).to({rotation:8.3,x:423.8,y:616.2},0).wait(1).to({rotation:11.5,x:427.2,y:626.7},0).wait(1).to({x:425.9,y:624.2},0).wait(1).to({x:424.7,y:621.6},0).wait(11).to({rotation:16.6,x:418.8,y:614.2},0).wait(1).to({rotation:21.7,x:413.3,y:606.2},0).wait(1).to({rotation:26.8,x:408.5,y:597.9},0).wait(1).to({rotation:31.9,x:404.1,y:589.3},0).wait(1).to({rotation:37,x:400.3,y:580.3},0).wait(1).to({rotation:42,x:397.2,y:571.1},0).wait(1).to({rotation:42.7,x:397.8,y:571.4},0).wait(1).to({rotation:43.4,x:398.5,y:571.9},0).wait(1).to({rotation:44.1,x:399.1,y:572.2},0).wait(1).to({rotation:44.8,x:399.8,y:572.6},0).wait(1).to({rotation:38.1,x:402.8,y:583.4},0).wait(1).to({rotation:31.5,x:406.9,y:593.9},0).wait(1).to({rotation:24.8,x:411.9,y:603.8},0).wait(1).to({rotation:18.2,x:417.9,y:613.1},0).wait(1).to({rotation:11.5,x:424.7,y:621.6},0).wait(1).to({y:621.3},0).wait(1).to({y:621},0).wait(1).to({y:620.7},0).wait(1).to({y:620.4},0).wait(1).to({y:620.1},0).wait(1).to({y:619.8},0).wait(1).to({y:619.5},0).wait(1).to({y:619.2},0).wait(1).to({y:618.8},0).wait(1).to({y:618.5},0).wait(1).to({y:618.2},0).wait(1).to({y:617.9},0).wait(1).to({y:617.6},0).wait(1).to({y:617.3},0).wait(1).to({rotation:9.7,x:423,y:612.6},0).wait(1).to({rotation:7.8,x:421.5,y:608},0).wait(1).to({rotation:5.9,x:419.9,y:603.2},0).wait(1).to({rotation:4,x:418.4,y:598.4},0).wait(1).to({rotation:2.2,x:417,y:593.5},0).wait(1).to({rotation:0.3,x:415.6,y:588.5},0).wait(1).to({rotation:-1.6,x:414.2,y:583.4},0).wait(6));

	// 09.png
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(354.2,642.7,0.999,0.999,-27.5,0,0,93.3,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:73.5,scaleX:1,scaleY:1,x:336.7,y:651.9},0).wait(150).to({rotation:-22.2,x:338.4,y:654.6},0).wait(1).to({rotation:-16.9,x:340.2,y:657.1},0).wait(1).to({rotation:-11.6,x:342.3,y:659.7},0).wait(1).to({rotation:-6.3,x:344.5,y:662.2},0).wait(1).to({rotation:-8.6,x:342.7,y:661.1},0).wait(1).to({rotation:-11,x:341,y:660},0).wait(11).to({rotation:-10.7,x:335.7,y:647.2},0).wait(1).to({rotation:-10.3,x:330.2,y:634.4},0).wait(1).to({rotation:-10,x:324.9,y:621.6},0).wait(1).to({rotation:-9.7,x:319.5,y:608.9},0).wait(1).to({rotation:-9.4,x:314.2,y:596.1},0).wait(1).to({rotation:-9.1,x:308.8,y:583.3},0).wait(1).to({rotation:5.1,x:306.2,y:575.7},0).wait(1).to({rotation:19.2,x:304.8,y:568.3},0).wait(1).to({rotation:33.4,x:304.5,y:561.2},0).wait(1).to({rotation:47.6,x:305.3,y:554.9},0).wait(1).to({rotation:35.9,x:311,y:575.2},0).wait(1).to({rotation:24.2,x:317.3,y:596.1},0).wait(1).to({rotation:12.4,x:324.4,y:617.3},0).wait(1).to({rotation:0.7,x:332.3,y:638.7},0).wait(1).to({rotation:-11,x:341,y:660},0).wait(1).to({y:659.7},0).wait(1).to({y:659.4},0).wait(1).to({y:659.1},0).wait(1).to({y:658.8},0).wait(1).to({y:658.5},0).wait(1).to({y:658.2},0).wait(1).to({y:657.8},0).wait(1).to({y:657.5},0).wait(1).to({y:657.2},0).wait(1).to({y:656.9},0).wait(1).to({y:656.6},0).wait(1).to({y:656.3},0).wait(1).to({y:656},0).wait(1).to({y:655.7},0).wait(1).to({rotation:-13.3,x:340.2,y:655.2},0).wait(1).to({rotation:-15.7,x:339.6,y:654.6},0).wait(1).to({rotation:-18.1,x:339,y:654.1},0).wait(1).to({rotation:-20.4,x:338.3,y:653.6},0).wait(1).to({rotation:-22.8,x:337.7,y:653},0).wait(1).to({rotation:-25.2,x:337.2,y:652.4},0).wait(1).to({rotation:-27.5,x:336.7,y:651.9},0).wait(6));

	// 02.png
	this.instance_5 = new lib.Символ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(301.2,428.4,1,1,0,0,0,37.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:428.2},0).wait(1).to({y:428.1},0).wait(1).to({y:428},0).wait(1).to({y:427.9},0).wait(1).to({y:427.8},0).wait(1).to({y:427.7},0).wait(1).to({y:427.5},0).wait(1).to({y:427.4},0).wait(1).to({y:427.3},0).wait(1).to({y:427.2},0).wait(1).to({y:427.1},0).wait(1).to({y:427},0).wait(1).to({y:426.9},0).wait(1).to({y:426.7},0).wait(1).to({y:426.6},0).wait(1).to({y:426.5},0).wait(1).to({y:426.4},0).wait(1).to({y:426.3},0).wait(1).to({y:426.2},0).wait(1).to({y:426.1},0).wait(1).to({y:425.9},0).wait(1).to({y:425.8},0).wait(1).to({y:425.7},0).wait(1).to({y:425.6},0).wait(1).to({y:425.3},0).wait(1).to({y:425.1},0).wait(1).to({y:424.8},0).wait(1).to({y:424.6},0).wait(1).to({y:424.3},0).wait(1).to({y:424.1},0).wait(1).to({y:423.8},0).wait(1).to({y:423.6},0).wait(1).to({y:423.3},0).wait(1).to({y:423.1},0).wait(1).to({y:422.8},0).wait(1).to({y:422.6},0).wait(1).to({y:423},0).wait(1).to({y:423.5},0).wait(1).to({y:423.9},0).wait(1).to({y:424.3},0).wait(1).to({y:424.8},0).wait(1).to({y:425.2},0).wait(1).to({y:425.7},0).wait(1).to({y:426.1},0).wait(1).to({y:426.6},0).wait(1).to({y:427},0).wait(1).to({y:427.5},0).wait(1).to({y:427.9},0).wait(1).to({y:428.4},0).wait(1).to({y:428.2},0).wait(1).to({y:428.1},0).wait(1).to({y:428},0).wait(1).to({y:427.9},0).wait(1).to({y:427.8},0).wait(1).to({y:427.7},0).wait(1).to({y:427.6},0).wait(1).to({y:427.5},0).wait(1).to({y:427.4},0).wait(1).to({y:427.3},0).wait(1).to({y:427.1},0).wait(1).to({y:427},0).wait(1).to({y:426.9},0).wait(1).to({y:426.8},0).wait(1).to({y:426.7},0).wait(1).to({y:426.6},0).wait(1).to({y:426.5},0).wait(1).to({y:426.4},0).wait(1).to({y:426.3},0).wait(1).to({y:426.2},0).wait(1).to({y:426},0).wait(1).to({y:425.9},0).wait(1).to({y:425.8},0).wait(1).to({y:425.7},0).wait(1).to({y:425.6},0).wait(1).to({y:425.7},0).wait(1).to({y:425.8},0).wait(1).to({y:425.9},0).wait(1).to({y:426},0).wait(1).to({y:426.1},0).wait(1).to({y:426.2},0).wait(1).to({y:426.3},0).wait(1).to({y:426.4},0).wait(1).to({y:426.6},0).wait(1).to({y:426.7},0).wait(1).to({y:426.8},0).wait(1).to({y:426.9},0).wait(1).to({y:427},0).wait(1).to({y:427.1},0).wait(1).to({y:427.2},0).wait(1).to({y:427.3},0).wait(1).to({y:427.4},0).wait(1).to({y:427.5},0).wait(1).to({y:427.6},0).wait(1).to({y:427.7},0).wait(1).to({y:427.8},0).wait(1).to({y:427.9},0).wait(1).to({y:428},0).wait(1).to({y:428.1},0).wait(1).to({y:428.2},0).wait(1).to({y:428.4},0).wait(1).to({y:427.9},0).wait(1).to({y:427.4},0).wait(1).to({y:426.9},0).wait(1).to({y:426.4},0).wait(1).to({y:425.9},0).wait(1).to({y:425.5},0).wait(1).to({y:425},0).wait(1).to({y:424.5},0).wait(1).to({y:424},0).wait(1).to({y:423.5},0).wait(1).to({y:423.1},0).wait(1).to({y:422.6},0).wait(1).to({y:422.8},0).wait(1).to({y:423},0).wait(1).to({y:423.3},0).wait(1).to({y:423.5},0).wait(1).to({y:423.7},0).wait(1).to({y:424},0).wait(1).to({y:424.2},0).wait(1).to({y:424.4},0).wait(1).to({y:424.7},0).wait(1).to({y:424.9},0).wait(1).to({y:425.1},0).wait(1).to({y:425.4},0).wait(1).to({y:425.6},0).wait(1).to({y:425.7},0).wait(1).to({y:425.8},0).wait(1).to({y:425.9},0).wait(1).to({y:426},0).wait(1).to({y:426.2},0).wait(1).to({y:426.3},0).wait(1).to({y:426.4},0).wait(1).to({y:426.5},0).wait(1).to({y:426.6},0).wait(1).to({y:426.7},0).wait(1).to({y:426.8},0).wait(1).to({y:426.9},0).wait(1).to({y:427},0).wait(1).to({y:427.1},0).wait(1).to({y:427.3},0).wait(1).to({y:427.4},0).wait(1).to({y:427.5},0).wait(1).to({y:427.6},0).wait(1).to({y:427.7},0).wait(1).to({y:427.8},0).wait(1).to({y:427.9},0).wait(1).to({y:428},0).wait(1).to({y:428.1},0).wait(1).to({y:428.2},0).wait(1).to({y:428.4},0).wait(1).to({rotation:0.6,x:306.1,y:437.1},0).wait(1).to({rotation:1.1,x:311.1,y:445.8},0).wait(1).to({rotation:1.7,x:316.1,y:454.6},0).wait(1).to({rotation:2.2,x:321.1,y:463.3},0).wait(1).to({y:462},0).wait(1).to({y:460.8},0).wait(11).to({y:461.5},0).wait(1).to({y:462.2},0).wait(1).to({y:462.9},0).wait(1).to({y:463.7},0).wait(1).to({y:464.4},0).wait(1).to({y:465.1},0).wait(1).to({y:463.5},0).wait(1).to({y:461.9},0).wait(1).to({y:460.2},0).wait(1).to({y:458.6},0).wait(1).to({y:459},0).wait(1).to({y:459.5},0).wait(1).to({y:459.9},0).wait(1).to({y:460.3},0).wait(1).to({y:460.8},0).wait(1).to({y:460.5},0).wait(1).to({y:460.2},0).wait(1).to({y:459.8},0).wait(1).to({y:459.5},0).wait(1).to({y:459.2},0).wait(1).to({y:458.9},0).wait(1).to({y:458.6},0).wait(1).to({y:458.3},0).wait(1).to({y:458},0).wait(1).to({y:457.7},0).wait(1).to({y:457.4},0).wait(1).to({y:457},0).wait(1).to({y:456.7},0).wait(1).to({y:456.4},0).wait(1).to({rotation:1.9,x:318.3,y:452.4},0).wait(1).to({rotation:1.6,x:315.4,y:448.4},0).wait(1).to({rotation:1.3,x:312.6,y:444.4},0).wait(1).to({rotation:0.9,x:309.7,y:440.4},0).wait(1).to({rotation:0.6,x:306.8,y:436.4},0).wait(1).to({rotation:0.3,x:304,y:432.4},0).wait(1).to({rotation:0,x:301.2,y:428.4},0).wait(6));

	// 03.png
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(308.3,534.3,1,1,0,0,0,155.9,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:176,regY:143.5,x:328.3,y:497.6},0).wait(1).to({x:328.2,y:497.5},0).wait(1).to({x:328.1,y:497.3},0).wait(1).to({x:328,y:497.1},0).wait(1).to({x:327.9,y:497},0).wait(1).to({x:327.8,y:496.8},0).wait(1).to({x:327.7,y:496.6},0).wait(1).to({x:327.6,y:496.5},0).wait(1).to({x:327.5,y:496.3},0).wait(1).to({x:327.4,y:496.1},0).wait(1).to({x:327.3,y:495.9},0).wait(1).to({x:327.2,y:495.8},0).wait(1).to({x:327.1,y:495.6},0).wait(1).to({x:327,y:495.4},0).wait(1).to({x:326.9,y:495.3},0).wait(1).to({x:326.8,y:495.1},0).wait(1).to({x:326.7,y:494.9},0).wait(1).to({x:326.6,y:494.8},0).wait(1).to({x:326.5,y:494.6},0).wait(1).to({x:326.4,y:494.4},0).wait(1).to({x:326.3,y:494.3},0).wait(1).to({x:326.2,y:494.1},0).wait(1).to({x:326.1,y:493.9},0).wait(1).to({y:493.8},0).wait(1).to({y:493.9},0).wait(1).to({x:326.2,y:494.1},0).wait(1).to({x:326.3,y:494.2},0).wait(1).to({x:326.4,y:494.4},0).wait(1).to({x:326.5,y:494.6},0).wait(1).to({x:326.6,y:494.7},0).wait(1).to({x:326.7,y:494.9},0).wait(1).to({x:326.8,y:495},0).wait(1).to({x:326.9,y:495.2},0).wait(1).to({x:327,y:495.4},0).wait(1).to({x:327.1,y:495.5},0).wait(1).to({x:327.2,y:495.7},0).wait(1).to({y:495.9},0).wait(1).to({x:327.3,y:496},0).wait(1).to({x:327.4,y:496.2},0).wait(1).to({x:327.5,y:496.3},0).wait(1).to({x:327.6,y:496.5},0).wait(1).to({x:327.7,y:496.7},0).wait(1).to({x:327.8,y:496.8},0).wait(1).to({x:327.9,y:497},0).wait(1).to({x:328,y:497.2},0).wait(1).to({x:328.1,y:497.3},0).wait(1).to({x:328.2,y:497.5},0).wait(1).to({x:328.3,y:497.6},0).wait(1).to({x:328.4,y:497.8},0).wait(1).to({x:328.3,y:497.6},0).wait(1).to({x:328.2,y:497.5},0).wait(1).to({x:328.1,y:497.3},0).wait(1).to({x:328,y:497.2},0).wait(1).to({x:327.9,y:497},0).wait(1).to({x:327.8,y:496.8},0).wait(1).to({x:327.7,y:496.7},0).wait(1).to({x:327.6,y:496.5},0).wait(1).to({x:327.5,y:496.3},0).wait(1).to({x:327.4,y:496.2},0).wait(1).to({x:327.3,y:496},0).wait(1).to({x:327.2,y:495.9},0).wait(1).to({y:495.7},0).wait(1).to({x:327.1,y:495.5},0).wait(1).to({x:327,y:495.4},0).wait(1).to({x:326.9,y:495.2},0).wait(1).to({x:326.8,y:495},0).wait(1).to({x:326.7,y:494.9},0).wait(1).to({x:326.6,y:494.7},0).wait(1).to({x:326.5,y:494.6},0).wait(1).to({x:326.4,y:494.4},0).wait(1).to({x:326.3,y:494.2},0).wait(1).to({x:326.2,y:494.1},0).wait(1).to({x:326.1,y:493.9},0).wait(1).to({y:493.8},0).wait(1).to({y:493.9},0).wait(1).to({x:326.2,y:494.1},0).wait(1).to({x:326.3,y:494.2},0).wait(1).to({x:326.4,y:494.4},0).wait(1).to({x:326.5,y:494.5},0).wait(1).to({x:326.6,y:494.7},0).wait(1).to({x:326.7,y:494.8},0).wait(1).to({x:326.8,y:495},0).wait(1).to({y:495.2},0).wait(1).to({x:326.9,y:495.3},0).wait(1).to({x:327,y:495.5},0).wait(1).to({x:327.1,y:495.6},0).wait(1).to({x:327.2,y:495.8},0).wait(1).to({x:327.3,y:495.9},0).wait(1).to({x:327.4,y:496.1},0).wait(1).to({x:327.5,y:496.2},0).wait(1).to({x:327.6,y:496.4},0).wait(1).to({y:496.6},0).wait(1).to({x:327.7,y:496.7},0).wait(1).to({x:327.8,y:496.9},0).wait(1).to({x:327.9,y:497},0).wait(1).to({x:328,y:497.2},0).wait(1).to({x:328.1,y:497.3},0).wait(1).to({x:328.2,y:497.5},0).wait(1).to({x:328.3,y:497.6},0).wait(1).to({x:328.4,y:497.8},0).wait(1).to({x:328.3,y:497.6},0).wait(1).to({x:328.2,y:497.5},0).wait(1).to({x:328.1,y:497.3},0).wait(1).to({x:328,y:497.2},0).wait(1).to({x:327.9,y:497},0).wait(1).to({x:327.8,y:496.8},0).wait(1).to({x:327.7,y:496.7},0).wait(1).to({x:327.6,y:496.5},0).wait(1).to({x:327.5,y:496.3},0).wait(1).to({x:327.4,y:496.2},0).wait(1).to({x:327.3,y:496},0).wait(1).to({x:327.2,y:495.9},0).wait(1).to({y:495.7},0).wait(1).to({x:327.1,y:495.5},0).wait(1).to({x:327,y:495.4},0).wait(1).to({x:326.9,y:495.2},0).wait(1).to({x:326.8,y:495},0).wait(1).to({x:326.7,y:494.9},0).wait(1).to({x:326.6,y:494.7},0).wait(1).to({x:326.5,y:494.6},0).wait(1).to({x:326.4,y:494.4},0).wait(1).to({x:326.3,y:494.2},0).wait(1).to({x:326.2,y:494.1},0).wait(1).to({x:326.1,y:493.9},0).wait(1).to({y:493.8},0).wait(1).to({y:493.9},0).wait(1).to({x:326.2,y:494.1},0).wait(1).to({x:326.3,y:494.2},0).wait(1).to({x:326.4,y:494.4},0).wait(1).to({x:326.5,y:494.6},0).wait(1).to({x:326.6,y:494.7},0).wait(1).to({x:326.7,y:494.9},0).wait(1).to({x:326.8,y:495},0).wait(1).to({x:326.9,y:495.2},0).wait(1).to({x:327,y:495.4},0).wait(1).to({x:327.1,y:495.5},0).wait(1).to({x:327.2,y:495.7},0).wait(1).to({y:495.9},0).wait(1).to({x:327.3,y:496},0).wait(1).to({x:327.4,y:496.2},0).wait(1).to({x:327.5,y:496.3},0).wait(1).to({x:327.6,y:496.5},0).wait(1).to({x:327.7,y:496.7},0).wait(1).to({x:327.8,y:496.8},0).wait(1).to({x:327.9,y:497},0).wait(1).to({x:328,y:497.2},0).wait(1).to({x:328.1,y:497.3},0).wait(1).to({x:328.2,y:497.5},0).wait(1).to({x:328.3,y:497.6},0).wait(1).to({x:328.4,y:497.8},0).wait(1).to({rotation:1,x:332.3,y:511.3},0).wait(1).to({rotation:2.1,x:336.3,y:524.8},0).wait(1).to({rotation:3.1,x:340.2,y:538.3},0).wait(1).to({rotation:4.2,x:344.2,y:551.8},0).wait(1).to({x:343.5,y:549.3},0).wait(1).to({x:342.9,y:546.7},0).wait(40).to({rotation:3.6,x:340.8,y:539.7},0).wait(1).to({rotation:3,x:338.7,y:532.7},0).wait(1).to({rotation:2.4,x:336.6,y:525.7},0).wait(1).to({rotation:1.8,x:334.6,y:518.8},0).wait(1).to({rotation:1.2,x:332.5,y:511.7},0).wait(1).to({rotation:0.6,x:330.4,y:504.8},0).wait(1).to({rotation:0,x:328.4,y:497.8},0).wait(6));

	// 04.png
	this.instance_7 = new lib.Символ4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(471.4,549.4,1,1,0,0,0,209,198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:212.2,regY:201.8,x:474.4,y:552.5},0).wait(1).to({x:474.3,y:552.4},0).wait(1).to({x:474.2,y:552.3},0).wait(1).to({x:474.1,y:552.2},0).wait(1).to({x:474,y:552.1},0).wait(1).to({x:473.9,y:552},0).wait(1).to({x:473.7,y:551.8},0).wait(1).to({x:473.6,y:551.7},0).wait(1).to({x:473.5,y:551.6},0).wait(1).to({x:473.4,y:551.5},0).wait(1).to({x:473.3,y:551.4},0).wait(1).to({x:473.2,y:551.3},0).wait(1).to({x:473.1,y:551.2},0).wait(1).to({x:472.9,y:551},0).wait(1).to({x:472.8,y:550.9},0).wait(1).to({x:472.7,y:550.8},0).wait(1).to({x:472.6,y:550.7},0).wait(1).to({x:472.5,y:550.6},0).wait(1).to({x:472.4,y:550.5},0).wait(1).to({x:472.3,y:550.4},0).wait(1).to({x:472.1,y:550.2},0).wait(1).to({x:472,y:550.1},0).wait(1).to({x:471.9,y:550},0).wait(1).to({x:471.8,y:549.9},0).wait(1).to({x:471.9,y:550},0).wait(1).to({x:472,y:550.1},0).wait(1).to({x:472.1,y:550.2},0).wait(1).to({x:472.2,y:550.3},0).wait(1).to({x:472.4,y:550.5},0).wait(1).to({x:472.5,y:550.6},0).wait(1).to({x:472.6,y:550.7},0).wait(1).to({x:472.7,y:550.8},0).wait(1).to({x:472.8,y:550.9},0).wait(1).to({x:472.9,y:551},0).wait(1).to({x:473,y:551.1},0).wait(1).to({x:473.1,y:551.2},0).wait(1).to({x:473.2,y:551.3},0).wait(1).to({x:473.3,y:551.4},0).wait(1).to({x:473.5,y:551.6},0).wait(1).to({x:473.6,y:551.7},0).wait(1).to({x:473.7,y:551.8},0).wait(1).to({x:473.8,y:551.9},0).wait(1).to({x:473.9,y:552},0).wait(1).to({x:474,y:552.1},0).wait(1).to({x:474.1,y:552.2},0).wait(1).to({x:474.2,y:552.3},0).wait(1).to({x:474.3,y:552.4},0).wait(1).to({x:474.4,y:552.5},0).wait(1).to({x:474.6,y:552.7},0).wait(1).to({x:474.4,y:552.5},0).wait(1).to({x:474.3,y:552.4},0).wait(1).to({x:474.2,y:552.3},0).wait(1).to({x:474.1,y:552.2},0).wait(1).to({x:474,y:552.1},0).wait(1).to({x:473.9,y:552},0).wait(1).to({x:473.8,y:551.9},0).wait(1).to({x:473.7,y:551.8},0).wait(1).to({x:473.6,y:551.7},0).wait(1).to({x:473.5,y:551.6},0).wait(1).to({x:473.3,y:551.4},0).wait(1).to({x:473.2,y:551.3},0).wait(1).to({x:473.1,y:551.2},0).wait(1).to({x:473,y:551.1},0).wait(1).to({x:472.9,y:551},0).wait(1).to({x:472.8,y:550.9},0).wait(1).to({x:472.7,y:550.8},0).wait(1).to({x:472.6,y:550.7},0).wait(1).to({x:472.5,y:550.6},0).wait(1).to({x:472.4,y:550.5},0).wait(1).to({x:472.2,y:550.3},0).wait(1).to({x:472.1,y:550.2},0).wait(1).to({x:472,y:550.1},0).wait(1).to({x:471.9,y:550},0).wait(1).to({x:471.8,y:549.9},0).wait(1).to({x:471.9,y:550},0).wait(1).to({x:472,y:550.1},0).wait(1).to({x:472.1,y:550.2},0).wait(1).to({x:472.2,y:550.3},0).wait(1).to({x:472.3,y:550.4},0).wait(1).to({x:472.4,y:550.5},0).wait(1).to({x:472.5,y:550.6},0).wait(1).to({x:472.6,y:550.7},0).wait(1).to({x:472.8,y:550.9},0).wait(1).to({x:472.9,y:551},0).wait(1).to({x:473,y:551.1},0).wait(1).to({x:473.1,y:551.2},0).wait(1).to({x:473.2,y:551.3},0).wait(1).to({x:473.3,y:551.4},0).wait(1).to({x:473.4,y:551.5},0).wait(1).to({x:473.5,y:551.6},0).wait(1).to({x:473.6,y:551.7},0).wait(1).to({x:473.7,y:551.8},0).wait(1).to({x:473.8,y:551.9},0).wait(1).to({x:473.9,y:552},0).wait(1).to({x:474,y:552.1},0).wait(1).to({x:474.1,y:552.2},0).wait(1).to({x:474.2,y:552.3},0).wait(1).to({x:474.3,y:552.4},0).wait(1).to({x:474.4,y:552.5},0).wait(1).to({x:474.6,y:552.7},0).wait(1).to({x:474.4,y:552.5},0).wait(1).to({x:474.3,y:552.4},0).wait(1).to({x:474.2,y:552.3},0).wait(1).to({x:474.1,y:552.2},0).wait(1).to({x:474,y:552.1},0).wait(1).to({x:473.9,y:552},0).wait(1).to({x:473.8,y:551.9},0).wait(1).to({x:473.7,y:551.8},0).wait(1).to({x:473.6,y:551.7},0).wait(1).to({x:473.5,y:551.6},0).wait(1).to({x:473.3,y:551.4},0).wait(1).to({x:473.2,y:551.3},0).wait(1).to({x:473.1,y:551.2},0).wait(1).to({x:473,y:551.1},0).wait(1).to({x:472.9,y:551},0).wait(1).to({x:472.8,y:550.9},0).wait(1).to({x:472.7,y:550.8},0).wait(1).to({x:472.6,y:550.7},0).wait(1).to({x:472.5,y:550.6},0).wait(1).to({x:472.4,y:550.5},0).wait(1).to({x:472.2,y:550.3},0).wait(1).to({x:472.1,y:550.2},0).wait(1).to({x:472,y:550.1},0).wait(1).to({x:471.9,y:550},0).wait(1).to({x:471.8,y:549.9},0).wait(1).to({x:471.9,y:550},0).wait(1).to({x:472,y:550.1},0).wait(1).to({x:472.1,y:550.2},0).wait(1).to({x:472.2,y:550.3},0).wait(1).to({x:472.4,y:550.5},0).wait(1).to({x:472.5,y:550.6},0).wait(1).to({x:472.6,y:550.7},0).wait(1).to({x:472.7,y:550.8},0).wait(1).to({x:472.8,y:550.9},0).wait(1).to({x:472.9,y:551},0).wait(1).to({x:473,y:551.1},0).wait(1).to({x:473.1,y:551.2},0).wait(1).to({x:473.2,y:551.3},0).wait(1).to({x:473.3,y:551.4},0).wait(1).to({x:473.5,y:551.6},0).wait(1).to({x:473.6,y:551.7},0).wait(1).to({x:473.7,y:551.8},0).wait(1).to({x:473.8,y:551.9},0).wait(1).to({x:473.9,y:552},0).wait(1).to({x:474,y:552.1},0).wait(1).to({x:474.1,y:552.2},0).wait(1).to({x:474.2,y:552.3},0).wait(1).to({x:474.3,y:552.4},0).wait(1).to({x:474.4,y:552.5},0).wait(1).to({x:474.6,y:552.7},0).wait(1).to({rotation:3.1,x:482,y:575.8},0).wait(1).to({rotation:6.3,x:489.5,y:598.9},0).wait(1).to({rotation:9.4,x:496.9,y:622},0).wait(1).to({rotation:12.5,x:504.3,y:645.1},0).wait(1).to({x:503.7,y:641.9},0).wait(1).to({x:503.1,y:638.7},0).wait(26).to({y:638.4},0).wait(1).to({y:638.1},0).wait(1).to({y:637.8},0).wait(1).to({y:637.5},0).wait(1).to({y:637.2},0).wait(1).to({y:636.9},0).wait(1).to({y:636.6},0).wait(1).to({y:636.3},0).wait(1).to({y:635.9},0).wait(1).to({y:635.6},0).wait(1).to({y:635.3},0).wait(1).to({y:635},0).wait(1).to({y:634.7},0).wait(1).to({y:634.4},0).wait(1).to({rotation:10.8,x:499,y:622.7},0).wait(1).to({rotation:9,x:494.9,y:611},0).wait(1).to({rotation:7.2,x:490.8,y:599.4},0).wait(1).to({rotation:5.4,x:486.8,y:587.7},0).wait(1).to({rotation:3.6,x:482.7,y:576},0).wait(1).to({rotation:1.8,x:478.6,y:564.3},0).wait(1).to({rotation:0,x:474.6,y:552.7},0).wait(6));

	// 05.png
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(328.8,630.6,1,1,0,0,0,54.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(151).to({rotation:1.8,x:328.7},0).wait(1).to({rotation:3.7,x:328.8},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:7.3,x:328.7},0).wait(42).to({rotation:6.3,x:328.8},0).wait(1).to({rotation:5.2,x:328.7},0).wait(1).to({rotation:4.2,x:328.8},0).wait(1).to({rotation:3.1,x:328.7},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:1},0).wait(1).to({rotation:0,x:328.8},0).wait(6));

	// 08.png
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(643.4,401.7,1,1,0,0,0,47,177.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:96,regY:101,rotation:0.2,x:692,y:325.1},0).wait(1).to({rotation:0.5,x:691.6,y:325.3},0).wait(1).to({rotation:0.7,x:691.3,y:325.4},0).wait(1).to({rotation:1,x:690.9,y:325.5},0).wait(1).to({rotation:1.2,x:690.5,y:325.7},0).wait(1).to({rotation:1.5,x:690.1,y:325.8},0).wait(1).to({rotation:1.7,x:689.8,y:325.9},0).wait(1).to({rotation:2,x:689.4,y:326.1},0).wait(1).to({rotation:2.2,x:689,y:326.2},0).wait(1).to({rotation:2.5,x:688.6,y:326.4},0).wait(1).to({rotation:2.7,x:688.2,y:326.6},0).wait(1).to({rotation:3,x:687.9,y:326.7},0).wait(1).to({rotation:3.2,x:687.5,y:326.9},0).wait(1).to({rotation:3.5,x:687.1,y:327},0).wait(1).to({rotation:3.7,x:686.7,y:327.2},0).wait(1).to({rotation:4,x:686.3,y:327.4},0).wait(1).to({rotation:4.2,x:686,y:327.5},0).wait(1).to({rotation:4.5,x:685.6,y:327.7},0).wait(1).to({rotation:4.7,x:685.1,y:327.9},0).wait(1).to({rotation:5,x:684.8,y:328},0).wait(1).to({rotation:5.2,x:684.4,y:328.2},0).wait(1).to({rotation:5.5,x:684,y:328.4},0).wait(1).to({rotation:5.7,x:683.6,y:328.6},0).wait(1).to({rotation:6,x:683.2,y:328.7},0).wait(1).to({rotation:5,x:682.6,y:328.2},0).wait(1).to({rotation:3.9,x:681.9,y:327.7},0).wait(1).to({rotation:2.9,x:681.3,y:327.1},0).wait(1).to({rotation:1.9,x:680.6,y:326.7},0).wait(1).to({rotation:0.9,x:679.9,y:326.3},0).wait(1).to({rotation:-0.2,x:679.1,y:325.8},0).wait(1).to({rotation:-1.2,x:678.4,y:325.5},0).wait(1).to({rotation:-2.2,x:677.7,y:325.1},0).wait(1).to({rotation:-3.2,x:676.9,y:324.8},0).wait(1).to({rotation:-4.3,x:676.1,y:324.4},0).wait(1).to({rotation:-5.3,x:675.3,y:324.1},0).wait(1).to({rotation:-6.3,x:674.5,y:323.9},0).wait(1).to({rotation:-5.8,x:675.9},0).wait(1).to({rotation:-5.3,x:677.3,y:324},0).wait(1).to({rotation:-4.9,x:678.6},0).wait(1).to({rotation:-4.4,x:680,y:324.1},0).wait(1).to({rotation:-3.9,x:681.4,y:324.2},0).wait(1).to({rotation:-3.4,x:682.8},0).wait(1).to({rotation:-2.9,x:684.2,y:324.3},0).wait(1).to({rotation:-2.4,x:685.5,y:324.4},0).wait(1).to({rotation:-1.9,x:686.9,y:324.5},0).wait(1).to({rotation:-1.5,x:688.2,y:324.6},0).wait(1).to({rotation:-1,x:689.6,y:324.7},0).wait(1).to({rotation:-0.5,x:691,y:324.9},0).wait(1).to({rotation:0,x:692.4,y:325},0).wait(1).to({rotation:0.2,x:692,y:325.1},0).wait(1).to({rotation:0.5,x:691.6,y:325.2},0).wait(1).to({rotation:0.7,x:691.3,y:325.4},0).wait(1).to({rotation:1,x:690.9,y:325.5},0).wait(1).to({rotation:1.2,x:690.6,y:325.7},0).wait(1).to({rotation:1.4,x:690.2,y:325.8},0).wait(1).to({rotation:1.7,x:689.8,y:325.9},0).wait(1).to({rotation:1.9,x:689.5,y:326.1},0).wait(1).to({rotation:2.2,x:689.1,y:326.2},0).wait(1).to({rotation:2.4,x:688.8,y:326.3},0).wait(1).to({rotation:2.6,x:688.4,y:326.5},0).wait(1).to({rotation:2.9,x:688.1,y:326.6},0).wait(1).to({rotation:3.1,x:687.6,y:326.8},0).wait(1).to({rotation:3.4,x:687.3,y:327},0).wait(1).to({rotation:3.6,x:687,y:327.1},0).wait(1).to({rotation:3.8,x:686.6,y:327.2},0).wait(1).to({rotation:4.1,x:686.2,y:327.4},0).wait(1).to({rotation:4.3,x:685.8,y:327.6},0).wait(1).to({rotation:4.5,x:685.5,y:327.8},0).wait(1).to({rotation:4.8,x:685.1,y:327.9},0).wait(1).to({rotation:5,x:684.7,y:328},0).wait(1).to({rotation:5.3,x:684.4,y:328.2},0).wait(1).to({rotation:5.5,x:684,y:328.4},0).wait(1).to({rotation:5.7,x:683.6,y:328.6},0).wait(1).to({rotation:6,x:683.2,y:328.7},0).wait(1).to({rotation:5.8,x:683.6,y:328.6},0).wait(1).to({rotation:5.5,x:684,y:328.4},0).wait(1).to({rotation:5.3,x:684.3,y:328.2},0).wait(1).to({rotation:5.1,x:684.7,y:328.1},0).wait(1).to({rotation:4.8,x:685,y:328},0).wait(1).to({rotation:4.6,x:685.4,y:327.8},0).wait(1).to({rotation:4.4,x:685.7,y:327.6},0).wait(1).to({rotation:4.1,x:686.1,y:327.5},0).wait(1).to({rotation:3.9,x:686.5,y:327.3},0).wait(1).to({rotation:3.7,x:686.8,y:327.2},0).wait(1).to({rotation:3.5,x:687.2,y:327},0).wait(1).to({rotation:3.2,x:687.5,y:326.9},0).wait(1).to({rotation:3,x:687.9,y:326.7},0).wait(1).to({rotation:2.8,x:688.2,y:326.6},0).wait(1).to({rotation:2.5,x:688.6,y:326.5},0).wait(1).to({rotation:2.3,x:688.9,y:326.3},0).wait(1).to({rotation:2.1,x:689.3,y:326.2},0).wait(1).to({rotation:1.8,x:689.6,y:326},0).wait(1).to({rotation:1.6,x:689.9,y:325.9},0).wait(1).to({rotation:1.4,x:690.3,y:325.7},0).wait(1).to({rotation:1.2,x:690.6},0).wait(1).to({rotation:0.9,x:691,y:325.5},0).wait(1).to({rotation:0.7,x:691.3,y:325.3},0).wait(1).to({rotation:0.5,x:691.7,y:325.2},0).wait(1).to({rotation:0.2,x:692,y:325.1},0).wait(1).to({rotation:0,x:692.4,y:325},0).wait(1).to({rotation:-0.5,x:690.9,y:324.8},0).wait(1).to({rotation:-1.1,x:689.4,y:324.7},0).wait(1).to({rotation:-1.6,x:687.9,y:324.6},0).wait(1).to({rotation:-2.1,x:686.5,y:324.5},0).wait(1).to({rotation:-2.6,x:685,y:324.4},0).wait(1).to({rotation:-3.2,x:683.5,y:324.3},0).wait(1).to({rotation:-3.7,x:682,y:324.2},0).wait(1).to({rotation:-4.2,x:680.5,y:324.1},0).wait(1).to({rotation:-4.7,x:679},0).wait(1).to({rotation:-5.3,x:677.5,y:324},0).wait(1).to({rotation:-5.8,x:676,y:323.9},0).wait(1).to({rotation:-6.3,x:674.5},0).wait(1).to({rotation:-5.4,x:675.3,y:324.1},0).wait(1).to({rotation:-4.4,x:676,y:324.4},0).wait(1).to({rotation:-3.5,x:676.6,y:324.7},0).wait(1).to({rotation:-2.5,x:677.4,y:325},0).wait(1).to({rotation:-1.6,x:678.1,y:325.3},0).wait(1).to({rotation:-0.6,x:678.8,y:325.7},0).wait(1).to({rotation:0.3,x:679.5,y:326},0).wait(1).to({rotation:1.3,x:680.2,y:326.5},0).wait(1).to({rotation:2.2,x:680.8,y:326.9},0).wait(1).to({rotation:3.1,x:681.4,y:327.3},0).wait(1).to({rotation:4.1,x:682,y:327.8},0).wait(1).to({rotation:5,x:682.7,y:328.2},0).wait(1).to({rotation:6,x:683.2,y:328.7},0).wait(1).to({rotation:5.7,x:683.6,y:328.6},0).wait(1).to({rotation:5.5,x:684,y:328.4},0).wait(1).to({rotation:5.3,x:684.4,y:328.2},0).wait(1).to({rotation:5,x:684.7,y:328},0).wait(1).to({rotation:4.8,x:685.1,y:327.9},0).wait(1).to({rotation:4.5,x:685.5,y:327.8},0).wait(1).to({rotation:4.3,x:685.8,y:327.6},0).wait(1).to({rotation:4.1,x:686.2,y:327.4},0).wait(1).to({rotation:3.8,x:686.6,y:327.2},0).wait(1).to({rotation:3.6,x:687,y:327.1},0).wait(1).to({rotation:3.4,x:687.3,y:327},0).wait(1).to({rotation:3.1,x:687.6,y:326.8},0).wait(1).to({rotation:2.9,x:688.1,y:326.6},0).wait(1).to({rotation:2.6,x:688.4,y:326.5},0).wait(1).to({rotation:2.4,x:688.8,y:326.3},0).wait(1).to({rotation:2.2,x:689.1,y:326.2},0).wait(1).to({rotation:1.9,x:689.5,y:326.1},0).wait(1).to({rotation:1.7,x:689.8,y:325.9},0).wait(1).to({rotation:1.4,x:690.2,y:325.8},0).wait(1).to({rotation:1.2,x:690.6,y:325.7},0).wait(1).to({rotation:1,x:690.9,y:325.5},0).wait(1).to({rotation:0.7,x:691.3,y:325.4},0).wait(1).to({rotation:0.5,x:691.6,y:325.2},0).wait(1).to({rotation:0.2,x:692,y:325.1},0).wait(1).to({rotation:0,x:692.4,y:325},0).wait(1).to({rotation:-4.9,x:692.6,y:344.9},0).wait(1).to({rotation:-9.9,x:692.5,y:365.5},0).wait(1).to({rotation:-14.8,x:692.1,y:386.7},0).wait(1).to({rotation:-19.7,x:691.7,y:408.5},0).wait(3).to({rotation:-18,x:695.4,y:409.4},0).wait(1).to({rotation:-16.4,x:699.2,y:410.4},0).wait(1).to({rotation:-14.7,x:702.9,y:411.5},0).wait(1).to({rotation:-13.1,x:706.6,y:412.6},0).wait(1).to({rotation:-11.4,x:710.3,y:413.7},0).wait(1).to({rotation:-9.8,x:713.9,y:415},0).wait(1).to({rotation:-8.1,x:717.6,y:416.3},0).wait(1).to({rotation:-6.4,x:721.2,y:417.7},0).wait(1).to({rotation:-4.8,x:724.7,y:419.2},0).wait(1).to({rotation:-3.1,x:728.2,y:420.7},0).wait(1).to({rotation:-4.2,x:725.9,y:419.7},0).wait(1).to({rotation:-5.3,x:723.6,y:418.7},0).wait(1).to({rotation:-6.4,x:721.2,y:417.7},0).wait(1).to({rotation:-7.5,x:718.7,y:416.8},0).wait(1).to({rotation:-8.7,x:716.4,y:415.9},0).wait(1).to({rotation:-9.8,x:713.9,y:415},0).wait(1).to({rotation:-10.9,x:711.5,y:414.2},0).wait(1).to({rotation:-12,x:709.1,y:413.3},0).wait(1).to({rotation:-13.1,x:706.6,y:412.6},0).wait(1).to({rotation:-14.2,x:704.1,y:411.8},0).wait(1).to({rotation:-15.3,x:701.6,y:411.1},0).wait(1).to({rotation:-16.4,x:699.2,y:410.4},0).wait(1).to({rotation:-17.5,x:696.6,y:409.8},0).wait(1).to({rotation:-18.6,x:694.2,y:409.1},0).wait(1).to({rotation:-19.7,x:691.7,y:408.5},0).wait(1).to({rotation:-19.5,x:691.9,y:408.3},0).wait(1).to({rotation:-19.3,x:692.3,y:408},0).wait(1).to({rotation:-19.1,x:692.6,y:407.8},0).wait(1).to({rotation:-18.9,x:692.9,y:407.5},0).wait(1).to({rotation:-18.7,x:693.2,y:407.3},0).wait(1).to({rotation:-18.5,x:693.5,y:407.1},0).wait(1).to({rotation:-18.3,x:693.8,y:406.9},0).wait(1).to({rotation:-18.1,x:694.1,y:406.6},0).wait(1).to({rotation:-17.9,x:694.4,y:406.4},0).wait(1).to({rotation:-17.7,x:694.7,y:406.2},0).wait(1).to({rotation:-17.5,x:695.1,y:405.9},0).wait(1).to({rotation:-17.3,x:695.4,y:405.7},0).wait(1).to({rotation:-17.1,x:695.7,y:405.5},0).wait(1).to({rotation:-16.9,x:696,y:405.3},0).wait(1).to({rotation:-14.5,x:695.6,y:393.4},0).wait(1).to({rotation:-12,x:695.3,y:381.6},0).wait(1).to({rotation:-9.6,x:694.8,y:370},0).wait(1).to({rotation:-7.2,x:694.3,y:358.5},0).wait(1).to({rotation:-4.8,x:693.7,y:347.2},0).wait(1).to({rotation:-2.4,x:693.1,y:336},0).wait(1).to({rotation:0,x:692.4,y:325},0).wait(6));

	// 07.png
	this.instance_10 = new lib.Символ10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(642.7,558.1,1,1,0,0,0,47.7,221.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:56.5,regY:152,rotation:-0.2,x:651.2,y:489},0).wait(1).to({rotation:-0.4,x:651,y:488.9},0).wait(1).to({rotation:-0.6,x:650.7},0).wait(1).to({rotation:-0.8,x:650.5},0).wait(1).to({rotation:-1,x:650.3},0).wait(1).to({rotation:-1.1,x:650.1,y:488.8},0).wait(1).to({rotation:-1.3,x:649.9},0).wait(1).to({rotation:-1.5,x:649.6},0).wait(1).to({rotation:-1.7,x:649.3},0).wait(1).to({rotation:-1.9,x:649.1,y:488.7},0).wait(1).to({rotation:-2.1,x:648.9},0).wait(1).to({rotation:-2.3,x:648.7},0).wait(1).to({rotation:-2.5,x:648.5},0).wait(1).to({rotation:-2.7,x:648.2},0).wait(1).to({rotation:-2.9,x:648},0).wait(1).to({rotation:-3.1,x:647.7},0).wait(1).to({rotation:-3.2,x:647.5,y:488.6},0).wait(1).to({rotation:-3.4,x:647.3},0).wait(1).to({rotation:-3.6,x:647.1},0).wait(1).to({rotation:-3.8,x:646.8},0).wait(1).to({rotation:-4,x:646.6},0).wait(1).to({rotation:-4.2,x:646.4,y:488.5},0).wait(1).to({rotation:-4.4,x:646.2},0).wait(1).to({rotation:-4.6,x:645.9},0).wait(1).to({rotation:-4.4,x:646.1},0).wait(1).to({rotation:-4.3,x:646.3,y:488.6},0).wait(1).to({rotation:-4.1,x:646.5,y:488.5},0).wait(1).to({rotation:-4,x:646.6,y:488.6},0).wait(1).to({rotation:-3.8,x:646.8},0).wait(1).to({rotation:-3.7,x:647.1},0).wait(1).to({rotation:-3.5,x:647.2},0).wait(1).to({rotation:-3.3,x:647.4},0).wait(1).to({rotation:-3.2,x:647.6},0).wait(1).to({rotation:-3,x:647.8},0).wait(1).to({rotation:-2.9,x:648},0).wait(1).to({rotation:-2.7,x:648.2,y:488.7},0).wait(1).to({rotation:-2.5,x:648.4},0).wait(1).to({rotation:-2.3,x:648.7},0).wait(1).to({rotation:-2.1,x:648.9},0).wait(1).to({rotation:-1.9,x:649.2},0).wait(1).to({rotation:-1.7,x:649.5,y:488.8},0).wait(1).to({rotation:-1.5,x:649.7},0).wait(1).to({rotation:-1.3,x:650},0).wait(1).to({rotation:-1,x:650.2},0).wait(1).to({rotation:-0.8,x:650.4,y:488.9},0).wait(1).to({rotation:-0.6,x:650.7},0).wait(1).to({rotation:-0.4,x:650.9,y:489},0).wait(1).to({rotation:-0.2,x:651.2},0).wait(1).to({rotation:0,x:651.5},0).wait(1).to({rotation:-0.2,x:651.2},0).wait(1).to({rotation:-0.4,x:651},0).wait(1).to({rotation:-0.5,x:650.8,y:488.9},0).wait(1).to({rotation:-0.7,x:650.6},0).wait(1).to({rotation:-0.9,x:650.4},0).wait(1).to({rotation:-1.1,x:650.1,y:488.8},0).wait(1).to({rotation:-1.3,x:649.9},0).wait(1).to({rotation:-1.5,x:649.7},0).wait(1).to({rotation:-1.6,x:649.5},0).wait(1).to({rotation:-1.8,x:649.2,y:488.7},0).wait(1).to({rotation:-2,x:649},0).wait(1).to({rotation:-2.2,x:648.8},0).wait(1).to({rotation:-2.4,x:648.6},0).wait(1).to({rotation:-2.6,x:648.4},0).wait(1).to({rotation:-2.7,x:648.2,y:488.6},0).wait(1).to({rotation:-2.9,x:647.9},0).wait(1).to({rotation:-3.1,x:647.7,y:488.7},0).wait(1).to({rotation:-3.3,x:647.5,y:488.6},0).wait(1).to({rotation:-3.5,x:647.3},0).wait(1).to({rotation:-3.7,x:647},0).wait(1).to({rotation:-3.8,x:646.8,y:488.5},0).wait(1).to({rotation:-4,x:646.6,y:488.6},0).wait(1).to({rotation:-4.2,x:646.3},0).wait(1).to({rotation:-4.4,x:646.1,y:488.5},0).wait(1).to({rotation:-4.6,x:645.9},0).wait(1).to({rotation:-4.4,x:646.1},0).wait(1).to({rotation:-4.2,x:646.3,y:488.6},0).wait(1).to({rotation:-4.1,x:646.5,y:488.5},0).wait(1).to({rotation:-3.9,x:646.7,y:488.6},0).wait(1).to({rotation:-3.7,x:647},0).wait(1).to({rotation:-3.5,x:647.2},0).wait(1).to({rotation:-3.3,x:647.4},0).wait(1).to({rotation:-3.2,x:647.6},0).wait(1).to({rotation:-3,x:647.8},0).wait(1).to({rotation:-2.8,x:648.1},0).wait(1).to({rotation:-2.6,x:648.3,y:488.7},0).wait(1).to({rotation:-2.5,x:648.5},0).wait(1).to({rotation:-2.3,x:648.7},0).wait(1).to({rotation:-2.1,x:648.9},0).wait(1).to({rotation:-1.9,x:649.1},0).wait(1).to({rotation:-1.8,x:649.3,y:488.8},0).wait(1).to({rotation:-1.6,x:649.5},0).wait(1).to({rotation:-1.4,x:649.8},0).wait(1).to({rotation:-1.2,x:650},0).wait(1).to({rotation:-1.1,x:650.2},0).wait(1).to({rotation:-0.9,x:650.4,y:488.9},0).wait(1).to({rotation:-0.7,x:650.6},0).wait(1).to({rotation:-0.5,x:650.8},0).wait(1).to({rotation:-0.4,x:651},0).wait(1).to({rotation:-0.2,x:651.2,y:489},0).wait(1).to({rotation:0,x:651.5},0).wait(1).to({rotation:-0.2,x:651.2},0).wait(1).to({rotation:-0.5,x:650.9,y:488.9},0).wait(1).to({rotation:-0.7,x:650.6},0).wait(1).to({rotation:-0.9,x:650.4},0).wait(1).to({rotation:-1.1,x:650.1,y:488.8},0).wait(1).to({rotation:-1.4,x:649.8},0).wait(1).to({rotation:-1.6,x:649.5},0).wait(1).to({rotation:-1.8,x:649.2,y:488.7},0).wait(1).to({rotation:-2,x:649},0).wait(1).to({rotation:-2.3,x:648.7},0).wait(1).to({rotation:-2.5,x:648.4},0).wait(1).to({rotation:-2.7,x:648.2},0).wait(1).to({rotation:-2.9,x:648},0).wait(1).to({rotation:-3,x:647.8},0).wait(1).to({rotation:-3.1,x:647.6,y:488.6},0).wait(1).to({rotation:-3.3,x:647.5},0).wait(1).to({rotation:-3.4,x:647.3},0).wait(1).to({rotation:-3.6,x:647.1},0).wait(1).to({rotation:-3.7,x:646.9},0).wait(1).to({rotation:-3.9,x:646.8},0).wait(1).to({rotation:-4,x:646.6},0).wait(1).to({rotation:-4.2,x:646.4,y:488.5},0).wait(1).to({rotation:-4.3,x:646.3},0).wait(1).to({rotation:-4.4,x:646.1,y:488.6},0).wait(1).to({rotation:-4.6,x:645.9,y:488.5},0).wait(1).to({rotation:-4.4,x:646.1},0).wait(1).to({rotation:-4.2,x:646.3,y:488.6},0).wait(1).to({rotation:-4,x:646.6},0).wait(1).to({rotation:-3.8,x:646.8,y:488.5},0).wait(1).to({rotation:-3.7,x:647,y:488.6},0).wait(1).to({rotation:-3.5,x:647.3},0).wait(1).to({rotation:-3.3,x:647.5},0).wait(1).to({rotation:-3.1,x:647.7,y:488.7},0).wait(1).to({rotation:-2.9,x:647.9,y:488.6},0).wait(1).to({rotation:-2.7,x:648.2},0).wait(1).to({rotation:-2.6,x:648.4,y:488.7},0).wait(1).to({rotation:-2.4,x:648.6},0).wait(1).to({rotation:-2.2,x:648.8},0).wait(1).to({rotation:-2,x:649},0).wait(1).to({rotation:-1.8,x:649.2},0).wait(1).to({rotation:-1.6,x:649.5,y:488.8},0).wait(1).to({rotation:-1.5,x:649.7},0).wait(1).to({rotation:-1.3,x:649.9},0).wait(1).to({rotation:-1.1,x:650.1},0).wait(1).to({rotation:-0.9,x:650.4,y:488.9},0).wait(1).to({rotation:-0.7,x:650.6},0).wait(1).to({rotation:-0.5,x:650.8},0).wait(1).to({rotation:-0.4,x:651,y:489},0).wait(1).to({rotation:-0.2,x:651.2},0).wait(1).to({rotation:0,x:651.5},0).wait(1).to({rotation:1.4,x:654.4,y:514.5},0).wait(1).to({rotation:2.8,x:657.4,y:540.1},0).wait(1).to({rotation:4.2,x:660.3,y:565.8},0).wait(1).to({rotation:5.5,x:663.2,y:591.4},0).wait(3).to({rotation:6.1,x:663.9,y:591.6},0).wait(1).to({rotation:6.7,x:664.5,y:591.7},0).wait(1).to({rotation:7.2,x:665.2,y:591.9},0).wait(1).to({rotation:7.8,x:665.9,y:592.1},0).wait(1).to({rotation:8.4,x:666.6,y:592.3},0).wait(1).to({rotation:9,x:667.2,y:592.5},0).wait(1).to({rotation:9.5,x:667.9,y:592.7},0).wait(1).to({rotation:10.1,x:668.6,y:592.9},0).wait(1).to({rotation:10.7,x:669.2,y:593.1},0).wait(1).to({rotation:11.2,x:669.9,y:593.3},0).wait(1).to({rotation:10.8,x:669.4,y:593.2},0).wait(1).to({rotation:10.5,x:669,y:593},0).wait(1).to({rotation:10.1,x:668.6,y:592.9},0).wait(1).to({rotation:9.7,x:668.1,y:592.7},0).wait(1).to({rotation:9.3,x:667.7,y:592.6},0).wait(1).to({rotation:9,x:667.2,y:592.5},0).wait(1).to({rotation:8.6,x:666.8,y:592.3},0).wait(1).to({rotation:8.2,x:666.3,y:592.2},0).wait(1).to({rotation:7.8,x:665.9,y:592.1},0).wait(1).to({rotation:7.4,x:665.5,y:591.9},0).wait(1).to({rotation:7.1,x:665},0).wait(1).to({rotation:6.7,x:664.5,y:591.7},0).wait(1).to({rotation:6.3,x:664.1,y:591.6},0).wait(1).to({rotation:5.9,x:663.7},0).wait(1).to({rotation:5.5,x:663.2,y:591.4},0).wait(1).to({y:591.1},0).wait(1).to({y:590.8},0).wait(1).to({y:590.5},0).wait(1).to({y:590.2},0).wait(1).to({y:589.9},0).wait(1).to({y:589.6},0).wait(1).to({y:589.2},0).wait(1).to({y:588.9},0).wait(1).to({y:588.6},0).wait(1).to({y:588.3},0).wait(1).to({y:588},0).wait(1).to({y:587.7},0).wait(1).to({y:587.4},0).wait(1).to({y:587.1},0).wait(1).to({rotation:4.8,x:661.6,y:573.1},0).wait(1).to({rotation:4,x:659.9,y:559},0).wait(1).to({rotation:3.2,x:658.2,y:544.9},0).wait(1).to({rotation:2.4,x:656.5,y:530.9},0).wait(1).to({rotation:1.6,x:654.9,y:517},0).wait(1).to({rotation:0.8,x:653.1,y:503},0).wait(1).to({rotation:0,x:651.5,y:489},0).wait(6));

	// 06.png
	this.instance_11 = new lib.Символ12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(479.1,735.2,1,1,0,0,0,152.2,89.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:102,regY:78,x:428.9,y:723.7},0).wait(1).to({rotation:-0.1,y:723.6},0).wait(2).to({rotation:-0.2,y:723.5},0).wait(1).to({y:723.4},0).wait(1).to({rotation:-0.3,y:723.3},0).wait(1).to({x:428.8},0).wait(1).to({y:723.2},0).wait(1).to({rotation:-0.4,y:723.1},0).wait(1).to({y:723},0).wait(1).to({rotation:-0.5},0).wait(1).to({y:722.9},0).wait(1).to({y:722.8},0).wait(1).to({rotation:-0.6,y:722.7},0).wait(1).to({y:722.6},0).wait(1).to({rotation:-0.7,y:722.5},0).wait(2).to({rotation:-0.8,x:428.7,y:722.4},0).wait(1).to({x:428.8,y:722.3},0).wait(1).to({y:722.2},0).wait(1).to({rotation:-0.9},0).wait(1).to({x:428.7,y:722.1},0).wait(1).to({rotation:-1,y:722},0).wait(1).to({y:721.9},0).wait(1).to({y:722},0).wait(1).to({rotation:-0.9,y:722.1},0).wait(1).to({y:722.2},0).wait(1).to({rotation:-0.8,x:428.8},0).wait(1).to({y:722.3},0).wait(1).to({y:722.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({y:722.5},0).wait(1).to({rotation:-0.6,y:722.6},0).wait(1).to({y:722.7},0).wait(1).to({y:722.8},0).wait(1).to({rotation:-0.5,y:722.9},0).wait(2).to({rotation:-0.4,y:723},0).wait(1).to({y:723.1},0).wait(2).to({rotation:-0.3,x:428.9,y:723.2},0).wait(1).to({y:723.3},0).wait(1).to({rotation:-0.2},0).wait(1).to({x:428.8,y:723.4},0).wait(1).to({x:428.9,y:723.5},0).wait(1).to({rotation:-0.1,y:723.6},0).wait(2).to({rotation:0,y:723.7},0).wait(1).to({y:723.8},0).wait(1).to({y:723.7},0).wait(1).to({rotation:-0.1,y:723.6},0).wait(2).to({rotation:-0.2,y:723.5},0).wait(1).to({x:428.8,y:723.4},0).wait(1).to({x:428.9,y:723.3},0).wait(1).to({rotation:-0.3},0).wait(1).to({y:723.2},0).wait(1).to({rotation:-0.4,x:428.8,y:723.1},0).wait(2).to({y:723},0).wait(1).to({rotation:-0.5,y:722.9},0).wait(2).to({rotation:-0.6,y:722.8},0).wait(1).to({y:722.7},0).wait(1).to({y:722.6},0).wait(1).to({rotation:-0.7,y:722.5},0).wait(1).to({y:722.4},0).wait(1).to({rotation:-0.8},0).wait(1).to({y:722.3},0).wait(1).to({y:722.2},0).wait(1).to({rotation:-0.9,x:428.7},0).wait(1).to({y:722.1},0).wait(1).to({rotation:-1,y:722},0).wait(1).to({y:721.9},0).wait(1).to({y:722},0).wait(1).to({rotation:-0.9,y:722.1},0).wait(1).to({y:722.2},0).wait(1).to({rotation:-0.8},0).wait(1).to({x:428.8,y:722.3},0).wait(1).to({y:722.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({y:722.5},0).wait(1).to({y:722.6},0).wait(1).to({rotation:-0.6},0).wait(1).to({y:722.7},0).wait(1).to({rotation:-0.5,y:722.8},0).wait(1).to({y:722.9},0).wait(1).to({y:723},0).wait(1).to({rotation:-0.4},0).wait(1).to({y:723.1},0).wait(1).to({rotation:-0.3,y:723.2},0).wait(2).to({y:723.3},0).wait(1).to({rotation:-0.2,y:723.4},0).wait(1).to({x:428.9},0).wait(1).to({y:723.5},0).wait(1).to({rotation:-0.1,y:723.6},0).wait(2).to({rotation:0,y:723.7},0).wait(1).to({y:723.8},0).wait(1).to({y:723.7},0).wait(1).to({rotation:-0.1,y:723.6},0).wait(2).to({rotation:-0.2,y:723.5},0).wait(1).to({x:428.8,y:723.4},0).wait(1).to({x:428.9,y:723.3},0).wait(1).to({rotation:-0.3},0).wait(1).to({y:723.2},0).wait(1).to({rotation:-0.4,x:428.8,y:723.1},0).wait(2).to({y:723},0).wait(1).to({rotation:-0.5,y:722.9},0).wait(2).to({rotation:-0.6,y:722.8},0).wait(1).to({y:722.7},0).wait(1).to({y:722.6},0).wait(1).to({rotation:-0.7,y:722.5},0).wait(1).to({y:722.4},0).wait(1).to({rotation:-0.8},0).wait(1).to({y:722.3},0).wait(1).to({y:722.2},0).wait(1).to({rotation:-0.9,x:428.7},0).wait(1).to({y:722.1},0).wait(1).to({rotation:-1,y:722},0).wait(1).to({y:721.9},0).wait(1).to({y:722},0).wait(1).to({rotation:-0.9,y:722.1},0).wait(1).to({y:722.2},0).wait(1).to({rotation:-0.8,x:428.8},0).wait(1).to({y:722.3},0).wait(1).to({y:722.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({y:722.5},0).wait(1).to({rotation:-0.6,y:722.6},0).wait(1).to({y:722.7},0).wait(1).to({y:722.8},0).wait(1).to({rotation:-0.5,y:722.9},0).wait(2).to({rotation:-0.4,y:723},0).wait(1).to({y:723.1},0).wait(2).to({rotation:-0.3,x:428.9,y:723.2},0).wait(1).to({y:723.3},0).wait(1).to({rotation:-0.2},0).wait(1).to({x:428.8,y:723.4},0).wait(1).to({x:428.9,y:723.5},0).wait(1).to({rotation:-0.1,y:723.6},0).wait(2).to({rotation:0,y:723.7},0).wait(1).to({y:723.8},0).wait(1).to({rotation:-1.5,x:427.5,y:719.8},0).wait(1).to({rotation:-2.9,x:426.1,y:715.8},0).wait(1).to({rotation:-4.4,x:424.7,y:711.7},0).wait(1).to({rotation:-5.8,x:423.4,y:707.8},0).wait(42).to({rotation:-5,x:424.1,y:710.1},0).wait(1).to({rotation:-4.2,x:425,y:712.3},0).wait(1).to({rotation:-3.3,x:425.7,y:714.6},0).wait(1).to({rotation:-2.5,x:426.5,y:717},0).wait(1).to({rotation:-1.7,x:427.2,y:719.2},0).wait(1).to({rotation:-0.8,x:428.1,y:721.5},0).wait(1).to({rotation:0,x:428.9,y:723.8},0).wait(6));

	// Слой 1
	this.button_cat = new lib.Символ13();
	this.button_cat.parent = this;
	this.button_cat.setTransform(503.4,519.3,5.213,5.213,0,0,0,67.3,67.3);
	new cjs.ButtonHelper(this.button_cat, 0, 1, 2, false, new lib.Символ13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_cat).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.4,168.4,701.9,701.7);


// stage content:
(lib.Cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.Cat_1();
	this.instance.parent = this;
	this.instance.setTransform(92.4,106,0.31,0.31,0,0,0,450,510.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108,108.5,197.3,214.6);
// library properties:
lib.properties = {
	width: 216,
	height: 217,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Cat_atlas_.png", id:"Cat_atlas_"}
	],
	preloads: []
};

export {lib, images, ss, AdobeAn};