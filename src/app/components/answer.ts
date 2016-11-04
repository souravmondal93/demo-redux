import { Component } from '@angular/core';

@Component({
	selector: 'da-answer',
	template: `
		<md-card md-ripple md-ripple-color="rgba(0, 150, 136, 0.35)">
			<md-card-content>
				<img src="http://grandaspirations.org/wp-content/uploads/2010/11/growing-plant.jpg">
			</md-card-content> 
			<md-card-footer>
				<p>Plant Image</p>
			</md-card-footer>
		</md-card>
	`,
	styles: [`
		md-card {
			width: 400px;
			height: 400px;
			margin: 15px;
		}
		md-card-content {
			margin-bottom: 0;
		}
		p {
			    padding: 0 24px;
			    font-size: 18px;
			    margin-top: 20px;
			    display: block;
			    text-align: center;
		}
		img {
			width: 100%;
			height: calc(400px - 48px);
		}
	`]
})

export class AnswerComponent { }