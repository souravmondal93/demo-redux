import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout';
import { ToolbarComponent } from './toolbar';
import { NameInputComponent } from './name-input';
import { QuestionComponent } from './question';
import { AnswerListComponent } from './answer-list';
import { AnswerComponent } from './answer';
import { ResultComponent } from './result';
import { BarGraphComponent } from './bar-graph';
import { ReportComponent } from './report';
import { TileContentComponent } from './tile-content';

export const COMPONENTS = [
	LayoutComponent,
	ToolbarComponent,
	NameInputComponent,
	QuestionComponent,
	AnswerListComponent,
	AnswerComponent,
	ResultComponent,
	BarGraphComponent,
	ReportComponent,
	TileContentComponent
];

@NgModule({
	imports: [
		MaterialModule,
		RouterModule,
		CommonModule
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})

export class ComponentModule { }