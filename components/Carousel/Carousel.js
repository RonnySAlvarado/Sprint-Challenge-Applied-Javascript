class Carousel {
    constructor (carousel){
        this.carousel = carousel;
        /*  
            <div class="carousel">
                <div class="left-button"><</div>
                <img src="./assets/carousel/mountains.jpeg" />
                <img src="./assets/carousel/computer.jpeg" />
                <img src="./assets/carousel/trees.jpeg" />
                <img src="./assets/carousel/turntable.jpeg" />
                <div class="right-button">></div>
            </div>*/

        this.images = this.carousel.querySelectorAll('img');
        /*  
            <img class="active-img" src="./assets/carousel/mountains.jpeg" />
            <img src="./assets/carousel/computer.jpeg" />
            <img src="./assets/carousel/trees.jpeg" />
            <img src="./assets/carousel/turntable.jpeg" />
        */

        this.right = this.carousel.querySelector('.right-button'); //<div class="right-button"><</div>
        this.left = this.carousel.querySelector('.left-button'); //<div class="left-button"><</div>

        this.index = 0;
        this.images[this.index].style.display = 'flex';

        this.right.addEventListener('click', () => this.right());
        this.left.addEventListener('click', () => this.left());
    }
    right(){   
        this.index++;
        if (this.index === 4){
            this.index = 0;
        }
        this.images.forEach(image => image.style.display = 'none');
        this.images[this.index].style.display = 'flex';
        // this.images.forEach(image => image.classList.remove('active-img'));
        // this.images[this.imageCounter].classList.add('active-img');
    }
    left(){
        this.imageCounter--;
        if (this.index < 0){
            this.index = 3;
        }
        this.images.forEach(image => image.style.display = 'none');
        this.images[this.index].style.display = 'flex';
        // this.images.forEach(image => image.classList.remove('active-img'));
        // this.images[this.imageCounter].classList.add('active-img');
    }
}
let carousel = document.querySelector('.carousel');
let newCarousel = new Carousel(carousel);





/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

