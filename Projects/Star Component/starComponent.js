const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');
for (let i = 0; i < stars.length; i++) {
    ['click', 'mouseover', 'mouseout'].forEach((event) => {
        stars[i].starRating = i + 1;
        stars[i].addEventListener(event, eventHandler);
    });
}

function eventHandler(event) {
    const eventType = event.type;
    const starRating = this.starRating;
    if (eventType === 'click') {
        rating.innerHTML = `You rated this: ${starRating} stars`;
    }
    stars.forEach((element, index) => {
        console.log(element, index);
        if (eventType === 'click') {
            if (index < starRating) {
                element.classList.add('yellow');
            } else {
                element.classList.remove('yellow');
            }
        }
        if (eventType === 'mouseover') {
            if (index < starRating) {
                element.classList.add('light-yellow');
            } else {
                element.classList.remove('light-yellow');
            }
        }
        if (eventType === 'mouseout') {
            element.classList.remove('light-yellow');
        }
    });
}
