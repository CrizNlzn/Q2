import { Component } from '@angular/core';

@Component({
  
  selector: 'app-pic-rotator',
  templateUrl: './pic-rotator.component.html',
  styleUrls: ['./pic-rotator.component.css']

})

export class PicRotatorComponent {
  isFlipped: boolean = false;
  currentImageIndex: number = 0;
  images: { src: string, alt: string }[] = [
    { src: "/assets/images/Phone-Jotto-Scan.png", alt: "Scan 1" },
    { src: "/assets/images/Phone-Jotto-Insights.png", alt: "Insights 1" },
    { src: "/assets/images/Phone-Jotto-Feedback.png", alt: "Feedback 1" }
  ];

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  flip() {
    const flipDelay = 500; // 0.5 seconds
    let currentIndex = 0;
  
    const flipNext = () => {
      if (currentIndex < this.images.length) {
        this.currentImageIndex = currentIndex; // Update the current image index
        this.isFlipped = true; // Flip the current image
        setTimeout(() => {
          this.isFlipped = false; // Flip back after a delay
          currentIndex++; // Move to the next image
          setTimeout(flipNext, flipDelay); // Schedule the next flip
        }, flipDelay);
      }
    };
    
    // Start flipping to the next image
    flipNext();
  }
  
  
}
