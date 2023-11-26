import { Thread } from './interfaces';

const firstThread: Thread = {
	id: 1,
	messageIds: [1, 2, 3, 4, 5],
	participants: {
		1: 0,
		2: 0
	}
};

const firstThreadParticipants = [{
	id: 1,
	name: 'Alice'
},
	{
		id: 2,
		name: 'Bob'
	}];

const firstThreadMessages = [{
	id: 1,
	threadId: 1,
	participantId: 1,
	text: 'Did you take take out the trash today ?',
	timestamp: new Date().getTime()
},
	{
		id: 2,
		threadId: 1,
		participantId: 2,
		text: 'Is it full again ?',
		timestamp: new Date().getTime()
	},
	{
		id: 3,
		threadId: 1,
		participantId: 1,
		text: 'Yes, can you take it out now ? ',
		timestamp: new Date().getTime()
	},
	{
		id: 4,
		threadId: 1,
		participantId: 2,
		text: 'OK, no problem',
		timestamp: new Date().getTime()
	},
	{
		id: 5,
		threadId: 1,
		participantId: 1,
		text: 'Great',
		timestamp: new Date().getTime()
	}
];

export const dbMessagesQueuePerUser: {[key: number]: number[]} = {
	1: []
};
