import { Component } from '@angular/core';

@Component({
	selector: 'da-layout',
	template: `
		<div>
			<ng-content></ng-content>		
		</div>
	`
})

export class LayoutComponent {}