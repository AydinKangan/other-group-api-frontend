// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

declare class Question {
	id: number;
	question: string;
	correctAnswer: string;
	options: Answer[];
}

declare class AnswerForChecking {
	question: string;
	option: string;
	answer: string;
}

declare class CheckingWithUser {
	checkAnswers: AnswerForChecking[];
	userId: number | undefined;
}

declare class Result {
	question: string;
	isCorrect: boolean;
}

declare class UserDetails {
	id: number;
	username: string;
}

declare class LeaderboardUser {
	username: string;
	correctAnswers: number;
	attempts: number;
}

declare class PastResult {
	correctAnswers: number;
	totalAnswers: nuumber;
	createdAt: string;
}
