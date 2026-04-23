let sliderWrap = document.querySelector('.slider-wrap');
// console.log(sliderWrap.offsetWidth);
let slider = sliderWrap.querySelector('.slider');
let slides = sliderWrap.querySelectorAll('.slider-item')
slider.style.transform = 'translateX(0)'
let xStart, xEnd = 0;
let sliderWidth = sliderWrap.offsetWidth;
// console.log(sliderWidth);
// console.log(sliderWidth * 0.6);
sliderWrap.addEventListener('pointerdown', function (event) {
    xStart = event.clientX;
    // console.log(xStart);
});

sliderWrap.addEventListener('pointerup', function (event) {
    xEnd = event.clientX;
    // console.log(xEnd);
    // console.log(xEnd - xStart);
    if (Math.abs(xEnd - xStart) > 0.6 * sliderWidth) {
        let transform = slider.style.transform;
        console.log(transform);
        console.log(transform.match(/\d+/)[0]);
        let position = Number(transform.match(/-?\d+/)[0]);
        console.log(position);
        if ((xEnd-xStart>0)&(position<0)){
            position = position+sliderWidth;
        }
        if ((xEnd-xStart<0)&(position>-sliderWidth*(slides.length-1))){
            position = position-sliderWidth;
        }
        transform = transform.replace((/-?\d+/), position);
        console.log(transform);
        slider.style.transform = transform;            
    }
});



