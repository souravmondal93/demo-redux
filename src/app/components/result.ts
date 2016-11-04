import { Component } from '@angular/core';

@Component({
	selector: 'da-result',
	template: `
		<md-card>
			<md-card-title-group>
				<md-card-title>Result</md-card-title>
				<md-card-subtitle>Result of you quiz</md-card-subtitle>
			</md-card-title-group>
			<md-card-content>
				<da-bar-graph></da-bar-graph>
			</md-card-content>			
		</md-card>
	`
})

export class ResultComponent { }