import { Routes } from '@angular/router';

import { NamePageComponent } from './containers/name-page';
import { QuestionPageComponent } from './containers/question-page';

export const routes: Routes = [
	{
		path: '',
		component: NamePageComponent
	},
	{
		path: 'question/:id',
		component: QuestionPageComponent
	}
];