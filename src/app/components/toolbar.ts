import { Component } from '@angular/core';

@Component({
	selector: 'da-toolbar',
	template: `
		<md-toolbar color="primary">
			<ng-content></ng-content>
		</md-toolbar>		
	`
})

export class ToolbarComponent {}