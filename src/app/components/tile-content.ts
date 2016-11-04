import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'da-tile-content',
	template: `
		<span *ngIf="showIcon">
			<md-icon *ngIf="rightIcon">check</md-icon>
			<md-icon *ngIf="!rightIcon">close</md-icon>
		</span>
		<span *ngIf="!showIcon">
			{{ contentText }}
		</span>
		
	`,
	styles: [`
		span {
			text-transform: capitalize;
		}
	`]
})

export class TileContentComponent implements OnInit {
	@Input() content: any;
	showIcon: boolean = false;
	rightIcon: boolean = false;

	ngOnInit() {
		console.log(this.content);
		if(this.content === 'right' || this.content === 'wrong') {
			this.showIcon = true;
			this.rightIcon = (this.content === 'right')
		}
	}

	get contentText(){
		return this.content;
	}

}