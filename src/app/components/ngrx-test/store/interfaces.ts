export interface Thread {
	id:number;
	messageIds: number[];
	participants: {[key:number]: number};
}


export interface Message {
	id:number;
	threadId:number;
	participantId: number;
	text:string;
	timestamp:number;
}


export interface Participant {
	id:number;
	name:string;
}
