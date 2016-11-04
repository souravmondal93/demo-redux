import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentModule } from './components';

import { AppComponent } from './containers/app';
import { NamePageComponent } from './containers/name-page';
import { QuestionPageComponent } from './containers/question-page';
import { ResultPageComponent } from './containers/result-page';
import { ReportPageComponent } from './containers/report-page';

import { routes } from './routes'

@NgModule({
	declarations: [
		AppComponent,
		NamePageComponent,
		QuestionPageComponent,
		ResultPageComponent,
		ReportPageComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		RouterModule.forRoot(routes, { useHash: true }),
		ComponentModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
