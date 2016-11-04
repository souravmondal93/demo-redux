import { Component } from '@angular/core'

@Component({
	selector: 'da-name-input',
	template: `
		<md-card>
			<md-card-title-group>
				<md-card-title>Enter Your Name</md-card-title>
				<md-card-subtitle>Please enter your name to continue</md-card-subtitle>
			</md-card-title-group>
			<md-card-content>
				<md-input placeholder="Enter your name"></md-input>
			</md-card-content>
			<md-card-actions>
				<button md-raised-button color="accent" >Submit</button>
			</md-card-actions>
		</md-card>
	`
})

export class NameInputComponent { }