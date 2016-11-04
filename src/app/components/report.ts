import { Component } from '@angular/core';

@Component({
	selector: 'da-report',
	template: `
		<md-card>
			<md-card-content>
				<md-grid-list cols="12" rowHeight="100px">		
					<md-grid-tile *ngFor="let answer of answers" [colspan]="answer.cols" [rowspan]="answer.rows" [style.background]="color(answer.content)">
						<da-tile-content [content]="answer.content"></da-tile-content>
					</md-grid-tile>
				</md-grid-list>
			</md-card-content>
		</md-card>
	`
})

export class ReportComponent {
	answers: any[] = [
		{ cols: 1, rows: 1, content: 'Q No.' },
		{ cols: 5, rows: 1, content: "Question" },
		{ cols: 2, rows: 1, content: 'Your Answer' },
		{ cols: 2, rows: 1, content: 'Right Answer' },
		{ cols: 2, rows: 1, content: 'Status'  },
		{ cols: 1, rows: 1, content: '1' },
		{ cols: 5, rows: 1, content: "What is your answer?" },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'right'  },
		{ cols: 1, rows: 1, content: '2' },
		{ cols: 5, rows: 1, content: "What is your answer?" },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'Wrong' },
		{ cols: 2, rows: 1, content: 'wrong'  },
		{ cols: 1, rows: 1, content: '3' },
		{ cols: 5, rows: 1, content: "What is your answer?" },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'right'  },
		{ cols: 1, rows: 1, content: '4' },
		{ cols: 5, rows: 1, content: "What is your answer?" },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'Wrong' },
		{ cols: 2, rows: 1, content: 'wrong'  },
		{ cols: 1, rows: 1, content: '5' },
		{ cols: 5, rows: 1, content: "What is your answer?" },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'Answer' },
		{ cols: 2, rows: 1, content: 'right' }
	];

	color(content: string): string {
		if (content === 'right')
			return '#C8E6C9';
		else if (content === 'wrong')
			return'#FFCDD2';
		else
			return 'white';
	}
}