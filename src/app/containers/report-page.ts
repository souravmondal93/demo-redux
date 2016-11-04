import { Component } from '@angular/core'

@Component({
	selector: 'da-result-page',
	template: `
		<md-card>
			<md-card-title>Report Page</md-card-title>
			
			<da-report></da-report>
		</md-card>
	`
})

export class ReportPageComponent { }