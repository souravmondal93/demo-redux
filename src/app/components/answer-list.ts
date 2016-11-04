import { Component } from '@angular/core';

@Component({
	selector: 'da-answer-list',
	template: `
		<da-answer></da-answer>
		<da-answer></da-answer>
		<da-answer></da-answer>
		<da-answer></da-answer>
	`,
	styles: [`
		:host {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
    	}
	`]
})

export class AnswerListComponent { }