import { Component } from '@angular/core'

@Component({
	selector: 'demo-app',
	template: `
		<da-layout>
			<da-toolbar>
				Demo App
			</da-toolbar>
			
			<router-outlet></router-outlet>
		</da-layout>
	`
})

export class AppComponent {}