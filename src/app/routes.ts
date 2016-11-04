import { Routes } from '@angular/router';

import { NamePageComponent } from './containers/name-page';
import { QuestionPageComponent } from './containers/question-page';
import { ResultPageComponent } from './containers/result-page';
import { ReportPageComponent } from './containers/report-page';

export const routes: Routes = [
	{
		path: '',
		component: NamePageComponent
	},
	{
		path: 'question/:id',
		component: QuestionPageComponent
	},
	{
		path: 'result',
		component: ResultPageComponent
	},
	{
		path: 'report',
		component: ReportPageComponent
	}
];