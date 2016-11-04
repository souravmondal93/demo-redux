import { Component } from '@angular/core';

@Component({
	selector: 'da-question',
	template: `
		<md-card>
			<md-card-title-group>
				<md-card-subtitle>
					Question 1
				</md-card-subtitle>
				<md-card-title>
					Which of the following is your country?
				</md-card-title>
			</md-card-title-group>
			<md-card-content>
				<da-answer-list></da-answer-list>
			</md-card-content>
		</md-card>
	`
})

export class QuestionComponent { }