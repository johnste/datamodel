/// <reference path="gooobject.ts"/>

enum TransitionType {
	Fade, 
	SyncFade, 
	Frozen
}

interface AnimationTransition {
	type: TransitionType;
	fadeTime: number; 
}

interface AnimationState {
	stateRef: AnimationStateRef;
	transitions?: {
		[key: string]: AnimationTransition;
	}
}

interface AnimationLayer {
	sortValue: number;
	
	blendWeight: number;
	defaultState: string;
	states: {
		[ref: string]: AnimationState
	}
	transitions: {
		[ref: string]: AnimationTransition	
	}
}


interface animation extends GooObject {
	layers: {
		[listId: string]: AnimationLayer;
	}
}