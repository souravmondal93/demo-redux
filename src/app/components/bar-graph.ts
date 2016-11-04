import { Component } from '@angular/core';

@Component({
	selector: 'da-bar-graph',
	template: `
		<md-grid-list cols="12" rowHeight="50px">
			<md-grid-tile [colspan]="2" [rowspan]="2">
				<span>3/5</span>	
			</md-grid-tile>
			<md-grid-tile [colspan]="2" [rowspan]="1">
				<md-icon>check</md-icon>
			</md-grid-tile>
			<md-grid-tile [colspan]="8" [rowspan]="1">
				<md-progress-bar mode="determinate" value="60" color="primary"></md-progress-bar>
			</md-grid-tile>
			<md-grid-tile [colspan]="2" [rowspan]="1">
				<md-icon>close</md-icon>
			</md-grid-tile>
			<md-grid-tile [colspan]="8" [rowspan]="1">
				<md-progress-bar mode="determinate" value="40" color="primary"></md-progress-bar>
			</md-grid-tile>
		</md-grid-list>
	`,
	styles: [`
		span {
			font-size: 50px;
		    display: block;
		    text-align: center;
		}
	`]
})

export class BarGraphComponent { }