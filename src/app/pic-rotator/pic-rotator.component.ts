import { Component } from "@angular/core";

@Component({
	selector: 'app-pic-rotator', 
	templateUrl: './pic-rotator.component.html'

})

export class PicRotatorComponent {

pictures: string[] = ['Phone-Jotto-Feedback.png', 'Phone-Jotto-Insights.png', 'Phone-Jotto-Scan.png'];

currentIndex = 0;

get currentPic(): string {
	return this.pictures[this.currentIndex];

}


	nextPic(): void {
	this.currentIndex = (this.currentIndex + 1) % this.pictures.length;
	}

}