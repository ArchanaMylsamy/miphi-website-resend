class MiPhiSlideshow {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll('.miphi-slide');
        this.dots = container.querySelectorAll('.miphi-dot');
        this.prevBtn = container.querySelector('.miphi-prev');
        this.nextBtn = container.querySelector('.miphi-next');
        this.currentIndex = 0;
        this.timeoutId = null;
        this.intervalTime = 6000;
        this.isAutoPlaying = true;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        // Initialize navigation buttons
        this.prevBtn.addEventListener('click', () => {
            this.changeSlide(-1);
            this.stopAutoPlay();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.changeSlide(1);
            this.stopAutoPlay();
        });

        // Initialize touch events
        this.container.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        }, false);

        this.container.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            if (this.touchStartX - this.touchEndX > 50) {
                this.changeSlide(1);
                this.stopAutoPlay();
            } else if (this.touchEndX - this.touchStartX > 50) {
                this.changeSlide(-1);
                this.stopAutoPlay();
            }
        }, false);

        // Initialize dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.stopAutoPlay();
            });
        });

        this.startAutoPlay();
    }

    changeSlide(direction) {
        const nextIndex = (this.currentIndex + direction + this.slides.length) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    goToSlide(index) {
        // Remove active classes
        this.slides[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');

        // Update index
        this.currentIndex = index;

        // Add active classes
        this.slides[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
    }

    startAutoPlay() {
        if (!this.isAutoPlaying) return;
        this.timeoutId = setInterval(() => this.changeSlide(1), this.intervalTime);
    }

    stopAutoPlay() {
        this.isAutoPlaying = false;
        clearInterval(this.timeoutId);
    }
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
    const slideshow = new MiPhiSlideshow(document.querySelector('.miphi-slideshow'));
});