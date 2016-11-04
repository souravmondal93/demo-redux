import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout';
import { ToolbarComponent } from './toolbar';

export const COMPONENTS = [
	LayoutComponent,
	ToolbarComponent
];

@NgModule({
	imports: [
		MaterialModule,
		RouterModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})

export class ComponentModule { }