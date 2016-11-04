import { Component } from '@angular/core';

@Component({
	selector: 'da-name-page',
	template: `
		<md-card>
            <md-card-title>Name Page</md-card-title>
            
            <da-name-input></da-name-input>
        </md-card>
	`
})

export class NamePageComponent {}