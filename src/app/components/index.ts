import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout';
import { ToolbarComponent } from './toolbar';
import { NameInputComponent } from './name-input';
import { QuestionComponent } from './question';
import { AnswerListComponent } from './answer-list';
import { AnswerComponent } from './answer';

export const COMPONENTS = [
	LayoutComponent,
	ToolbarComponent,
	NameInputComponent,
	QuestionComponent,
	AnswerListComponent,
	AnswerComponent
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