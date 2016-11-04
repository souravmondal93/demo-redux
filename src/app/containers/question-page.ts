import { Component } from '@angular/core';

@Component({
	selector: 'da-question-page',
	template: `
		<md-card>
			<md-card-title>Question Page</md-card-title>
			
			<da-question></da-question>
		</md-card>
	`
})

export class QuestionPageComponent { }